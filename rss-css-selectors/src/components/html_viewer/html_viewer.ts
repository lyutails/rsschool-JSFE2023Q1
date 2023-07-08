/* eslint-disable import/no-cycle */
import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';
import {
  Tree,
  qeteqTagByElementHighlight,
  qeteqTagByElementUnhighlight
} from '../tree';

import { levelsMarkup } from '@/data/levels_markup';
import { markupNumbers } from '@/data/markup_numbers';
import { currentLevelObserver, store } from '@/store';

export const gameElementTooltipAppendObserverOneTagHover = new Observer();
export const gameElementTooltipRemoveObserverOneTagHover = new Observer();

export const gameElementTooltipAppendObserverTwoTagHover = new Observer();
export const gameElementTooltipRemoveObserverTwoTagHover = new Observer();

export const gameElementTooltipAppendObserverThreeTagHover = new Observer();
export const gameElementTooltipRemoveObserverThreeTagHover = new Observer();

export const gameElementTooltipAppendObserverFourTagHover = new Observer();
export const gameElementTooltipRemoveObserverFourTagHover = new Observer();

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

export const gameElementHighlightOneTagHover = new Observer();
export const gameElementUnhighlightOneTagHover = new Observer();

export const gameElementHighlightTwoTagHover = new Observer();
export const gameElementUnhighlightTwoTagHover = new Observer();

export const gameElementHighlightThreeTagHover = new Observer();
export const gameElementUnhighlightThreeTagHover = new Observer();

export const gameElementHighlightFourTagHover = new Observer();
export const gameElementUnhighlightFourTagHover = new Observer();

export const gameElementOneHighlihgtActualElementHover = new Observer();
export const gameElementOneUnhighlihgtActualElementHover = new Observer();

export const gameElementTwoHighlihgtActualElementHover = new Observer();
export const gameElementTwoUnhighlihgtActualElementHover = new Observer();

export const gameElementThreeHighlihgtActualElementHover = new Observer();
export const gameElementThreeUnhighlihgtActualElementHover = new Observer();

export const gameElementFourHighlihgtActualElementHover = new Observer();
export const gameElementFourUnhighlihgtActualElementHover = new Observer();

export const viceVersaOneHighlightTagObserver = new Observer();
export const viceVersaOneUnhighlightTagObserver = new Observer();

export const viceVersaTwoHighlightTagObserver = new Observer();
export const viceVersaTwoUnhighlightTagObserver = new Observer();

export const viceVersaThreeHighlightTagObserver = new Observer();
export const viceVersaThreeUnhighlightTagObserver = new Observer();

export const viceVersaFourHighlightTagObserver = new Observer();
export const viceVersaFourUnhighlightTagObserver = new Observer();

export const tagHighlightByElementOneObserver = new Observer();
export const tagUnhighlightByElementOneObserver = new Observer();

export const tagHighlightByElementTwoObserver = new Observer();
export const tagUnhighlightByElementTwoObserver = new Observer();

export const tagHighlightByElementThreeObserver = new Observer();
export const tagUnhighlightByElementThreeObserver = new Observer();

export const tagHighlightByElementFourObserver = new Observer();
export const tagUnhighlightByElementFourObserver = new Observer();

export const branchOneTagHighlightByElementObserver = new Observer();
export const branchOneTagUnhighlightByElementObserver = new Observer();

export const branchTwoTagHighlightByElementObserver = new Observer();
export const branchTwoTagUnhighlightByElementObserver = new Observer();

export const branchThreeTagHighlightByElementObserver = new Observer();
export const branchThreeTagUnhighlightByElementObserver = new Observer();

export const branchFourTagHighlightByElementObserver = new Observer();
export const branchFourTagUnhighlightByElementObserver = new Observer();

export const qeteqTagHighlight = new Observer();
export const qeteqTagUnhighlight = new Observer();

export const tagHighlightByElementApple = new Observer();
export const tagUnhighlightByElementApple = new Observer();

