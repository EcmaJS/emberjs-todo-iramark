import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | missions/mission', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:missions/mission');
    assert.ok(route);
  });
});
