import { BaseComponent } from '@/core/base-component';

export class Viewport extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['viewport']
    });
  }
}
