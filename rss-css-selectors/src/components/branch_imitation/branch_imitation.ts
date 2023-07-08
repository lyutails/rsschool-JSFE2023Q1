/* eslint-disable import/no-cycle */
import { BaseComponent } from '@/core/base-component';

import {
  correctSelectorChildElementShake,
  correctSelectorElementShake,
  incorrectSelectorChildElementShake,
  incorrectSelectorElementShake
} from '../css_editor';
import {
  branchFourTagHighlightByElementObserver,
  branchFourTagUnhighlightByElementObserver,
  branchOneTagHighlightByElementObserver,
  branchOneTagUnhighlightByElementObserver,
  branchThreeTagHighlightByElementObserver,
  branchThreeTagUnhighlightByElementObserver,
  branchTwoTagHighlightByElementObserver,
  branchTwoTagUnhighlightByElementObserver,
  gameElementFourHighlihgtActualElementHover,
  gameElementFourUnhighlihgtActualElementHover,
  gameElementHighlightFourTagHover,
  gameElementHighlightOneTagHover,
  gameElementHighlightTagHover,
  gameElementHighlightThreeTagHover,
  gameElementHighlightTwoTagHover,
  gameElementOneHighlihgtActualElementHover,
  gameElementOneUnhighlihgtActualElementHover,
  gameElementThreeHighlihgtActualElementHover,
  gameElementThreeUnhighlihgtActualElementHover,
  gameElementTooltipAppendObserverFourTagHover,
  gameElementTooltipAppendObserverOneTagHover,
  gameElementTooltipAppendObserverThreeTagHover,
  gameElementTooltipAppendObserverTwoTagHover,
  gameElementTooltipRemoveObserverFourTagHover,
  gameElementTooltipRemoveObserverOneTagHover,
  gameElementTooltipRemoveObserverThreeTagHover,
  gameElementTooltipRemoveObserverTwoTagHover,
  gameElementTwoHighlihgtActualElementHover,
  gameElementTwoUnhighlihgtActualElementHover,
  gameElementUnhighlightFourTagHover,
  gameElementUnhighlightOneTagHover,
  gameElementUnhighlightTagHover,
  gameElementUnhighlightThreeTagHover,
  gameElementUnhighlightTwoTagHover,
  tagHighlightByElementApple,
  tagHighlightByElementAppleFour,
  tagHighlightByElementAppleThree,
  tagHighlightByElementAppleTwo,
  tagHighlightByElementBanana,
  tagHighlightByElementBananaFour,
  tagHighlightByElementBananaThree,
  tagHighlightByElementBananaTwo,
  tagHighlightByElementBeeFour,
  tagHighlightByElementBeeOne,
  tagHighlightByElementBeeThree,
  tagHighlightByElementBeeTwo,
  tagHighlightByElementButterflyFour,
  tagHighlightByElementButterflyOne,
  tagHighlightByElementButterflyThree,
  tagHighlightByElementButterflyTwo,
  tagHighlightByElementCherry,
  tagHighlightByElementCherryFour,
  tagHighlightByElementCherryThree,
  tagHighlightByElementCherryTwo,
  tagHighlightByElementDumplingFour,
  tagHighlightByElementDumplingOne,
  tagHighlightByElementDumplingThree,
  tagHighlightByElementDumplingTwo,
  tagHighlightByElementFourObserver,
  tagHighlightByElementLadybugFour,
  tagHighlightByElementLadybugOne,
  tagHighlightByElementLadybugThree,
  tagHighlightByElementLadybugTwo,
  tagHighlightByElementMango,
  tagHighlightByElementMangoFour,
  tagHighlightByElementMangoThree,
  tagHighlightByElementMangoTwo,
  tagHighlightByElementOneObserver,
  tagHighlightByElementPear,
  tagHighlightByElementPearFour,
  tagHighlightByElementPearThree,
  tagHighlightByElementPearTwo,
  tagHighlightByElementStrawberry,
  tagHighlightByElementStrawberryFour,
  tagHighlightByElementStrawberryThree,
  tagHighlightByElementStrawberryTwo,
  tagHighlightByElementThreeObserver,
  tagHighlightByElementTwoObserver,
  tagUnhighlightByElementApple,
  tagUnhighlightByElementAppleFour,
  tagUnhighlightByElementAppleThree,
  tagUnhighlightByElementAppleTwo,
  tagUnhighlightByElementBanana,
  tagUnhighlightByElementBananaFour,
  tagUnhighlightByElementBananaThree,
  tagUnhighlightByElementBananaTwo,
  tagUnhighlightByElementBeeFour,
  tagUnhighlightByElementBeeOne,
  tagUnhighlightByElementBeeThree,
  tagUnhighlightByElementBeeTwo,
  tagUnhighlightByElementButterflyFour,
  tagUnhighlightByElementButterflyOne,
  tagUnhighlightByElementButterflyThree,
  tagUnhighlightByElementButterflyTwo,
  tagUnhighlightByElementCherry,
  tagUnhighlightByElementCherryFour,
  tagUnhighlightByElementCherryThree,
  tagUnhighlightByElementCherryTwo,
  tagUnhighlightByElementDumplingFour,
  tagUnhighlightByElementDumplingOne,
  tagUnhighlightByElementDumplingThree,
  tagUnhighlightByElementDumplingTwo,
  tagUnhighlightByElementFourObserver,
  tagUnhighlightByElementLadybugFour,
  tagUnhighlightByElementLadybugOne,
  tagUnhighlightByElementLadybugThree,
  tagUnhighlightByElementLadybugTwo,
  tagUnhighlightByElementMango,
  tagUnhighlightByElementMangoFour,
  tagUnhighlightByElementMangoThree,
  tagUnhighlightByElementMangoTwo,
  tagUnhighlightByElementOneObserver,
  tagUnhighlightByElementPear,
  tagUnhighlightByElementPearFour,
  tagUnhighlightByElementPearThree,
  tagUnhighlightByElementPearTwo,
  tagUnhighlightByElementStrawberry,
  tagUnhighlightByElementStrawberryFour,
  tagUnhighlightByElementStrawberryThree,
  tagUnhighlightByElementStrawberryTwo,
  tagUnhighlightByElementThreeObserver,
  tagUnhighlightByElementTwoObserver
} from '../html_viewer';
import { Observer } from '../observer';

