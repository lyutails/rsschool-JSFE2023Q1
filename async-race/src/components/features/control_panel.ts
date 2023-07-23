import { ControlWidgetCreate } from '../controls/control_widget_create';
import { ControlWidgetUpdate } from '../controls/control_widget_update';
import { BaseComponent } from '../../core/base-component';

export class ControlPanel extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['control_panel'],
    });

    const controlWidgetCreate = new ControlWidgetCreate();

    const controlWidgetUpdate = new ControlWidgetUpdate();

    this.node.append(controlWidgetCreate.node, controlWidgetUpdate.node);
  }
}
