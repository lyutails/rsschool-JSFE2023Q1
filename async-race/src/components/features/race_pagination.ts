import { BaseComponent } from '../../core/base-component';
import { store } from '../../store';
import { forPaginationUrl } from '../../types/constants';

export class RacePagination extends BaseComponent {
  public static paginationButtonBeginning: BaseComponent<'button'>;
  public static paginationButtonLeft: BaseComponent<'button'>;
  public static paginationButtonNumber: BaseComponent<'button'>;
  public static paginationButtonRight: BaseComponent<'button'>;
  public static paginationButtonEnd: BaseComponent<'button'>;
  constructor() {
    super({
      tagName: 'div',
      classList: ['race_pagination'],
    });

    RacePagination.paginationButtonBeginning = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    RacePagination.paginationButtonBeginning.enableButton();
    RacePagination.paginationButtonBeginning.setCursorPointer();

    RacePagination.paginationButtonLeft = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    RacePagination.paginationButtonLeft.enableButton();
    RacePagination.paginationButtonLeft.setCursorPointer();

    RacePagination.paginationButtonLeft.node.addEventListener('click', () => {
      this.turnPageRight();
    });

    RacePagination.paginationButtonNumber = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    RacePagination.paginationButtonNumber.node.textContent = `${store.currentPage}`;

    RacePagination.paginationButtonRight = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    RacePagination.paginationButtonRight.enableButton();
    RacePagination.paginationButtonRight.setCursorPointer();

    RacePagination.paginationButtonRight.node.addEventListener('click', () => {
      this.turnPageLeft();
    });

    RacePagination.paginationButtonEnd = new BaseComponent({
      tagName: 'button',
      classList: ['race_pagination_button'],
    });

    RacePagination.paginationButtonEnd.enableButton();
    RacePagination.paginationButtonEnd.setCursorPointer();

    // if (store.currentWitches > 7) {
    //   this.paginationButtonLeft.enableButton();
    //   this.paginationButtonEnd.enableButton();
    // }

    // if (store.currentWitches > 7 && store.currentPage > 1) {
    //   this.paginationButtonRight.enableButton();
    // }

    this.node.append(
      RacePagination.paginationButtonBeginning.node,
      RacePagination.paginationButtonLeft.node,
      RacePagination.paginationButtonNumber.node,
      RacePagination.paginationButtonRight.node,
      RacePagination.paginationButtonEnd.node
    );
  }

  public turnPageLeft(): void {
    const witchesPerPage = 7;
    const catchWitches = store.currentWitches;
    const totalPagesCount = Math.ceil(catchWitches / witchesPerPage);

    if (store.currentPage < totalPagesCount) {
      RacePagination.paginationButtonNumber.node.textContent = '';
      store.currentPage += 1;
      RacePagination.paginationButtonNumber.node.textContent = `${store.currentPage}`;
      forPaginationUrl[0].value = String(store.currentPage);
    }

    // const { currentPage } = store;
    // localStorage.setItem('page', `${currentPage}`);
  }

  public turnPageRight(): void {
    const witchesPerPage = 7;
    const catchWitches = store.currentWitches;
    const totalPagesCount = Math.ceil(catchWitches / witchesPerPage);

    if (store.currentPage < totalPagesCount) {
      RacePagination.paginationButtonNumber.node.textContent = '';
      store.currentPage -= 1;
      RacePagination.paginationButtonNumber.node.textContent = `${store.currentPage}`;
      forPaginationUrl[0].value = String(store.currentPage);
    }
  }
}
