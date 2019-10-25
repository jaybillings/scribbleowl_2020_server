/* eslint-disable no-unused-vars */
const mailer = require('feathers-mailer');
const nodemailer = require('nodemailer');

const mailerInternal = async function(email) {
  const account = await nodemailer.createTestAccount();

  const transporter = {
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    requireTLS: true,
    auth: {
      user: account.user,
      pass: account.pass
    }
  };

  const sender = mailer(transporter, {from: email.from});

  const mailData = {
    to: 'contact@scribbleowl.com',
    subject: 'SMTP Test',
    html: email.body
  };

  return sender.create(mailData);
};

exports.SendMail = class SendMail {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    console.log(data);

    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return mailerInternal(data);
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}
