const assert = require('assert');
const app = require('../../src/app');

describe('\'MiniCRM\' service', () => {
  it('registered the service', () => {
    const service = app.service('mini-crm');

    assert.ok(service, 'Registered the service');
  });
});
