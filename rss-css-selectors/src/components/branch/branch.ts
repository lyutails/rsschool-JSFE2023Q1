import { BaseComponent } from '@/core/base-component';

import { currentLevelObserver } from '../css_editor/css_editor';
import {
  appleTooltipAppendObserverTagHover,
  appleTooltipRemoveObserverTagHover,
  branchFourObserverHighlight,
  branchFourObserverUnhighlight,
  branchOneObserverHighlight,
  branchOneObserverUnhighlight,
  branchThreeObserverHighlight,
  branchThreeObserverUnhighlight,
  branchTwoObserverHighlight,
  branchTwoObserverUnhighlight,
  gameElementHighlightTagHover,
  gameElementHighlihgtActualElementHover,
  gameElementUnhighlightTagHover,
  gameElementUnhighlihgtActualElementHover
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
  public currentLevel = 0;
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

    branchOneObserverHighlight.subscribe(() => {
      this.branchOne.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchOneObserverUnhighlight.subscribe(() => {
      this.branchOne.style.filter = 'none';
    });

    this.branchTwo = document.createElement('branch');
    this.branchTwo.classList.add('branch');

    branchTwoObserverHighlight.subscribe(() => {
      this.branchTwo.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchTwoObserverUnhighlight.subscribe(() => {
      this.branchTwo.style.filter = 'none';
    });

    this.branchThree = document.createElement('branch');
    this.branchThree.classList.add('branch');

    branchThreeObserverHighlight.subscribe(() => {
      this.branchThree.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
    });

    branchThreeObserverUnhighlight.subscribe(() => {
      this.branchThree.style.filter = 'none';
    });

    this.branchFour = document.createElement('branch');
    this.branchFour.classList.add('branch');

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

    currentLevelObserver.subscribe(() => this.updateLevel());

    this.render();
  }

  public updateLevel(): void {
    this.currentLevel++;
    this.render();
  }

  public render(): void {
    this.branchOne.textContent = '';
    this.branchTwo.textContent = '';
    this.branchThree.textContent = '';
    this.branchFour.textContent = '';

    for (let i = 0; i < levelsMarkup[this.currentLevel].length; i++) {
      for (
        let index = 0;
        index < levelsMarkup[this.currentLevel][i].length;
        index++
      ) {
        if (levelsMarkup[this.currentLevel][i][index].tagName === '') {
          // eslint-disable-next-line no-continue
          continue;
        }

        const gameLevelElementTagName =
          levelsMarkup[this.currentLevel][i][index].tagName;
        const gameElement = document.createElement(gameLevelElementTagName);

        const gameLevelElementClassName =
          levelsMarkup[this.currentLevel][i][index].classList;
        if (levelsMarkup[this.currentLevel][i][index].classList !== '') {
          gameElement.classList.add(gameLevelElementClassName);
        }

        const gameLevelElementID = levelsMarkup[this.currentLevel][i][index].id;
        if (levelsMarkup[this.currentLevel][i][index].id !== '') {
          gameElement.setAttribute('id', gameLevelElementID);
        }

        const gameLevelElementAttribute =
          levelsMarkup[this.currentLevel][i][index].attribute;
        if (levelsMarkup[this.currentLevel][i][index].attribute !== '') {
          gameElement.setAttribute('for', gameLevelElementAttribute);
        }

        const gameElementTooltip = new BaseComponent({
          tagName: 'div',
          classList: ['tooltip_apple'],
          textContent: `<${gameLevelElementTagName}>`
        });

        Branch.setRandomPosition(gameElement, 20, 1);

        Branch.setTransformOrigin(gameElement);

        Branch.appendRemoveTooltip(gameElement, gameElementTooltip);

        gameElementHighlightTagHover.subscribe(() => {
          gameElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
        });

        gameElementUnhighlightTagHover.subscribe(() => {
          gameElement.style.filter = 'none';
        });

        appleTooltipAppendObserverTagHover.subscribe(() => {
          gameElement.append(gameElementTooltip.node);
        });

        appleTooltipRemoveObserverTagHover.subscribe(() => {
          gameElementTooltip.node.remove();
        });

        gameElementHighlihgtActualElementHover.subscribe(() => {
          gameElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
        });

        gameElement.addEventListener('mouseover', () => {
          gameElementHighlihgtActualElementHover.notify('lalala');
        });

        gameElementUnhighlihgtActualElementHover.subscribe(() => {
          gameElement.style.filter = 'none';
        });

        gameElement.addEventListener('mouseout', () => {
          gameElementUnhighlihgtActualElementHover.notify('lalala');
        });

        this.node.append(
          this.branchOne,
          this.branchTwo,
          this.branchThree,
          this.branchFour
        );

        if (
          levelsMarkup[this.currentLevel][i][index].tagName !== '' &&
          i === 0
        ) {
          this.branchOne.append(gameElement);
          gameElement.style.display = 'flex';
          gameElement.style.justifyContent = 'center';
          gameElement.style.alignItems = 'center';
          if (
            levelsMarkup[this.currentLevel][i][index].children.tagName !== ''
          ) {
            const childTag =
              levelsMarkup[this.currentLevel][i][index].children.tagName;
            const gameElementChild = document.createElement(childTag);
            gameElement.append(gameElementChild);
            gameElementChild.style.width = '2vw';
            gameElementChild.style.aspectRatio = '1 / 1';
          }
        }

        if (
          levelsMarkup[this.currentLevel][i][index].tagName !== '' &&
          i === 1
        ) {
          this.branchTwo.append(gameElement);
          gameElement.style.display = 'flex';
          gameElement.style.justifyContent = 'center';
          gameElement.style.alignItems = 'center';
          if (
            levelsMarkup[this.currentLevel][i][index].children.tagName !== ''
          ) {
            const childTag =
              levelsMarkup[this.currentLevel][i][index].children.tagName;
            const gameElementChild = document.createElement(childTag);
            gameElement.append(gameElementChild);
            gameElementChild.style.width = '2vw';
            gameElementChild.style.aspectRatio = '1 / 1';
          }
        }

        if (
          levelsMarkup[this.currentLevel][i][index].tagName !== '' &&
          i === 2
        ) {
          this.branchThree.append(gameElement);
          gameElement.style.display = 'flex';
          gameElement.style.justifyContent = 'center';
          gameElement.style.alignItems = 'center';
          if (
            levelsMarkup[this.currentLevel][i][index].children.tagName !== ''
          ) {
            const childTag =
              levelsMarkup[this.currentLevel][i][index].children.tagName;
            const gameElementChild = document.createElement(childTag);
            gameElement.append(gameElementChild);
            gameElementChild.style.width = '2vw';
            gameElementChild.style.aspectRatio = '1 / 1';
          }
        }

        if (
          levelsMarkup[this.currentLevel][i][index].tagName !== '' &&
          i === 3
        ) {
          this.branchFour.append(gameElement);
          gameElement.style.display = 'flex';
          gameElement.style.justifyContent = 'center';
          gameElement.style.alignItems = 'center';
          if (
            levelsMarkup[this.currentLevel][i][index].children.tagName !== ''
          ) {
            const childTag =
              levelsMarkup[this.currentLevel][i][index].children.tagName;
            const gameElementChild = document.createElement(childTag);
            gameElement.append(gameElementChild);
            gameElementChild.style.width = '2vw';
            gameElementChild.style.aspectRatio = '1 / 1';
          }
        }
      }
    }
  }
}
