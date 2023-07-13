import { HeaderButton } from '../UI/header_button';
import { BaseComponent } from '../core/base-component';

export class Header extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['header'],
    });

    const buttonParking = new HeaderButton();
    buttonParking.addTextContent('Parking Lot');

    const buttonQuidditch = new HeaderButton();
    buttonQuidditch.addTextContent('Quidditch');

    const buttonWinners = new HeaderButton();
    buttonWinners.addTextContent('Winners');

    const buttons = new BaseComponent({
      tagName: 'div',
      classList: ['header_buttons'],
      children: [buttonParking, buttonQuidditch, buttonWinners],
    });

    const headerSnitch = new BaseComponent({
      tagName: 'div',
      classList: ['header_snitch'],
    });

    const headerWrapper = new BaseComponent({
      tagName: 'div',
      classList: ['header_wrapper'],
      children: [buttons, headerSnitch],
    });

    this.node.append(headerWrapper.node);
  }
}
