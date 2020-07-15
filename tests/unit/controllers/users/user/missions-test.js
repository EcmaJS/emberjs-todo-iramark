import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | users/user/missions', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:users/user/missions');
    assert.ok(controller);
  });
});
