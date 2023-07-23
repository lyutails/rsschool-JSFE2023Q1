import { BaseComponent } from '../../core/base-component';
// eslint-disable-next-line import/no-cycle
import { modalNameObserver } from './track_wrapper';

export class ImaginedName extends BaseComponent {
  public static cross: BaseComponent;

  constructor() {
    super({
      tagName: 'div',
      classList: ['imagined_name_modal'],
    });

    this.node.textContent = `you skipped imagining name then now '${modalNameObserver.notify(
      'lalala'
    )}' is the name`;

    ImaginedName.cross = new BaseComponent({
      tagName: 'div',
      classList: ['cross'],
    });

    // this.node.append(ImaginedName.cross);

    const witchModalBody = document.body;

    witchModalBody.append(this.node);
  }
}
