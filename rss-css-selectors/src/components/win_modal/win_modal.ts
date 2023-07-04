import { BaseComponent } from '@/core/base-component';

export class ModalWin extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['modal_win']
    });

    const modalText = new BaseComponent({
      tagName: 'div',
      classList: ['modal_win_text'],
      textContent: "Hey there o/ you've mastered all the selectors \\o/ <3 ^^"
    });

    const seasonsTree = new BaseComponent({
      tagName: 'div',
      classList: ['modal_win_tree']
    });

    this.node.append(modalText.node, seasonsTree.node);

    const modalBody = document.body;

    modalBody.append(this.node);
  }
}
