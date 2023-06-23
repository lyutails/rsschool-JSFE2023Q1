import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

import { leavesArray } from '@/data';
import { leavesDayArray } from '@/data/leaves_day';

export const leavesObserverDay = new Observer();
export const leavesObserverNight = new Observer();

export class Leaf extends BaseComponent<'div'> {
  // public leaf: BaseComponent;
  constructor() {
    super({
      tagName: 'div',
      classList: ['tree_leaves']
    });

    for (let i = 0; i < leavesArray.length; i++) {
      const leaf = new BaseComponent({
        tagName: 'span',
        classList: ['tree_leaf']
      });
      leaf.node.style.backgroundImage = `url(${leavesArray[i]})`;
      leavesObserverNight.subscribe(() => {
        leaf.node.style.backgroundImage = `url(${leavesArray[i]})`;
      });
      leavesObserverDay.subscribe(() => {
        leaf.node.style.backgroundImage = `url(${leavesDayArray[i]})`;
      });
      this.node.append(leaf.node);
    }
  }
}
