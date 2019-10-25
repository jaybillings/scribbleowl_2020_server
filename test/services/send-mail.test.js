const assert = require('assert');
const app = require('../../src/app');

describe('\'send-mail\' service', () => {
  it('registered the service', () => {
    const service = app.service('send-mail');

    assert.ok(service, 'Registered the service');
  });
});