export const tagHighlightByElementCherry = new Observer();
export const tagUnhighlightByElementCherry = new Observer();

export const tagHighlightByElementBanana = new Observer();
export const tagUnhighlightByElementBanana = new Observer();

export const tagHighlightByElementMango = new Observer();
export const tagUnhighlightByElementMango = new Observer();

export const tagHighlightByElementStrawberry = new Observer();
export const tagUnhighlightByElementStrawberry = new Observer();

export const tagHighlightByElementPear = new Observer();
export const tagUnhighlightByElementPear = new Observer();

export const tagHighlightByElementAppleTwo = new Observer();
export const tagUnhighlightByElementAppleTwo = new Observer();

export const tagHighlightByElementCherryTwo = new Observer();
export const tagUnhighlightByElementCherryTwo = new Observer();

export const tagHighlightByElementBananaTwo = new Observer();
export const tagUnhighlightByElementBananaTwo = new Observer();

export const tagHighlightByElementMangoTwo = new Observer();
export const tagUnhighlightByElementMangoTwo = new Observer();

export const tagHighlightByElementStrawberryTwo = new Observer();
export const tagUnhighlightByElementStrawberryTwo = new Observer();

export const tagHighlightByElementPearTwo = new Observer();
export const tagUnhighlightByElementPearTwo = new Observer();

export const tagHighlightByElementAppleThree = new Observer();
export const tagUnhighlightByElementAppleThree = new Observer();

export const tagHighlightByElementCherryThree = new Observer();
export const tagUnhighlightByElementCherryThree = new Observer();

export const tagHighlightByElementBananaThree = new Observer();
export const tagUnhighlightByElementBananaThree = new Observer();

export const tagHighlightByElementMangoThree = new Observer();
export const tagUnhighlightByElementMangoThree = new Observer();

export const tagHighlightByElementStrawberryThree = new Observer();
export const tagUnhighlightByElementStrawberryThree = new Observer();

export const tagHighlightByElementPearThree = new Observer();
export const tagUnhighlightByElementPearThree = new Observer();

export const tagHighlightByElementAppleFour = new Observer();
export const tagUnhighlightByElementAppleFour = new Observer();

export const tagHighlightByElementCherryFour = new Observer();
export const tagUnhighlightByElementCherryFour = new Observer();

export const tagHighlightByElementBananaFour = new Observer();
export const tagUnhighlightByElementBananaFour = new Observer();

export const tagHighlightByElementMangoFour = new Observer();
export const tagUnhighlightByElementMangoFour = new Observer();

export const tagHighlightByElementStrawberryFour = new Observer();
export const tagUnhighlightByElementStrawberryFour = new Observer();

export const tagHighlightByElementPearFour = new Observer();
export const tagUnhighlightByElementPearFour = new Observer();

export const tagHighlightByElementButterflyOne = new Observer();
export const tagUnhighlightByElementButterflyOne = new Observer();

export const tagHighlightByElementButterflyTwo = new Observer();
export const tagUnhighlightByElementButterflyTwo = new Observer();

export const tagHighlightByElementButterflyThree = new Observer();
export const tagUnhighlightByElementButterflyThree = new Observer();

export const tagHighlightByElementButterflyFour = new Observer();
export const tagUnhighlightByElementButterflyFour = new Observer();

export const tagHighlightByElementBeeOne = new Observer();
export const tagUnhighlightByElementBeeOne = new Observer();

export const tagHighlightByElementBeeTwo = new Observer();
export const tagUnhighlightByElementBeeTwo = new Observer();

export const tagHighlightByElementBeeThree = new Observer();
export const tagUnhighlightByElementBeeThree = new Observer();

export const tagHighlightByElementBeeFour = new Observer();
export const tagUnhighlightByElementBeeFour = new Observer();

export const tagHighlightByElementLadybugOne = new Observer();
export const tagUnhighlightByElementLadybugOne = new Observer();

export const tagHighlightByElementLadybugTwo = new Observer();
export const tagUnhighlightByElementLadybugTwo = new Observer();

