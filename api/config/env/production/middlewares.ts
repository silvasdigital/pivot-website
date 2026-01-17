export default [
	"strapi::errors",
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					"connect-src": ["'self'", "https:"],
					"img-src": [
						"'self'",
						"data:",
						"blob:",
						"market-assets.strapi.io",
						"https://pire-space.blr1.digitaloceanspaces.com",
						"https://blr1.digitaloceanspaces.com",
					],
					"media-src": [
						"'self'",
						"data:",
						"blob:",
						"market-assets.strapi.io",
						"https://pire-space.blr1.digitaloceanspaces.com",
						"https://blr1.digitaloceanspaces.com",
					],

					upgradeInsecureRequests: null,
				},
			},
		},
	},
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::logger",
	"strapi::query",
	{
		name: "strapi::body",
		config: {
			patchKoa: true,
			multipart: true,
			includeUnparsed: true,
		},
	},
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
