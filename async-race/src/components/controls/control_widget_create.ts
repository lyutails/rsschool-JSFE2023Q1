import { ControlButton } from '../UI/controls_button';
import { BaseComponent } from '../core/base-component';

export class ControlWidgetCreate extends BaseComponent {
  public static controlButton: ControlButton;
  public static controlName: BaseComponent<'input'>;
  public static controlColor: BaseComponent<'input'>;
  constructor() {
    super({
      tagName: 'div',
      classList: ['control_widget'],
    });

    ControlWidgetCreate.controlName = new BaseComponent({
      tagName: 'input',
      classList: ['control_widget_name'],
    });

    ControlWidgetCreate.controlName.setPlaceholder('Imagine Name');

    ControlWidgetCreate.controlName.node.setAttribute('type', 'text');

    ControlWidgetCreate.controlColor = new BaseComponent({
      tagName: 'input',
      classList: ['control_widget_color'],
    });

    ControlWidgetCreate.controlColor.node.setAttribute('type', 'color');

    ControlWidgetCreate.controlColor.node.value = '#24ffc5';

    ControlWidgetCreate.controlButton = new ControlButton();

    ControlWidgetCreate.controlButton.node.textContent = 'Create';

    this.node.append(
      ControlWidgetCreate.controlName.node,
      ControlWidgetCreate.controlColor.node,
      ControlWidgetCreate.controlButton.node
    );
  }
}
