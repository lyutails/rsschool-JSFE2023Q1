import { BaseComponent } from '../core/base-component';

export class TrackButton extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['track_buttons_button'],
    });
  }
}
