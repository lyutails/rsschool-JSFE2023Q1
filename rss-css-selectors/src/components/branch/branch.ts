import { BaseComponent } from '@/core/base-component';

import {
  branchFourPicObserverHighlight,
  branchFourPicObserverUnhighlight,
  branchOnePicObserverHighlight,
  branchOnePicObserverUnhighlight,
  branchThreePicObserverHighlight,
  branchThreePicObserverUnhighlight,
  branchTwoPicObserverHighlight,
  branchTwoPicObserverUnhighlight
} from '../branch_imitation';
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

export const branchOneObserverDay = new Observer();
export const branchOneObserverNight = new Observer();
export const branchTwoObserverDay = new Observer();
export const branchTwoObserverNight = new Observer();
export const branchThreeObserverDay = new Observer();
export const branchThreeObserverNight = new Observer();
export const branchFourObserverDay = new Observer();
export const branchFourObserverNight = new Observer();

export class Branch extends BaseComponent<'div'> {
  public branchOne: HTMLElement;
  public branchTwo: HTMLElement;
  public branchThree: HTMLElement;
  public branchFour: HTMLElement;
  constructor() {
    super({
      tagName: 'div',
      classList: ['branches']
    });

    this.branchOne = document.createElement('branch');
    this.branchOne.classList.add('branch');

    branchOnePicObserverHighlight.subscribe(() => {
      this.branchOne.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchOnePicObserverUnhighlight.subscribe(() => {
      this.branchOne.style.filter = 'none';
    });

    branchOneObserverHighlight.subscribe(() => {
      this.branchOne.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchOneObserverUnhighlight.subscribe(() => {
      this.branchOne.style.filter = 'none';
    });

    this.branchTwo = document.createElement('branch');
    this.branchTwo.classList.add('branch');

    branchTwoPicObserverHighlight.subscribe(() => {
      this.branchTwo.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchTwoPicObserverUnhighlight.subscribe(() => {
      this.branchTwo.style.filter = 'none';
    });

    branchTwoObserverHighlight.subscribe(() => {
      this.branchTwo.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchTwoObserverUnhighlight.subscribe(() => {
      this.branchTwo.style.filter = 'none';
    });

    this.branchThree = document.createElement('branch');
    this.branchThree.classList.add('branch');

    branchThreePicObserverHighlight.subscribe(() => {
      this.branchThree.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchThreePicObserverUnhighlight.subscribe(() => {
      this.branchThree.style.filter = 'none';
    });

    branchThreeObserverHighlight.subscribe(() => {
      this.branchThree.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchThreeObserverUnhighlight.subscribe(() => {
      this.branchThree.style.filter = 'none';
    });

    this.branchFour = document.createElement('branch');
    this.branchFour.classList.add('branch');

    branchFourPicObserverHighlight.subscribe(() => {
      this.branchFour.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchFourPicObserverUnhighlight.subscribe(() => {
      this.branchFour.style.filter = 'none';
    });

    branchFourObserverHighlight.subscribe(() => {
      this.branchFour.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchFourObserverUnhighlight.subscribe(() => {
      this.branchFour.style.filter = 'none';
    });

    branchOneObserverDay.subscribe(() =>
      this.branchOne.classList.add('recolour')
    );
    branchOneObserverNight.subscribe(() =>
      this.branchOne.classList.remove('recolour')
    );

    branchTwoObserverDay.subscribe(() =>
      this.branchTwo.classList.add('recolour')
    );
    branchTwoObserverNight.subscribe(() =>
      this.branchTwo.classList.remove('recolour')
    );

    branchThreeObserverDay.subscribe(() =>
      this.branchThree.classList.add('recolour')
    );
    branchThreeObserverNight.subscribe(() =>
      this.branchThree.classList.remove('recolour')
    );

    branchFourObserverDay.subscribe(() =>
      this.branchFour.classList.add('recolour')
    );
    branchFourObserverNight.subscribe(() =>
      this.branchFour.classList.remove('recolour')
    );

    this.node.append(
      this.branchOne,
      this.branchTwo,
      this.branchThree,
      this.branchFour
    );
  }
}
