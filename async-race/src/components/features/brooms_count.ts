import { BaseComponent } from '../core/base-component';

export class BroomsCount extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['brooms_count'],
    });

    this.node.textContent = `Currently total brooms' count is paste-here-number.`;
  }
}
