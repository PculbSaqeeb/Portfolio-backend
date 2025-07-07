'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
  async send(ctx) {
    try {
      const { name, email, subject, budget, projectDescription } = ctx.request.body;

      if (!name || !email || !subject) {
        return ctx.badRequest('Missing required fields: name, email, subject');
      }
      const emailService = strapi.plugins.email.services.email;
      
      const emailOptions = {
        to: 'skeymouseit@gmail.com',
        from: 'skeymouseit@gmail.com',
        replyTo: email,
        subject: `New Contact Form: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nBudget: ${budget || 'Not specified'}\nDescription: ${projectDescription || 'Not provided'}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Description:</strong> ${projectDescription || 'Not provided'}</p>
        `,
      };

       emailService.send(emailOptions);


      return ctx.send({
        success: true,
        message: 'Email sent successfully!',
      });

    } catch (err) {
      console.error('Email sending failed:', err);
      
      return ctx.send({
        success: false,
        message: 'Failed to send email: ' + err.message,
        error: err.code
      }, 500);
    }
  },

}));