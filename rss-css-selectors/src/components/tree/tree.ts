import { BaseComponent } from '@/core/base-component';

import { Branch } from '../branch';
import { treeObserverHighlight, treeObserverUnhighlight } from '../html_viewer';
import { Leaf } from '../leaf';
import { Observer } from '../observer';
import { QeteqTag } from '../qeteq_custom_tag';

export const treeObserverDay = new Observer();
export const treeObserverNight = new Observer();
export const treePicObserverDay = new Observer();
export const treePicObserverNight = new Observer();

export class Tree extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['tree']
    });

    const tooltipQeteq = new BaseComponent({
      tagName: 'div',
      classList: ['tooltip_qeteq'],
      textContent: '<qeteq>'
    });

    const qeteq = document.createElement('qeteq');
    qeteq.classList.add('qeteq');

    Tree.appendRemoveTooltip(qeteq, tooltipQeteq);

    const qeteq1 = new QeteqTag();

    const leafPic = new Leaf();

    const branches = new Branch();

    const treePic = new BaseComponent({
      tagName: 'div',
      classList: ['tree_pic'],
      children: [branches]
    });

    treeObserverHighlight.subscribe(() => {
      treePic.node.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    treeObserverUnhighlight.subscribe(() => {
      treePic.node.style.filter = 'none';
    });

    const toDo = new BaseComponent({
      tagName: 'div',
      classList: ['tree_todo'],
      textContent: 'What to pick on this level'
    });

    treeObserverDay.subscribe(() => this.node.classList.add('recolour'));
    treeObserverNight.subscribe(() => this.node.classList.remove('recolour'));
    treePicObserverDay.subscribe(() => treePic.node.classList.add('recolour'));
    treePicObserverNight.subscribe(() =>
      treePic.node.classList.remove('recolour')
    );

    this.node.append(leafPic.node, treePic.node, toDo.node, qeteq, qeteq1);
  }
}
