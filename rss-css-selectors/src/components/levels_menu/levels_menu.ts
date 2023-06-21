import { BaseComponent } from '@/core/base-component';

import { levelsNamesArray } from '@/data/levels_names';

export class LevelsMenu extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['levels']
    });

    const levelTitle = new BaseComponent({
      tagName: 'div',
      classList: ['levels_title'],
      textContent: 'Levels'
    });

    this.node.append(levelTitle.node);

    for (let i = 0; i < levelsNamesArray.length; i++) {
      const levelItem = new BaseComponent({
        tagName: 'div',
        classList: ['levels_item'],
        textContent: `${levelsNamesArray[i]}`
      });
      this.node.append(levelItem.node);
    }
  }
}
