import { BaseComponent } from '../core/base-component';

export class Track extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['track'],
    });
  }
}