import { BaseComponent } from '../core/base-component';

export class HeaderButton extends BaseComponent<'a'> {
  constructor() {
    super({
      tagName: 'a',
      classList: ['header_button'],
    });
  }
}
