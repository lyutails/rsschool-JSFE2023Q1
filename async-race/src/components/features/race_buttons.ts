import { BaseComponent } from '../core/base-component';

export class RaceButtons extends BaseComponent {
  public static raceButton: BaseComponent;
  public static resetButton: BaseComponent;
  public static moreWitchesButton: BaseComponent;
  constructor() {
    super({
      tagName: 'div',
      classList: ['race_buttons'],
    });

    RaceButtons.raceButton = new BaseComponent({
      tagName: 'div',
      classList: ['race_buttons_button'],
      textContent: 'Race',
    });

    RaceButtons.resetButton = new BaseComponent({
      tagName: 'div',
      classList: ['race_buttons_button'],
      textContent: 'Reset',
    });

    RaceButtons.moreWitchesButton = new BaseComponent({
      tagName: 'div',
      classList: ['race_buttons_button'],
      textContent: 'More Witches',
    });

    this.node.append(
      RaceButtons.raceButton.node,
      RaceButtons.resetButton.node,
      RaceButtons.moreWitchesButton.node
    );
  }
}
