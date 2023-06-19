import { BaseComponent } from '@/core/base-component';

export class Button extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['button']
    });
  }
}
