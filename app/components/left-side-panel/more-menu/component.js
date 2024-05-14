import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MoreMenuComponent extends Component {
  @tracked
  darkTheme = true;

  @action
  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    let theme = this.darkTheme ? 'dark' : 'light';

    document.documentElement.style.setProperty(
      '--primary-color',
      `var(--${theme}-primary-color)`,
    );
    document.documentElement.style.setProperty(
      '--secondary-color',
      `var(--${theme}-secondary-color)`,
    );
    document.documentElement.style.setProperty(
      '--tertiary-color',
      `var(--${theme}-tertiary-color)`,
    );
    document.documentElement.style.setProperty(
      '--quaternary-color',
      `var(--${theme}-quaternary-color)`,
    );
    document.documentElement.style.setProperty(
      '--color',
      `var(--${theme}-color)`,
    );
    document.documentElement.style.setProperty(
      '--filter',
      `var(--${theme}-filter)`,
    );
  }
}
