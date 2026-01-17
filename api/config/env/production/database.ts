//  path: /config/env/production/database.ts

const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);

export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false, // ✅ Fix for self-signed certs (DigitalOcean)
      },
      pool: {
        min: 1,
        max: 5, // reduce if DB cannot handle many connections
      },
    },
    debug: false,
  },
});





// // path: /config/env/production/database.ts
// const parse = require("pg-connection-string").parse;

// export default ({ env }) => {
//   const dbUrl = process.env.DATABASE_URL;

//   // ✅ Safe fallback if DATABASE_URL is missing
//   if (!dbUrl) {
//     console.warn("⚠️  DATABASE_URL not found. Using SQLite in-memory database as fallback.");
//     return {
//       connection: {
//         client: "sqlite",
//         connection: {
//           filename: ".tmp/data.db", // local file, no credentials needed
//         },
//         useNullAsDefault: true,
//       },
//     };
//   }

//   // ✅ If DATABASE_URL exists, use it normally
//   const { host, port, database, user, password } = parse(dbUrl);

//   return {
//     connection: {
//       client: "postgres",
//       connection: {
//         host,
//         port,
//         database,
//         user,
//         password,
//         ssl: {
//           ca: env("DATABASE_CA", undefined),
//         },
//       },
//       debug: false,
//     },
//   };
// };


// /////////////////////// OG //////////////////




// path: /config/env/production/database.ts

// const parse = require("pg-connection-string").parse;

// const { host, port, database, user, password } = parse(
// 	process.env.DATABASE_URL,
// );

// export default ({ env }) => ({
// 	connection: {
// 		client: "postgres",
// 		connection: {
// 			host,
// 			port,
// 			database,
// 			user,
// 			password,
// 			ssl: {
// 				ca: env("DATABASE_CA"),
// 			},
// 		},
// 		debug: false,
// 	},
// });

