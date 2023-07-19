import { ControlButton } from '../UI/controls_button';
import { BaseComponent } from '../core/base-component';

export class ControlWidgetUpdate extends BaseComponent {
  public static controlButton: ControlButton;
  public static controlName: BaseComponent<'input'>;
  public static controlColor: BaseComponent<'input'>;
  constructor() {
    super({
      tagName: 'div',
      classList: ['control_widget'],
    });

    ControlWidgetUpdate.controlName = new BaseComponent({
      tagName: 'input',
      classList: ['control_widget_name'],
    });

    ControlWidgetUpdate.controlName.setPlaceholder('Customize Name');

    ControlWidgetUpdate.controlName.node.setAttribute('type', 'text');

    ControlWidgetUpdate.controlColor = new BaseComponent({
      tagName: 'input',
      classList: ['control_widget_color'],
    });

    ControlWidgetUpdate.controlColor.node.setAttribute('type', 'color');

    ControlWidgetUpdate.controlColor.node.value = '#24ffc5';

    ControlWidgetUpdate.controlButton = new ControlButton();

    ControlWidgetUpdate.controlButton.node.textContent = 'Update';

    this.node.append(
      ControlWidgetUpdate.controlName.node,
      ControlWidgetUpdate.controlColor.node,
      ControlWidgetUpdate.controlButton.node
    );
  }
}
