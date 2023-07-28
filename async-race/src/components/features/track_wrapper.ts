import { ControlWidgetCreate } from '../controls/control_widget_create';
import {
  TrackButtons,
  disableTrackButtonsObserver,
  enableTrackButtonsObserver,
  flyBackButtonsObserver,
} from '../reused/track_buttons';
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
  createWinner,
  createWitch,
  deleteWinner,
  deleteWitch,
  flyMode,
  getAllWitches,
  startEngine,
  stopEngine,
  totalWitchesCount,
} from '../../core/api';
import { forPaginationUrl } from '../../types/constants';
import { RacePagination } from './race_pagination';
import { WinnerModal } from './winner_modal';
import { winnersCountObserver } from '../pages/winners_page';

export const updateWitchObserver = new Observer();
export const witchNameUpdateObserver = new Observer();
export const disableButtonsObserver = new Observer();
export const enableButtonsObserver = new Observer();
export const enablePaginationObserver = new Observer();

export class TrackWrapper extends BaseComponent {
  public store = store;
  public static broomWitchName: BaseComponent;
  public static witchesArrayHTML: Witch[] = [];
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

    RaceButtons.raceButton.node.addEventListener(
      'click',
      this.flyActuallyAllWitches
    );
  }

  public render(): void {
    this.node.textContent = '';
    const { currentWitches } = this.store;

    TrackWrapper.witchesArrayHTML = [];

    getAllWitches(forPaginationUrl).then((serverWitches: WitchBroom[]) =>
      serverWitches.forEach((serverWitch) => {
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

        witch.node.id = String(serverWitch.id);

        trackButtons.pickButton.node.id = String(serverWitch.id);

        this.node.append(trackPath.node, track.node, buttonsAndName.node);

        trackButtons.pickButton.node.onclick = (e): void =>
          this.pickWitch(e, serverWitch);

        trackButtons.flyButton.node.onclick = (e): void => {
          this.flyWitch(e, witch, serverWitch.id);
          disableButtonsObserver.notify(this.disableButtons());
          disableTrackButtonsObserver.notify('lalala');
          RaceButtons.raceButton.disableButton();

          window.addEventListener('animationend', () => {
            // if (store.currentWitches > 7) {
            TrackWrapper.enablePagination();
            // }
            enableButtonsObserver.notify(this.enableButtons());
            enableTrackButtonsObserver.notify('lalala');
            RaceButtons.raceButton.enableButton();
          });
        };

        trackButtons.backButton.node.onclick = (e): void => {
          this.flyBack(e, witch);
          flyBackButtonsObserver.notify('lalala');
          // if (store.currentWitches > 7) {
          //   TrackWrapper.enablePagination();
          // }
          enablePaginationObserver.notify('lalala');
        };

        RaceButtons.raceButton.node.addEventListener('click', () => {
          disableButtonsObserver.notify(this.disableButtons());
          disableTrackButtonsObserver.notify('lalala');
          RaceButtons.raceButton.disableButton();

          window.addEventListener('animationend', () => {
            this.enableButtons();
            enableTrackButtonsObserver.notify('lalala');
          });
        });

        RaceButtons.resetButton.node.addEventListener('click', () => {
          witch.node.style.animation = 'unset';
          flyBackButtonsObserver.notify('lalala');
        });

        this.countWitchesAfterDelete(
          trackButtons,
          serverWitch.id,
          currentWitches
        );

        TrackWrapper.witchesArrayHTML.push(witch);
      })
    );

    ControlWidgetCreate.controlButton.node.onclick = (): void => {
      this.createWitchByClickOnCreate();
    };

    RaceButtons.moreWitchesButton.node.onclick = (): void => this.plusWitches();

    if (currentWitches <= 7) {
      RacePagination.paginationButtonBeginning.disableButton();
      RacePagination.paginationButtonLeft.disableButton();
      RacePagination.paginationButtonRight.disableButton();
      RacePagination.paginationButtonEnd.disableButton();
    }
    if (currentWitches > 7) {
      RacePagination.paginationButtonBeginning.enableButton();
      RacePagination.paginationButtonLeft.enableButton();
      RacePagination.paginationButtonRight.enableButton();
      RacePagination.paginationButtonEnd.enableButton();
    }

    const witchesPerPage = 7;
    const catchWitches = store.currentWitches;
    const totalPagesCount = Math.ceil(catchWitches / witchesPerPage);

    if (totalPagesCount === 1) {
      RacePagination.paginationButtonBeginning.disableButton();
      RacePagination.paginationButtonLeft.disableButton();
      RacePagination.paginationButtonRight.disableButton();
      RacePagination.paginationButtonEnd.disableButton();
    }
  }

  public static async getTime(id: number, witch: Witch): Promise<number> {
    const speed = await startEngine(id).then((response) => response.velocity);
    const duration = (+window.innerWidth * 0.8) / +speed;
    witch.node.style.animationDuration = `${
      (+window.innerWidth * 0.8) / +speed
    }s`;
    return duration;
  }

  public async flyActuallyAllWitches(): Promise<void> {
    const promiseWinner = await Promise.all(
      TrackWrapper.witchesArrayHTML.map(async (witch) => {
        try {
          const duration = TrackWrapper.getTime(+witch.node.id, witch);
          witch.node.style.animationName = 'witch_fly_anim';
          witch.node.style.animationIterationCount = '1';
          witch.node.style.animationFillMode = 'forwards';
          witch.node.style.animationTimingFunction = 'ease-in-out';
          await flyMode(+witch.node.id);
          const promisedWinner = {
            id: +witch.node.id,
            wins: 1,
            time: parseFloat((await duration).toFixed(2)),
          };
          return promisedWinner;
        } catch (error) {
          witch.node.style.animationPlayState = 'paused';
        } finally {
          stopEngine(+witch.node.id);
          RacePagination.paginationButtonBeginning.enableButton();
          RacePagination.paginationButtonLeft.enableButton();
          RacePagination.paginationButtonRight.enableButton();
          RacePagination.paginationButtonEnd.enableButton();
          RaceButtons.resetButton.enableButton();
          RaceButtons.moreWitchesButton.enableButton();
          ControlWidgetCreate.controlButton.enableButton();
          ControlWidgetUpdate.controlButton.enableButton();
          enableTrackButtonsObserver.notify('lalala');
          RaceButtons.raceButton.enableButton();
        }
      })
    );
    if (!promiseWinner) {
      throw new Error('no promised winner found');
    }
    const filteredWinners = promiseWinner.filter(
      (result) => result !== undefined
    );
    console.log(filteredWinners);
    const winnersTime = [];
    for (let i = 0; i <= filteredWinners.length; i++) {
      const time = filteredWinners[i];
      if (time !== undefined) {
        winnersTime.push(time.time);
      }
    }
    if (winnersTime?.length > 0) {
      const minTime = Math.min(...winnersTime);
      const raceBody = document.body;
      const winnerModal = new WinnerModal();
      const overlay = new Overlay();
      raceBody.append(overlay.node, winnerModal.node);
      const winnerObject = filteredWinners.filter((obj) => {
        return obj?.time === minTime;
      });
      const winnerID = winnerObject[0]?.id;
      const promisedAllWitches = await getAllWitches(forPaginationUrl);
      const serverWinnerObject = promisedAllWitches.filter((obj) => {
        return obj?.id === winnerID;
      });
      const winnerName = serverWinnerObject[0]?.name;
      WinnerModal.winnerModalText.node.textContent = `aaaannnd... winner is ${winnerName} finished in ${minTime} \\o/ 🧙‍♂️`;
      const winnerWins = winnerObject[0]?.wins;
      if (winnerID !== undefined && winnerWins !== undefined) {
        createWinner(winnerID, winnerWins, minTime);
        // winnersCountObserver.notify('lalala');
      }

      WinnerModal.cross.node.addEventListener('click', () => {
        winnerModal.destroy();
        WinnerModal.cross.destroy();
        overlay.destroy();
      });

      overlay.node.addEventListener('click', () => {
        winnerModal.destroy();
        WinnerModal.cross.destroy();
        overlay.destroy();
      });
    }
  }

  public pickWitch(e: Event, witch: WitchBroom): void {
    if (!e.target) {
      throw new Error('no pick button found out there');
    }
    store.indexForUpdate = witch.id;
    ControlWidgetUpdate.controlName.node.value = witch.name;
    ControlWidgetUpdate.controlColor.node.value = witch.color;
  }

  public flyBack(e: Event, witchItem: Witch): void {
    if (!e.target) {
      throw new Error('no back button found out there');
    }
    witchItem.node.style.animation = 'unset';
  }

  public flyWitch(e: Event, witchItem: Witch, index: number): void {
    if (!e.target) {
      throw new Error('no fly button found out there');
    }

    witchItem.node.style.animationName = 'witch_fly_anim';
    witchItem.node.style.animationIterationCount = '1';
    witchItem.node.style.animationFillMode = 'forwards';
    witchItem.node.style.animationTimingFunction = 'ease-in-out';

    const getTime = async (): Promise<void> => {
      try {
        const speed = await startEngine(index).then(
          (response) => response.velocity
        );
        witchItem.node.style.animationDuration = `${
          (+window.innerWidth * 0.8) / +speed
        }s`;
      } catch (error) {
        throw new Error('smth wrong went with getting time');
      }
    };
    getTime();
    flyMode(index);
  }

  public plusWitches(): void {
    const witchesPerOneGeneration = 100;
    for (let i = 0; i < witchesPerOneGeneration; i++) {
      createWitch(this.getRandomName(), this.getRandomColor());
    }

    const countCreatedWitches = async (): Promise<void> => {
      try {
        const count = await totalWitchesCount();
        if (!count) {
          throw new Error('no witches encounted');
        }
        broomsCount.node.textContent = `Currently total brooms' count is ${count}`;
      } catch (error) {
        throw new Error('smth wrong went with total count');
      }
    };
    countCreatedWitches();

    let { currentWitches } = store;
    currentWitches += 100;
    store.currentWitches = currentWitches;
  }

  public countWitches(e: Event, index: number, currentWitches: number): void {
    if (!e.target) {
      throw new Error('no del button found out there');
    }
    deleteWitch(index);
    deleteWinner(index);

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
    try {
      const count = await totalWitchesCount();
      if (!count) {
        throw new Error('no witches encounted');
      }
      trackButtons.delButton.node.onclick = (e): void =>
        this.countWitches(e, index, currentWitches);
    } catch (error) {
      throw new Error('smth went wrotn with count after delete');
    }
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

  public createWitchByClickOnCreate(): void {
    const inputName = this.ifInputName(
      ControlWidgetCreate.controlName.node.value
    );

    if (ControlWidgetCreate.controlName.node.value === '') {
      this.createNameModal(inputName);
    }

    createWitch(inputName, ControlWidgetCreate.controlColor.node.value);

    const countCreatedWitches = async (): Promise<void> => {
      const count = await totalWitchesCount();
      if (!count) {
        throw new Error('no witches encounted');
      }
      broomsCount.node.textContent = `Currently total brooms' count is ${count}`;
    };
    countCreatedWitches();

    let { currentWitches } = store;
    currentWitches += 1;
    store.currentWitches = currentWitches;

    setTimeout(() => {
      ControlWidgetCreate.controlName.node.value = '';
    }, 100);
  }

  public static enablePagination(): void {
    RacePagination.paginationButtonBeginning.enableButton();
    RacePagination.paginationButtonLeft.enableButton();
    RacePagination.paginationButtonRight.enableButton();
    RacePagination.paginationButtonEnd.enableButton();
  }

  public enableButtons(): void {
    RaceButtons.resetButton.enableButton();
    RaceButtons.moreWitchesButton.enableButton();
    ControlWidgetCreate.controlButton.enableButton();
    ControlWidgetUpdate.controlButton.enableButton();
    RaceButtons.raceButton.enableButton();
  }

  public disableButtons(): void {
    disableButtonsObserver.subscribe(() => {
      this.justDisableButtons();
    });
  }

  public justDisableButtons(): void {
    RacePagination.paginationButtonBeginning.disableButton();
    RacePagination.paginationButtonLeft.disableButton();
    RacePagination.paginationButtonRight.disableButton();
    RacePagination.paginationButtonEnd.disableButton();
    RaceButtons.resetButton.disableButton();
    RaceButtons.moreWitchesButton.disableButton();
    ControlWidgetCreate.controlButton.disableButton();
    ControlWidgetUpdate.controlButton.disableButton();
  }
}
