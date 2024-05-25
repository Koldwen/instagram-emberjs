import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MorePopUpComponent extends Component {
  @tracked
  darkTheme = true;

  get theme() {
    return this.darkTheme ? 'dark' : 'light';
  }

  @action
  toggleTheme() {
    this.darkTheme = !this.darkTheme;

    document.documentElement.style.setProperty(
      '--primary-color',
      `var(--${this.theme}-primary-color)`,
    );
    document.documentElement.style.setProperty(
      '--secondary-color',
      `var(--${this.theme}-secondary-color)`,
    );
    document.documentElement.style.setProperty(
      '--tertiary-color',
      `var(--${this.theme}-tertiary-color)`,
    );
    document.documentElement.style.setProperty(
      '--quaternary-color',
      `var(--${this.theme}-quaternary-color)`,
    );
    document.documentElement.style.setProperty(
      '--color',
      `var(--${this.theme}-color)`,
    );
    document.documentElement.style.setProperty(
      '--filter',
      `var(--${this.theme}-filter)`,
    );
  }
}
