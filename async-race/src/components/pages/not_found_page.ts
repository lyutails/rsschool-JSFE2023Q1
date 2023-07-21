import { BaseComponent } from '../core/base-component';

export class NotFound extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['not_found'],
    });

    const quidditchWrapper = new BaseComponent({
      tagName: 'div',
      classList: ['not_found_wrapper'],
      textContent:
        'Highly likely you got lost in the castle - try another staircase leading to the quidditch field, brooms parking or winners room.',
    });

    this.node.append(quidditchWrapper.node);
  }
}
