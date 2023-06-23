import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

export const hintsObserverDay = new Observer();
export const hintsObserverNight = new Observer();

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

    hintsObserverDay.subscribe(() => this.node.classList.add('recolour'));
    hintsObserverNight.subscribe(() => this.node.classList.remove('recolour'));

    this.node.append(eyeVisibility.node, text.node);
  }
}
