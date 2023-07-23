// import { currentWitchesObserver } from '../../store';
import { store } from '../../store';
import { BaseComponent } from '../../core/base-component';
import { broomsCount } from '../features/brooms_count';
import { ControlPanel } from '../features/control_panel';
import { RaceButtons } from '../features/race_buttons';
import { RacePagination } from '../features/race_pagination';
// eslint-disable-next-line import/no-cycle
import { TrackWrapper } from '../features/track_wrapper';
import { totalWitchesCount } from '../../core/api';

export class Quidditch extends BaseComponent {
  public store = store;
  constructor() {
    super({
      tagName: 'div',
      classList: ['quidditch'],
    });

    // let { currentWitches } = this.store;

    const controlPanel = new ControlPanel();

    const raceButtons = new RaceButtons();

    const countWitches = async (): Promise<void> => {
      const count = await totalWitchesCount();
      if (!count) {
        throw new Error('no witches encounted');
      }
      broomsCount.node.textContent = `Currently total brooms' count is ${count}`;
    };

    countWitches();

    const tracksWrapper = new TrackWrapper();

    const racePagination = new RacePagination();

    const wandsWarning = new BaseComponent({
      tagName: 'div',
      classList: ['quidditch_warning'],
      textContent:
        'Using magic wands during brooms racing is strictly probihited.',
    });

    const quidditchWrapper = new BaseComponent({
      tagName: 'div',
      classList: ['quidditch_wrapper'],
      children: [
        controlPanel,
        raceButtons,
        broomsCount,
        tracksWrapper,
        racePagination,
        wandsWarning,
      ],
    });

    this.node.append(quidditchWrapper.node);
  }
}
