import { BaseComponent } from '@/core/base-component';

export class LevelsBurger extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['levels_burger']
    });

    const burgerIcon = new BaseComponent({
      tagName: 'div',
      classList: ['levels_burger_icon']
    });

    const burgerLines: number[] = [1, 2, 3, 4];

    for (let i = 0; i < burgerLines.length; i++) {
      const burgerIconLine = new BaseComponent({
        tagName: 'span',
        classList: ['levels_burger_line']
      });
      burgerIcon.append(burgerIconLine);
    }

    burgerIcon.node.addEventListener('click', () => {
      burgerIcon.toggleClass('active');
    });

    this.append(burgerIcon);
  }
}
