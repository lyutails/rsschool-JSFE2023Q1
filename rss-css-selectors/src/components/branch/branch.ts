import { BaseComponent } from '@/core/base-component';

import {
  appleObserverHighlightTagHover,
  appleObserverHighlihgtActualElementHover,
  appleObserverUnhighlightTagHover,
  appleObserverUnhighlihgtActualElementHover,
  appleTooltipAppendObserverTagHover,
  appleTooltipRemoveObserverTagHover,
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

    const tooltipApple = new BaseComponent({
      tagName: 'div',
      classList: ['tooltip_apple'],
      textContent: '<apple>'
    });

    const apple = levelsMarkup[0].config[0][0].tagName;
    const appleElement = document.createElement(apple);
    appleElement.classList.add('apple');

    Branch.setRandomPosition(appleElement, 20, 1);

    Branch.setTransformOrigin(appleElement);

    Branch.appendRemoveTooltip(appleElement, tooltipApple);

    appleObserverHighlightTagHover.subscribe(() => {
      appleElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    appleObserverUnhighlightTagHover.subscribe(() => {
      appleElement.style.filter = 'none';
    });

    appleTooltipAppendObserverTagHover.subscribe(() => {
      appleElement.append(tooltipApple.node);
    });

    appleTooltipRemoveObserverTagHover.subscribe(() => {
      tooltipApple.node.remove();
    });

    appleObserverHighlihgtActualElementHover.subscribe(() => {
      appleElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    appleElement.addEventListener('mouseover', () => {
      appleObserverHighlihgtActualElementHover.notify('lalala');
    });

    appleObserverUnhighlihgtActualElementHover.subscribe(() => {
      appleElement.style.filter = 'none';
    });

    appleElement.addEventListener('mouseout', () => {
      appleObserverUnhighlihgtActualElementHover.notify('lalala');
    });

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
