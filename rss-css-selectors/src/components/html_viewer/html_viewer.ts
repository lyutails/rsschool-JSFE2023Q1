import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

import { levelsMarkup } from '@/data/levels_markup';
import { markupNumbers } from '@/data/markup_numbers';
import { currentLevelObserver, store } from '@/store';

export const appleTooltipAppendObserverTagHover = new Observer();
export const appleTooltipRemoveObserverTagHover = new Observer();

export const htmlviewerObserverDay = new Observer();
export const htmlviewerObserverNight = new Observer();

export const treeObserverHighlight = new Observer();
export const treeObserverUnhighlight = new Observer();

export const branchOneObserverHighlight = new Observer();
export const branchOneObserverUnhighlight = new Observer();

export const branchTwoObserverHighlight = new Observer();
export const branchTwoObserverUnhighlight = new Observer();

export const branchThreeObserverHighlight = new Observer();
export const branchThreeObserverUnhighlight = new Observer();

export const branchFourObserverHighlight = new Observer();
export const branchFourObserverUnhighlight = new Observer();

export const gameElementHighlightTagHover = new Observer();
export const gameElementUnhighlightTagHover = new Observer();

export const gameElementHighlihgtActualElementHover = new Observer();
export const gameElementUnhighlihgtActualElementHover = new Observer();

export const viceVersaOneHighlightTagObserver = new Observer();
export const viceVersaOneUnhighlightTagObserver = new Observer();

export const viceVersaTwoHighlightTagObserver = new Observer();
export const viceVersaTwoUnhighlightTagObserver = new Observer();

export const viceVersaThreeHighlightTagObserver = new Observer();
export const viceVersaThreeUnhighlightTagObserver = new Observer();

export const viceVersaFourHighlightTagObserver = new Observer();
export const viceVersaFourUnhighlightTagObserver = new Observer();

export const tagHighlightByElementObserver = new Observer();
export const tagUnhighlightByElementObserver = new Observer();

export const branchOneTagHighlightByElementObserver = new Observer();
export const branchOneTagUnhighlightByElementObserver = new Observer();

export const branchTwoTagHighlightByElementObserver = new Observer();
export const branchTwoTagUnhighlightByElementObserver = new Observer();

export const branchThreeTagHighlightByElementObserver = new Observer();
export const branchThreeTagUnhighlightByElementObserver = new Observer();

export const branchFourTagHighlightByElementObserver = new Observer();
export const branchFourTagUnhighlightByElementObserver = new Observer();