export const tagHighlightByElementLadybugThree = new Observer();
export const tagUnhighlightByElementLadybugThree = new Observer();

export const tagHighlightByElementLadybugFour = new Observer();
export const tagUnhighlightByElementLadybugFour = new Observer();

export const tagHighlightByElementDumplingOne = new Observer();
export const tagUnhighlightByElementDumplingOne = new Observer();

export const tagHighlightByElementDumplingTwo = new Observer();
export const tagUnhighlightByElementDumplingTwo = new Observer();

export const tagHighlightByElementDumplingThree = new Observer();
export const tagUnhighlightByElementDumplingThree = new Observer();

export const tagHighlightByElementDumplingFour = new Observer();
export const tagUnhighlightByElementDumplingFour = new Observer();

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
  public static qeteqTags: BaseComponent<'span'>;
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

    HTMLViewer.qeteqTags = new BaseComponent({
      tagName: 'span',
      classList: ['qeteq_tags'],
      textContent: '<qeteq></qeteq>'
    });

    HTMLViewer.qeteqTags.node.addEventListener('mouseover', () => {
      qeteqTagHighlight.notify('lalala');
      HTMLViewer.qeteqTags.node.style.color = 'pink';
    });

    HTMLViewer.qeteqTags.node.addEventListener('mouseout', () => {
      qeteqTagUnhighlight.notify('lalala');
      HTMLViewer.qeteqTags.node.style.color = 'unset';
    });

    qeteqTagByElementHighlight.subscribe(() => {
      HTMLViewer.qeteqTags.node.style.color = 'pink';
    });

    qeteqTagByElementUnhighlight.subscribe(() => {
      HTMLViewer.qeteqTags.node.style.color = 'unset';
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightOneTagHover.notify('lalala');
            gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightOneTagHover.notify('lalala');
            gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverOneTagHover.notify('lalala');
              viceVersaOneHighlightTagObserver.notify('lalala');
            });

            childTagOneOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
              viceVersaOneUnhighlightTagObserver.notify('lalala');
            });

            childTagOneOpening.append(childTagOneOpeningChild);
          }

          const childTagOneClosing = new BaseComponent({
            tagName: 'span',
            classList: ['markup_child']
          });
          childTagOneClosing.node.textContent = `</${levelsMarkup[currentLevel][0][j].tagName}>`;

          if (childTagOneOpening.node.textContent === '<apple>') {
            tagHighlightByElementApple.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementApple.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherry.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherry.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<banana>') {
            tagHighlightByElementBanana.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBanana.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<mango>') {
            tagHighlightByElementMango.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMango.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberry.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberry.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<pear>') {
            tagHighlightByElementPear.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPear.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          // tagHighlightByElementOneObserver.subscribe(() => {
          //   childTagOneOpening.node.classList.add('child_colour');
          //   childTagOneClosing.node.classList.add('child_colour');
          // });

          // tagUnhighlightByElementOneObserver.subscribe(() => {
          //   childTagOneOpening.node.classList.remove('child_colour');
          //   childTagOneClosing.node.classList.remove('child_colour');
          // });

          childTagOneClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightOneTagHover.notify('lalala');
            gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightOneTagHover.notify('lalala');
            gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightOneTagHover.notify('lalala');
            gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightOneTagHover.notify('lalala');
            gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            });

            childTagOneOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
            });

            childTagOneOpening.append(childTagOneOpeningChild);
          }

          const childTagOneClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagOneClosing.node.textContent = `</${levelsMarkup[currentLevel][0][j].tagName}>`;

          if (childTagOneOpening.node.textContent === '<apple>') {
            tagHighlightByElementApple.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementApple.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherry.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherry.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<banana>') {
            tagHighlightByElementBanana.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBanana.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<mango>') {
            tagHighlightByElementMango.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMango.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberry.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberry.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<pear>') {
            tagHighlightByElementPear.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPear.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          childTagOneClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementOneObserver.subscribe(() => {
            childTagOneOpening.node.classList.add('child_colour');
            childTagOneClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementOneObserver.subscribe(() => {
            childTagOneOpening.node.classList.remove('child_colour');
            childTagOneClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightOneTagHover.notify('lalala');
            gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightOneTagHover.notify('lalala');
            gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            });

            childTagOneOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
            });

            childTagOneOpening.append(childTagOneOpeningChild);
          }

          const childTagOneClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagOneClosing.node.textContent = `</${levelsMarkup[currentLevel][0][j].tagName}>`;

          if (childTagOneOpening.node.textContent === '<apple>') {
            tagHighlightByElementApple.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementApple.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherry.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherry.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<banana>') {
            tagHighlightByElementBanana.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBanana.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<mango>') {
            tagHighlightByElementMango.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMango.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberry.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberry.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<pear>') {
            tagHighlightByElementPear.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPear.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          childTagOneClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementOneObserver.subscribe(() => {
            childTagOneOpening.node.classList.add('child_colour');
            childTagOneClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementOneObserver.subscribe(() => {
            childTagOneOpening.node.classList.remove('child_colour');
            childTagOneClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightOneTagHover.notify('lalala');
            gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightOneTagHover.notify('lalala');
            gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            });

            childTagOneOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
            });

            childTagOneOpening.append(childTagOneOpeningChild);
          }

          const childTagOneClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagOneClosing.node.textContent = `</${levelsMarkup[currentLevel][0][j].tagName}>`;

          if (childTagOneOpening.node.textContent === '<apple>') {
            tagHighlightByElementApple.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementApple.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherry.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherry.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<banana>') {
            tagHighlightByElementBanana.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBanana.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<mango>') {
            tagHighlightByElementMango.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMango.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberry.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberry.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<pear>') {
            tagHighlightByElementPear.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPear.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          childTagOneClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementOneObserver.subscribe(() => {
            childTagOneOpening.node.classList.add('child_colour');
            childTagOneClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementOneObserver.subscribe(() => {
            childTagOneOpening.node.classList.remove('child_colour');
            childTagOneClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightOneTagHover.notify('lalala');
            gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightOneTagHover.notify('lalala');
            gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            });

            childTagOneOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
            });

            childTagOneOpening.append(childTagOneOpeningChild);
          }

          const childTagOneClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagOneClosing.node.textContent = `</${levelsMarkup[currentLevel][0][j].tagName}>`;

          if (childTagOneOpening.node.textContent === '<apple>') {
            tagHighlightByElementApple.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementApple.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherry.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherry.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<banana>') {
            tagHighlightByElementBanana.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBanana.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<mango>') {
            tagHighlightByElementMango.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMango.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberry.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberry.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<pear>') {
            tagHighlightByElementPear.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPear.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingOne.subscribe(() => {
              childTagOneOpening.node.classList.add('child_colour');
              childTagOneClosing.node.classList.add('child_colour');
            });
          }

          if (childTagOneOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingOne.subscribe(() => {
              childTagOneOpening.node.classList.remove('child_colour');
              childTagOneClosing.node.classList.remove('child_colour');
            });
          }

          childTagOneClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverOneTagHover.notify('lalala');
            viceVersaOneHighlightTagObserver.notify('lalala');
          });

          childTagOneClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverOneTagHover.notify('lalala');
            viceVersaOneUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementOneObserver.subscribe(() => {
            childTagOneOpening.node.classList.add('child_colour');
            childTagOneClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementOneObserver.subscribe(() => {
            childTagOneOpening.node.classList.remove('child_colour');
            childTagOneClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightTwoTagHover.notify('lalala');
            gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTwoTagHover.notify('lalala');
            gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            });

            childTagTwoOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
            });

            childTagTwoOpening.append(childTagTwoOpeningChild);
          }

          const childTagTwoClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagTwoClosing.node.textContent = `</${levelsMarkup[currentLevel][1][j].tagName}>`;

          if (childTagTwoOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          tagHighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.add('child_colour');
            childTagTwoClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.remove('child_colour');
            childTagTwoClosing.node.classList.remove('child_colour');
          });

          childTagTwoClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.add('child_colour');
            childTagTwoClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.remove('child_colour');
            childTagTwoClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightTwoTagHover.notify('lalala');
            gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTwoTagHover.notify('lalala');
            gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            });

            childTagTwoOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
            });

            childTagTwoOpening.append(childTagTwoOpeningChild);
          }

          const childTagTwoClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagTwoClosing.node.textContent = `</${levelsMarkup[currentLevel][1][j].tagName}>`;

          if (childTagTwoOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          childTagTwoClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.add('child_colour');
            childTagTwoClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.remove('child_colour');
            childTagTwoClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightTwoTagHover.notify('lalala');
            gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTwoTagHover.notify('lalala');
            gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            });

            childTagTwoOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
            });

            childTagTwoOpening.append(childTagTwoOpeningChild);
          }

          const childTagTwoClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagTwoClosing.node.textContent = `</${levelsMarkup[currentLevel][1][j].tagName}>`;

          if (childTagTwoOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          childTagTwoClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.add('child_colour');
            childTagTwoClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.remove('child_colour');
            childTagTwoClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightTwoTagHover.notify('lalala');
            gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTwoTagHover.notify('lalala');
            gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            });

            childTagTwoOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
            });

            childTagTwoOpening.append(childTagTwoOpeningChild);
          }

          const childTagTwoClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagTwoClosing.node.textContent = `</${levelsMarkup[currentLevel][1][j].tagName}>`;

          if (childTagTwoOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          childTagTwoClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.add('child_colour');
            childTagTwoClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.remove('child_colour');
            childTagTwoClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightTwoTagHover.notify('lalala');
            gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTwoTagHover.notify('lalala');
            gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            });

            childTagTwoOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
            });

            childTagTwoOpening.append(childTagTwoOpeningChild);
          }

          const childTagTwoClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagTwoClosing.node.textContent = `</${levelsMarkup[currentLevel][1][j].tagName}>`;

          if (childTagTwoOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingTwo.subscribe(() => {
              childTagTwoOpening.node.classList.add('child_colour');
              childTagTwoClosing.node.classList.add('child_colour');
            });
          }

          if (childTagTwoOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingTwo.subscribe(() => {
              childTagTwoOpening.node.classList.remove('child_colour');
              childTagTwoClosing.node.classList.remove('child_colour');
            });
          }

          childTagTwoClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverTwoTagHover.notify('lalala');
            viceVersaTwoHighlightTagObserver.notify('lalala');
          });

          childTagTwoClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverTwoTagHover.notify('lalala');
            viceVersaTwoUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.add('child_colour');
            childTagTwoClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementTwoObserver.subscribe(() => {
            childTagTwoOpening.node.classList.remove('child_colour');
            childTagTwoClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightThreeTagHover.notify('lalala');
            gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightThreeTagHover.notify('lalala');
            gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            });

            childTagThreeOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
            });

            childTagThreeOpening.append(childTagThreeOpeningChild);
          }

          const childTagThreeClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagThreeClosing.node.textContent = `</${levelsMarkup[currentLevel][2][j].tagName}>`;

          if (childTagThreeOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          tagHighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.add('child_colour');
            childTagThreeClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.remove('child_colour');
            childTagThreeClosing.node.classList.remove('child_colour');
          });

          childTagThreeClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.add('child_colour');
            childTagThreeClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.remove('child_colour');
            childTagThreeClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightThreeTagHover.notify('lalala');
            gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightThreeTagHover.notify('lalala');
            gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            });

            childTagThreeOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
            });

            childTagThreeOpening.append(childTagThreeOpeningChild);
          }

          const childTagThreeClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagThreeClosing.node.textContent = `</${levelsMarkup[currentLevel][2][j].tagName}>`;

          if (childTagThreeOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          childTagThreeClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.add('child_colour');
            childTagThreeClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.remove('child_colour');
            childTagThreeClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightThreeTagHover.notify('lalala');
            gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightThreeTagHover.notify('lalala');
            gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            });

            childTagThreeOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
            });

            childTagThreeOpening.append(childTagThreeOpeningChild);
          }

          const childTagThreeClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });
          childTagThreeClosing.node.textContent = `</${levelsMarkup[currentLevel][2][j].tagName}>`;

          if (childTagThreeOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          childTagThreeClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.add('child_colour');
            childTagThreeClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.remove('child_colour');
            childTagThreeClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightThreeTagHover.notify('lalala');
            gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightThreeTagHover.notify('lalala');
            gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            });

            childTagThreeOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
            });

            childTagThreeOpening.append(childTagThreeOpeningChild);
          }

          const childTagThreeClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagThreeClosing.node.textContent = `</${levelsMarkup[currentLevel][2][j].tagName}>`;

          if (childTagThreeOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          childTagThreeClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.add('child_colour');
            childTagThreeClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.remove('child_colour');
            childTagThreeClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightThreeTagHover.notify('lalala');
            gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightThreeTagHover.notify('lalala');
            gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            });

            childTagThreeOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
            });

            childTagThreeOpening.append(childTagThreeOpeningChild);
          }

          const childTagThreeClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagThreeClosing.node.textContent = `</${levelsMarkup[currentLevel][2][j].tagName}>`;

          if (childTagThreeOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingThree.subscribe(() => {
              childTagThreeOpening.node.classList.add('child_colour');
              childTagThreeClosing.node.classList.add('child_colour');
            });
          }

          if (childTagThreeOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingThree.subscribe(() => {
              childTagThreeOpening.node.classList.remove('child_colour');
              childTagThreeClosing.node.classList.remove('child_colour');
            });
          }

          childTagThreeClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverThreeTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagThreeClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverThreeTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.add('child_colour');
            childTagThreeClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementThreeObserver.subscribe(() => {
            childTagThreeOpening.node.classList.remove('child_colour');
            childTagThreeClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightFourTagHover.notify('lalala');
            gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightFourTagHover.notify('lalala');
            gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            });

            childTagFourOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
            });

            childTagFourOpening.append(childTagFourOpeningChild);
          }

          const childTagFourClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagFourClosing.node.textContent = `</${levelsMarkup[currentLevel][3][j].tagName}>`;

          if (childTagFourOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          tagHighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.add('child_colour');
            childTagFourClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.remove('child_colour');
            childTagFourClosing.node.classList.remove('child_colour');
          });

          childTagFourClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.add('child_colour');
            childTagFourClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.remove('child_colour');
            childTagFourClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightFourTagHover.notify('lalala');
            gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightFourTagHover.notify('lalala');
            gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            });

            childTagFourOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
            });

            childTagFourOpening.append(childTagFourOpeningChild);
          }

          const childTagFourClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagFourClosing.node.textContent = `</${levelsMarkup[currentLevel][3][j].tagName}>`;

          if (childTagFourOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          childTagFourClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.add('child_colour');
            childTagFourClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.remove('child_colour');
            childTagFourClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightFourTagHover.notify('lalala');
            gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightFourTagHover.notify('lalala');
            gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            });

            childTagFourOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
            });

            childTagFourOpening.append(childTagFourOpeningChild);
          }

          const childTagFourClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagFourClosing.node.textContent = `</${levelsMarkup[currentLevel][3][j].tagName}>`;

          if (childTagFourOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }
          childTagFourClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.add('child_colour');
            childTagFourClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.remove('child_colour');
            childTagFourClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightFourTagHover.notify('lalala');
            gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            viceVersaThreeHighlightTagObserver.notify('lalala');
          });

          childTagFourOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightFourTagHover.notify('lalala');
            gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
            viceVersaThreeUnhighlightTagObserver.notify('lalala');
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
              gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            });

            childTagFourOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
            });

            childTagFourOpening.append(childTagFourOpeningChild);
          }

          const childTagFourClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagFourClosing.node.textContent = `</${levelsMarkup[currentLevel][3][j].tagName}>`;

          if (childTagFourOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          childTagFourClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.add('child_colour');
            childTagFourClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.remove('child_colour');
            childTagFourClosing.node.classList.remove('child_colour');
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
          levelsMarkup[currentLevel][i] &&
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
            gameElementHighlightFourTagHover.notify('lalala');
            gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourOpening.node.addEventListener('mouseout', () => {
            gameElementUnhighlightFourTagHover.notify('lalala');
            gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
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
              gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            });

            childTagFourOpeningChild.node.addEventListener('mouseout', () => {
              gameElementUnhighlightTagHover.notify('lalala');
              gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
            });

            childTagFourOpening.append(childTagFourOpeningChild);
          }

          const childTagFourClosing = new BaseComponent({
            tagName: 'div',
            classList: ['markup_child']
          });

          childTagFourClosing.node.textContent = `</${levelsMarkup[currentLevel][3][j].tagName}>`;

          if (childTagFourOpening.node.textContent === '<apple>') {
            tagHighlightByElementAppleFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<apple>') {
            tagUnhighlightByElementAppleFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<cherry>') {
            tagHighlightByElementCherryFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<cherry>') {
            tagUnhighlightByElementCherryFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<banana>') {
            tagHighlightByElementBananaFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<banana>') {
            tagUnhighlightByElementBananaFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<mango>') {
            tagHighlightByElementMangoFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<mango>') {
            tagUnhighlightByElementMangoFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<strawberry>') {
            tagHighlightByElementStrawberryFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<strawberry>') {
            tagUnhighlightByElementStrawberryFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<pear>') {
            tagHighlightByElementPearFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<pear>') {
            tagUnhighlightByElementPearFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<butterfly>') {
            tagHighlightByElementButterflyFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<butterfly>') {
            tagUnhighlightByElementButterflyFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<bee>') {
            tagHighlightByElementBeeFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<bee>') {
            tagUnhighlightByElementBeeFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<ladybug>') {
            tagHighlightByElementLadybugFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<ladybug>') {
            tagUnhighlightByElementLadybugFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<dumpling>') {
            tagHighlightByElementDumplingFour.subscribe(() => {
              childTagFourOpening.node.classList.add('child_colour');
              childTagFourClosing.node.classList.add('child_colour');
            });
          }

          if (childTagFourOpening.node.textContent === '<dumpling>') {
            tagUnhighlightByElementDumplingFour.subscribe(() => {
              childTagFourOpening.node.classList.remove('child_colour');
              childTagFourClosing.node.classList.remove('child_colour');
            });
          }

          childTagFourClosing.node.addEventListener('mouseover', () => {
            gameElementHighlightTagHover.notify('lalala');
            gameElementTooltipAppendObserverFourTagHover.notify('lalala');
            viceVersaFourHighlightTagObserver.notify('lalala');
          });

          childTagFourClosing.node.addEventListener('mouseout', () => {
            gameElementUnhighlightTagHover.notify('lalala');
            gameElementTooltipRemoveObserverFourTagHover.notify('lalala');
            viceVersaFourUnhighlightTagObserver.notify('lalala');
          });

          tagHighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.add('child_colour');
            childTagFourClosing.node.classList.add('child_colour');
          });

          tagUnhighlightByElementFourObserver.subscribe(() => {
            childTagFourOpening.node.classList.remove('child_colour');
            childTagFourClosing.node.classList.remove('child_colour');
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
      this.treeViewerClosingTag,
      HTMLViewer.qeteqTags
    );
  }
}
