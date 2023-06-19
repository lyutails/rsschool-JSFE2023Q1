import { BaseComponent } from '@/core/base-component';

export class Instructions extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['instructions']
    });

    const example = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_example'],
      textContent: 'Example'
    });

    const description = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_description'],
      textContent: 'Description'
    });

    const level = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_level'],
      textContent: 'Level'
    });

    this.node.append(level.node, description.node, example.node);
  }
}
