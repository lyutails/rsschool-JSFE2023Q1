import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

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

    const branchOne = document.createElement('branch');
    branchOne.classList.add('branch');

    const branchTwo = document.createElement('branch');
    branchTwo.classList.add('branch');

    const branchThree = document.createElement('branch');
    branchThree.classList.add('branch');

    const branchFour = document.createElement('branch');
    branchFour.classList.add('branch');

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
