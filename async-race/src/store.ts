/* eslint-disable no-underscore-dangle */
import { Observer } from './observer';

export const currentWitchesObserver = new Observer();

export const store = {
  _currentWitches: 4,
  currentWitchesObserver,
  _indexForUpdate: 0,
  _currentUpdate: 0,
  _currentPage: 1,
  _currentWinnersPage: 1,
  set currentWitches(value: number) {
    this._currentWitches = value;
    this.currentWitchesObserver.notify('lalala');
  },
  get currentWitches(): number {
    return this._currentWitches;
  },

  set indexForUpdate(id: number) {
    this._indexForUpdate = id;
  },
  get indexForUpdate(): number {
    return this._indexForUpdate;
  },

  set currentUpdate(click: number) {
    this._currentUpdate = click;
    this.currentWitchesObserver.notify('lalala');
  },
  get currentUpdate(): number {
    return this._currentUpdate;
  },

  set currentPage(page: number) {
    this._currentPage = page;
    this.currentWitchesObserver.notify('lalala');
  },
  get currentPage(): number {
    return this._currentPage;
  },

  set currentWinnersPage(page: number) {
    this._currentWinnersPage = page;
  },
  get currentWinnersPage(): number {
    return this._currentWinnersPage;
  },
};
