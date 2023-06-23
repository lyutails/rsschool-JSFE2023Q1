import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

export const progressObserverDay = new Observer();
export const progressObserverNight = new Observer();

export class GameProgress extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['game_progress']
    });

    progressObserverDay.subscribe(() => this.node.classList.add('recolour'));
    progressObserverNight.subscribe(() =>
      this.node.classList.remove('recolour')
    );
  }
}
