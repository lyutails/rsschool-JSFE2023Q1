import { BaseComponent } from '@/core/base-component';

export class GameProgress extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['game_progress']
    });
  }
}
