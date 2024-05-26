import { module, test } from 'qunit';
import { visit, currentURL, scrollTo } from '@ember/test-helpers';
import { setupApplicationTest } from 'instagram-emberjs/tests/helpers';

module('Acceptance | publications', function (hooks) {
  setupApplicationTest(hooks);

  test('Index page exists', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    assert.ok(document.getElementById('index-page'), 'Index page exists');
  });

  test('Index page displays publications correctly', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');

    let publicationsElement = document.getElementById('publications');
    assert.ok(publicationsElement, 'Publications container exists');
    assert.strictEqual(
      publicationsElement.children.length,
      5 * 3,
      'Publications container have 5 publications',
    );

    let indexPage = document.getElementById('index-page');
    await scrollTo(indexPage, 0, indexPage.scrollHeight);
    assert.strictEqual(
      publicationsElement.children.length,
      10 * 3,
      'Publications container have 10 publications',
    );
  });
});