import { levels } from '@/data/levels';
import { levelsMarkup } from '@/data/levels_markup';
import { currentLevelObserver, store } from '@/store';

export const branchOnePicObserverHighlight = new Observer();
export const branchOnePicObserverUnhighlight = new Observer();

export const branchTwoPicObserverHighlight = new Observer();
export const branchTwoPicObserverUnhighlight = new Observer();

export const branchThreePicObserverHighlight = new Observer();
export const branchThreePicObserverUnhighlight = new Observer();

export const branchFourPicObserverHighlight = new Observer();
export const branchFourPicObserverUnhighlight = new Observer();

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

    this.branchOneImitation.addEventListener('mouseover', () => {
      branchOnePicObserverHighlight.notify('lalala');
      branchOneTagHighlightByElementObserver.notify('lalala');
    });

    this.branchOneImitation.addEventListener('mouseout', () => {
      branchOnePicObserverUnhighlight.notify('lalala');
      branchOneTagUnhighlightByElementObserver.notify('lalala');
    });

    this.branchTwoImitation.addEventListener('mouseover', () => {
      branchTwoPicObserverHighlight.notify('lalala');
      branchTwoTagHighlightByElementObserver.notify('lalala');
    });

    this.branchTwoImitation.addEventListener('mouseout', () => {
      branchTwoPicObserverUnhighlight.notify('lalala');
      branchTwoTagUnhighlightByElementObserver.notify('lalala');
    });

    this.branchThreeImitation.addEventListener('mouseover', () => {
      branchThreePicObserverHighlight.notify('lalala');
      branchThreeTagHighlightByElementObserver.notify('lalala');
    });

    this.branchThreeImitation.addEventListener('mouseout', () => {
      branchThreePicObserverUnhighlight.notify('lalala');
      branchThreeTagUnhighlightByElementObserver.notify('lalala');
    });

    this.branchFourImitation.addEventListener('mouseover', () => {
      branchFourPicObserverHighlight.notify('lalala');
      branchFourTagHighlightByElementObserver.notify('lalala');
    });

    this.branchFourImitation.addEventListener('mouseout', () => {
      branchFourPicObserverUnhighlight.notify('lalala');
      branchFourTagUnhighlightByElementObserver.notify('lalala');
    });

    this.node.append(
      this.branchOneImitation,
      this.branchTwoImitation,
      this.branchThreeImitation,
      this.branchFourImitation
    );

    currentLevelObserver.subscribe(() =>
      setTimeout(() => {
        this.render();
      }, 800)
    );

    setTimeout(() => {
      this.render();
    }, 800);
  }

  public render(): void {
    this.branchOneImitation.textContent = '';
    this.branchTwoImitation.textContent = '';
    this.branchThreeImitation.textContent = '';
    this.branchFourImitation.textContent = '';

    const { currentLevel } = this.store;
    localStorage.setItem('lastLevelWinValue', `${currentLevel}`);

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

        const gameElementTooltip = new BaseComponent({
          tagName: 'div',
          classList: ['tooltip_apple'],
          textContent: `<${gameLevelElementTagName}>`
        });

        const { anim } = levelsMarkup[this.store.currentLevel][i][index];

        if (anim === 'yes') {
          gameElement.style.animationName = 'pick_me_anim';
        }
        if (anim === 'no') {
          gameElement.style.animationName = 'unset';
        }

        correctSelectorElementShake.subscribe(() => {
          if (anim === 'yes') {
            BranchImitation.correctSelectorElementAnim(gameElement);
          }
        });

        incorrectSelectorElementShake.subscribe(() => {
          if (anim === 'yes') {
            BranchImitation.incorrectSelectorElementAnim(gameElement);
            setTimeout(() => {
              gameElement.style.animationName = 'pick_me_anim';
              gameElement.style.animationDuration = '2s';
              gameElement.style.animationIterationCount = 'infinite';
              gameElement.style.animationTimingFunction = 'linear';
            }, 1000);
          }
        });

        BranchImitation.setRandomPosition(gameElement, 16, 1);

        BranchImitation.setTransformOrigin(gameElement);

        BranchImitation.appendRemoveTooltip(gameElement, gameElementTooltip);

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

          gameElementOneHighlihgtActualElementHover.subscribe(() => {
            gameElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
          });

          gameElement.addEventListener('mouseover', () => {
            gameElementOneHighlihgtActualElementHover.notify('lalala');
          });

          gameElementOneUnhighlihgtActualElementHover.subscribe(() => {
            gameElement.style.filter = 'none';
          });

          gameElement.addEventListener('mouseout', () => {
            gameElementOneUnhighlihgtActualElementHover.notify('lalala');
          });

          gameElement.addEventListener('mouseover', () => {
            tagHighlightByElementOneObserver.notify('lalala');
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'apple'
            ) {
              tagHighlightByElementApple.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'cherry'
            ) {
              tagHighlightByElementCherry.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'banana'
            ) {
              tagHighlightByElementBanana.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'mango'
            ) {
              tagHighlightByElementMango.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'strawberry'
            ) {
              tagHighlightByElementStrawberry.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'pear'
            ) {
              tagHighlightByElementPear.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'butterfly'
            ) {
              tagHighlightByElementButterflyOne.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'bee'
            ) {
              tagHighlightByElementBeeOne.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'ladybug'
            ) {
              tagHighlightByElementLadybugOne.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'dumpling'
            ) {
              tagHighlightByElementDumplingOne.notify('lalala');
            }
            branchOneTagUnhighlightByElementObserver.notify('lalala');
            branchOnePicObserverUnhighlight.notify('lalala');
          });

          gameElement.addEventListener('mouseout', () => {
            tagUnhighlightByElementOneObserver.notify('lalala');
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'apple'
            ) {
              tagUnhighlightByElementApple.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'cherry'
            ) {
              tagUnhighlightByElementCherry.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'banana'
            ) {
              tagUnhighlightByElementBanana.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'mango'
            ) {
              tagUnhighlightByElementMango.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'strawberry'
            ) {
              tagUnhighlightByElementStrawberry.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'pear'
            ) {
              tagUnhighlightByElementPear.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'butterfly'
            ) {
              tagUnhighlightByElementButterflyOne.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'bee'
            ) {
              tagUnhighlightByElementBeeOne.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'ladybug'
            ) {
              tagUnhighlightByElementLadybugOne.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'dumpling'
            ) {
              tagUnhighlightByElementDumplingOne.notify('lalala');
            }
          });

          gameElementHighlightOneTagHover.subscribe(() => {
            gameElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
          });

          gameElementUnhighlightOneTagHover.subscribe(() => {
            gameElement.style.filter = 'none';
          });

          gameElementTooltipAppendObserverOneTagHover.subscribe(() => {
            gameElement.append(gameElementTooltip.node);
          });

          gameElementTooltipRemoveObserverOneTagHover.subscribe(() => {
            gameElementTooltip.node.remove();
          });

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

            if (
              levelsMarkup[this.store.currentLevel][i][index].children.anim ===
              'yes'
            ) {
              gameElementChild.style.animationName = 'pick_me_child_anim';
            }

            if (
              levelsMarkup[this.store.currentLevel][i][index].children.anim ===
              'no'
            ) {
              gameElementChild.style.animationName = 'unset';
            }

            correctSelectorChildElementShake.subscribe(() => {
              BranchImitation.correctSelectorElementAnim(gameElementChild);
            });

            incorrectSelectorChildElementShake.subscribe(() => {
              if (
                levelsMarkup[this.store.currentLevel][i][index]?.children
                  ?.anim === 'yes'
              ) {
                BranchImitation.incorrectSelectorElementAnim(gameElementChild);
                setTimeout(() => {
                  gameElementChild.style.animationName = 'pick_me_child_anim';
                  gameElementChild.style.animationDuration = '2s';
                  gameElementChild.style.animationIterationCount = 'infinite';
                  gameElementChild.style.animationTimingFunction = 'linear';
                }, 1000);
              }
            });
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

          gameElementTwoHighlihgtActualElementHover.subscribe(() => {
            gameElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
          });

          gameElement.addEventListener('mouseover', () => {
            gameElementTwoHighlihgtActualElementHover.notify('lalala');
          });

          gameElementTwoUnhighlihgtActualElementHover.subscribe(() => {
            gameElement.style.filter = 'none';
          });

          gameElement.addEventListener('mouseout', () => {
            gameElementTwoUnhighlihgtActualElementHover.notify('lalala');
          });

          gameElement.addEventListener('mouseover', () => {
            tagHighlightByElementTwoObserver.notify('lalala');
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'apple'
            ) {
              tagHighlightByElementAppleTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'cherry'
            ) {
              tagHighlightByElementCherryTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'banana'
            ) {
              tagHighlightByElementBananaTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'mango'
            ) {
              tagHighlightByElementMangoTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'strawberry'
            ) {
              tagHighlightByElementStrawberryTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'pear'
            ) {
              tagHighlightByElementPearTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'butterfly'
            ) {
              tagHighlightByElementButterflyTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'bee'
            ) {
              tagHighlightByElementBeeTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'ladybug'
            ) {
              tagHighlightByElementLadybugTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'dumpling'
            ) {
              tagHighlightByElementDumplingTwo.notify('lalala');
            }
            branchTwoTagUnhighlightByElementObserver.notify('lalala');
            branchTwoPicObserverUnhighlight.notify('lalala');
          });

          gameElement.addEventListener('mouseout', () => {
            tagUnhighlightByElementTwoObserver.notify('lalala');
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'apple'
            ) {
              tagUnhighlightByElementAppleTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'cherry'
            ) {
              tagUnhighlightByElementCherryTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'banana'
            ) {
              tagUnhighlightByElementBananaTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'mango'
            ) {
              tagUnhighlightByElementMangoTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'strawberry'
            ) {
              tagUnhighlightByElementStrawberryTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'pear'
            ) {
              tagUnhighlightByElementPearTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'butterfly'
            ) {
              tagUnhighlightByElementButterflyTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'bee'
            ) {
              tagUnhighlightByElementBeeTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'ladybug'
            ) {
              tagUnhighlightByElementLadybugTwo.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'dumpling'
            ) {
              tagUnhighlightByElementDumplingTwo.notify('lalala');
            }
          });

          gameElement.addEventListener('mouseover', () => {
            tagHighlightByElementTwoObserver.notify('lalala');
            branchTwoTagUnhighlightByElementObserver.notify('lalala');
            branchTwoPicObserverUnhighlight.notify('lalala');
          });

          gameElement.addEventListener('mouseout', () => {
            tagUnhighlightByElementTwoObserver.notify('lalala');
          });

          gameElementHighlightTwoTagHover.subscribe(() => {
            gameElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
          });

          gameElementUnhighlightTwoTagHover.subscribe(() => {
            gameElement.style.filter = 'none';
          });

          gameElementTooltipAppendObserverTwoTagHover.subscribe(() => {
            gameElement.append(gameElementTooltip.node);
          });

          gameElementTooltipRemoveObserverTwoTagHover.subscribe(() => {
            gameElementTooltip.node.remove();
          });

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

            if (
              levelsMarkup[this.store.currentLevel][i][index].children.anim ===
              'yes'
            ) {
              gameElementChild.style.animationName = 'pick_me_child_anim';
            }

            if (
              levelsMarkup[this.store.currentLevel][i][index].children.anim ===
              'no'
            ) {
              gameElementChild.style.animationName = 'unset';
            }

            correctSelectorChildElementShake.subscribe(() => {
              BranchImitation.correctSelectorElementAnim(gameElementChild);
            });

            incorrectSelectorChildElementShake.subscribe(() => {
              if (
                levelsMarkup[this.store.currentLevel][i][index]?.children
                  ?.anim === 'yes'
              ) {
                BranchImitation.incorrectSelectorElementAnim(gameElementChild);
                setTimeout(() => {
                  gameElementChild.style.animationName = 'pick_me_child_anim';
                  gameElementChild.style.animationDuration = '2s';
                  gameElementChild.style.animationIterationCount = 'infinite';
                  gameElementChild.style.animationTimingFunction = 'linear';
                }, 1000);
              }
            });
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

          gameElementThreeHighlihgtActualElementHover.subscribe(() => {
            gameElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
          });

          gameElement.addEventListener('mouseover', () => {
            gameElementThreeHighlihgtActualElementHover.notify('lalala');
          });

          gameElementThreeUnhighlihgtActualElementHover.subscribe(() => {
            gameElement.style.filter = 'none';
          });

          gameElement.addEventListener('mouseout', () => {
            gameElementThreeUnhighlihgtActualElementHover.notify('lalala');
          });

          gameElement.addEventListener('mouseover', () => {
            tagHighlightByElementThreeObserver.notify('lalala');
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'apple'
            ) {
              tagHighlightByElementAppleThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'cherry'
            ) {
              tagHighlightByElementCherryThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'banana'
            ) {
              tagHighlightByElementBananaThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'mango'
            ) {
              tagHighlightByElementMangoThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'strawberry'
            ) {
              tagHighlightByElementStrawberryThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'pear'
            ) {
              tagHighlightByElementPearThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'butterfly'
            ) {
              tagHighlightByElementButterflyThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'bee'
            ) {
              tagHighlightByElementBeeThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'ladybug'
            ) {
              tagHighlightByElementLadybugThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'dumpling'
            ) {
              tagHighlightByElementDumplingThree.notify('lalala');
            }
            branchThreeTagUnhighlightByElementObserver.notify('lalala');
            branchThreePicObserverUnhighlight.notify('lalala');
          });

          gameElement.addEventListener('mouseout', () => {
            tagUnhighlightByElementThreeObserver.notify('lalala');
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'apple'
            ) {
              tagUnhighlightByElementAppleThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'cherry'
            ) {
              tagUnhighlightByElementCherryThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'banana'
            ) {
              tagUnhighlightByElementBananaThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'mango'
            ) {
              tagUnhighlightByElementMangoThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'strawberry'
            ) {
              tagUnhighlightByElementStrawberryThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'pear'
            ) {
              tagUnhighlightByElementPearThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'butterfly'
            ) {
              tagUnhighlightByElementButterflyThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'bee'
            ) {
              tagUnhighlightByElementBeeThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'ladybug'
            ) {
              tagUnhighlightByElementLadybugThree.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'dumpling'
            ) {
              tagUnhighlightByElementDumplingThree.notify('lalala');
            }
          });

          gameElement.addEventListener('mouseover', () => {
            tagHighlightByElementThreeObserver.notify('lalala');
            branchThreeTagUnhighlightByElementObserver.notify('lalala');
            branchThreePicObserverUnhighlight.notify('lalala');
          });

          gameElement.addEventListener('mouseout', () => {
            tagUnhighlightByElementThreeObserver.notify('lalala');
          });

          gameElementHighlightThreeTagHover.subscribe(() => {
            gameElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
          });

          gameElementUnhighlightThreeTagHover.subscribe(() => {
            gameElement.style.filter = 'none';
          });

          gameElementTooltipAppendObserverThreeTagHover.subscribe(() => {
            gameElement.append(gameElementTooltip.node);
          });

          gameElementTooltipRemoveObserverThreeTagHover.subscribe(() => {
            gameElementTooltip.node.remove();
          });

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

            if (
              levelsMarkup[this.store.currentLevel][i][index].children.anim ===
              'yes'
            ) {
              gameElementChild.style.animationName = 'pick_me_child_anim';
            }

            if (
              levelsMarkup[this.store.currentLevel][i][index].children.anim ===
              'no'
            ) {
              gameElementChild.style.animationName = 'unset';
            }

            correctSelectorChildElementShake.subscribe(() => {
              BranchImitation.correctSelectorElementAnim(gameElementChild);
            });

            incorrectSelectorChildElementShake.subscribe(() => {
              if (
                levelsMarkup[this.store.currentLevel][i][index]?.children
                  ?.anim === 'yes'
              ) {
                BranchImitation.incorrectSelectorElementAnim(gameElementChild);
                setTimeout(() => {
                  gameElementChild.style.animationName = 'pick_me_child_anim';
                  gameElementChild.style.animationDuration = '2s';
                  gameElementChild.style.animationIterationCount = 'infinite';
                  gameElementChild.style.animationTimingFunction = 'linear';
                }, 1000);
              }
            });
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

          gameElementFourHighlihgtActualElementHover.subscribe(() => {
            gameElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
          });

          gameElement.addEventListener('mouseover', () => {
            gameElementFourHighlihgtActualElementHover.notify('lalala');
          });

          gameElementFourUnhighlihgtActualElementHover.subscribe(() => {
            gameElement.style.filter = 'none';
          });

          gameElement.addEventListener('mouseout', () => {
            gameElementFourUnhighlihgtActualElementHover.notify('lalala');
          });

          gameElement.addEventListener('mouseover', () => {
            tagHighlightByElementFourObserver.notify('lalala');
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'apple'
            ) {
              tagHighlightByElementAppleFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'cherry'
            ) {
              tagHighlightByElementCherryFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'banana'
            ) {
              tagHighlightByElementBananaFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'mango'
            ) {
              tagHighlightByElementMangoFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'strawberry'
            ) {
              tagHighlightByElementStrawberryFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'pear'
            ) {
              tagHighlightByElementPearFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'butterfly'
            ) {
              tagHighlightByElementButterflyFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'bee'
            ) {
              tagHighlightByElementBeeFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'ladybug'
            ) {
              tagHighlightByElementLadybugFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'dumpling'
            ) {
              tagHighlightByElementDumplingFour.notify('lalala');
            }
            branchFourTagUnhighlightByElementObserver.notify('lalala');
            branchFourPicObserverUnhighlight.notify('lalala');
          });

          gameElement.addEventListener('mouseout', () => {
            tagUnhighlightByElementFourObserver.notify('lalala');
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'apple'
            ) {
              tagUnhighlightByElementAppleFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'cherry'
            ) {
              tagUnhighlightByElementCherryFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'banana'
            ) {
              tagUnhighlightByElementBananaFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'mango'
            ) {
              tagUnhighlightByElementMangoFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'strawberry'
            ) {
              tagUnhighlightByElementStrawberryFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'pear'
            ) {
              tagUnhighlightByElementPearFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'butterfly'
            ) {
              tagUnhighlightByElementButterflyFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName === 'bee'
            ) {
              tagUnhighlightByElementBeeFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'ladybug'
            ) {
              tagUnhighlightByElementLadybugFour.notify('lalala');
            }
            if (
              levelsMarkup[this.store.currentLevel][i][index].tagName ===
              'dumpling'
            ) {
              tagUnhighlightByElementDumplingFour.notify('lalala');
            }
          });

          gameElement.addEventListener('mouseover', () => {
            tagHighlightByElementFourObserver.notify('lalala');
            branchFourTagUnhighlightByElementObserver.notify('lalala');
            branchFourPicObserverUnhighlight.notify('lalala');
          });

          gameElement.addEventListener('mouseout', () => {
            tagUnhighlightByElementFourObserver.notify('lalala');
          });

          gameElementHighlightFourTagHover.subscribe(() => {
            gameElement.style.filter = 'drop-shadow(0 0 1vw #ffe5eb)';
          });

          gameElementUnhighlightFourTagHover.subscribe(() => {
            gameElement.style.filter = 'none';
          });

          gameElementTooltipAppendObserverFourTagHover.subscribe(() => {
            gameElement.append(gameElementTooltip.node);
          });

          gameElementTooltipRemoveObserverFourTagHover.subscribe(() => {
            gameElementTooltip.node.remove();
          });

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

            if (
              levelsMarkup[this.store.currentLevel][i][index].children.anim ===
              'yes'
            ) {
              gameElementChild.style.animationName = 'pick_me_child_anim';
            }

            if (
              levelsMarkup[this.store.currentLevel][i][index].children.anim ===
              'no'
            ) {
              gameElementChild.style.animationName = 'unset';
            }

            correctSelectorChildElementShake.subscribe(() => {
              BranchImitation.correctSelectorElementAnim(gameElementChild);
            });

            incorrectSelectorChildElementShake.subscribe(() => {
              if (
                levelsMarkup[this.store.currentLevel][i][index]?.children
                  ?.anim === 'yes'
              ) {
                BranchImitation.incorrectSelectorElementAnim(gameElementChild);
                setTimeout(() => {
                  gameElementChild.style.animationName = 'pick_me_child_anim';
                  gameElementChild.style.animationDuration = '2s';
                  gameElementChild.style.animationIterationCount = 'infinite';
                  gameElementChild.style.animationTimingFunction = 'linear';
                }, 1000);
              }
            });
          }
        }
      }
    }
  }

  public static incorrectSelectorElementAnim(element: HTMLElement): void {
    const thisElement = element;
    thisElement.style.animationName = 'css_shake_anim';
    thisElement.style.animationDuration = '0.8s';
    thisElement.style.animationIterationCount = '1';
    thisElement.style.animationTimingFunction = 'linear';
  }

  public static correctSelectorElementAnim(element: HTMLElement): void {
    const thisElement = element;
    thisElement.style.animationName = 'win_anim';
    thisElement.style.animationDuration = '0.8s';
    thisElement.style.animationIterationCount = '1';
    thisElement.style.animationTimingFunction = 'linear';
  }
}
