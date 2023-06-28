/* eslint-disable no-underscore-dangle */
import { Observer } from '@/components/observer';

export const currentLevelObserver = new Observer();
export const store = {
  _currentLevel: 0,
  currentLevelObserver,
  set currentLevel(value: number) {
    this._currentLevel = value;
    this.currentLevelObserver.notify('lalala');
  },
  get currentLevel(): number {
    return this._currentLevel;
  }
};