export class HTMLViewer extends BaseComponent<'div'> {
  public store = store;
  public branchOneOpeningViewerTag: BaseComponent;
  public branchOneClosingViewerTag: BaseComponent;
  public branchTwoOpeningViewerTag: BaseComponent;
  public branchTwoClosingViewerTag: BaseComponent;
  public branchThreeOpeningViewerTag: BaseComponent;
  public branchThreeClosingViewerTag: BaseComponent;
  public branchFourOpeningViewerTag: BaseComponent;
  public branchFourClosingViewerTag: BaseComponent;
  public htmlText: BaseComponent;
  public treeViewerOpeningTag: BaseComponent;
  public treeViewerClosingTag: BaseComponent;
  public firstBranchChildren: BaseComponent;
  public secondBranchChildren: BaseComponent;
  public thirdBranchChildren: BaseComponent;
  public fourthBranchChildren: BaseComponent;
  constructor() {
    super({
      tagName: 'div',
      classList: ['html_viewer']
    });

    const htmlviewerTitle = new BaseComponent({
      tagName: 'div',
      classList: ['html_viewer_title'],
      textContent: 'HTML Viewer'
    });

    htmlviewerObserverDay.subscribe(() => this.node.classList.add('recolour'));
    htmlviewerObserverNight.subscribe(() =>
      this.node.classList.remove('recolour')
    );

    const htmlNumbers = new BaseComponent({
      tagName: 'div',
      classList: ['html_viewer_numbers']
    });

    for (let i = 0; i < markupNumbers.length; i++) {
      const markupNumber = new BaseComponent({
        tagName: 'span',
        classList: ['html_viewer_number'],
        textContent: `${markupNumbers[i]}`
      });
      htmlNumbers.append(markupNumber);
    }

    this.branchOneOpeningViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '<branch>'
    });

    this.branchOneClosingViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '</branch>'
    });

    branchOneTagHighlightByElementObserver.subscribe(() => {
      this.branchOneOpeningViewerTag.node.style.color = 'aqua';
      this.branchOneClosingViewerTag.node.style.color = 'aqua';
    });

    branchOneTagUnhighlightByElementObserver.subscribe(() => {
      this.branchOneOpeningViewerTag.node.style.color = 'unset';
      this.branchOneClosingViewerTag.node.style.color = 'unset';
    });

    this.branchTwoOpeningViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '<branch>'
    });

    this.branchTwoClosingViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '</branch>'
    });

    branchTwoTagHighlightByElementObserver.subscribe(() => {
      this.branchTwoOpeningViewerTag.node.style.color = 'aqua';
      this.branchTwoClosingViewerTag.node.style.color = 'aqua';
    });

    branchTwoTagUnhighlightByElementObserver.subscribe(() => {
      this.branchTwoOpeningViewerTag.node.style.color = 'unset';
      this.branchTwoClosingViewerTag.node.style.color = 'unset';
    });

    this.branchThreeOpeningViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '<branch>'
    });

    this.branchThreeClosingViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '</branch>'
    });

    branchThreeTagHighlightByElementObserver.subscribe(() => {
      this.branchThreeOpeningViewerTag.node.style.color = 'aqua';
      this.branchThreeClosingViewerTag.node.style.color = 'aqua';
    });

    branchThreeTagUnhighlightByElementObserver.subscribe(() => {
      this.branchThreeOpeningViewerTag.node.style.color = 'unset';
      this.branchThreeClosingViewerTag.node.style.color = 'unset';
    });

    this.branchFourOpeningViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '<branch>'
    });

    this.branchFourClosingViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '</branch>'
    });

    branchFourTagHighlightByElementObserver.subscribe(() => {
      this.branchFourOpeningViewerTag.node.style.color = 'aqua';
      this.branchFourClosingViewerTag.node.style.color = 'aqua';
    });

    branchFourTagUnhighlightByElementObserver.subscribe(() => {
      this.branchFourOpeningViewerTag.node.style.color = 'unset';
      this.branchFourClosingViewerTag.node.style.color = 'unset';
    });

    this.treeViewerOpeningTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_tree_opening'],
      textContent: '<tree>'
    });

    this.treeViewerClosingTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_tree_closing'],
      textContent: '</tree>'
    });

    this.htmlText = new BaseComponent({
      tagName: 'div',
      classList: ['html_viewer_text']
    });

    this.firstBranchChildren = new BaseComponent({
      tagName: 'div',
      classList: ['first_branch_children']
    });

    this.secondBranchChildren = new BaseComponent({
      tagName: 'div',
      classList: ['second_branch_children']
    });

    this.thirdBranchChildren = new BaseComponent({
      tagName: 'div',
      classList: ['second_branch_children']
    });

    this.fourthBranchChildren = new BaseComponent({
      tagName: 'div',
      classList: ['second_branch_children']
    });

    this.treeViewerOpeningTag.node.addEventListener('mouseover', () => {
      treeObserverHighlight.notify('lalala');
      this.treeViewerClosingTag.node.style.color = 'red';
      this.treeViewerOpeningTag.node.style.color = 'red';
    });
    this.treeViewerOpeningTag.node.addEventListener('mouseout', () => {
      treeObserverUnhighlight.notify('lalala');
      this.treeViewerClosingTag.node.style.color = 'unset';
      this.treeViewerOpeningTag.node.style.color = 'unset';
    });
    this.treeViewerClosingTag.node.addEventListener('mouseover', () => {
      treeObserverHighlight.notify('lalala');
      this.treeViewerOpeningTag.node.style.color = 'red';
      this.treeViewerClosingTag.node.style.color = 'red';
    });
    this.treeViewerClosingTag.node.addEventListener('mouseout', () => {
      treeObserverUnhighlight.notify('lalala');
      this.treeViewerOpeningTag.node.style.color = 'unset';
      this.treeViewerClosingTag.node.style.color = 'unset';
    });

    const branchesOpeningTags = [
      this.branchOneOpeningViewerTag,
      this.branchTwoOpeningViewerTag,
      this.branchThreeOpeningViewerTag,
      this.branchFourOpeningViewerTag
    ];

    const branchesClosingTags = [
      this.branchOneClosingViewerTag,
      this.branchTwoClosingViewerTag,
      this.branchThreeClosingViewerTag,
      this.branchFourClosingViewerTag
    ];

    const observersBranchHightlight = [
      branchOneObserverHighlight,
      branchTwoObserverHighlight,
      branchThreeObserverHighlight,
      branchFourObserverHighlight
    ];

    const observersBranchUnhighlight = [
      branchOneObserverUnhighlight,
      branchTwoObserverUnhighlight,
      branchThreeObserverUnhighlight,
      branchFourObserverUnhighlight
    ];

    branchesOpeningTags.forEach((branch, index) => {
      branch.node.addEventListener('mouseover', () => {
        observersBranchHightlight[index].notify('lalala');
        branchesOpeningTags[index].node.style.color = 'aqua';
        branchesClosingTags[index].node.style.color = 'aqua';
      });
    });

    branchesOpeningTags.forEach((branch, index) => {
      branch.node.addEventListener('mouseout', () => {
        observersBranchUnhighlight[index].notify('lalala');
        branchesOpeningTags[index].node.style.color = 'unset';
        branchesClosingTags[index].node.style.color = 'unset';
      });
    });

    branchesClosingTags.forEach((branch, index) => {
      branch.node.addEventListener('mouseover', () => {
        observersBranchHightlight[index].notify('lalala');
        branchesOpeningTags[index].node.style.color = 'aqua';
        branchesClosingTags[index].node.style.color = 'aqua';
      });
    });

    branchesClosingTags.forEach((branch, index) => {
      branch.node.addEventListener('mouseout', () => {
        observersBranchUnhighlight[index].notify('lalala');
        branchesOpeningTags[index].node.style.color = 'unset';
        branchesClosingTags[index].node.style.color = 'unset';
      });
    });

    const htmlMarkup = new BaseComponent({
      tagName: 'div',
      classList: ['html_viewer_markup'],
      textContent: '',
      children: [htmlNumbers, this.htmlText]
    });

    this.node.append(htmlviewerTitle.node, htmlMarkup.node);

    currentLevelObserver.subscribe(() => this.render());

    this.render();
  }

  public render(): void {
    this.firstBranchChildren.node.textContent = '';
    this.secondBranchChildren.node.textContent = '';
    this.thirdBranchChildren.node.textContent = '';
    this.fourthBranchChildren.node.textContent = '';

    const { currentLevel } = this.store;

    for (let i = 0; i < levelsMarkup[currentLevel].length; i++) {
      for (let j = 0; j < levelsMarkup[currentLevel][0].length; j++) {
        if (
          i === 0 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagOneOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagOneOpening.node.textContent = `<${levelsMarkup[currentLevel][0][j].tagName}>`;

          childTagOneOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          viceVersaOneHighlightTagObserver.subscribe(() => {
            childTagOneOpening.node.classList.add('child_colour');
          });

          viceVersaOneUnhighlightTagObserver.subscribe(() => {
            childTagOneOpening.node.classList.remove('child_colour');
          });

          if (levelsMarkup[currentLevel][0][j].children.tagName !== '') {
            const childTagOneOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });

            childTagOneOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][0][j].children.tagName}></${levelsMarkup[currentLevel][0][j].children.tagName}>`;

            childTagOneOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagOneOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagOneOpening.append(childTagOneOpeningChild);
          }

          const childTagOneClosing = new BaseComponent({
            tagName: 'span',
            classList: ['markup_child']
          });

          tagHighlightByElementObserver.subscribe(() => {
            childTagOneOpening.node.classList.add('child_colour');
            childTagOneClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementObserver.subscribe(() => {
            childTagOneOpening.node.classList.remove('child_colour');
            childTagOneClosing.node.classList.remove('child_colour');
          });

          childTagOneClosing.node.textContent = `</${levelsMarkup[currentLevel][0][j].tagName}>`;

          childTagOneClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          viceVersaOneHighlightTagObserver.subscribe(() => {
            childTagOneClosing.node.classList.add('child_colour');
          });

          viceVersaOneUnhighlightTagObserver.subscribe(() => {
            childTagOneClosing.node.classList.remove('child_colour');
          });

          this.firstBranchChildren.append(
            childTagOneOpening,
            childTagOneClosing
          );
        }

        if (
          i === 0 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].classList !== '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagOneOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagOneOpening.node.textContent = `<${levelsMarkup[currentLevel][0][j].tagName} class="${levelsMarkup[currentLevel][0][j].classList}">`;

          childTagOneOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          viceVersaOneHighlightTagObserver.subscribe(() => {
            childTagOneOpening.node.classList.add('child_colour');
          });

          viceVersaOneUnhighlightTagObserver.subscribe(() => {
            childTagOneOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][0][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][0][j].children.classList !== ''
          ) {
            const childTagOneOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagOneOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][0][j].children.tagName} class="${levelsMarkup[currentLevel][0][j].children.classList}"></${levelsMarkup[currentLevel][0][j].children.tagName}>`;

            childTagOneOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagOneOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagOneOpening.append(childTagOneOpeningChild);
          }

          const childTagOneClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagOneClosing.node.textContent = `</${levelsMarkup[currentLevel][0][j].tagName}>`;

          childTagOneClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          viceVersaOneHighlightTagObserver.subscribe(() => {
            childTagOneClosing.node.classList.add('child_colour');
          });

          viceVersaOneUnhighlightTagObserver.subscribe(() => {
            childTagOneClosing.node.classList.remove('child_colour');
          });

          this.firstBranchChildren.append(
            childTagOneOpening,
            childTagOneClosing
          );
        }

        if (
          i === 0 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id !== '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagOneOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagOneOpening.node.textContent = `<${levelsMarkup[currentLevel][0][j].tagName} id="${levelsMarkup[currentLevel][0][j].id}">`;

          childTagOneOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          viceVersaOneHighlightTagObserver.subscribe(() => {
            childTagOneOpening.node.classList.add('child_colour');
          });

          viceVersaOneUnhighlightTagObserver.subscribe(() => {
            childTagOneOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][0][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][0][j].children.id !== ''
          ) {
            const childTagOneOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagOneOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][0][j].children.tagName} id="${levelsMarkup[currentLevel][0][j].children.id}"></${levelsMarkup[currentLevel][0][j].children.tagName}>`;

            childTagOneOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagOneOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagOneOpening.append(childTagOneOpeningChild);
          }

          const childTagOneClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagOneClosing.node.textContent = `</${levelsMarkup[currentLevel][0][j].tagName}>`;

          childTagOneClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          viceVersaOneHighlightTagObserver.subscribe(() => {
            childTagOneClosing.node.classList.add('child_colour');
          });

          viceVersaOneUnhighlightTagObserver.subscribe(() => {
            childTagOneClosing.node.classList.remove('child_colour');
          });

          this.firstBranchChildren.append(
            childTagOneOpening,
            childTagOneClosing
          );
        }

        if (
          i === 0 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id !== '' &&
          levelsMarkup[currentLevel][i][j].classList !== '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagOneOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagOneOpening.node.textContent = `<${levelsMarkup[currentLevel][0][j].tagName} class="${levelsMarkup[currentLevel][0][j].classList}" id="${levelsMarkup[currentLevel][0][j].id}">`;

          childTagOneOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          viceVersaOneHighlightTagObserver.subscribe(() => {
            childTagOneOpening.node.classList.add('child_colour');
          });

          viceVersaOneUnhighlightTagObserver.subscribe(() => {
            childTagOneOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][0][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][0][j].children.id !== ''
          ) {
            const childTagOneOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagOneOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][0][j].children.tagName} class="${levelsMarkup[currentLevel][0][j].children.classList}"></${levelsMarkup[currentLevel][0][j].children.tagName}>`;

            childTagOneOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagOneOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagOneOpening.append(childTagOneOpeningChild);
          }

          const childTagOneClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagOneClosing.node.textContent = `</${levelsMarkup[currentLevel][0][j].tagName}>`;

          childTagOneClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          viceVersaOneHighlightTagObserver.subscribe(() => {
            childTagOneClosing.node.classList.add('child_colour');
          });

          viceVersaOneUnhighlightTagObserver.subscribe(() => {
            childTagOneClosing.node.classList.remove('child_colour');
          });

          this.firstBranchChildren.append(
            childTagOneOpening,
            childTagOneClosing
          );
        }

        if (
          i === 0 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].attribute !== ''
        ) {
          const childTagOneOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagOneOpening.node.textContent = `<${levelsMarkup[currentLevel][0][j].tagName} for='${levelsMarkup[currentLevel][0][j].attribute}'>`;

          childTagOneOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          viceVersaOneHighlightTagObserver.subscribe(() => {
            childTagOneOpening.node.classList.add('child_colour');
          });

          viceVersaOneUnhighlightTagObserver.subscribe(() => {
            childTagOneOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][0][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][0][j].children.id !== ''
          ) {
            const childTagOneOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagOneOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][0][j].children.tagName} id="${levelsMarkup[currentLevel][0][j].children.id}"></${levelsMarkup[currentLevel][0][j].children.tagName}>`;

            childTagOneOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagOneOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagOneOpening.append(childTagOneOpeningChild);
          }

          const childTagOneClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagOneClosing.node.textContent = `</${levelsMarkup[currentLevel][0][j].tagName}>`;

          childTagOneClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          viceVersaOneHighlightTagObserver.subscribe(() => {
            childTagOneClosing.node.classList.add('child_colour');
          });

          viceVersaOneUnhighlightTagObserver.subscribe(() => {
            childTagOneClosing.node.classList.remove('child_colour');
          });

          this.firstBranchChildren.append(
            childTagOneOpening,
            childTagOneClosing
          );
        }
      }

      for (let j = 0; j < levelsMarkup[currentLevel][1].length; j++) {
        if (
          i === 1 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagTwoOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagTwoOpening.node.textContent = `<${levelsMarkup[currentLevel][1][j].tagName}>`;

          childTagTwoOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          viceVersaTwoHighlightTagObserver.subscribe(() => {
            childTagTwoOpening.node.classList.add('child_colour');
          });

          viceVersaTwoUnhighlightTagObserver.subscribe(() => {
            childTagTwoOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][1][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][1][j].children.classList === ''
          ) {
            const childTagTwoOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagTwoOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][1][j].children.tagName}></${levelsMarkup[currentLevel][1][j].children.tagName}>`;

            childTagTwoOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagTwoOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagTwoOpening.append(childTagTwoOpeningChild);
          }

          const childTagTwoClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagTwoClosing.node.textContent = `</${levelsMarkup[currentLevel][1][j].tagName}>`;

          childTagTwoClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          viceVersaTwoHighlightTagObserver.subscribe(() => {
            childTagTwoClosing.node.classList.add('child_colour');
          });

          viceVersaTwoUnhighlightTagObserver.subscribe(() => {
            childTagTwoClosing.node.classList.remove('child_colour');
          });

          this.secondBranchChildren.append(
            childTagTwoOpening,
            childTagTwoClosing
          );
        }

        if (
          i === 1 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].classList !== '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagTwoOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagTwoOpening.node.textContent = `<${levelsMarkup[currentLevel][1][j].tagName} class="${levelsMarkup[currentLevel][1][j].classList}">`;

          childTagTwoOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          viceVersaTwoHighlightTagObserver.subscribe(() => {
            childTagTwoOpening.node.classList.add('child_colour');
          });

          viceVersaTwoUnhighlightTagObserver.subscribe(() => {
            childTagTwoOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][1][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][1][j].children.classList !== ''
          ) {
            const childTagTwoOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagTwoOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][1][j].children.tagName} class="${levelsMarkup[currentLevel][1][j].children.classList}"></${levelsMarkup[currentLevel][1][j].children.tagName}>`;

            childTagTwoOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagTwoOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagTwoOpening.append(childTagTwoOpeningChild);
          }

          const childTagTwoClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagTwoClosing.node.textContent = `</${levelsMarkup[currentLevel][1][j].tagName}>`;

          childTagTwoClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          viceVersaTwoHighlightTagObserver.subscribe(() => {
            childTagTwoClosing.node.classList.add('child_colour');
          });

          viceVersaTwoUnhighlightTagObserver.subscribe(() => {
            childTagTwoClosing.node.classList.remove('child_colour');
          });

          this.secondBranchChildren.append(
            childTagTwoOpening,
            childTagTwoClosing
          );
        }

        if (
          i === 1 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id !== '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagTwoOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagTwoOpening.node.textContent = `<${levelsMarkup[currentLevel][1][j].tagName} id="${levelsMarkup[currentLevel][1][j].id}">`;

          childTagTwoOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          viceVersaTwoHighlightTagObserver.subscribe(() => {
            childTagTwoOpening.node.classList.add('child_colour');
          });

          viceVersaTwoUnhighlightTagObserver.subscribe(() => {
            childTagTwoOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][1][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][1][j].children.id !== ''
          ) {
            const childTagTwoOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagTwoOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][1][j].children.tagName} id="${levelsMarkup[currentLevel][1][j].children.id}"></${levelsMarkup[currentLevel][1][j].children.tagName}>`;

            childTagTwoOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagTwoOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagTwoOpening.append(childTagTwoOpeningChild);
          }

          const childTagTwoClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagTwoClosing.node.textContent = `</${levelsMarkup[currentLevel][1][j].tagName}>`;

          childTagTwoClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          viceVersaTwoHighlightTagObserver.subscribe(() => {
            childTagTwoClosing.node.classList.add('child_colour');
          });

          viceVersaTwoUnhighlightTagObserver.subscribe(() => {
            childTagTwoClosing.node.classList.remove('child_colour');
          });

          this.secondBranchChildren.append(
            childTagTwoOpening,
            childTagTwoClosing
          );
        }

        if (
          i === 1 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id !== '' &&
          levelsMarkup[currentLevel][i][j].classList !== '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagTwoOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagTwoOpening.node.textContent = `<${levelsMarkup[currentLevel][1][j].tagName} class="${levelsMarkup[currentLevel][1][j].classList}" id="${levelsMarkup[currentLevel][1][j].id}">`;

          childTagTwoOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          viceVersaTwoHighlightTagObserver.subscribe(() => {
            childTagTwoOpening.node.classList.add('child_colour');
          });

          viceVersaTwoUnhighlightTagObserver.subscribe(() => {
            childTagTwoOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][1][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][1][j].children.classList !== ''
          ) {
            const childTagTwoOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagTwoOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][1][j].children.tagName} class="${levelsMarkup[currentLevel][1][j].children.classList}"></${levelsMarkup[currentLevel][1][j].children.tagName}>`;

            childTagTwoOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagTwoOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagTwoOpening.append(childTagTwoOpeningChild);
          }

          const childTagTwoClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagTwoClosing.node.textContent = `</${levelsMarkup[currentLevel][1][j].tagName}>`;

          childTagTwoClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          viceVersaTwoHighlightTagObserver.subscribe(() => {
            childTagTwoClosing.node.classList.add('child_colour');
          });

          viceVersaTwoUnhighlightTagObserver.subscribe(() => {
            childTagTwoClosing.node.classList.remove('child_colour');
          });

          this.secondBranchChildren.append(
            childTagTwoOpening,
            childTagTwoClosing
          );
        }

        if (
          i === 1 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].attribute !== ''
        ) {
          const childTagTwoOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagTwoOpening.node.textContent = `<${levelsMarkup[currentLevel][1][j].tagName} for='${levelsMarkup[currentLevel][1][j].attribute}'>`;

          childTagTwoOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          viceVersaTwoHighlightTagObserver.subscribe(() => {
            childTagTwoOpening.node.classList.add('child_colour');
          });

          viceVersaTwoUnhighlightTagObserver.subscribe(() => {
            childTagTwoOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][1][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][1][j].children.id !== ''
          ) {
            const childTagTwoOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagTwoOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][1][j].children.tagName} id="${levelsMarkup[currentLevel][1][j].children.id}"></${levelsMarkup[currentLevel][1][j].children.tagName}>`;

            childTagTwoOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagTwoOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagTwoOpening.append(childTagTwoOpeningChild);
          }

          const childTagTwoClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagTwoClosing.node.textContent = `</${levelsMarkup[currentLevel][1][j].tagName}>`;

          childTagTwoClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          viceVersaTwoHighlightTagObserver.subscribe(() => {
            childTagTwoClosing.node.classList.add('child_colour');
          });

          viceVersaTwoUnhighlightTagObserver.subscribe(() => {
            childTagTwoClosing.node.classList.remove('child_colour');
          });

          this.secondBranchChildren.append(
            childTagTwoOpening,
            childTagTwoClosing
          );
        }
      }

      for (let j = 0; j < levelsMarkup[currentLevel][2].length; j++) {
        if (
          i === 2 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagThreeOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagThreeOpening.node.textContent = `<${levelsMarkup[currentLevel][2][j].tagName}>`;

          childTagThreeOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          viceVersaThreeHighlightTagObserver.subscribe(() => {
            childTagThreeOpening.node.classList.add('child_colour');
          });

          viceVersaThreeUnhighlightTagObserver.subscribe(() => {
            childTagThreeOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][2][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][2][j].children.classList === ''
          ) {
            const childTagThreeOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagThreeOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][2][j].children.tagName}></${levelsMarkup[currentLevel][2][j].children.tagName}>`;

            childTagThreeOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagThreeOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagThreeOpening.append(childTagThreeOpeningChild);
          }

          const childTagThreeClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagThreeClosing.node.textContent = `</${levelsMarkup[currentLevel][2][j].tagName}>`;

          childTagThreeClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          viceVersaThreeHighlightTagObserver.subscribe(() => {
            childTagThreeClosing.node.classList.add('child_colour');
          });

          viceVersaThreeUnhighlightTagObserver.subscribe(() => {
            childTagThreeClosing.node.classList.remove('child_colour');
          });

          this.thirdBranchChildren.append(
            childTagThreeOpening,
            childTagThreeClosing
          );
        }

        if (
          i === 2 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].classList !== '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagThreeOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagThreeOpening.node.textContent = `<${levelsMarkup[currentLevel][2][j].tagName} class="${levelsMarkup[currentLevel][2][j].classList}">`;

          childTagThreeOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          viceVersaThreeHighlightTagObserver.subscribe(() => {
            childTagThreeOpening.node.classList.add('child_colour');
          });

          viceVersaThreeUnhighlightTagObserver.subscribe(() => {
            childTagThreeOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][2][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][2][j].children.classList !== ''
          ) {
            const childTagThreeOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagThreeOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][2][j].children.tagName} class="${levelsMarkup[currentLevel][2][j].children.classList}"></${levelsMarkup[currentLevel][2][j].children.tagName}>`;

            childTagThreeOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagThreeOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagThreeOpening.append(childTagThreeOpeningChild);
          }

          const childTagThreeClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagThreeClosing.node.textContent = `</${levelsMarkup[currentLevel][2][j].tagName}>`;

          childTagThreeClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          viceVersaThreeHighlightTagObserver.subscribe(() => {
            childTagThreeClosing.node.classList.add('child_colour');
          });

          viceVersaThreeUnhighlightTagObserver.subscribe(() => {
            childTagThreeClosing.node.classList.remove('child_colour');
          });

          this.thirdBranchChildren.append(
            childTagThreeOpening,
            childTagThreeClosing
          );
        }

        if (
          i === 2 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id !== '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagThreeOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagThreeOpening.node.textContent = `<${levelsMarkup[currentLevel][2][j].tagName} id="${levelsMarkup[currentLevel][2][j].id}">`;

          childTagThreeOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          viceVersaThreeHighlightTagObserver.subscribe(() => {
            childTagThreeOpening.node.classList.add('child_colour');
          });

          viceVersaThreeUnhighlightTagObserver.subscribe(() => {
            childTagThreeOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][2][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][2][j].children.id !== ''
          ) {
            const childTagThreeOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagThreeOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][2][j].children.tagName} id="${levelsMarkup[currentLevel][2][j].children.id}"></${levelsMarkup[currentLevel][2][j].children.tagName}>`;

            childTagThreeOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagThreeOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagThreeOpening.append(childTagThreeOpeningChild);
          }

          const childTagThreeClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagThreeClosing.node.textContent = `</${levelsMarkup[currentLevel][2][j].tagName}>`;

          childTagThreeClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          viceVersaThreeHighlightTagObserver.subscribe(() => {
            childTagThreeClosing.node.classList.add('child_colour');
          });

          viceVersaThreeUnhighlightTagObserver.subscribe(() => {
            childTagThreeClosing.node.classList.remove('child_colour');
          });

          this.thirdBranchChildren.append(
            childTagThreeOpening,
            childTagThreeClosing
          );
        }

        if (
          i === 2 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id !== '' &&
          levelsMarkup[currentLevel][i][j].classList !== '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagThreeOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagThreeOpening.node.textContent = `<${levelsMarkup[currentLevel][2][j].tagName} class="${levelsMarkup[currentLevel][2][j].classList}" id="${levelsMarkup[currentLevel][2][j].id}">`;

          childTagThreeOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          viceVersaThreeHighlightTagObserver.subscribe(() => {
            childTagThreeOpening.node.classList.add('child_colour');
          });

          viceVersaThreeUnhighlightTagObserver.subscribe(() => {
            childTagThreeOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][2][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][2][j].children.id !== ''
          ) {
            const childTagThreeOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagThreeOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][2][j].children.tagName} class="${levelsMarkup[currentLevel][2][j].children.classList}"></${levelsMarkup[currentLevel][2][j].children.tagName}>`;

            childTagThreeOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagThreeOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagThreeOpening.append(childTagThreeOpeningChild);
          }

          const childTagThreeClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagThreeClosing.node.textContent = `</${levelsMarkup[currentLevel][2][j].tagName}>`;

          childTagThreeClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          viceVersaThreeHighlightTagObserver.subscribe(() => {
            childTagThreeClosing.node.classList.add('child_colour');
          });

          viceVersaThreeUnhighlightTagObserver.subscribe(() => {
            childTagThreeClosing.node.classList.remove('child_colour');
          });

          this.thirdBranchChildren.append(
            childTagThreeOpening,
            childTagThreeClosing
          );
        }

        if (
          i === 2 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].attribute !== ''
        ) {
          const childTagThreeOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagThreeOpening.node.textContent = `<${levelsMarkup[currentLevel][2][j].tagName} for='${levelsMarkup[currentLevel][2][j].attribute}'>`;

          childTagThreeOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          viceVersaThreeHighlightTagObserver.subscribe(() => {
            childTagThreeOpening.node.classList.add('child_colour');
          });

          viceVersaThreeUnhighlightTagObserver.subscribe(() => {
            childTagThreeOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][2][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][2][j].children.id !== ''
          ) {
            const childTagThreeOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagThreeOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][2][j].children.tagName} id="${levelsMarkup[currentLevel][2][j].children.id}"></${levelsMarkup[currentLevel][2][j].children.tagName}>`;

            childTagThreeOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagThreeOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagThreeOpening.append(childTagThreeOpeningChild);
          }

          const childTagThreeClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagThreeClosing.node.textContent = `</${levelsMarkup[currentLevel][2][j].tagName}>`;

          childTagThreeClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          viceVersaThreeHighlightTagObserver.subscribe(() => {
            childTagThreeClosing.node.classList.add('child_colour');
          });

          viceVersaThreeUnhighlightTagObserver.subscribe(() => {
            childTagThreeClosing.node.classList.remove('child_colour');
          });

          this.thirdBranchChildren.append(
            childTagThreeOpening,
            childTagThreeClosing
          );
        }
      }

      for (let j = 0; j < levelsMarkup[currentLevel][3].length; j++) {
        if (
          i === 3 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagFourOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagFourOpening.node.textContent = `<${levelsMarkup[currentLevel][3][j].tagName}>`;

          childTagFourOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          viceVersaFourHighlightTagObserver.subscribe(() => {
            childTagFourOpening.node.classList.add('child_colour');
          });

          viceVersaFourUnhighlightTagObserver.subscribe(() => {
            childTagFourOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][3][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][3][j].children.classList === ''
          ) {
            const childTagFourOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagFourOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][3][j].children.tagName}></${levelsMarkup[currentLevel][3][j].children.tagName}>`;

            childTagFourOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagFourOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagFourOpening.append(childTagFourOpeningChild);
          }

          const childTagFourClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagFourClosing.node.textContent = `</${levelsMarkup[currentLevel][3][j].tagName}>`;

          childTagFourClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          viceVersaFourHighlightTagObserver.subscribe(() => {
            childTagFourClosing.node.classList.add('child_colour');
          });

          viceVersaFourUnhighlightTagObserver.subscribe(() => {
            childTagFourClosing.node.classList.remove('child_colour');
          });

          this.fourthBranchChildren.append(
            childTagFourOpening,
            childTagFourClosing
          );
        }

        if (
          i === 3 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].classList !== '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagFourOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagFourOpening.node.textContent = `<${levelsMarkup[currentLevel][3][j].tagName} class="${levelsMarkup[currentLevel][3][j].classList}">`;

          childTagFourOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          viceVersaFourHighlightTagObserver.subscribe(() => {
            childTagFourOpening.node.classList.add('child_colour');
          });

          viceVersaFourUnhighlightTagObserver.subscribe(() => {
            childTagFourOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][3][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][3][j].children.classList !== ''
          ) {
            const childTagFourOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagFourOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][3][j].children.tagName} class="${levelsMarkup[currentLevel][3][j].children.classList}"></${levelsMarkup[currentLevel][3][j].children.tagName}>`;

            childTagFourOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagFourOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagFourOpening.append(childTagFourOpeningChild);
          }

          const childTagFourClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagFourClosing.node.textContent = `</${levelsMarkup[currentLevel][3][j].tagName}>`;

          childTagFourClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          viceVersaFourHighlightTagObserver.subscribe(() => {
            childTagFourClosing.node.classList.add('child_colour');
          });

          viceVersaFourUnhighlightTagObserver.subscribe(() => {
            childTagFourClosing.node.classList.remove('child_colour');
          });

          this.fourthBranchChildren.append(
            childTagFourOpening,
            childTagFourClosing
          );
        }

        if (
          i === 3 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id !== '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagFourOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagFourOpening.node.textContent = `<${levelsMarkup[currentLevel][3][j].tagName} id="${levelsMarkup[currentLevel][3][j].id}">`;

          childTagFourOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          viceVersaFourHighlightTagObserver.subscribe(() => {
            childTagFourOpening.node.classList.add('child_colour');
          });

          viceVersaFourUnhighlightTagObserver.subscribe(() => {
            childTagFourOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][3][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][3][j].children.id !== ''
          ) {
            const childTagFourOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagFourOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][3][j].children.tagName} id="${levelsMarkup[currentLevel][3][j].children.id}"></${levelsMarkup[currentLevel][3][j].children.tagName}>`;

            childTagFourOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagFourOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagFourOpening.append(childTagFourOpeningChild);
          }

          const childTagFourClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagFourClosing.node.textContent = `</${levelsMarkup[currentLevel][3][j].tagName}>`;

          childTagFourClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          viceVersaFourHighlightTagObserver.subscribe(() => {
            childTagFourClosing.node.classList.add('child_colour');
          });

          viceVersaFourUnhighlightTagObserver.subscribe(() => {
            childTagFourClosing.node.classList.remove('child_colour');
          });

          this.fourthBranchChildren.append(
            childTagFourOpening,
            childTagFourClosing
          );
        }

        if (
          i === 3 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id !== '' &&
          levelsMarkup[currentLevel][i][j].classList !== '' &&
          levelsMarkup[currentLevel][i][j].attribute === ''
        ) {
          const childTagFourOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagFourOpening.node.textContent = `<${levelsMarkup[currentLevel][3][j].tagName} class="${levelsMarkup[currentLevel][3][j].classList}" id="${levelsMarkup[currentLevel][3][j].id}">`;

          childTagFourOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          viceVersaFourHighlightTagObserver.subscribe(() => {
            childTagFourOpening.node.classList.add('child_colour');
          });

          viceVersaFourUnhighlightTagObserver.subscribe(() => {
            childTagFourOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][3][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][3][j].children.classList !== ''
          ) {
            const childTagFourOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagFourOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][3][j].children.tagName} class="${levelsMarkup[currentLevel][3][j].children.classList}"></${levelsMarkup[currentLevel][3][j].children.tagName}>`;

            childTagFourOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagFourOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagFourOpening.append(childTagFourOpeningChild);
          }

          const childTagFourClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagFourClosing.node.textContent = `</${levelsMarkup[currentLevel][3][j].tagName}>`;

          childTagFourClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          viceVersaFourHighlightTagObserver.subscribe(() => {
            childTagFourClosing.node.classList.add('child_colour');
          });

          viceVersaFourUnhighlightTagObserver.subscribe(() => {
            childTagFourClosing.node.classList.remove('child_colour');
          });

          this.fourthBranchChildren.append(
            childTagFourOpening,
            childTagFourClosing
          );
        }

        if (
          i === 3 &&
          levelsMarkup[currentLevel][j] &&
          levelsMarkup[currentLevel][i][j].tagName !== '' &&
          levelsMarkup[currentLevel][i][j].id === '' &&
          levelsMarkup[currentLevel][i][j].classList === '' &&
          levelsMarkup[currentLevel][i][j].attribute !== ''
        ) {
          const childTagFourOpening = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagFourOpening.node.textContent = `<${levelsMarkup[currentLevel][3][j].tagName} for='${levelsMarkup[currentLevel][3][j].attribute}'>`;

          childTagFourOpening.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          viceVersaFourHighlightTagObserver.subscribe(() => {
            childTagFourOpening.node.classList.add('child_colour');
          });

          viceVersaFourUnhighlightTagObserver.subscribe(() => {
            childTagFourOpening.node.classList.remove('child_colour');
          });

          if (
            levelsMarkup[currentLevel][3][j].children.tagName !== '' &&
            levelsMarkup[currentLevel][3][j].children.id !== ''
          ) {
            const childTagFourOpeningChild = new BaseComponent({
              tagName: 'div',
              classList: ['markup_child']
            });
            childTagFourOpeningChild.node.textContent = `<${levelsMarkup[currentLevel][3][j].children.tagName} id="${levelsMarkup[currentLevel][3][j].children.id}"></${levelsMarkup[currentLevel][3][j].children.tagName}>`;

            childTagFourOpeningChild.node.addEventListener('mouseover', () => {
              gameElementHighlightTagHover.notify('lalala');
              appleTooltipAppendObserverTagHover.notify('lalala');
            });

            childTagFourOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              appleTooltipRemoveObserverTagHover.notify('lalala');
            });

            childTagFourOpening.append(childTagFourOpeningChild);
          }

          const childTagFourClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagFourClosing.node.textContent = `</${levelsMarkup[currentLevel][3][j].tagName}>`;

          childTagFourClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            appleTooltipAppendObserverTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            appleTooltipRemoveObserverTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          viceVersaFourHighlightTagObserver.subscribe(() => {
            childTagFourClosing.node.classList.add('child_colour');
          });

          viceVersaFourUnhighlightTagObserver.subscribe(() => {
            childTagFourClosing.node.classList.remove('child_colour');
          });

          this.fourthBranchChildren.append(
            childTagFourOpening,
            childTagFourClosing
          );
        }
      }
    }

    this.htmlText.append(
      this.treeViewerOpeningTag,
      this.branchOneOpeningViewerTag,
      this.firstBranchChildren,
      this.branchOneClosingViewerTag,
      this.branchTwoOpeningViewerTag,
      this.secondBranchChildren,
      this.branchTwoClosingViewerTag,
      this.branchThreeOpeningViewerTag,
      this.thirdBranchChildren,
      this.branchThreeClosingViewerTag,
      this.branchFourOpeningViewerTag,
      this.fourthBranchChildren,
      this.branchFourClosingViewerTag,
      this.treeViewerClosingTag
    );
  }
}
