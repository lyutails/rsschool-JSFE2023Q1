import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

import { Button } from '@/UI/button';
import { levels } from '@/data/levels';
import { currentLevelObserver, store } from '@/store';

export const csseditorObserverDay = new Observer();
export const csseditorObserverNight = new Observer();
export const inputObserverDay = new Observer();
export const inputObserverNight = new Observer();

export class CSSEditor extends BaseComponent<'div'> {
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

    window.addEventListener('keydown', (event: KeyboardEvent) =>
      this.registerEnterPress(event)
    );

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
    this.enterButton.node.addEventListener('click', () => this.onButtonClick());

    this.selectorsInput = new BaseComponent({
      tagName: 'input',
      classList: ['css_editor_input'],
      textContent: ''
    });

    this.selectorsInput.addPlaceholder('Type in a CSS selector');
    this.selectorsInput.node.setAttribute('maxlength', '50');

    helpButton.node.addEventListener('click', () => {
      this.selfInputTyping();
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
      this.incrementLevel();
    }
    if (value !== `${levels[currentLevel].selector}`) {
      this.catchIncorrectSelector();
    }
  }

  public registerEnterPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      const { value } = this.selectorsInput.node;
      const { currentLevel } = this.store;
      if (value === `${levels[currentLevel].selector}`) {
        this.clearInput();
        this.incrementLevel();
      }
      if (value !== `${levels[currentLevel].selector}`) {
        this.catchIncorrectSelector();
      }
    }
  }

  public incrementLevel(): void {
    const { currentLevel } = this.store;
    this.store.currentLevel = currentLevel + 1;
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
