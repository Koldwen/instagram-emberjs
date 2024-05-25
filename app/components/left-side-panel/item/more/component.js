import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MoreComponent extends Component {
  @tracked
  isVisible = false;

  get popUpId() {
    return 'more-pop-up';
  }

  get buttonId() {
    return 'more-button';
  }

  get visibility() {
    return this.isVisible ? 'visible' : 'hidden';
  }

  get popUpElement() {
    return document.getElementById(this.popUpId);
  }

  get buttonElement() {
    return document.getElementById(this.buttonId);
  }

  @action
  toggleMenu() {
    this.isVisible = !this.isVisible;

    if (this.isVisible) {
      document.addEventListener('click', this.handleClickOutsideMenu);
      window.addEventListener('resize', this.updatePopUpPosition);
      this.popUpElement.classList.add('visible');
    } else {
      document.removeEventListener('click', this.handleClickOutsideMenu);
      window.removeEventListener('resize', this.updatePopUpPosition);
      this.popUpElement.classList.remove('visible');
    }

    this.updatePopUpPosition();
  }

  @action
  updatePopUpPosition() {
    let rect = this.buttonElement.getBoundingClientRect();
    let left = rect.left + window.scrollX + 'px';
    let top =
      rect.top +
      window.scrollY -
      this.popUpElement.getBoundingClientRect().height -
      5 +
      'px';
    this.popUpElement.style = `left: ${left}; top: ${top};`;
  }

  @action
  handleClickOutsideMenu(event) {
    if (
      this.isVisible &&
      !this.popUpElement.contains(event.target) &&
      !this.buttonElement.contains(event.target)
    ) {
      this.toggleMenu();
    }
  }
}
