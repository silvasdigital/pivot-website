("use strict");
// import { Strapi } from "@strapi/strapi";
import Stripe from "stripe";
import _ from "lodash";
import { newOrder } from "./email/new-order";
// import { newOrder } from './email/new-order'
/**
 * order controller
 */
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const frontEndUrl = process.env.CLIENT_URL;

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
	"api::order.order",
	({ strapi }: { strapi: any }) => ({
		async create(ctx) {
			try {
				const { products, user, city, option } = ctx.request.body;

				const lineItems = products.map((product) => ({
					price_data: {
						currency: "aed",
						product_data: {
							name: product.title,
							images: [
								product.img.startsWith("/")
									? `http://127.0.0.1:1337/${product.img}`
									: product.img,
							],
						},
						unit_amount: product.price * 100,
					},
					quantity: 1,
				}));

				let userId = "";
				if (user.stripeCustomerId) {
					userId = user.stripeCustomerId;
				} else {
					const customer = await stripe.customers.create({ email: user.email });
					userId = customer.id;
				}

				const customerDetails = userId
					? { customer: userId }
					: { customer_email: user.email };

				const checkoutSession = await stripe.checkout.sessions.create({
					payment_method_types: ["card"],
					shipping_address_collection: { allowed_countries: ["AE", "US"] },
					phone_number_collection: { enabled: true },
					mode: "payment",
					...customerDetails,
					success_url: `${frontEndUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
					cancel_url: `${frontEndUrl}/cart`,
					line_items: lineItems,
				});
				console.log("Data sent to Strapi:", {
					total: checkoutSession.amount_total / 100,
					customer_email: user.email || checkoutSession.customer_email,
					checkout_session: checkoutSession.id,
					checkout_session_url: checkoutSession.url,
					customer_name: user.name || checkoutSession.customer,
					order_url: `${frontEndUrl}/success?session_id=${checkoutSession.id}`,
					img: products.map((product) => ({
						id: product.id || 1,
						image: product.img,
					})),
					status: checkoutSession.payment_status || "",
					city: city || "",
					option: option || "",
					products: products.map((product) => ({
						id: product.id || "",
						title: product.title,
						price: product.price,
						image: product.img,
						city: product.city,
						option: product.option,
						quantity: 1,
					})),
				});

				await strapi.service("api::order.order").create({
					data: {
						total: checkoutSession.amount_total / 100,
						customer_email: user.email || checkoutSession.customer_email,
						checkout_session: checkoutSession.id,
						checkout_session_url: checkoutSession.url,
						customer_name: user.name || checkoutSession.customer,
						order_url: `${frontEndUrl}/success?session_id=${checkoutSession.id}`,
						// img: products.map((product) => ({
						// 	id: product.id || "",
						// 	image: product.img,
						// })),
						status: checkoutSession.payment_status || "",
						city: city || "",
						option: option || "",
						products: products.map((product) => ({
							id: product.id || 1,
							title: product.title,
							price: product.price,
							image: product.img,
							city: product.city ||  "",
							option: product.option || "",
							quantity: 1,
						})),
					},
				});

				return {
					checkoutUrl: checkoutSession.url,
					stripeCustomerId: checkoutSession.customer,
					email: checkoutSession.customer_email,
				};
			} catch (error) {
				console.error("Error creating order:", error);
				ctx.throw(500, "Internal server error");
			}
		},
		async webhook(ctx) {
			const raw = ctx.request.body[Symbol.for("unparsedBody")];
			const signature = ctx.request.headers["stripe-signature"];
			const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
			let event;

			try {
				event = stripe.webhooks.constructEvent(raw, signature, endpointSecret);
				await this.processEvent(event);
			} catch (err) {
				console.error(`Webhook Error: ${err.message}`);
				return ctx.badRequest(`Webhook Error: ${err.message}`);
			}
			return { received: true };
		},

		async processEvent(event) {
			switch (event.type) {
				case "checkout.session.completed":
					const session = event.data.object;
					await this.updateOrderStatus(session);
					break;
				default:
					console.log(`Unhandled event type ${event.type}`);
					break;
			}
		},

		async updateOrderStatus(session) {
			const order = await strapi
				.query("api::order.order")
				.findOne({ where: { checkout_session: session.id } });
			if (order && order.status !== "paid") {
				await strapi.service("api::order.order").update(order.id, {
					data: {
						status: "paid",
					},
				});

				// Send confirmation email
				const emailTemplate = {
					from: "mgurshi73@gmail.com",
					replyTo: "mgurshi73@gmail.com",
					subject: "PIRE - Course Purchase Complete",
					text: "New Order At PIRE",
					html: newOrder,
				};

				await strapi.plugins["email"].services.email.sendTemplatedEmail(
					{ to: order.customer_email },
					emailTemplate,
					{
						order: _.pick(order, [
							"products",
							"order_url",
							"total",
							"customer_email",
							"customer_name",
							"checkout_session",
						]),
					},
				);
			}
		},
	}),
);
