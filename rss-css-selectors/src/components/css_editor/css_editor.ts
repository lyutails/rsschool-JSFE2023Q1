import { BaseComponent } from '@/core/base-component';

import { Button } from '@/UI/button';

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
      classList: ['css_editor_input']
    });

    selectorsInput.addPlaceholder('Type in a CSS selector');

    this.node.append(selectorsInput.node, enterButton.node, helpButton.node);
  }
}
