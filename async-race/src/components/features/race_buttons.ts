import { BaseComponent } from '../../core/base-component';

export class RaceButtons extends BaseComponent {
  public static raceButton: BaseComponent<'button'>;
  public static resetButton: BaseComponent<'button'>;
  public static moreWitchesButton: BaseComponent<'button'>;
  constructor() {
    super({
      tagName: 'div',
      classList: ['race_buttons'],
    });

    RaceButtons.raceButton = new BaseComponent({
      tagName: 'button',
      classList: ['race_buttons_button'],
      textContent: 'Race',
    });

    RaceButtons.resetButton = new BaseComponent({
      tagName: 'button',
      classList: ['race_buttons_button'],
      textContent: 'Reset',
    });

    RaceButtons.moreWitchesButton = new BaseComponent({
      tagName: 'button',
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
