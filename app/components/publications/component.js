import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

export default class PublicationsComponent extends Component {
  @service
  publicationFetcher;

  @tracked
  publications = A([]);

  get indexPage() {
    return document.getElementById('index-page');
  }

  get publicationsElement() {
    return document.getElementById('publications');
  }

  @action
  setUp() {
    this.indexPage.addEventListener('scroll', this.handleScroll);
    this.fetchPublications();
  }

  @action
  handleScroll() {
    let publicationsHeight =
      this.publicationsElement.getBoundingClientRect().height;
    let scrollPosition = this.publicationsElement.getBoundingClientRect().y;
    let windowHeight = window.innerHeight;

    if (-scrollPosition + windowHeight >= publicationsHeight - 200) {
      this.fetchPublications();
    }
  }

  async fetchPublications() {
    for (let i = 1; i <= 5; i++) {
      this.publications = A([
        ...this.publications,
        await this.publicationFetcher.fetchPublication(),
      ]);
    }
  }
}
