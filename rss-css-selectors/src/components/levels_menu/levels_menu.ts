import { BaseComponent } from '@/core/base-component';

import { burgerObserver } from '../levels_burger';
import { Observer } from '../observer';

import { levelsNamesArray } from '@/data/levels_names';
import { store } from '@/store';

export const levelsObserverDay = new Observer();
export const levelsObserverNight = new Observer();
export const clickDesiredLevelObserver = new Observer();
export const levelNameColorObserver = new Observer();
export const checkMarkObserverDay = new Observer();
export const checkMarkObserverNight = new Observer();

export class LevelsMenu extends BaseComponent {
  public store = store;
  public levelName?: BaseComponent<'span'>;
  public levelsNamesMenu: BaseComponent<'span'>[];
  public levelCheck?: BaseComponent<'span'>;
  public checkMarksMenu: BaseComponent<'span'>[];
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

    this.levelsNamesMenu = [];
    this.checkMarksMenu = [];

    for (let i = 0; i < levelsNamesArray.length; i++) {
      this.levelName = new BaseComponent({
        tagName: 'span',
        classList: ['levels_name'],
        textContent: `${levelsNamesArray[i]}`
      });

      this.levelsNamesMenu.push(this.levelName);

      this.levelCheck = new BaseComponent({
        tagName: 'span',
        classList: ['levels_check']
      });

      this.checkMarksMenu.push(this.levelCheck);

      const levelItem = new BaseComponent({
        tagName: 'div',
        classList: ['levels_item'],
        children: [this.levelCheck, this.levelName]
      });

      this.node.append(levelItem.node);
    }

    this.checkMarksMenu.forEach((checkMark) => {
      checkMarkObserverDay.subscribe(() => {
        checkMark.node.classList.add('morning');
        checkMark.node.classList.remove('evening');
      });

      checkMarkObserverNight.subscribe(() => {
        checkMark.node.classList.add('evening');
        checkMark.node.classList.remove('morning');
      });
    });

    this.levelsNamesMenu[this.store.currentLevel].node.style.color = '#7affca';

    for (let i = 0; i < this.levelsNamesMenu.length; i++) {
      levelNameColorObserver.subscribe(() => {
        this.levelsNamesMenu[this.store.currentLevel].node.style.color =
          '#7affca';
        this.levelsNamesMenu[this.store.currentLevel - 1].node.style.color =
          'unset';
      });
    }

    burgerObserver.subscribe(() => this.moveMenu());

    levelsObserverDay.subscribe(() => this.node.classList.add('recolour'));
    levelsObserverNight.subscribe(() => this.node.classList.remove('recolour'));
  }

  public moveMenu(): void {
    this.node.classList.toggle('active');
  }

  public changeLevelByClickInMenu(): void {
    this.levelsNamesMenu.forEach((levelMenu) => {
      levelMenu.node.addEventListener('click', () => {});
    });
  }
}
