import { BaseComponent } from '@/core/base-component';

export class ViewerEditor extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['viewer_editor']
    });
  }
}
