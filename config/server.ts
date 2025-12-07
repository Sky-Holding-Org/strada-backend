import cronTasks from "./cron-tasks";

export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
  timezone: "Africa/Cairo",
});

// import cronTasks from "./cron-tasks";

// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 8080),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   // URL will be automatically set by EB environment
//   admin: {
//     path: '/admin',
//     autoOpen: false,
//     auth: {
//       secret: env('ADMIN_JWT_SECRET'),
//     },
//     apiToken: {
//       salt: env('API_TOKEN_SALT'),
//     },
//     transfer: {
//       token: {
//         salt: env('TRANSFER_TOKEN_SALT'),
//       },
//     },
//     flags: {
//       nps: env.bool('FLAG_NPS', true),
//       promoteEE: env.bool('FLAG_PROMOTE_EE', true),
//     },
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
//   cron: {
//     enabled: true,
//     tasks: cronTasks,
//   },
//    timezone: 'Africa/Cairo'
// });

// import cronTasks from "./cron-tasks";

// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
//   cron: {
//     enabled: true,
//     tasks: cronTasks,
//   },
//    timezone: 'Africa/Cairo'
// });
