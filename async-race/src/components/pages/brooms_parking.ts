import { BaseComponent } from '../core/base-component';
import { ParkingWitches } from '../features/parking_witches';

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

    const parkingCat = new BaseComponent({
      tagName: 'div',
      classList: ['parking_cat'],
    });

    const parkingWitches = new ParkingWitches();

    const broomsWrapper = new BaseComponent({
      tagName: 'div',
      classList: ['brooms_wrapper'],
      children: [parkingSign, parkingWitches, parkingCat],
    });

    this.node.append(broomsWrapper.node);
  }
}
