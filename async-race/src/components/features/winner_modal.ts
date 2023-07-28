import { BaseComponent } from '../../core/base-component';

export class WinnerModal extends BaseComponent {
  public static winnerModalText: BaseComponent;
  public static cross: BaseComponent;

  constructor() {
    super({
      tagName: 'div',
      classList: ['winner_modal'],
    });

    WinnerModal.winnerModalText = new BaseComponent({
      tagName: 'div',
      classList: ['winner_modal_text'],
    });

    WinnerModal.cross = new BaseComponent({
      tagName: 'div',
      classList: ['winner_cross'],
    });

    this.node.append(WinnerModal.winnerModalText.node, WinnerModal.cross.node);
  }
}
