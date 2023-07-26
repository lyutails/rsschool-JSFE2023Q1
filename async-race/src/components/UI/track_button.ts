import { BaseComponent } from '../../core/base-component';

export class TrackButton extends BaseComponent<'button'> {
  constructor() {
    super({
      tagName: 'button',
      classList: ['track_buttons_button'],
    });
  }
}
