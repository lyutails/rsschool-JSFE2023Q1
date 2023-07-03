import { BaseComponent } from '@/core/base-component';

import {
  appleTooltipAppendObserverTagHover,
  appleTooltipRemoveObserverTagHover,
  gameElementHighlightTagHover,
  gameElementHighlihgtActualElementHover,
  gameElementUnhighlightTagHover,
  gameElementUnhighlihgtActualElementHover
} from '../html_viewer';

import { levels } from '@/data/levels';
import { levelsMarkup } from '@/data/levels_markup';
import { currentLevelObserver, store } from '@/store';

export class BranchImitation extends BaseComponent<'div'> {
  public branchOneImitation: HTMLElement;
  public branchTwoImitation: HTMLElement;
  public branchThreeImitation: HTMLElement;
  public branchFourImitation: HTMLElement;
  public store = store;
  constructor() {
    super({
      tagName: 'div',
      classList: ['branches_imitation']
    });

    this.branchOneImitation = document.createElement('branch');
    this.branchOneImitation.classList.add('branch_imitation');

    this.branchTwoImitation = document.createElement('branch');
    this.branchTwoImitation.classList.add('branch_imitation');

    this.branchThreeImitation = document.createElement('branch');
    this.branchThreeImitation.classList.add('branch_imitation');

    this.branchFourImitation = document.createElement('branch');
    this.branchFourImitation.classList.add('branch_imitation');

    this.node.append(
      this.branchOneImitation,
      this.branchTwoImitation,
      this.branchThreeImitation,
      this.branchFourImitation
    );
    currentLevelObserver.subscribe(() => this.render());

    this.render();
  }

