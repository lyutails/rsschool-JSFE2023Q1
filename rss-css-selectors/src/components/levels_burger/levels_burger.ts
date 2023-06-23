import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

export const burgerObserver = new Observer();

export class LevelsBurger extends BaseComponent {
  public static burgerIcon: BaseComponent;
  constructor() {
    super({
      tagName: 'div',
      classList: ['levels_burger']
    });

    LevelsBurger.burgerIcon = new BaseComponent({
      tagName: 'div',
      classList: ['levels_burger_icon']
    });

    const burgerLines: number[] = [1, 2, 3, 4];

    for (let i = 0; i < burgerLines.length; i++) {
      const burgerIconLine = new BaseComponent({
        tagName: 'span',
        classList: ['levels_burger_line']
      });
      LevelsBurger.burgerIcon.append(burgerIconLine);
    }

    LevelsBurger.burgerIcon.node.addEventListener('click', () => {
      LevelsBurger.burgerIcon.toggleClass('active');
      burgerObserver.notify('lalala');
    });

    this.append(LevelsBurger.burgerIcon);
  }
}
