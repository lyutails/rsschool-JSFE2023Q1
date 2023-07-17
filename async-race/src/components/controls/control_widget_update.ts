import { Observer } from '../../observer';
import { ControlButton } from '../UI/controls_button';
import { BaseComponent } from '../core/base-component';

export const updateInputObserver = new Observer();

export class ControlWidgetUpdate extends BaseComponent {
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

    controlName.setPlaceholder('Customize Name');

    controlName.node.setAttribute('type', 'text');

    const controlColor = new BaseComponent({
      tagName: 'input',
      classList: ['control_widget_color'],
    });

    controlColor.node.setAttribute('type', 'color');

    ControlWidgetUpdate.controlButton = new ControlButton();

    ControlWidgetUpdate.controlButton.node.textContent = 'Update';

    this.node.append(
      controlName.node,
      controlColor.node,
      ControlWidgetUpdate.controlButton.node
    );
  }
}
