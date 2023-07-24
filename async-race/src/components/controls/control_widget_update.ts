import { ControlButton } from '../UI/controls_button';
import { updateWitch } from '../../core/api';
import { BaseComponent } from '../../core/base-component';
import { Observer } from '../../observer';
import { store } from '../../store';

export const updateWitchObserver = new Observer();

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

    ControlWidgetUpdate.controlColor.node.value = '#55c6a8';

    ControlWidgetUpdate.controlButton = new ControlButton();

    ControlWidgetUpdate.controlButton.node.textContent = 'Update';

    ControlWidgetUpdate.controlButton.node.onclick = (): void => {
      ControlWidgetUpdate.updateWitchHandler();
    };

    this.node.append(
      ControlWidgetUpdate.controlName.node,
      ControlWidgetUpdate.controlColor.node,
      ControlWidgetUpdate.controlButton.node
    );
  }

  public static updateWitchHandler(): void {
    updateWitch(
      `${ControlWidgetUpdate.controlName.node.value}`,
      `${ControlWidgetUpdate.controlColor.node.value}`,
      store.indexForUpdate
    );
    store.currentUpdate += 1;
  }
}
