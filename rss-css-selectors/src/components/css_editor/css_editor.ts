import { BaseComponent } from '@/core/base-component';

import {
  ifAllCheckedObserver,
  levelMenuCheckMarkCorrectAnswer,
  levelMenuCheckMarkHintAnswer,
  levelNameColorObserver
} from '../levels_menu';
import { Observer } from '../observer';
import { ModalWin, modalWinCloseObserver } from '../win_modal';

import { Button } from '@/UI/button';
import { levels } from '@/data/levels';
import { store } from '@/store';

export const csseditorObserverDay = new Observer();
export const csseditorObserverNight = new Observer();
export const inputObserverDay = new Observer();
export const inputObserverNight = new Observer();
export const incorrectSelectorElementShake = new Observer();
export const correctSelectorElementShake = new Observer();
export const incorrectSelectorChildElementShake = new Observer();
export const correctSelectorChildElementShake = new Observer();
export const ifHelpButtonClicked = new Observer();

export class CSSEditor extends BaseComponent<'div'> {
  public isHelpClicked: boolean;
  public modal: ModalWin;
  public selectorsInput: BaseComponent<'input'>;
  public enterButton: Button;
  // public currentLevel = store.currentLevel;
  public store = store;
  public incrementLevelEvent = new CustomEvent('increment_level');
  public shakeInput = new Observer();
  constructor() {
    super({
      tagName: 'div',
      classList: ['css_editor']
    });

    this.modal = new ModalWin();
    this.modal.node.style.display = 'block';

    modalWinCloseObserver.subscribe(() => {
      this.modal.node.style.display = 'none';
    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      this.registerEnterPress(event);
      // this.colorLevelCheckMarkOnCorrect();
    });

    const csseditorTitle = new BaseComponent({
      tagName: 'div',
      classList: ['css_editor_title'],
      textContent: 'CSS Editor'
    });

    const helpButton = new Button();
    helpButton.addTextContent('Help');
    helpButton.addMoreClasses('help');

    this.enterButton = new Button();
    this.enterButton.addTextContent('Enter');
    this.enterButton.addMoreClasses('enter');
    this.enterButton.node.addEventListener('click', () => {
      this.onButtonClick();
      // this.colorLevelCheckMarkOnCorrect();
    });

    this.selectorsInput = new BaseComponent({
      tagName: 'input',
      classList: ['css_editor_input'],
      textContent: ''
    });

    this.selectorsInput.addPlaceholder('Type in a CSS selector');
    this.selectorsInput.node.setAttribute('maxlength', '50');

    this.isHelpClicked = false;

    helpButton.node.addEventListener('click', () => {
      this.selfInputTyping();
      this.isHelpClicked = true;
      levelMenuCheckMarkHintAnswer.notify('lalala');
    });

    csseditorObserverDay.subscribe(() => this.node.classList.add('recolour'));
    csseditorObserverNight.subscribe(() =>
      this.node.classList.remove('recolour')
    );

    inputObserverDay.subscribe(() =>
      this.selectorsInput.node.classList.add('recolour')
    );
    inputObserverNight.subscribe(() =>
      this.selectorsInput.node.classList.remove('recolour')
    );

    this.node.append(
      csseditorTitle.node,
      this.selectorsInput.node,
      this.enterButton.node,
      helpButton.node
    );
  }

  public selfInputTyping(): void {
    this.selectorsInput.node.disabled = true;
    this.selectorsInput.node.value = '';
    const { currentLevel } = this.store;
    const { selector } = levels[currentLevel];
    let i = 0;
    setInterval(() => {
      if (i < selector.length) {
        this.selectorsInput.node.value += selector[i++];
      }
      if (this.selectorsInput.node.value === selector) {
        this.selectorsInput.node.disabled = false;
      }
    }, 100);
  }

  public onButtonClick(): void {
    const { value } = this.selectorsInput.node;
    const { currentLevel } = this.store;
    if (value === `${levels[currentLevel].selector}`) {
      this.clearInput();
      if (
        this.isHelpClicked === false &&
        value === `${levels[currentLevel].selector}`
      ) {
        levelMenuCheckMarkCorrectAnswer.notify('lalala');
      }
      this.isHelpClicked = false;
      this.incrementLevel();
      correctSelectorElementShake.notify('lalala');
      correctSelectorChildElementShake.notify('lalala');
      localStorage.setItem('winLevel', `${currentLevel}`);
    }
    if (value !== `${levels[currentLevel].selector}`) {
      this.catchIncorrectSelector();
      incorrectSelectorElementShake.notify('lalala');
      incorrectSelectorChildElementShake.notify('lalala');
    }
    if (currentLevel === 19 && value === `${levels[19].selector}`) {
      this.modal.node.style.display = 'block';
      // ifAllCheckedObserver.subscribe(() => {
      //   this.modal.node.style.display = 'block';
      // });
    }
  }

  public registerEnterPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      const { value } = this.selectorsInput.node;
      const { currentLevel } = this.store;
      if (value === `${levels[currentLevel].selector}`) {
        this.clearInput();
        if (
          this.isHelpClicked === false &&
          value === `${levels[currentLevel].selector}`
        ) {
          levelMenuCheckMarkCorrectAnswer.notify('lalala');
        }
        this.isHelpClicked = false;
        this.incrementLevel();
        correctSelectorElementShake.notify('lalala');
        correctSelectorChildElementShake.notify('lalala');
        localStorage.setItem('winLevel', `${currentLevel}`);
      }
      if (value !== `${levels[currentLevel].selector}`) {
        this.catchIncorrectSelector();
        incorrectSelectorElementShake.notify('lalala');
        incorrectSelectorChildElementShake.notify('lalala');
      }
      if (currentLevel === 19 && value === `${levels[19].selector}`) {
        this.modal.node.style.display = 'block';
        // ifAllCheckedObserver.subscribe(() => {
        //   this.modal.node.style.display = 'block';
        // });
      }
    }
  }

  public incrementLevel(): void {
    const { currentLevel } = this.store;
    if (this.store.currentLevel < 19) {
      this.store.currentLevel = currentLevel + 1;
      levelNameColorObserver.notify('lalala');
    }
  }

  public clearInput(): void {
    this.selectorsInput.node.value = '';
  }

  public catchIncorrectSelector(): void {
    this.selectorsInput.node.classList.add('shake_anim');
    setTimeout(() => {
      this.selectorsInput.node.classList.remove('shake_anim');
    }, 500);
  }
}
