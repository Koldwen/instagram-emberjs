import { module, test } from 'qunit';
import { setupRenderingTest } from 'instagram-emberjs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | more', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders correctly', async function (assert) {
    await render(hbs`<LeftSidePanel::More />`);
    assert.strictEqual(
      this.element.children.length,
      2,
      'There are only 2 children',
    );

    let popUp = this.element.children[0];
    let button = this.element.children[1];

    assert.strictEqual(popUp.id, 'more-pop-up', 'First children is the pop-up');
    assert.strictEqual(
      button.id,
      'more-button',
      'Second children is the button',
    );
  });

  test('it renders More button correctly', async function (assert) {
    await render(hbs`<LeftSidePanel::More />`);
    let button = this.element.children[1];

    assert.strictEqual(button.tagName, 'BUTTON', 'More button is a button');
    assert.strictEqual(
      button.children.length,
      2,
      'More button contains 2 children',
    );

    let buttonImg = button.children[0];
    assert.strictEqual(
      buttonImg.tagName,
      'IMG',
      'First More button is an image',
    );
    assert.ok(
      buttonImg.src.endsWith('burger-icon.svg'),
      'More button image is burger-icon.svg',
    );

    let buttonText = button.children[1];
    assert.strictEqual(
      buttonText.tagName,
      'SPAN',
      'Second More button is text',
    );
    assert.strictEqual(
      buttonText.textContent,
      'More',
      'More button text is correct',
    );
  });
});
