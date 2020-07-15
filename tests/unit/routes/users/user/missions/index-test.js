import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | users/user/missions/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:users/user/missions/index');
    assert.ok(route);
  });
});
