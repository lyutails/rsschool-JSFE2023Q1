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

    const instructionsBody = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_body'],
      children: [level, description, example]
    });

    this.node.append(instructionsBody.node);
  }
}
