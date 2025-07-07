const fs = require('fs');
const path = require('path'); 
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});




// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
//   // HTTPS Configuration
//   ...(env('NODE_ENV') === 'production' && {
//     url: env('PUBLIC_URL'), // Your public URL
//     proxy: env.bool('IS_PROXIED', true),
//   }),
//   // For local HTTPS (development only)
//   ...(env('ENABLE_HTTPS') === 'true' && {
//     https: {
//       key: fs.readFileSync(path.resolve(__dirname, '../ssl/server.key')),
//       cert: fs.readFileSync(path.resolve(__dirname, '../ssl/server.crt')),
//     },
//   }),
// });
