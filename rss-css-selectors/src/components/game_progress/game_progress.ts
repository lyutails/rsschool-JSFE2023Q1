import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

import { currentLevelObserver, store } from '@/store';

export const progressObserverDay = new Observer();
export const progressObserverNight = new Observer();

export class GameProgress extends BaseComponent<'div'> {
  public store = store;
  constructor() {
    super({
      tagName: 'div',
      classList: ['game_progress']
    });

    progressObserverDay.subscribe(() => this.node.classList.add('recolour'));
    progressObserverNight.subscribe(() =>
      this.node.classList.remove('recolour')
    );

    const gameProgressBar = new BaseComponent({
      tagName: 'progress',
      classList: ['game_progress_progress_bar']
    });

    gameProgressBar.node.setAttribute('value', '0');

    currentLevelObserver.subscribe(() => {
      gameProgressBar.node.value = this.store.currentLevel / 20;
    });

    this.node.append(gameProgressBar.node);
  }
}
