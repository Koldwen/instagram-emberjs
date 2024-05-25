import { module, test } from 'qunit';
import { setupRenderingTest } from 'instagram-emberjs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | left-side-panel', function (hooks) {
  setupRenderingTest(hooks);

  test('it contains correct number of items', async function (assert) {
    await render(hbs`<LeftSidePanel />`);
    let panel = this.element.querySelector('#left-side-panel');

    assert.ok(panel, 'Panel exists');
    assert.strictEqual(panel.children.length, 6, 'Panel contains 6 items');
  });

  test('it renders Logo link correctly', async function (assert) {
    await render(hbs`<LeftSidePanel />`);
    let panel = this.element.querySelector('#left-side-panel');

    let item = panel.children[0];
    assert.strictEqual(item.tagName, 'A', 'Logo item is a link');
    assert.strictEqual(
      item.getAttribute('href'),
      '/',
      'Logo item is a link to index',
    );
    assert.strictEqual(item.children.length, 1, 'Logo item contains 1 child');

    let itemImg = item.children[0];
    assert.strictEqual(itemImg.tagName, 'IMG', 'First Logo item is an image');
    assert.ok(
      itemImg.src.endsWith('app-logo-big.svg'),
      'Logo image is app-logo-big.svg',
    );
  });

  test('it renders Home link correctly', async function (assert) {
    await render(hbs`<LeftSidePanel />`);
    let panel = this.element.querySelector('#left-side-panel');

    let item = panel.children[1];
    assert.strictEqual(item.tagName, 'A', 'Home item is a link');
    assert.strictEqual(
      item.getAttribute('href'),
      '/',
      'Home item is a link to index',
    );
    assert.strictEqual(
      item.children.length,
      2,
      'Home item contains 2 children',
    );

    let itemImg = item.children[0];
    assert.strictEqual(itemImg.tagName, 'IMG', 'First Home item is an image');
    assert.ok(
      itemImg.src.endsWith('home-icon.svg'),
      'Home image is home-icon.svg',
    );

    let itemText = item.children[1];
    assert.strictEqual(itemText.tagName, 'SPAN', 'Second Home item is text');
    assert.strictEqual(itemText.textContent, 'Home', 'Home text is correct');
  });

  test('it renders Search link correctly', async function (assert) {
    await render(hbs`<LeftSidePanel />`);
    let panel = this.element.querySelector('#left-side-panel');

    let item = panel.children[2];
    assert.strictEqual(item.tagName, 'A', 'Search item is a link');
    assert.strictEqual(
      item.getAttribute('href'),
      '/search',
      'Search item is a link to /search',
    );
    assert.strictEqual(
      item.children.length,
      2,
      'Search item contains 2 children',
    );

    let itemImg = item.children[0];
    assert.strictEqual(itemImg.tagName, 'IMG', 'First Search item is an image');
    assert.ok(
      itemImg.src.endsWith('search-icon.svg'),
      'Search image is search-icon.svg',
    );

    let itemText = item.children[1];
    assert.strictEqual(itemText.tagName, 'SPAN', 'Second Search item is text');
    assert.strictEqual(
      itemText.textContent,
      'Search',
      'Search text is correct',
    );
  });

  test('it renders Profile link correctly', async function (assert) {
    await render(hbs`<LeftSidePanel />`);
    let panel = this.element.querySelector('#left-side-panel');

    let item = panel.children[3];
    assert.strictEqual(item.tagName, 'A', 'Profile item is a link');
    assert.strictEqual(
      item.getAttribute('href'),
      '/profile',
      'Profile item is a link to /search',
    );
    assert.strictEqual(
      item.children.length,
      2,
      'Profile item contains 2 children',
    );

    let itemImg = item.children[0];
    assert.strictEqual(
      itemImg.tagName,
      'IMG',
      'First Profile item is an image',
    );
    assert.ok(
      itemImg.src.endsWith('profile-picture.png'),
      'Profile image is profile-picture.png',
    );

    let itemText = item.children[1];
    assert.strictEqual(itemText.tagName, 'SPAN', 'Second Profile item is text');
    assert.strictEqual(
      itemText.textContent,
      'Profile',
      'Profile text is correct',
    );
  });

  // There's a test for this pop-up in pop-up-test.js
  test('it renders More Pop-Up correctly', async function (assert) {
    await render(hbs`<LeftSidePanel />`);
    let panel = this.element.querySelector('#left-side-panel');

    let item = panel.children[4];
    assert.strictEqual(item.id, 'more-pop-up', 'More Pop-Up item is correct');
  });

  // There's a test for this button in more-test.js
  test('it renders More button correctly', async function (assert) {
    await render(hbs`<LeftSidePanel />`);
    let panel = this.element.querySelector('#left-side-panel');

    let item = panel.children[5];
    assert.strictEqual(item.id, 'more-button', 'More Pop-Up item is correct');
  });
});
