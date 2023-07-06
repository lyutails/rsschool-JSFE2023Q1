import { BaseComponent } from '@/core/base-component';

import { Branch } from '../branch';
import { BranchImitation } from '../branch_imitation';
import { treeObserverHighlight, treeObserverUnhighlight } from '../html_viewer';
import { Leaf } from '../leaf';
import { Observer } from '../observer';

import { levels } from '@/data/levels';
import { currentLevelObserver, store } from '@/store';

export const treeObserverDay = new Observer();
export const treeObserverNight = new Observer();
export const treePicObserverDay = new Observer();
export const treePicObserverNight = new Observer();

export class Tree extends BaseComponent<'div'> {
  public store = store;
  public toDo: BaseComponent;
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

    const leafPic = new Leaf();

    const branches = new Branch();

    const branchesImitation = new BranchImitation();

    const treePic = new BaseComponent({
      tagName: 'div',
      classList: ['tree_pic'],
      children: [branchesImitation, branches]
    });

    treeObserverHighlight.subscribe(() => {
      treePic.node.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    treeObserverUnhighlight.subscribe(() => {
      treePic.node.style.filter = 'none';
    });

    this.toDo = new BaseComponent({
      tagName: 'div',
      classList: ['tree_todo']
    });

    // this.toDo.node.textContent = 'What to pick on this level';

    const { currentLevel } = this.store;
    const { doThis } = levels[currentLevel];
    this.toDo.node.textContent = `${doThis}`;

    currentLevelObserver.subscribe(() => this.checkCurrentLevel());

    treeObserverDay.subscribe(() => this.node.classList.add('recolour'));
    treeObserverNight.subscribe(() => this.node.classList.remove('recolour'));
    treePicObserverDay.subscribe(() => treePic.node.classList.add('recolour'));
    treePicObserverNight.subscribe(() =>
      treePic.node.classList.remove('recolour')
    );

    this.node.append(leafPic.node, treePic.node, this.toDo.node, qeteq);
  }

  public checkCurrentLevel(): void {
    const { currentLevel } = this.store;
    const { doThis } = levels[currentLevel];
    this.toDo.node.textContent = `${doThis}`;
  }
}
