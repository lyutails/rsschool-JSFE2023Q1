// import { currentWitchesObserver } from '../../store';
import { BaseComponent } from '../core/base-component';
import { BroomsCount } from '../features/brooms_count';
import { ControlPanel } from '../features/control_panel';
import { RaceButtons } from '../features/race_buttons';
import { RacePagination } from '../features/race_pagination';
import { TrackWrapper } from '../features/track_wrapper';

export class Quidditch extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['quidditch'],
    });

    const controlPanel = new ControlPanel();

    const raceButtons = new RaceButtons();

    const broomsCount = new BroomsCount();

    const countWitches = async () => {
      const count = await this.totalWitchesCount();
      broomsCount.node.textContent = `Currently total brooms' count is ${count}`;
    }

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
