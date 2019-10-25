const miniCrm = require('./mini-crm/mini-crm.service.js');
const sendMail = require('./send-mail/send-mail.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(miniCrm);
  app.configure(sendMail);
};
