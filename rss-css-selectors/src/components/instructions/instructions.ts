import { BaseComponent } from '@/core/base-component';

import { LevelsBurger } from '../levels_burger';
import { LevelsMenu } from '../levels_menu';
import { Observer } from '../observer';

export const instructionsObserverDay = new Observer();
export const instructionsObserverNight = new Observer();

export class Instructions extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['instructions']
    });

    const burger = new LevelsBurger();

    const levels = new LevelsMenu();

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

    const currentLevel = new BaseComponent({
      tagName: 'span',
      classList: ['instructions_current'],
      textContent: 'current'
    });

    const changeNext = new BaseComponent({
      tagName: 'span',
      classList: ['instructions_next']
    });

    const changePrevious = new BaseComponent({
      tagName: 'span',
      classList: ['instructions_previous']
    });

    const level = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_level'],
      textContent: 'Level',
      children: [currentLevel, changePrevious, changeNext]
    });

    instructionsObserverDay.subscribe(() =>
      this.node.classList.add('recolour')
    );
    instructionsObserverNight.subscribe(() =>
      this.node.classList.remove('recolour')
    );

    this.node.append(
      level.node,
      description.node,
      example.node,
      levels.node,
      burger.node
    );
  }
}
