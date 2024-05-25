import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array'; // Importa A desde Ember

export default class PublicationsComponent extends Component {
  publication = {
    accountName: 'Fake account',
    publicationAge: '2hrs',
    nLikes: 200,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dictum mauris. Praesent diam odio, volutpat pharetra ligula ut, lobortis blandit velit. Sed vel vestibulum quam, sed tincidunt erat.',
  };

  @tracked
  publications = A([this.publication, this.publication, this.publication]);

  get indexPage() {
    return document.getElementById('index-page');
  }

  get publicationsElement() {
    return document.getElementById('publications');
  }

  @action
  setUpScroller() {
    this.indexPage.addEventListener('scroll', this.handleScroll);
  }

  @action
  handleScroll() {
    console.log(this.publications.length);
    let publicationsHeight =
      this.publicationsElement.getBoundingClientRect().height;
    let scrollPosition = this.publicationsElement.getBoundingClientRect().y;
    let windowHeight = window.innerHeight;

    if (-scrollPosition + windowHeight >= publicationsHeight - 200) {
      this.publications = A([
        ...this.publications,
        this.publication,
        this.publication,
        this.publication,
      ]);
    }
  }
}
