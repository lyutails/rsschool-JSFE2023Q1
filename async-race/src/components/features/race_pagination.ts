import { BaseComponent } from '../../core/base-component';
import { store } from '../../store';
import { forPaginationUrl } from '../../types/constants';

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
    this.paginationButtonBeginning.setCursorPointer();

    this.paginationButtonLeft = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    this.paginationButtonLeft.enableButton();
    this.paginationButtonLeft.setCursorPointer();

    this.paginationButtonLeft.node.addEventListener('click', () => {
      this.turnPageRight();
    });

    this.paginationButtonNumber = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    this.paginationButtonNumber.node.textContent = `${store.currentPage}`;

    this.paginationButtonRight = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    this.paginationButtonRight.enableButton();
    this.paginationButtonRight.setCursorPointer();

    this.paginationButtonRight.node.addEventListener('click', () => {
      this.turnPageLeft();
    });

    this.paginationButtonEnd = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    this.paginationButtonEnd.disableButton();
    this.paginationButtonEnd.setCursorPointer();

    // if (store.currentWitches > 7) {
    //   this.paginationButtonLeft.enableButton();
    //   this.paginationButtonEnd.enableButton();
    // }

    // if (store.currentWitches > 7 && store.currentPage > 1) {
    //   this.paginationButtonRight.enableButton();
    // }

    this.node.append(
      this.paginationButtonBeginning.node,
      this.paginationButtonLeft.node,
      this.paginationButtonNumber.node,
      this.paginationButtonRight.node,
      this.paginationButtonEnd.node
    );
  }

  public turnPageLeft(): void {
    const witchesPerPage = 7;
    // const responseWitches = await getAllWitches(forPaginationUrl);
    const catchWitches = store.currentWitches;
    const totalPagesCount = Math.ceil(catchWitches / witchesPerPage);

    if (store.currentPage < totalPagesCount) {
      this.paginationButtonNumber.node.textContent = '';
      store.currentPage += 1;
      this.paginationButtonNumber.node.textContent = `${store.currentPage}`;
      forPaginationUrl[0].value = String(store.currentPage);
    }
  }

  public turnPageRight(): void {
    const witchesPerPage = 7;
    // const responseWitches = await getAllWitches(forPaginationUrl);
    const catchWitches = store.currentWitches;
    const totalPagesCount = Math.ceil(catchWitches / witchesPerPage);

    if (store.currentPage < totalPagesCount) {
      this.paginationButtonNumber.node.textContent = '';
      store.currentPage -= 1;
      this.paginationButtonNumber.node.textContent = `${store.currentPage}`;
      forPaginationUrl[0].value = String(store.currentPage);
    }
  }
}
