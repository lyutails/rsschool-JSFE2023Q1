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
    children = []
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

  protected destroy(): void {
    this.node.remove();
  }

  public addLink(link: string): void {
    this.node.setAttribute('href', link);
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

  public addPlaceholder(placeholder: string): void {
    this.node.setAttribute('placeholder', placeholder);
  }

  public toggleClassOnClick = (): void => {
    this.node.addEventListener('click', (e) => {
      if (e.target instanceof HTMLElement) {
        e.target.classList.toggle('active');
      } else {
        throw new Error('no target element found');
      }
    });
  };
}
