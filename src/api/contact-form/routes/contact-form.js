'use strict';

/**
 * contact-form router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::contact-form.contact-form');



// src/api/contact-form/routes/contact-form.js

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact-form/send',
      handler: 'contact-form.send',
      config: {
        auth: false,
      },
    },
  ],
};
