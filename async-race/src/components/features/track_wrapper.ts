import { ControlWidgetCreate } from './../controls/control_widget_create';
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
import { RaceButtons } from './race_buttons';
import { Quidditch } from '../pages/quidditch_page';

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

        trackButtons.flyButton.node.addEventListener('click', (e) => {
          if (!e.target) {
            throw new Error('no fly button found out there');
          }

          witch.node.style.animationName = 'witch_fly_anim';
          witch.node.style.animationIterationCount = '1';
          witch.node.style.animationFillMode = 'forwards';
          witch.node.style.animationTimingFunction = 'ease-in-out';

          this.startEngine(index);

          const getTime = async () => {
            const speed = await this.startEngine(index).then(
              (response) => response.velocity
            );
            witch.node.style.animationDuration = `${
              (+window.innerWidth * 0.8) / +speed
            }s`;
          };
          getTime();
          this.flyMode(index);

          const stopWitch = async () => {
            await this.stopEngine(index).then(
              () => (witch.node.style.animationPlayState = 'paused')
            );
          };
          stopWitch();
        });

        const countWitchesAfterDelete = async () => {
          const count = await this.totalWitchesCount();
          if (!count) {
            throw new Error('no witches encounted');
          }

          trackButtons.delButton.node.addEventListener('click', (e) => {
            if (!e.target) {
              throw new Error('no del button found out there');
            }
            this.deleteWitch(index);
            currentWitches - 1;
          });
        };

        countWitchesAfterDelete();

        this.node.append(trackPath.node, track.node, buttonsAndName.node);
      })
    );

    ControlWidgetCreate.controlButton.node.addEventListener('click', () => {
      const witch = new Witch();

      witch.node.style.backgroundColor =
        ControlWidgetCreate.controlColor.node.value;

      TrackWrapper.broomWitchName = new BaseComponent({
        tagName: 'div',
        classList: ['track_broom_witch_name'],
      });

      TrackWrapper.broomWitchName.node.textContent =
        ControlWidgetCreate.controlName.node.value;

      const owl = new Owl();
      owl.node.style.backgroundImage = `url('${owl.randomizeOwl(owlsArray)}')`;

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

      this.node.append(trackPath.node, track.node, buttonsAndName.node);

      currentWitches + 1;

      const countWitches = async () => {
        const count = await this.totalWitchesCount();
        if (!count) {
          throw new Error('no witches encounted');
        }
        Quidditch.broomsCount.node.textContent = `Currently total brooms' count is ${count}`;
      };

      countWitches();

      this.createWitch(
        ControlWidgetCreate.controlColor.node.value,
        ControlWidgetCreate.controlName.node.value
      );
    });

    RaceButtons.moreWitchesButton.node.addEventListener('click', () => {
      let witchesPerOneGeneration = 10;
      for (let i = 0; i < witchesPerOneGeneration; i++) {
        const witch = new Witch();

        witch.node.style.backgroundColor = this.getRandomColor();

        TrackWrapper.broomWitchName = new BaseComponent({
          tagName: 'div',
          classList: ['track_broom_witch_name'],
        });

        TrackWrapper.broomWitchName.node.textContent = this.getRandomName();

        const owl = new Owl();
        owl.node.style.backgroundImage = `url('${owl.randomizeOwl(
          owlsArray
        )}')`;

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

        this.node.append(trackPath.node, track.node, buttonsAndName.node);

        currentWitches + 1;

        this.createWitch(this.getRandomName(), this.getRandomName());

        const countWitches = async () => {
          const count = await this.totalWitchesCount();
          if (!count) {
            throw new Error('no witches encounted');
          }
          Quidditch.broomsCount.node.textContent = `Currently total brooms' count is ${count}`;
        };

        countWitches();
      }
    });
  }
}
