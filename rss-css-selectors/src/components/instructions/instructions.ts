import { BaseComponent } from '@/core/base-component';

import { LevelsBurger } from '../levels_burger';
import { LevelsMenu } from '../levels_menu';
import { Observer } from '../observer';

import { levels } from '@/data/levels';
import { currentLevelObserver, store } from '@/store';

export const instructionsObserverDay = new Observer();
export const instructionsObserverNight = new Observer();

export const levelCheckObserverDay = new Observer();
export const levelCheckObserverNight = new Observer();

export class Instructions extends BaseComponent<'div'> {
  public store = store;
  public thisLevelNumber: BaseComponent<'span'>;
  public thisLevelSelector: BaseComponent;
  public instructionsHelpTitle: BaseComponent;
  public selectorSyntax: BaseComponent;
  public descriptionText: BaseComponent;
  public selectorExamples: BaseComponent;
  constructor() {
    super({
      tagName: 'div',
      classList: ['instructions']
    });

    const burger = new LevelsBurger();

    const levelsMenu = new LevelsMenu();

    this.selectorExamples = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_examples'],
      textContent: 'Usage example'
    });

    const exampleTitle = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_example_title'],
      textContent: 'Examples'
    });

    const example = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_example'],
      children: [exampleTitle, this.selectorExamples]
    });

    const descriptionTitle = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_description_title'],
      textContent: 'Description'
    });

    this.descriptionText = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_description_text'],
      textContent: 'Description Text'
    });

    const descriptionWrapper = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_description'],
      children: [descriptionTitle, this.descriptionText]
    });

    this.thisLevelNumber = new BaseComponent({
      tagName: 'span',
      classList: ['instructions_current'],
      textContent: '№'
    });

    const levelNumberOf = new BaseComponent({
      tagName: 'span',
      classList: ['instructions_level_of'],
      textContent: 'of'
    });

    const totalNumberOfLevels = new BaseComponent({
      tagName: 'span',
      classList: ['instructions_total_levels_number'],
      textContent: '20'
    });

    const levelCheck = new BaseComponent({
      tagName: 'span',
      classList: ['instructions_check']
    });

    levelCheckObserverDay.subscribe(() => {
      levelCheck.node.classList.add('day');
    });

    levelCheckObserverNight.subscribe(() => {
      levelCheck.node.classList.remove('day');
    });

    const changeNext = new BaseComponent({
      tagName: 'span',
      classList: ['instructions_next']
    });

    // changeNext.node.addEventListener('click', () => {
    //   this.decrementLevel();
    // });

    const changePrevious = new BaseComponent({
      tagName: 'span',
      classList: ['instructions_previous']
    });

    // changeNext.node.addEventListener('click', () => {
    //   this.incrementLevel();
    // });

    this.thisLevelSelector = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_level_selector'],
      textContent: 'Selector Name'
    });

    const levelsSwitchers = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_levels_switchers'],
      children: [changePrevious, changeNext]
    });

    const levelTitle = new BaseComponent({
      tagName: 'span',
      classList: ['instructions_level_title'],
      textContent: 'Level'
    });

    const levelSelectorSwitchersWrapper = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_selector_switchers_wrapper'],
      children: [this.thisLevelSelector, levelsSwitchers]
    });

    const instructionsLevelHeader = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_level_header'],
      children: [
        levelTitle,
        this.thisLevelNumber,
        levelNumberOf,
        totalNumberOfLevels,
        levelCheck
      ]
    });

    this.instructionsHelpTitle = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_help_title'],
      textContent: 'What to pick'
    });

    this.selectorSyntax = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_syntax'],
      textContent: 'Syntax'
    });

    const { currentLevel } = this.store;
    this.thisLevelNumber.node.textContent = `${currentLevel}`;
    const { selectorName } = levels[currentLevel];
    this.thisLevelSelector.node.textContent = `${selectorName}`;
    const { helpTitle } = levels[currentLevel];
    this.instructionsHelpTitle.node.textContent = `${helpTitle}`;
    const { syntax } = levels[currentLevel];
    this.selectorSyntax.node.textContent = `${syntax}`;
    const { help } = levels[currentLevel];
    this.descriptionText.node.textContent = `${help}`;
    const { examples } = levels[currentLevel];
    this.selectorExamples.node.textContent = `${examples}`;

    const level = new BaseComponent({
      tagName: 'div',
      classList: ['instructions_level'],
      children: [
        instructionsLevelHeader,
        levelSelectorSwitchersWrapper,
        this.instructionsHelpTitle,
        this.selectorSyntax
      ]
    });

    instructionsObserverDay.subscribe(() =>
      this.node.classList.add('recolour')
    );
    instructionsObserverNight.subscribe(() =>
      this.node.classList.remove('recolour')
    );

    this.node.append(
      level.node,
      descriptionWrapper.node,
      example.node,
      levelsMenu.node,
      burger.node
    );

    currentLevelObserver.subscribe(() => this.checkCurrentLevel());
  }

  public incrementLevel(): void {
    const { currentLevel } = this.store;
    this.store.currentLevel = currentLevel + 1;
  }

  public decrementLevel(): void {
    const { currentLevel } = this.store;
    this.store.currentLevel = currentLevel - 1;
  }

  public checkCurrentLevel(): void {
    const { currentLevel } = this.store;
    this.thisLevelNumber.node.textContent = `${currentLevel}`;
    const { selectorName } = levels[currentLevel];
    this.thisLevelSelector.node.textContent = `${selectorName}`;
    const { helpTitle } = levels[currentLevel];
    this.instructionsHelpTitle.node.textContent = `${helpTitle}`;
    const { syntax } = levels[currentLevel];
    this.selectorSyntax.node.textContent = `${syntax}`;
    const { help } = levels[currentLevel];
    this.descriptionText.node.textContent = `${help}`;
    const { examples } = levels[currentLevel];
    this.selectorExamples.node.textContent = `${examples}`;
  }
}
