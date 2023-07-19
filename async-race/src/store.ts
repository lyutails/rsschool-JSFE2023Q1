import { Observer } from "./observer";

export const currentWitchesObserver = new Observer();

export const store = {
  _currentWitches: 4,
  currentWitchesObserver,
  set currentWitches(value: number) {
    this._currentWitches = value;
    this.currentWitchesObserver.notify('lalala');
  },
  get currentWitches(): number {
    return this._currentWitches;
  }
};