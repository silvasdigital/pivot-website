module.exports = ({ env }) => ({
	upload: {
		config: {
			provider: "strapi-provider-upload-do",
			providerOptions: {
				key: env("DO_SPACE_ACCESS_KEY"),
				secret: env("DO_SPACE_SECRET_KEY"),
				endpoint: env("DO_SPACE_ENDPOINT"),
				space: env("DO_SPACE_BUCKET"),
			},
		},
	},
	email: {
		config: {
			provider: "mailgun",
			providerOptions: {
				key: env("MAILGUN_API_KEY"),
				domain: env("MAILGUN_DOMAIN"),
				url: "https://api.eu.mailgun.net",
			},
			settings: {
				defaultFrom: env("DEFAULT_FROM_EMAIL"),
				defaultReplyTo: env("DEFAULT_REPLY_TO_EMAIL"),
			},
		},
	},
});
