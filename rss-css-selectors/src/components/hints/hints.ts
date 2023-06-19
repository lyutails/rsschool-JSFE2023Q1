import { BaseComponent } from '@/core/base-component';

export class Hints extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['hints']
    });

    const text = new BaseComponent({
      tagName: 'div',
      classList: ['hints_text']
    });

    const eyeVisibility = new BaseComponent({
      tagName: 'div',
      classList: ['hints_eye']
    });

    eyeVisibility.toggleClassOnClick();

    this.node.append(eyeVisibility.node, text.node);
  }
}
