import { currentWitchesObserver, store } from '../../store';
import { WitchBroom } from '../../types/interfaces';
import { BaseComponent } from '../../core/base-component';
import { Witch } from '../reused/witch';
import { TrackWrapper } from './track_wrapper';

export class ParkingWitches extends BaseComponent {
  public store = store;
  public static broomWitchName: BaseComponent;
  constructor() {
    super({
      tagName: 'div',
      classList: ['parking_witches'],
    });

    currentWitchesObserver.subscribe(() => {
      setTimeout(() => {
        this.render();
      }, 100);
    });

    setTimeout(() => {
      this.render();
    }, 100);
  }

  public render(): void {
    this.getAllWitches().then((serverWitches: WitchBroom[]) =>
      serverWitches.forEach((serverWitch, index) => {
        const witch = new Witch();

        TrackWrapper.broomWitchName = new BaseComponent({
          tagName: 'div',
          classList: ['witch_and_name'],
        });

        const witchPath = new BaseComponent({
          tagName: 'div',
          classList: ['witch_path'],
          children: [witch, TrackWrapper.broomWitchName],
        });

        witch.node.style.backgroundColor = serverWitch.color;

        TrackWrapper.broomWitchName.node.textContent = serverWitch.name;

        index = serverWitch.id;

        this.node.append(witchPath.node);
      })
    );
  }
}
