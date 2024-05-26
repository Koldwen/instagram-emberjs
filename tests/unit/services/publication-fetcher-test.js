import { module, test } from 'qunit';
import { setupTest } from 'instagram-emberjs/tests/helpers';

module('Unit | Service | publication-fetcher', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:publication-fetcher');
    assert.ok(service, 'Service exists');
  });

  test('it fetches publications', async function (assert) {
    let service = this.owner.lookup('service:publication-fetcher');
    let publication = await service.fetchPublication();
    assert.ok(publication, 'Publication exists');
    assert.ok(publication.username, 'Publication has an username');
    assert.strictEqual(
      typeof publication.username,
      'string',
      'Username is a string',
    );
    assert.ok(publication.likes, 'Publication has number of likes');
    assert.strictEqual(
      typeof publication.likes,
      'number',
      'Number of likes is a number',
    );
    assert.ok(publication.media, 'Publication has media');
    assert.strictEqual(typeof publication.media, 'string', 'Media is a string');
    assert.true(publication.media.startsWith('https://'), 'Media is a url');
    assert.ok(publication.profilePicture, 'Publication has a profile picture');
    assert.strictEqual(
      typeof publication.profilePicture,
      'string',
      'Profile picture is a string',
    );
    assert.true(
      publication.profilePicture.startsWith('https://'),
      'Profile picture is a url',
    );
    assert.ok(publication.description, 'Publication has a description');
    assert.strictEqual(
      typeof publication.description,
      'string',
      'Description is a string',
    );
  });
});
