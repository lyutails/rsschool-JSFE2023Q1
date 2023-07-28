import { totalWinnersCount } from '../../core/api';
import { BaseComponent } from '../../core/base-component';

export class Winners extends BaseComponent {
  public winnersTable: BaseComponent;
  public totalNumberOfWinners: BaseComponent;

  constructor() {
    super({
      tagName: 'div',
      classList: ['winners'],
    });

    const number = new BaseComponent({
      tagName: 'div',
      classList: ['winners_number'],
      textContent: '№',
    });

    const pic = new BaseComponent({
      tagName: 'div',
      classList: ['winners_pic'],
      textContent: 'Pic',
    });

    const witchBroomName = new BaseComponent({
      tagName: 'div',
      classList: ['winners_name'],
      textContent: 'Name',
    });

    const winsAmount = new BaseComponent({
      tagName: 'div',
      classList: ['winners_wins'],
      textContent: 'Wins',
    });

    const bestTime = new BaseComponent({
      tagName: 'div',
      classList: ['winners_time'],
      textContent: 'Best Time',
    });

    const winnersLine = new BaseComponent({
      tagName: 'div',
      classList: ['winners_line'],
      children: [number, pic, witchBroomName, winsAmount, bestTime],
    });

    this.winnersTable = new BaseComponent({
      tagName: 'div',
      classList: ['winners_table'],
      children: [winnersLine],
    });

    this.totalNumberOfWinners = new BaseComponent({
      tagName: 'div',
      classList: ['winners_total_number']
    });

    const countWinners = async (): Promise<void> => {
      try {
        const count = await totalWinnersCount();
        if (!count) {
          throw new Error('no witches encounted');
        }
        this.totalNumberOfWinners.node.textContent = `Total Number of Winners is ${count}`;
      }
      catch (error) {
        throw new Error('smth actually wrong with winners count');
      }
    };
    countWinners();

    this.node.append(this.totalNumberOfWinners.node, this.winnersTable.node);
  }
}
