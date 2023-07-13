import { BaseComponent } from '../core/base-component';

export class RaceButtons extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['race_buttons'],
    });

    const raceButton = new BaseComponent({
        tagName: 'div',
        classList: ['race_buttons_button'],
        textContent: 'Race'
    })

    const resetButton = new BaseComponent({
        tagName: 'div',
        classList: ['race_buttons_button'],
        textContent: 'Reset'
    })

    const moreWitchesButton = new BaseComponent({
        tagName: 'div',
        classList: ['race_buttons_button'],
        textContent: 'More Witches'
    })

    this.node.append(raceButton.node, resetButton.node, moreWitchesButton.node);
  }
}
