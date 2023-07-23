import { BaseComponent } from '../../core/base-component';

export class ControlButton extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['control_widget_button'],
    });
  }
}
