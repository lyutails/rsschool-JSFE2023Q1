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

    const dropsArray = [1, 2, 3, 4, 5];

    for (let i = 0; i < dropsArray.length; i++) {
      const drop = new BaseComponent({
        tagName: 'span',
        classList: ['modal_win_drop']
      });

      seasonsTree.append(drop);
    }

    const snow = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_snow']
    });

    seasonsTree.append(snow);

    const sakuraOne = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_sakura_one']
    });

    const sakuraTwo = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_sakura_two']
    });

    const sakuraThree = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_sakura_three']
    });

    seasonsTree.append(sakuraOne, sakuraTwo, sakuraThree);

    const sakuraFour = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_sakura_four']
    });

    const sakuraFive = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_sakura_five']
    });

    const sakuraSix = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_sakura_six']
    });

    seasonsTree.append(sakuraFour, sakuraFive, sakuraSix);

    const greenApples = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_green_apples']
    });

    seasonsTree.append(greenApples);

    const redApple = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_red_apple']
    });

    seasonsTree.append(redApple);

    const leafOne = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_leaf_one']
    });

    const leafTwo = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_leaf_two']
    });

    const leafThree = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_leaf_three']
    });

    const leafFour = new BaseComponent({
      tagName: 'span',
      classList: ['modal_win_leaf_four']
    });

    seasonsTree.append(leafOne, leafTwo, leafThree, leafFour);

    this.node.append(modalCross.node, modalText.node, seasonsTree.node);

    const modalBody = document.body;

    modalBody.append(this.node);
  }
}
