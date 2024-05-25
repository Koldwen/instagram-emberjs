import { module, test } from 'qunit';
import { setupRenderingTest } from 'instagram-emberjs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | left-side-panel/item/more/pop-up/pop-up',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders correctly', async function (assert) {
      await render(hbs`<LeftSidePanel::Item::More::PopUp @id='more-pop-up' />`);
      let popUp = this.element.children[0];
      assert.strictEqual(popUp.id, 'more-pop-up', 'It has correct pop up id');
      assert.strictEqual(popUp.children.length, 3, 'There are only 3 children');

      let upperMenu = popUp.children[0];
      assert.strictEqual(
        upperMenu.children.length,
        2,
        'The upper menu contains 2 items',
      );
    });

    test('it renders Settings link correctly', async function (assert) {
      await render(hbs`<LeftSidePanel::Item::More::PopUp @id='more-pop-up' />`);
      let popUp = this.element.children[0];
      let upperMenu = popUp.children[0];
      let item = upperMenu.children[0];

      assert.strictEqual(item.tagName, 'A', 'Settings item is a link');
      assert.strictEqual(
        item.getAttribute('href'),
        '/settings',
        'Settings item is a link to /settings',
      );
      assert.strictEqual(
        item.children.length,
        2,
        'Settings item contains 2 children',
      );

      let itemImg = item.children[0];
      assert.strictEqual(
        itemImg.tagName,
        'IMG',
        'First Settings item is an image',
      );
      assert.ok(
        itemImg.src.endsWith('settings-icon.svg'),
        'Settings image is settings-icon.svg',
      );

      let itemText = item.children[1];
      assert.strictEqual(
        itemText.tagName,
        'SPAN',
        'Second Settings item is text',
      );
      assert.strictEqual(
        itemText.textContent,
        'Settings',
        'Settings text is correct',
      );
    });

    test('it renders Switch theme button correctly', async function (assert) {
      await render(hbs`<LeftSidePanel::Item::More::PopUp @id='more-pop-up' />`);
      let popUp = this.element.children[0];
      let upperMenu = popUp.children[0];
      let item = upperMenu.children[1];

      assert.strictEqual(
        item.tagName,
        'BUTTON',
        'Switch theme item is a button',
      );
      assert.strictEqual(
        item.children.length,
        2,
        'Switch theme item contains 2 children',
      );

      let itemImg = item.children[0];
      assert.strictEqual(
        itemImg.tagName,
        'IMG',
        'First Switch theme item is an image',
      );
      assert.ok(
        itemImg.src.endsWith('dark-theme-icon.svg'),
        'Switch theme image is dark-theme-icon.svg',
      );

      let itemText = item.children[1];
      assert.strictEqual(
        itemText.tagName,
        'SPAN',
        'Second Switch theme item is text',
      );
      assert.strictEqual(
        itemText.textContent,
        'Switch theme',
        'Switch theme text is correct',
      );
    });

    test('it renders separator correctly', async function (assert) {
      await render(hbs`<LeftSidePanel::Item::More::PopUp @id='more-pop-up' />`);
      let popUp = this.element.children[0];
      let separator = popUp.children[1];

      assert.strictEqual(separator.tagName, 'SPAN', 'Separator is a span');
      assert.strictEqual(
        separator.children.length,
        0,
        'Separator has no children',
      );
      assert.strictEqual(separator.textContent, '', 'Separator has no text');
    });

    test('it renders Exit link correctly', async function (assert) {
      await render(hbs`<LeftSidePanel::Item::More::PopUp @id='more-pop-up' />`);
      let popUp = this.element.children[0];
      let item = popUp.children[2];

      assert.strictEqual(item.tagName, 'A', 'Exit item is a link');
      assert.strictEqual(
        item.getAttribute('href'),
        '/',
        'Exit item is a link to index',
      );
      assert.strictEqual(
        item.children.length,
        1,
        'Exit item contains 1 children',
      );

      let itemText = item.children[0];
      assert.strictEqual(itemText.tagName, 'SPAN', 'First Exit item is text');
      assert.strictEqual(itemText.textContent, 'Exit', 'Exit text is correct');
    });
  },
);
