import { BaseComponent } from '../../core/base-component';

class BroomsCount extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['brooms_count'],
    });

    this.node.textContent = `Currently total brooms' count is paste-here-number.`;
  }
}

export const broomsCount = new BroomsCount();
