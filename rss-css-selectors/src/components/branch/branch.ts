import { BaseComponent } from '@/core/base-component';

export class Branch extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['branch']
    });
  }
}

// customElements.define('branch-div', Branch as HTMLDivElement, {
//   extends: 'div'
// });
