import { BaseComponent } from '@/core/base-component';

export class HTMLViewer extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['html_viewer'],
      textContent: 'HTML Viewer'
    });
  }
}
