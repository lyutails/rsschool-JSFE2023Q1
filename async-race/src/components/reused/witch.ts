import { BaseComponent } from '../core/base-component';

export class Witch extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['witch'],
    });
  }
}
