import { BaseComponent } from '@/core/base-component';

import {
  branchFourObserverHighlight,
  branchFourObserverUnhighlight,
  branchOneObserverHighlight,
  branchOneObserverUnhighlight,
  branchThreeObserverHighlight,
  branchThreeObserverUnhighlight,
  branchTwoObserverHighlight,
  branchTwoObserverUnhighlight
} from '../html_viewer';
import { Observer } from '../observer';

import { levelsMarkup } from '@/data/levels_markup';

export const branchOneObserverDay = new Observer();
export const branchOneObserverNight = new Observer();
export const branchTwoObserverDay = new Observer();
export const branchTwoObserverNight = new Observer();
export const branchThreeObserverDay = new Observer();
export const branchThreeObserverNight = new Observer();
export const branchFourObserverDay = new Observer();
export const branchFourObserverNight = new Observer();

export class Branch extends BaseComponent<'div'> {
  constructor() {
    super({
      tagName: 'div',
      classList: ['branches']
    });

    const apple = levelsMarkup[0].config[0][0].tagName;
    const appleElement = document.createElement(apple);
    appleElement.style.transform = 'translate(5vw, 6vh)';

    const branchOne = document.createElement('branch');
    branchOne.classList.add('branch');
    branchOne.append(appleElement);

    branchOneObserverHighlight.subscribe(() => {
      branchOne.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchOneObserverUnhighlight.subscribe(() => {
      branchOne.style.filter = 'none';
    });

    const branchTwo = document.createElement('branch');
    branchTwo.classList.add('branch');

    branchTwoObserverHighlight.subscribe(() => {
      branchTwo.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchTwoObserverUnhighlight.subscribe(() => {
      branchTwo.style.filter = 'none';
    });

    const branchThree = document.createElement('branch');
    branchThree.classList.add('branch');

    branchThreeObserverHighlight.subscribe(() => {
      branchThree.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchThreeObserverUnhighlight.subscribe(() => {
      branchThree.style.filter = 'none';
    });

    const branchFour = document.createElement('branch');
    branchFour.classList.add('branch');

    branchFourObserverHighlight.subscribe(() => {
      branchFour.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchFourObserverUnhighlight.subscribe(() => {
      branchFour.style.filter = 'none';
    });

    branchOneObserverDay.subscribe(() => branchOne.classList.add('recolour'));
    branchOneObserverNight.subscribe(() =>
      branchOne.classList.remove('recolour')
    );

    branchTwoObserverDay.subscribe(() => branchTwo.classList.add('recolour'));
    branchTwoObserverNight.subscribe(() =>
      branchTwo.classList.remove('recolour')
    );

    branchThreeObserverDay.subscribe(() =>
      branchThree.classList.add('recolour')
    );
    branchThreeObserverNight.subscribe(() =>
      branchThree.classList.remove('recolour')
    );

    branchFourObserverDay.subscribe(() => branchFour.classList.add('recolour'));
    branchFourObserverNight.subscribe(() =>
      branchFour.classList.remove('recolour')
    );

    this.node.append(branchOne, branchTwo, branchThree, branchFour);
  }
}
