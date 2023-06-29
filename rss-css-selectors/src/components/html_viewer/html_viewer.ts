import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

import { levelsMarkup } from '@/data/levels_markup';
import { markupNumbers } from '@/data/markup_numbers';

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

export class HTMLViewer extends BaseComponent<'div'> {
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

    const appleTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_apple'],
      textContent: `<${levelsMarkup[0][0][0].tagName}>`
    });

    appleTag.node.addEventListener('mouseover', () => {
      gameElementHighlightTagHover.notify('lalala');
      appleTooltipAppendObserverTagHover.notify('lalala');
    });

    appleTag.node.addEventListener('mouseout', () => {
      gameElementUnhighlightTagHover.notify('lalala');
      appleTooltipRemoveObserverTagHover.notify('lalala');
    });

    const branchOneOpeningViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '<branch>'
    });

    const branchOneClosingViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '</branch>'
    });

    const branchTwoOpeningViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '<branch>'
    });

    const branchTwoClosingViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '</branch>'
    });

    const branchThreeOpeningViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '<branch>'
    });

    const branchThreeClosingViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '</branch>'
    });

    const branchFourOpeningViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '<branch>'
    });

    const branchFourClosingViewerTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_branch'],
      textContent: '</branch>'
    });

    const treeViewerOpeningTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_tree_opening'],
      textContent: '<tree>'
    });

    const treeViewerClosingTag = new BaseComponent({
      tagName: 'div',
      classList: ['markup_tree_closing'],
      textContent: '</tree>'
    });

    const htmlText = new BaseComponent({
      tagName: 'div',
      classList: ['html_viewer_text']
    });

    htmlText.append(
      treeViewerOpeningTag,
      branchOneOpeningViewerTag,
      appleTag,
      branchOneClosingViewerTag,
      branchTwoOpeningViewerTag,
      branchTwoClosingViewerTag,
      branchThreeOpeningViewerTag,
      branchThreeClosingViewerTag,
      branchFourOpeningViewerTag,
      branchFourClosingViewerTag,
      treeViewerClosingTag
    );

    treeViewerOpeningTag.node.addEventListener('mouseover', () => {
      treeObserverHighlight.notify('lalala');
      treeViewerClosingTag.node.style.color = 'red';
      treeViewerOpeningTag.node.style.color = 'red';
    });
    treeViewerOpeningTag.node.addEventListener('mouseout', () => {
      treeObserverUnhighlight.notify('lalala');
      treeViewerClosingTag.node.style.color = 'unset';
      treeViewerOpeningTag.node.style.color = 'unset';
    });
    treeViewerClosingTag.node.addEventListener('mouseover', () => {
      treeObserverHighlight.notify('lalala');
      treeViewerOpeningTag.node.style.color = 'red';
      treeViewerClosingTag.node.style.color = 'red';
    });
    treeViewerClosingTag.node.addEventListener('mouseout', () => {
      treeObserverUnhighlight.notify('lalala');
      treeViewerOpeningTag.node.style.color = 'unset';
      treeViewerClosingTag.node.style.color = 'unset';
    });

    const branchesOpeningTags = [
      branchOneOpeningViewerTag,
      branchTwoOpeningViewerTag,
      branchThreeOpeningViewerTag,
      branchFourOpeningViewerTag
    ];

    const branchesClosingTags = [
      branchOneClosingViewerTag,
      branchTwoClosingViewerTag,
      branchThreeClosingViewerTag,
      branchFourClosingViewerTag
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
      children: [htmlNumbers, htmlText]
    });

    this.node.append(htmlviewerTitle.node, htmlMarkup.node);
  }
}
