import { ControlWidgetCreate } from '../controls/control_widget_create';
import { TrackButtons } from '../reused/track_buttons';
import { BaseComponent } from '../../core/base-component';
import { Track } from '../reused/track';
import { Witch } from '../reused/witch';
import { Owl } from '../reused/owl';
import { owlsArray } from '../../data/owls';
import { WitchBroom } from '../../types/interfaces';
import { Observer } from '../../observer';
import { currentWitchesObserver, store } from '../../store';
import { ControlWidgetUpdate } from '../controls/control_widget_update';
import { RaceButtons } from './race_buttons';
// eslint-disable-next-line import/no-cycle
import { ImaginedName } from './imagined_name_modal';
import { Overlay } from './overlay';
import { broomsCount } from './brooms_count';
import {
  createWitch,
  deleteWitch,
  flyAllWitches,
  flyMode,
  getAllWitches,
  startEngine,
  stopWitchObserver,
  totalWitchesCount,
} from '../../core/api';
import { forPaginationUrl } from '../../types/constants';

export const updateWitchObserver = new Observer();
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
    this.node.textContent = '';
    let { currentWitches } = this.store;

    getAllWitches(forPaginationUrl).then((serverWitches: WitchBroom[]) =>
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

        trackButtons.pickButton.node.onclick = (e): void =>
          this.pickWitch(e, serverWitch);

        trackButtons.flyButton.node.onclick = (e): void =>
          this.flyWitch(e, witch, index);

        RaceButtons.raceButton.node.onclick = (): Promise<void> =>
          flyAllWitches(serverWitches, index, witch);

        this.countWitchesAfterDelete(trackButtons, index, currentWitches);

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

      TrackWrapper.broomWitchName.node.textContent = this.ifInputName(
        ControlWidgetCreate.controlName.node.value
      );

      const inputName = this.ifInputName(
        ControlWidgetCreate.controlName.node.value
      );

      TrackWrapper.broomWitchName.node.textContent = inputName;

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

      currentWitches += 1;

      // broomsCount.node.textContent = `Currently total brooms' count is ${currentWitches}`;
      // this.node.textContent = '';
      // store.currentWitches = currentWitches;

      const countCreatedWitches = async (): Promise<void> => {
        const count = await totalWitchesCount();
        if (!count) {
          throw new Error('no witches encounted');
        }
        broomsCount.node.textContent = `Currently total brooms' count is ${count}`;
      };
      countCreatedWitches();

      if (TrackWrapper.broomWitchName.node.textContent) {
        createWitch(
          TrackWrapper.broomWitchName.node.textContent,
          ControlWidgetCreate.controlColor.node.value
        );
        setTimeout(() => {
          ControlWidgetCreate.controlName.node.value = '';
        }, 100);
      } else {
        throw new Error('no name generated');
      }

      this.createNameModal(inputName);
    });

    RaceButtons.moreWitchesButton.node.onclick = (): void => this.plusWitches();
  }

  public pickWitch(e: Event, witch: WitchBroom): void {
    if (!e.target) {
      throw new Error('no pick button found out there');
    }
    store.indexForUpdate = witch.id;
    ControlWidgetUpdate.controlName.node.value = witch.name;
    ControlWidgetUpdate.controlColor.node.value = witch.color;
  }

  public flyWitch(e: Event, witchItem: Witch, index: number): void {
    if (!e.target) {
      throw new Error('no fly button found out there');
    }

    witchItem.node.style.animationName = 'witch_fly_anim';
    witchItem.node.style.animationIterationCount = '1';
    witchItem.node.style.animationFillMode = 'forwards';
    witchItem.node.style.animationTimingFunction = 'ease-in-out';

    startEngine(index);

    const getTime = async (): Promise<void> => {
      const speed = await startEngine(index).then(
        (response) => response.velocity
      );
      witchItem.node.style.animationDuration = `${
        (+window.innerWidth * 0.8) / +speed
      }s`;
    };
    getTime();
    flyMode(index);

    stopWitchObserver.subscribe(() => {
      witchItem.node.style.animationPlayState = 'paused';
    });
  }

  public plusWitches(): void {
    const witchesPerOneGeneration = 100;
    for (let i = 0; i < witchesPerOneGeneration; i++) {
      createWitch(this.getRandomName(), this.getRandomColor());
    }
    let { currentWitches } = store;
    currentWitches += 100;
    broomsCount.node.textContent = `Currently total brooms' count is ${currentWitches}`;
    this.node.textContent = '';
    store.currentWitches = currentWitches;
  }

  public countWitches(e: Event, index: number, currentWitches: number): void {
    if (!e.target) {
      throw new Error('no del button found out there');
    }
    deleteWitch(index);

    currentWitches -= 1;
    broomsCount.node.textContent = `Currently total brooms' count is ${currentWitches}`;

    this.node.textContent = '';
    store.currentWitches = currentWitches;
  }

  public countWitchesAfterDelete = async (
    trackButtons: TrackButtons,
    index: number,
    currentWitches: number
  ): Promise<void> => {
    const count = await totalWitchesCount();
    if (!count) {
      throw new Error('no witches encounted');
    }

    trackButtons.delButton.node.onclick = (e): void =>
      this.countWitches(e, index, currentWitches);
  };

  public createNameModal(name: string): void {
    const cross = new BaseComponent({
      tagName: 'div',
      classList: ['cross'],
    });

    if (ControlWidgetCreate.controlName.node.value === '') {
      const overlay = new Overlay();
      const nameModal = new ImaginedName();
      nameModal.node.textContent = `you skipped imagining name then now '${name}' is the name`;
      setTimeout(() => {
        overlay.destroy();
        nameModal.destroy();
      }, 4000);
      nameModal.node.append(cross.node);
      overlay.node.addEventListener('click', () => {
        overlay.destroy();
        nameModal.destroy();
        cross.destroy();
      });
      cross.node.addEventListener('click', () => {
        overlay.destroy();
        nameModal.destroy();
        cross.destroy();
      });
    }
  }
}
