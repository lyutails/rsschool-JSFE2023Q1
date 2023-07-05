import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

export const overlayObserver = new Observer();

export class Overlay extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['overlay']
    });

    this.node.addEventListener('click', () => {
      overlayObserver.notify('lalala');
    });

    const overlayBody = document.body;

    overlayBody.append(this.node);
  }
}
