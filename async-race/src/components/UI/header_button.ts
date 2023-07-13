import { BaseComponent } from '../core/base-component';

export class HeaderButton extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['header_button'],
    });
  }
}