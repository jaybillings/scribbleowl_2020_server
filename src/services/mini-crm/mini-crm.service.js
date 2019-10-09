// Initializes the `MiniCRM` service on path `/mini-crm`
const { MiniCrm } = require('./mini-crm.class');
const hooks = require('./mini-crm.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/mini-crm', new MiniCrm(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mini-crm');

  service.hooks(hooks);
};
