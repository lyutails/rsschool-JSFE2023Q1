import { BaseComponent } from '../../core/base-component';

export class Owl extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['owl'],
    });
  }
}
