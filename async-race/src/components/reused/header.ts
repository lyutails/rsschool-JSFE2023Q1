import { BaseComponent } from '../core/base-component';

export class Header extends BaseComponent {
  constructor() {
    super({
        tagName: 'div',
        classList: ['header']
    });
  }
}
