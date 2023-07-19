import { TrackButtons } from '../reused/track_buttons';
import { BaseComponent } from '../core/base-component';
import { Track } from '../reused/track';
import { Witch } from '../reused/witch';
import { Owl } from '../reused/owl';
import { owlsArray } from '../../data/owls';
import { WitchBroom } from '../../types/interfaces';
import { Observer } from '../../observer';
import { currentWitchesObserver, store } from '../../store';
import { ControlWidgetUpdate } from '../controls/control_widget_update';
import { quidditchURL } from '../../types/constants';

export const witchNameUpdateObserver = new Observer();

export class TrackWrapper extends BaseComponent {
  public store = store;
  public static broomWitchName: BaseComponent;
  constructor() {
    super({
      tagName: 'div',
      classList: ['track_wrapper'],
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

    let { currentWitches } = this.store;

    this.getAllWitches().then((serverWitches: WitchBroom[]) =>
      serverWitches.forEach((serverWitch, index) => {
        const witch = new Witch();

        const owl = new Owl();

        owl.node.style.backgroundImage = `url('${owl.randomizeOwl(
          owlsArray
        )}')`;

        TrackWrapper.broomWitchName = new BaseComponent({
          tagName: 'div',
          classList: ['track_broom_witch_name'],
        });

        const trackPath = new BaseComponent({
          tagName: 'div',
          classList: ['track_path'],
          children: [witch, owl],
        });

        const track = new Track();

        const trackButtons = new TrackButtons();

        const buttonsAndName = new BaseComponent({
          tagName: 'div',
          classList: ['track_buttons_and_name'],
          children: [trackButtons, TrackWrapper.broomWitchName],
        });

        witch.node.style.backgroundColor = serverWitch.color;

        TrackWrapper.broomWitchName.node.textContent = serverWitch.name;

        index = serverWitch.id;

        trackButtons.pickButton.node.setAttribute('id', `${index}`);

        trackButtons.pickButton.node.addEventListener('click', (e) => {
          if (!e.target) {
            throw new Error('no pick button found out there');
          }
          // ControlWidgetUpdate.controlName.node.value = serverWitch.name;
          ControlWidgetUpdate.controlColor.node.value = serverWitch.color;
          fetch(`${quidditchURL}/${index}`)
            .then((response) => response.json())
            .then(
              (witchName) =>
                (ControlWidgetUpdate.controlName.node.value = witchName.name)
            );

          ControlWidgetUpdate.controlButton.node.addEventListener(
            'click',
            () => {
              this.updateWitch(
                `'${ControlWidgetUpdate.controlName.node.value}'`,
                `'${ControlWidgetUpdate.controlColor.node.value}'`,
                index
              );
            }
          );
        });

        trackButtons.delButton.node.addEventListener('click', (e) => {
          if(!e.target) {
            throw new Error('no del button found out there')
          }
          this.deleteWitch(index);
          currentWitchesObserver.subscribe(() => (this.store.currentWitches - 1));
        })

        // const countWitches = async () => {
        //   const count = await this.totalWitchesCount();
        //   if (!count) {
        //     throw new Error('no witches encounted');
        //   }
        //   broomsCount.node.textContent = `Currently total brooms' count is ${count}`;
        //   currentWitches = +count;
        // };

        this.node.append(trackPath.node, track.node, buttonsAndName.node);
      })
    );
  }
}
