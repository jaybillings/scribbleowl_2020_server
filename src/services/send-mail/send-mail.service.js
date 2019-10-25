// Initializes the `send-mail` service on path `/send-mail`
const { SendMail } = require('./send-mail.class');
const hooks = require('./send-mail.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/send-mail', new SendMail(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('send-mail');

  service.hooks(hooks);
};
