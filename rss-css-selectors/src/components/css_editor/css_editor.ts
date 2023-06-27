import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

import { Button } from '@/UI/button';
import { levels } from '@/data/levels';

export const csseditorObserverDay = new Observer();
export const csseditorObserverNight = new Observer();
export const inputObserverDay = new Observer();
export const inputObserverNight = new Observer();
export const currentLevelObserver = new Observer();

export class CSSEditor extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['css_editor'],
      textContent: 'CSS Editor'
    });

    const helpButton = new Button();
    helpButton.addTextContent('Help');
    helpButton.addMoreClasses('help');

    const enterButton = new Button();
    enterButton.addTextContent('Enter');
    enterButton.addMoreClasses('enter');

    const selectorsInput = new BaseComponent({
      tagName: 'input',
      classList: ['css_editor_input'],
      textContent: ''
    });

    selectorsInput.addPlaceholder('Type in a CSS selector');

    csseditorObserverDay.subscribe(() => this.node.classList.add('recolour'));
    csseditorObserverNight.subscribe(() =>
      this.node.classList.remove('recolour')
    );

    inputObserverDay.subscribe(() =>
      selectorsInput.node.classList.add('recolour')
    );
    inputObserverNight.subscribe(() =>
      selectorsInput.node.classList.remove('recolour')
    );

    for (let i = 0; i < levels.length; i++) {
      selectorsInput.node.addEventListener('input', () => {
        if (selectorsInput.node.value === `${levels[i].selector}`) {
          enterButton.node.addEventListener('click', () => {
            currentLevelObserver.notify('lalala');
            selectorsInput.node.value = '';
          });
        }
      });
    }

    this.node.append(selectorsInput.node, enterButton.node, helpButton.node);
  }
  // public static registerEnterPress(e: KeyboardEvent): void {
  //   window.addEventListener('keydown', () => {
  //     if (e.key === 'Enter') {
  //       e.preventDefault();
  //       thisLevelObserver.notify('lalala');
  //     }
  //   });
  // }
}
