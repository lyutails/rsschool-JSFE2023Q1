import { broomsMaterials } from '../data/brooms_materials';
import { broomsModels } from '../data/brooms_models';
import { broomsNames } from '../data/brooms_names';

export type Props<T extends keyof HTMLElementTagNameMap = 'div'> = {
  tagName?: T;
  classList?: string[];
  textContent?: string;
  children?: BaseComponent<keyof HTMLElementTagNameMap>[];
};

export class BaseComponent<T extends keyof HTMLElementTagNameMap = 'div'> {
  public readonly node: HTMLElementTagNameMap[T];
  constructor({
    tagName,
    classList = [''],
    textContent = '',
    children = [],
  }: Props<T>) {
    this.node = document.createElement(tagName ?? ('div' as T));
    this.node.classList.add(...classList);
    this.node.textContent = textContent;
    if (children.length) {
      this.append(...children);
    }
  }

  public append = <U extends keyof HTMLElementTagNameMap>(
    ...children: Array<BaseComponent<U>>
  ): void => {
    this.node.append(...children.map((component) => component.node));
  };

  public destroy(): void {
    this.node.remove();
  }

  public addTextContent(text: string): void {
    this.node.textContent = text;
  }

  public addMoreClasses(className: string): void {
    this.node.classList.add(className);
  }

  public removeClass(className: string): void {
    this.node.classList.remove(className);
  }

  public toggleClass(className: string): void {
    this.node.classList.toggle(className);
  }

  public addLink(link: string): void {
    this.node.setAttribute('href', link);
  }

  public setPlaceholder(placeholder: string): void {
    this.node.setAttribute('placeholder', placeholder);
  }

  public randomizeOwl(owls: string[]): string {
    const randomOwl = owls[Math.floor(Math.random() * owls.length)];
    return randomOwl;
  }

  public disableButton(): void {
    this.node.setAttribute('disabled', '');
  }

  public enableButton(): void {
    this.node.removeAttribute('disabled');
  }

  public setCursorPointer(): void {
    if (this.node.hasAttribute('disabled')) {
      this.node.style.cursor = 'pointer';
    }
    this.node.style.cursor = 'default';
  }

  public getRandomName(): string {
    const broomName =
      broomsNames[Math.floor(Math.random() * broomsNames.length)];
    const broomModel =
      broomsModels[Math.floor(Math.random() * broomsModels.length)];
    const broomMaterial =
      broomsMaterials[Math.floor(Math.random() * broomsMaterials.length)];
    return `${broomName} ${broomModel} ${broomMaterial}`;
  }

  public getRandomColor(): string {
    const symbols = '0123456789abcdef';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
      colour += symbols[Math.floor(Math.random() * 16)];
    }
    return colour;
  }

  public ifInputName(name: string): string {
    const ifName = name === '' ? this.getRandomName() : name;

    return ifName;
  }
}
