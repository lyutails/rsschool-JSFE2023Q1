import { BaseComponent } from '../../core/base-component';

export class Overlay extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['overlay'],
    });

    const modalBody = document.body;

    modalBody.append(this.node);
  }
}
