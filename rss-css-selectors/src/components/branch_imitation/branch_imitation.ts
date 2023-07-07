/* eslint-disable import/no-cycle */
import { BaseComponent } from '@/core/base-component';

import {
  correctSelectorChildElementShake,
  correctSelectorElementShake,
  incorrectSelectorChildElementShake,
  incorrectSelectorElementShake
} from '../css_editor';
import {
  appleTooltipAppendObserverTagHover,
  appleTooltipRemoveObserverTagHover,
  branchFourTagHighlightByElementObserver,
  branchFourTagUnhighlightByElementObserver,
  branchOneTagHighlightByElementObserver,
  branchOneTagUnhighlightByElementObserver,
  branchThreeTagHighlightByElementObserver,
  branchThreeTagUnhighlightByElementObserver,
  branchTwoTagHighlightByElementObserver,
  branchTwoTagUnhighlightByElementObserver,
  gameElementHighlightTagHover,
  gameElementHighlihgtActualElementHover,
  gameElementUnhighlightTagHover,
  gameElementUnhighlihgtActualElementHover,
  tagHighlightByElementFourObserver,
  tagHighlightByElementOneObserver,
  tagHighlightByElementThreeObserver,
  tagHighlightByElementTwoObserver,
  tagUnhighlightByElementFourObserver,
  tagUnhighlightByElementOneObserver,
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
    });

    this.branchThreeImitation.addEventListener('mouseout', () => {
      branchThreePicObserverUnhighlight.notify('lalala');
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
    });

    this.branchFourImitation.addEventListener('mouseout', () => {
      branchFourPicObserverUnhighlight.notify('lalala');
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

          if (i === 0) {
            gameElement.addEventListener('mouseover', () => {
              tagHighlightByElementOneObserver.notify('lalala');
            });

            gameElement.addEventListener('mouseout', () => {
              tagUnhighlightByElementOneObserver.notify('lalala');
            });
          }

          if (i === 1) {
            gameElement.addEventListener('mouseover', () => {
              tagHighlightByElementTwoObserver.notify('lalala');
            });

            gameElement.addEventListener('mouseout', () => {
              tagUnhighlightByElementTwoObserver.notify('lalala');
            });
          }

          if (i === 2) {
            gameElement.addEventListener('mouseover', () => {
              tagHighlightByElementThreeObserver.notify('lalala');
            });

            gameElement.addEventListener('mouseout', () => {
              tagUnhighlightByElementThreeObserver.notify('lalala');
            });
          }

          if (i === 3) {
            gameElement.addEventListener('mouseover', () => {
              tagHighlightByElementFourObserver.notify('lalala');
            });

            gameElement.addEventListener('mouseout', () => {
              tagUnhighlightByElementFourObserver.notify('lalala');
            });
          }
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

        const gameElementTooltip = new BaseComponent({
          tagName: 'div',
          classList: ['tooltip_apple'],
          textContent: `<${gameLevelElementTagName}>`
        });

        BranchImitation.setRandomPosition(gameElement, 16, 1);

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

        if (i === 0) {
          gameElement.addEventListener('mouseover', () => {
            tagHighlightByElementOneObserver.notify('lalala');
          });

          gameElement.addEventListener('mouseout', () => {
            tagUnhighlightByElementOneObserver.notify('lalala');
          });
        }

        if (i === 1) {
          gameElement.addEventListener('mouseover', () => {
            tagHighlightByElementTwoObserver.notify('lalala');
          });

          gameElement.addEventListener('mouseout', () => {
            tagUnhighlightByElementTwoObserver.notify('lalala');
          });
        }

        if (i === 2) {
          gameElement.addEventListener('mouseover', () => {
            tagHighlightByElementThreeObserver.notify('lalala');
          });

          gameElement.addEventListener('mouseout', () => {
            tagUnhighlightByElementThreeObserver.notify('lalala');
          });
        }

        if (i === 3) {
          gameElement.addEventListener('mouseover', () => {
            tagHighlightByElementFourObserver.notify('lalala');
          });

          gameElement.addEventListener('mouseout', () => {
            tagUnhighlightByElementFourObserver.notify('lalala');
          });
        }

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
