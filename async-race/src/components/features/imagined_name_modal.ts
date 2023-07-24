import { BaseComponent } from '../../core/base-component';

export class ImaginedName extends BaseComponent {
  public static cross: BaseComponent;

  constructor() {
    super({
      tagName: 'div',
      classList: ['imagined_name_modal'],
      textContent: 'you skipped imagining name then now lalala is the name',
    });

    ImaginedName.cross = new BaseComponent({
      tagName: 'div',
      classList: ['cross'],
    });

    this.node.append(ImaginedName.cross.node);

    const witchModalBody = document.body;

    witchModalBody.append(this.node);
  }
}
