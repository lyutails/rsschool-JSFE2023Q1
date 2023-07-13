import { BaseComponent } from '../core/base-component';

export class BroomsParking extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['brooms_parking'],
    });

    const parkingSign = new BaseComponent({
      tagName: 'div',
      classList: ['parking_sign'],
    });

    const broomsWrapper = new BaseComponent({
      tagName: 'div',
      classList: ['brooms_wrapper'],
    });

    this.node.append(parkingSign.node, broomsWrapper.node);
  }
}
