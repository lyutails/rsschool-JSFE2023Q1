import { BaseComponent } from '@/core/base-component';

import { burgerObserver } from '../levels_burger';
import { Observer } from '../observer';

import { levelsNamesArray } from '@/data/levels_names';

export const levelsObserverDay = new Observer();
export const levelsObserverNight = new Observer();

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

    // burgerObserver.subscribe(this.moveMenu);
    burgerObserver.subscribe(() => this.moveMenu());

    levelsObserverDay.subscribe(() => this.node.classList.add('recolour'));
    levelsObserverNight.subscribe(() => this.node.classList.remove('recolour'));
  }

  public moveMenu(): void {
    this.node.classList.toggle('active');
  }
}
