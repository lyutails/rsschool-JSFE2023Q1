import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

export const modalWinCloseObserver = new Observer();

export class ModalWin extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['modal_win']
    });

    const modalCross = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_cross']
    });

    modalCross.node.addEventListener('click', () => {
      modalWinCloseObserver.notify('lalala');
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

    this.node.append(modalCross.node, modalText.node, seasonsTree.node);

    const modalBody = document.body;

    modalBody.append(this.node);
  }
}
