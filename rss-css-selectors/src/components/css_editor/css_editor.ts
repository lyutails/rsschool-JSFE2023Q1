import { BaseComponent } from '@/core/base-component';

import { Observer } from '../observer';

import { Button } from '@/UI/button';
import { levels } from '@/data/levels';
import { store } from '@/store';

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
      classList: ['css_editor'],
      textContent: 'CSS Editor'
    });

    window.addEventListener('keydown', (event: KeyboardEvent) =>
      this.registerEnterPress(event)
    );

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
      this.selectorsInput.node,
      this.enterButton.node,
      helpButton.node
    );
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
        console.log(value);
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
    this.selectorsInput.node.classList.add('shake');
    setTimeout(() => {
      this.selectorsInput.node.classList.remove('shake');
    }, 500);
  }
}
