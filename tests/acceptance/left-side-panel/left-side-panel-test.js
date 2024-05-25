import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'instagram-emberjs/tests/helpers';

module('Acceptance | left side panel/left side panel', function (hooks) {
  setupApplicationTest(hooks);

  test('Logo link works correctly', async function (assert) {
    await visit('/profile');
    assert.strictEqual(currentURL(), '/profile');
    await click('#app-link');
    assert.strictEqual(currentURL(), '/');
  });

  test('Home link works correctly', async function (assert) {
    await visit('/profile');
    assert.strictEqual(currentURL(), '/profile');
    await click('#home-link');
    assert.strictEqual(currentURL(), '/');
  });

  test('Search link works correctly', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    await click('#search-link');
    assert.strictEqual(currentURL(), '/search');
  });

  test('Profile link works correctly', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    await click('#profile-link');
    assert.strictEqual(currentURL(), '/profile');
  });

  test('Pop-Up menu shows up / hides correctly', async function (assert) {
    await visit('/');
    assert
      .dom('#more-pop-up')
      .hasStyle(
        { visibility: 'hidden' },
        'More Pop-Up is not visible initially',
      );
    await click('#more-button');
    assert
      .dom('#more-pop-up')
      .hasStyle(
        { visibility: 'visible' },
        'More Pop-Up is visible after first click',
      );
    await click('#more-button');
    assert
      .dom('#more-pop-up')
      .hasStyle(
        { visibility: 'hidden' },
        'More Pop-Up is not visible after clicking button again',
      );
    await click('#more-button');
    assert
      .dom('#more-pop-up')
      .hasStyle(
        { visibility: 'visible' },
        'More Pop-Up is visible after third click',
      );
    await click('#app-link');
    assert
      .dom('#more-pop-up')
      .hasStyle(
        { visibility: 'hidden' },
        'More Pop-Up is not visible after clicking outside pop-up menu',
      );
  });

  test('Settings link works correctly', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    await click('#settings-link');
    assert.strictEqual(currentURL(), '/settings');
  });

  test('Exit link works correctly', async function (assert) {
    await visit('/profile');
    assert.strictEqual(currentURL(), '/profile');
    await click('#exit-link');
    assert.strictEqual(currentURL(), '/');
  });

  test('Switch theme works correctly', async function (assert) {
    await visit('/');

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--primary-color',
      ),
      'black',
      '--primary-color is dark theme',
    );

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--secondary-color',
      ),
      '#262626',
      '--secondary-color is dark theme',
    );

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--tertiary-color',
      ),
      '#353535',
      '--tertiary-color is dark theme',
    );

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--quaternary-color',
      ),
      '#3c3c3c',
      '--quaternary-color is dark theme',
    );

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue('--color'),
      'white',
      '--color is dark theme',
    );

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue('--filter'),
      'invert(98%) sepia(100%) saturate(0%) hue-rotate(77deg)\n    brightness(114%) contrast(101%)',
      '--filter is dark theme',
    );

    await click('#switch-theme-button');

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--primary-color',
      ),
      'white',
      '--primary-color is light theme',
    );

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--secondary-color',
      ),
      '#f2f2f2',
      '--secondary-color is light theme',
    );

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--tertiary-color',
      ),
      '#dbdbdb',
      '--tertiary-color is light theme',
    );

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--quaternary-color',
      ),
      '#dbdbdb',
      '--quaternary-color is light theme',
    );

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue('--color'),
      'black',
      '--color is light theme',
    );

    assert.strictEqual(
      getComputedStyle(document.documentElement).getPropertyValue('--filter'),
      'invert(0%) sepia(100%) saturate(7500%) hue-rotate(143deg)\n    brightness(91%) contrast(112%)',
      '--filter is light theme',
    );
  });
});
