import { engineURL, quidditchURL } from '../../types/constants';
import { broomsMaterials } from '../../data/brooms_materials';
import { broomsModels } from '../../data/brooms_models';
import { broomsNames } from '../../data/brooms_names';
import { WitchBroom } from '../../types/interfaces';
import { StatusCodes } from '../../types/enums';

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

  public async getAllWitches(): Promise<WitchBroom[]> {
    const response = await fetch(`${quidditchURL}`);
    if (!response.ok) {
      throw new Error('some error happened on the way');
    }
    const data = await response.json();
    return data;
  }

  public totalWitchesCount(): Promise<string | null> {
    const totalWitches = fetch(`${quidditchURL}?_page=1&_limit=1`);
    if (!totalWitches) {
      throw new Error('no witches found');
    }
    const witchesCount = totalWitches.then((response) => {
      return response.headers.get('X-Total-Count') || '0';
    });
    return witchesCount;
  }

  public getParticularWitch(id: number): Promise<WitchBroom> {
    return fetch(`${quidditchURL}/${id}`, {
      method: 'GET',
    }).then((response) => response.json());
  }

  public deleteWitch(id: number): Promise<WitchBroom> {
    return fetch(`${quidditchURL}/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  }

  public async createWitch(name: string, color: string): Promise<WitchBroom> {
    try {
      const newWitch = await fetch(`${quidditchURL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'applicatoin/json' },
        body: JSON.stringify({
          name,
          color,
        }),
      }).then((response) => {
        if (StatusCodes.OK in response) {
          this.getAllWitches();
        }
        return response.json();
      });
      return newWitch;
    } catch {
      throw new Error('failed to create new witch');
    }
  }

  public updateWitch(
    name: string,
    color: string,
    id: number
  ): Promise<Response> {
    return fetch(`${quidditchURL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'applicatoin/json' },
      body: JSON.stringify({
        name,
        color,
        id,
      }),
    }).then((response) => {
      if (StatusCodes.OK in response) {
        this.getParticularWitch(id);
      }
      return response;
    });
  }

  public startEngine(
    id: number
  ): Promise<{ velocity: number; distance: number }> {
    return fetch(`${engineURL}?&id=${id}&status=started`, {
      method: 'PATCH',
    })
      .then((response) => response.json())
      .then((response) => {
        return response;
      });
  }

  public async stopEngine(id: number): Promise<void> {
    await fetch(`${engineURL}?&id=${id}&status=stopped`, {
      method: 'PATCH',
    }).then((response) => response.json());
  }

  public async flyMode(id: number): Promise<void> {
    await fetch(`${engineURL}?&id=${id}&status=drive`, {
      method: 'PATCH',
    }).then((response) => {
      if (StatusCodes.STOP in response) {
        this.stopEngine(id);
      }
      return response;
    });
  }
}
