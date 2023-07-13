import { BaseComponent } from '../core/base-component';

export class Winners extends BaseComponent {
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
      children: [number, pic, witchBroomName, winsAmount, bestTime]
    });

    this.node.append(winnersLine.node);
  }
}
