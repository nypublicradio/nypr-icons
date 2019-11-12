import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-svg', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with angle brackets', async function(assert) {
    await render(hbs`<NyprSvg @icon="wnyc-logo" @className="yes"/>`);

    assert.dom('svg.yes').exists();
    assert.dom('path').exists();
  });

  test('it renders with curly brackets', async function(assert) {
    await render(hbs`{{nypr-svg icon="wnyc-logo" className="yes"}}`);

    assert.dom('svg.yes').exists();
    assert.dom('path').exists();
  });

});
