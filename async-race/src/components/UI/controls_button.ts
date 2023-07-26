import { BaseComponent } from '../../core/base-component';

export class ControlButton extends BaseComponent<'button'> {
  constructor() {
    super({
      tagName: 'button',
      classList: ['control_widget_button'],
    });
  }
}
