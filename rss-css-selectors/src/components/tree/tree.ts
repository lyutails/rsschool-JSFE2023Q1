import { BaseComponent } from '@/core/base-component';

import { leavesArray } from '@/data';

export class Tree extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['tree']
    });

    const leafPic = new BaseComponent({
      tagName: 'span',
      classList: ['tree_leaf']
    });

    const treePic = new BaseComponent({
      tagName: 'div',
      classList: ['tree_pic']
    });

    const flowerMagenta = new BaseComponent({
      tagName: 'span',
      classList: ['tree_flower_magenta']
    });

    this.node.append(treePic.node);
  }
}
