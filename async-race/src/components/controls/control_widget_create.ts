import { ControlButton } from '../UI/controls_button';
import { BaseComponent } from '../core/base-component';

export class ControlWidgetCreate extends BaseComponent {
  public static controlButton: ControlButton;
  constructor() {
    super({
      tagName: 'div',
      classList: ['control_widget'],
    });

    const controlName = new BaseComponent({
      tagName: 'input',
      classList: ['control_widget_name'],
    });

    controlName.setPlaceholder('Imagine Name');

    controlName.node.setAttribute('type', 'text');

    const controlColor = new BaseComponent({
      tagName: 'input',
      classList: ['control_widget_color'],
    });

    controlColor.node.setAttribute('type', 'color');

    ControlWidgetCreate.controlButton = new ControlButton();

    ControlWidgetCreate.controlButton.node.textContent = 'Create';

    this.node.append(controlName.node, controlColor.node, ControlWidgetCreate.controlButton.node);
  }
}
