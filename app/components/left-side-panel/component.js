import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LeftSidePanelComponent extends Component {
  @tracked
  showMenu = false;
  @tracked
  menuStyle = '';

  get visibility() {
    return this.showMenu ? 'visible' : 'hidden';
  }

  @action
  toggleMenu() {
    this.showMenu = !this.showMenu;

    if (this.showMenu) {
      document.addEventListener('click', this.handleClickOutsideMenu);
      window.addEventListener('resize', this.updateMenu);
    } else {
      document.removeEventListener('click', this.handleClickOutsideMenu);
      window.removeEventListener('resize', this.updateMenu);
    }

    this.updateMenu();
  }

  @action
  updateMenu() {
    let moreMenu = document.getElementById('more-menu');
    let moreButton = document.getElementById('more-button');

    let rect = moreButton.getBoundingClientRect();
    let menuHeight = moreMenu.offsetHeight;

    let left = rect.left + window.scrollX + 'px';
    let top = rect.top + window.scrollY - menuHeight - 5 + 'px';

    let menuPosition = `left: ${left}; top: ${top}; position: absolute;`;
    this.menuStyle = menuPosition + `visibility: ${this.visibility};`;
  }

  @action
  handleClickOutsideMenu(event) {
    let moreMenu = document.getElementById('more-menu');
    let moreButton = document.getElementById('more-button');

    if (
      this.showMenu &&
      !moreMenu.contains(event.target) &&
      !moreButton.contains(event.target)
    ) {
      this.toggleMenu();
    }
  }
}
