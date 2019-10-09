const miniCrm = require('./mini-crm/mini-crm.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(miniCrm);
};
