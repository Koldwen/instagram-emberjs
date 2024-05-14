import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MoreComponent extends Component {
  @tracked
  showMenu = false;
  @tracked
  menuStyle = '';

  @action
  toggleMenu() {
    this.showMenu = !this.showMenu;

    if (this.showMenu) {
      let menu = document.getElementById('more-menu');
      let button = document.getElementById('more-button');
      let rect = button.getBoundingClientRect();
      let menuHeight = menu.offsetHeight;

      let left = rect.left + window.scrollX + 'px';
      let top = rect.top + window.scrollY - menuHeight - 5 + 'px';

      this.menuPosition = `left: ${left}; top: ${top}; position: absolute;`;
    }

    this.menuStyle = this.menuPosition + `visibility: ${this.visibility};`;
  }

  get visibility() {
    return this.showMenu ? 'visible' : 'hidden';
  }
}
