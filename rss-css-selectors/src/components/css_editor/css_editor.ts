import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

import { Button } from '@/UI/button';

export const csseditorObserverDay = new Observer();
export const csseditorObserverNight = new Observer();
export const inputObserverDay = new Observer();
export const inputObserverNight = new Observer();

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

    selectorsInput.node.addEventListener('input', () => {
      if (selectorsInput.node.textContent === 'branch') {
        selectorsInput.node.style.color = 'red';
      }
      if (selectorsInput.node.textContent === 'apple') {
        selectorsInput.node.style.color = 'blue';
      }
    });

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

    this.node.append(selectorsInput.node, enterButton.node, helpButton.node);
  }
}
