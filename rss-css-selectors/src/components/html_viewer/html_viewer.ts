import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

import { levels } from '@/data/levels';
import { LevelsDescription } from '@/types';

export const htmlviewerObserverDay = new Observer();
export const htmlviewerObserverNight = new Observer();

export class HTMLViewer extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['html_viewer'],
      textContent: 'HTML Viewer'
    });

    htmlviewerObserverDay.subscribe(() => this.node.classList.add('recolour'));
    htmlviewerObserverNight.subscribe(() =>
      this.node.classList.remove('recolour')
    );

    const markupNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    const htmlNumbers = new BaseComponent({
      tagName: 'div',
      classList: ['html_viewer_numbers']
    });

    for (let i = 0; i < markupNumbers.length; i++) {
      const markupNumber = new BaseComponent({
        tagName: 'span',
        classList: ['html_viewer_number'],
        textContent: `${markupNumbers[i]}`
      });
      htmlNumbers.append(markupNumber);
    }

    const levelMarkup = levels[0].boardMarkup;

    const htmlText = new BaseComponent({
      tagName: 'div',
      classList: ['html_viewer_text'],
      textContent: levelMarkup
    });

    const htmlMarkup = new BaseComponent({
      tagName: 'div',
      classList: ['html_viewer_markup'],
      textContent: '',
      children: [htmlNumbers, htmlText]
    });

    this.node.append(htmlMarkup.node);
  }
}
