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

  public matches(selector: string): void {
    this.node.matches(selector);
  }

  public appendAdjacentTag(
    where: 'afterend' | 'afterbegin' | 'beforebegin' | 'beforeend',
    data: string
  ): void {
    this.node.insertAdjacentText(where, data);
  }

  public static appendRemoveTooltip = (
    element: HTMLElement | BaseComponent,
    tooltip: BaseComponent
  ): void => {
    if (element instanceof BaseComponent) {
      const thisElement = element;
      thisElement.node.addEventListener('mouseover', () => {
        thisElement.node.append(tooltip.node);
      });
      thisElement.node.addEventListener('mouseout', () => {
        tooltip.node.remove();
      });
    }
    if (element instanceof HTMLElement) {
      const thisElement = element;
      thisElement.addEventListener('mouseover', () => {
        thisElement.append(tooltip.node);
      });
      thisElement.addEventListener('mouseout', () => {
        tooltip.node.remove();
      });
    }
  };

  public static appendRemoveTooltipBase = (
    element: BaseComponent<'div'> | BaseComponent<'span'>,
    tooltip: BaseComponent,
    elementToAppendTooltipTo: BaseComponent<'div'> | BaseComponent<'span'>
  ): void => {
    const thisElement = element;
    const tooltipElmeent = tooltip;
    const elementAppendTo = elementToAppendTooltipTo;
    if (tooltipElmeent) {
      thisElement.node.addEventListener('mouseover', () => {
        elementAppendTo.append(tooltipElmeent);
      });
      thisElement.node.addEventListener('mouseout', () => {
        tooltipElmeent.node.remove();
      });
    }
  };

  public static setRandomPosition(
    element: HTMLElement,
    max: number,
    min: number
  ): void {
    const thisElement = element;
    thisElement.style.marginTop = `${Math.floor(
      Math.random() * ((max - min) * 1.2)
    )}vw`;
    thisElement.style.marginLeft = `${Math.floor(
      Math.random() * ((max - min) * 0.6)
    )}vh`;
  }

  public static setTransformOrigin = (element: HTMLElement): void => {
    const thisElement = element;
    thisElement.style.transformOrigin = 'center top';
  };
}
