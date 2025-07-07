
  module.exports = () => ({
    email: {
      config: {
        provider: '@strapi/provider-email-nodemailer',
        providerOptions: {
          service: 'gmail',
          auth: {
            user: 'skeymouseit@gmail.com',
            pass: 'qhyakcbficfoscxt', 
          },
        },
        settings: {
          defaultFrom: 'skeymouseit@gmail.com',
          defaultReplyTo: 'skeymouseit@gmail.com',
        },
      },
    },
  });
