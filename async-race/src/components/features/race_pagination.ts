import { BaseComponent } from '../core/base-component';

export class RacePagination extends BaseComponent {
  public paginationButtonBeginning: BaseComponent<'button'>;
  public paginationButtonLeft: BaseComponent<'button'>;
  public paginationButtonNumber: BaseComponent<'button'>;
  public paginationButtonRight: BaseComponent<'button'>;
  public paginationButtonEnd: BaseComponent<'button'>;
  constructor() {
    super({
      tagName: 'div',
      classList: ['race_pagination'],
    });

    this.paginationButtonBeginning = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    this.paginationButtonBeginning.disableButton();

    this.paginationButtonLeft = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    this.paginationButtonLeft.disableButton();

    this.paginationButtonNumber = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    this.paginationButtonNumber.node.textContent = '1';

    this.paginationButtonRight = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    this.paginationButtonEnd = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    this.node.append(
      this.paginationButtonBeginning.node,
      this.paginationButtonLeft.node,
      this.paginationButtonNumber.node,
      this.paginationButtonRight.node,
      this.paginationButtonEnd.node
    );
  }
}
