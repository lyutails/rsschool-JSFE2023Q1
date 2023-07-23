import { RouteName } from '../../types/enums';
import { HeaderButton } from '../UI/header_button';
import { BaseComponent } from '../../core/base-component';

export class Header extends BaseComponent {
  public static headerSnitch: BaseComponent<'a'>;

  constructor() {
    super({
      tagName: 'div',
      classList: ['header'],
    });

    const buttonParking = new HeaderButton();
    buttonParking.addTextContent('Parking Lot');

    buttonParking.addLink(`#${RouteName.BroomParking}`);

    const buttonQuidditch = new HeaderButton();
    buttonQuidditch.addTextContent('Quidditch');

    buttonQuidditch.addLink(`#${RouteName.Quidditch}`);

    const buttonWinners = new HeaderButton();
    buttonWinners.addTextContent('Winners');

    buttonWinners.addLink(`#${RouteName.Winners}`);

    const buttons = new BaseComponent({
      tagName: 'div',
      classList: ['header_buttons'],
      children: [buttonParking, buttonQuidditch, buttonWinners],
    });

    Header.headerSnitch = new BaseComponent<'a'>({
      tagName: 'a',
      classList: ['header_snitch'],
    });

    Header.headerSnitch.addLink(`#${RouteName.Quidditch}`);

    const headerWrapper = new BaseComponent({
      tagName: 'div',
      classList: ['header_wrapper'],
      children: [buttons, Header.headerSnitch],
    });

    this.node.append(headerWrapper.node);
  }
}