  public render(): void {
    this.branchOneImitation.textContent = '';
    this.branchTwoImitation.textContent = '';
    this.branchThreeImitation.textContent = '';
    this.branchFourImitation.textContent = '';

    for (let i = 0; i < levelsMarkup[this.store.currentLevel].length; i++) {
      for (
        let index = 0;
        index < levelsMarkup[this.store.currentLevel][i].length;
        index++
      ) {
        if (levelsMarkup[this.store.currentLevel][i][index].tagName === '') {
          // eslint-disable-next-line no-continue
          continue;
        }

        const gameLevelElementTagName =
          levelsMarkup[this.store.currentLevel][i][index].tagName;
        const gameElement = document.createElement(gameLevelElementTagName);

        const gameLevelElementClassName =
          levelsMarkup[this.store.currentLevel][i][index].classList;
        if (levelsMarkup[this.store.currentLevel][i][index].classList !== '') {
          gameElement.classList.add(gameLevelElementClassName);
        }

        const gameLevelElementID =
          levelsMarkup[this.store.currentLevel][i][index].id;
        if (levelsMarkup[this.store.currentLevel][i][index].id !== '') {
          gameElement.setAttribute('id', gameLevelElementID);
        }

        const gameLevelElementAttribute =
          levelsMarkup[this.store.currentLevel][i][index].attribute;
        if (levelsMarkup[this.store.currentLevel][i][index].attribute !== '') {
          gameElement.setAttribute('for', gameLevelElementAttribute);
        }

        if (
          levelsMarkup[this.store.currentLevel][i][index].tagName ===
            levels[this.store.currentLevel].selector &&
          levelsMarkup[this.store.currentLevel][i][index].classList === ''
        ) {
          gameElement.style.animationName = 'pick_me_anim';
        }

        if (
          levelsMarkup[this.store.currentLevel][i][index].classList ===
          levels[this.store.currentLevel].selector
        ) {
          gameElement.style.animationName = 'pick_me_anim';
        }

        if (levels[this.store.currentLevel].selector.charAt(0) === '#') {
          if (
            levelsMarkup[this.store.currentLevel][i][index].id ===
            levels[this.store.currentLevel].selector.slice(1)
          ) {
            gameElement.style.animationName = 'pick_me_anim';
          }
        }

        const selectorWinPartTag = levels[this.store.currentLevel].selector
          .replace(/,/g, '')
          .split(' ')
          .find((selectorPart) => {
            return selectorPart.indexOf(
              levelsMarkup[this.store.currentLevel][i][index].tagName
            );
          });

        if (selectorWinPartTag) {
          gameElement.style.animationName = 'pick_me_anim';
        }

        if (
          levelsMarkup[this.store.currentLevel][i][index].classList ===
            'banana_green' &&
          levelsMarkup[this.store.currentLevel][i][index].tagName === 'banana'
        ) {
          gameElement.style.animationName = 'pick_me_anim';
        }

        if (
          levelsMarkup[this.store.currentLevel][i][index].classList ===
            'yellow' &&
          levelsMarkup[this.store.currentLevel][i][index].tagName === 'banana'
        ) {
          gameElement.style.animationName = 'unset';
        }

        if (
          levels[this.store.currentLevel].selector ===
          '.bee, .ladybug, .butterfly_blue'
        ) {
          if (gameElement.classList.contains('bee')) {
            gameElement.style.animationName = 'pick_me_anim';
          }
          if (gameElement.classList.contains('ladybug')) {
            gameElement.style.animationName = 'pick_me_anim';
          }
          if (gameElement.classList.contains('butterfly_blue')) {
            gameElement.style.animationName = 'pick_me_anim';
          }
          if (gameElement.classList.contains('butterfly_purple')) {
            gameElement.style.animationName = 'unset';
          }
        }

        const gameElementTooltip = new BaseComponent({
          tagName: 'div',
          classList: ['tooltip_apple'],
          textContent: `<${gameLevelElementTagName}>`
        });

        BranchImitation.setRandomPosition(gameElement, 18, 1);

        BranchImitation.setTransformOrigin(gameElement);

        BranchImitation.appendRemoveTooltip(gameElement, gameElementTooltip);

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
          this.branchOneImitation,
          this.branchTwoImitation,
          this.branchThreeImitation,
          this.branchFourImitation
        );

        if (
          levelsMarkup[this.store.currentLevel][i][index].tagName !== '' &&
          i === 0
        ) {
          this.branchOneImitation.append(gameElement);
          gameElement.style.display = 'flex';
          gameElement.style.justifyContent = 'center';
          gameElement.style.alignItems = 'center';
          if (
            levelsMarkup[this.store.currentLevel][i][index].children.tagName !==
            ''
          ) {
            const childTag =
              levelsMarkup[this.store.currentLevel][i][index].children.tagName;
            const gameElementChild = document.createElement(childTag);
            gameElement.append(gameElementChild);
            gameElementChild.style.width = '2vw';
            gameElementChild.style.aspectRatio = '1 / 1';

            const selectorChildWinPartTag = levels[
              this.store.currentLevel
            ].selector
              .replace(/,/g, '')
              .split(' ')
              .find((selectorPart) => {
                return selectorPart.indexOf(
                  levelsMarkup[this.store.currentLevel][i][index].children
                    .tagName
                );
              });

            if (selectorChildWinPartTag) {
              gameElementChild.style.animationName = 'pick_me_child_anim';
            }
          }
        }

        if (
          levelsMarkup[this.store.currentLevel][i][index].tagName !== '' &&
          i === 1
        ) {
          this.branchTwoImitation.append(gameElement);
          gameElement.style.display = 'flex';
          gameElement.style.justifyContent = 'center';
          gameElement.style.alignItems = 'center';
          if (
            levelsMarkup[this.store.currentLevel][i][index].children.tagName !==
            ''
          ) {
            const childTag =
              levelsMarkup[this.store.currentLevel][i][index].children.tagName;
            const gameElementChild = document.createElement(childTag);
            gameElement.append(gameElementChild);
            gameElementChild.style.width = '2vw';
            gameElementChild.style.aspectRatio = '1 / 1';

            const selectorChildWinPartTag = levels[
              this.store.currentLevel
            ].selector
              .replace(/,/g, '')
              .split(' ')
              .find((selectorPart) => {
                return selectorPart.indexOf(
                  levelsMarkup[this.store.currentLevel][i][index].children
                    .tagName
                );
              });

            if (selectorChildWinPartTag) {
              gameElementChild.style.animationName = 'pick_me_child_anim';
            }
          }
        }

        if (
          levelsMarkup[this.store.currentLevel][i][index].tagName !== '' &&
          i === 2
        ) {
          this.branchThreeImitation.append(gameElement);
          gameElement.style.display = 'flex';
          gameElement.style.justifyContent = 'center';
          gameElement.style.alignItems = 'center';
          if (
            levelsMarkup[this.store.currentLevel][i][index].children.tagName !==
            ''
          ) {
            const childTag =
              levelsMarkup[this.store.currentLevel][i][index].children.tagName;
            const gameElementChild = document.createElement(childTag);
            gameElement.append(gameElementChild);
            gameElementChild.style.width = '2vw';
            gameElementChild.style.aspectRatio = '1 / 1';

            const selectorChildWinPartTag = levels[
              this.store.currentLevel
            ].selector
              .replace(/,/g, '')
              .split(' ')
              .find((selectorPart) => {
                return selectorPart.indexOf(
                  levelsMarkup[this.store.currentLevel][i][index].children
                    .tagName
                );
              });

            if (selectorChildWinPartTag) {
              gameElementChild.style.animationName = 'pick_me_child_anim';
            }
          }
        }

        if (
          levelsMarkup[this.store.currentLevel][i][index].tagName !== '' &&
          i === 3
        ) {
          this.branchFourImitation.append(gameElement);
          gameElement.style.display = 'flex';
          gameElement.style.justifyContent = 'center';
          gameElement.style.alignItems = 'center';
          if (
            levelsMarkup[this.store.currentLevel][i][index].children.tagName !==
            ''
          ) {
            const childTag =
              levelsMarkup[this.store.currentLevel][i][index].children.tagName;
            const gameElementChild = document.createElement(childTag);
            gameElement.append(gameElementChild);
            gameElementChild.style.width = '2vw';
            gameElementChild.style.aspectRatio = '1 / 1';

            const selectorChildWinPartTag = levels[
              this.store.currentLevel
            ].selector
              .replace(/,/g, '')
              .split(' ')
              .find((selectorPart) => {
                return selectorPart.indexOf(
                  levelsMarkup[this.store.currentLevel][i][index].children
                    .tagName
                );
              });

            if (selectorChildWinPartTag) {
              gameElementChild.style.animationName = 'pick_me_child_anim';
            }
          }
        }
      }
    }
  }
}
