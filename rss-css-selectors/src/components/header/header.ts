import { BaseComponent } from '@/core/base-component';

import {
  branchFourObserverDay,
  branchOneObserverDay,
  branchThreeObserverDay,
  branchTwoObserverDay
} from '../branch';
import {
  branchFourObserverNight,
  branchOneObserverNight,
  branchThreeObserverNight,
  branchTwoObserverNight
} from '../branch/branch';
import {
  csseditorObserverDay,
  csseditorObserverNight,
  inputObserverDay,
  inputObserverNight
} from '../css_editor';
import { progressObserverDay, progressObserverNight } from '../game_progress';
import { hintsObserverDay, hintsObserverNight } from '../hints';
import { htmlviewerObserverDay, htmlviewerObserverNight } from '../html_viewer';
import {
  instructionsObserverDay,
  instructionsObserverNight
} from '../instructions/instructions';
import { leavesObserverDay, leavesObserverNight } from '../leaf';
import { levelsObserverDay, levelsObserverNight } from '../levels_menu';
import { Observer } from '../observer';
import {
  treeObserverDay,
  treeObserverNight,
  treePicObserverDay,
  treePicObserverNight
} from '../tree';

import { Button } from '@/UI/button';

export const dayObserver = new Observer();
export const nightObserver = new Observer();

export const rsschoolObserverDay = new Observer();
export const rsschoolObserverNight = new Observer();

export const lyutailsObserverDay = new Observer();
export const lyutailsObserverNight = new Observer();

export class Header extends BaseComponent<'header'> {
  constructor() {
    super({
      tagName: 'header',
      classList: ['header']
    });

    const author = new BaseComponent({
      tagName: 'a',
      classList: ['header_author'],
      textContent: 'lyutails'
    });

    author.addLink('https://github.com/lyutails');

    const year = new BaseComponent({
      tagName: 'div',
      classList: ['header_year'],
      textContent: '2023'
    });

    const RSSchool = new BaseComponent({
      tagName: 'a',
      classList: ['header_rsschool'],
      textContent: 'RSSchool'
    });

    RSSchool.addLink('https://rs.school/');

    const headerLinksWrapper = new BaseComponent({
      tagName: 'div',
      classList: ['header_links_wrapper'],
      children: [RSSchool, year, author]
    });

    const timer = new BaseComponent({
      tagName: 'div',
      classList: ['header_timer'],
      textContent: '00:00'
    });

    const buttonPause = new Button();
    buttonPause.addTextContent('Pause');
    buttonPause.addMoreClasses('pause');

    const buttonStart = new Button();
    buttonStart.addTextContent('Start');
    buttonStart.addMoreClasses('start');

    const controls = new BaseComponent({
      tagName: 'div',
      classList: ['header_controls'],
      children: [buttonStart, buttonPause, timer]
    });

    const sound = new BaseComponent({
      tagName: 'div',
      classList: ['header_sound']
    });

    sound.toggleClassOnClick();

    const headerDay = new BaseComponent({
      tagName: 'div',
      classList: ['header_icon', 'day']
    });

    const headerNight = new BaseComponent({
      tagName: 'div',
      classList: ['header_icon', 'night', 'active']
    });

    Header.addRemoveClassOnClick(headerDay, headerNight);

    const headerTheme = new BaseComponent({
      tagName: 'div',
      classList: ['header_theme'],
      children: [headerNight, headerDay]
    });

    const headerLogo = new BaseComponent({
      tagName: 'div',
      classList: ['header_logo']
    });

    const headerWrapper = new BaseComponent({
      tagName: 'div',
      classList: ['header_wrapper'],
      children: [headerLogo, headerTheme, sound, controls, headerLinksWrapper]
    });

    dayObserver.subscribe(() => this.node.classList.add('recolour'));
    nightObserver.subscribe(() => this.node.classList.remove('recolour'));

    rsschoolObserverDay.subscribe(() =>
      RSSchool.node.classList.add('recolour')
    );
    rsschoolObserverNight.subscribe(() =>
      RSSchool.node.classList.remove('recolour')
    );

    lyutailsObserverDay.subscribe(() => author.node.classList.add('recolour'));
    lyutailsObserverNight.subscribe(() =>
      author.node.classList.remove('recolour')
    );

    this.node.append(headerWrapper.node);
  }

  public static addRemoveClassOnClick(
    element_one: BaseComponent,
    element_two: BaseComponent
  ): void {
    element_one.node.addEventListener('click', () => {
      element_one.node.classList.add('active');
      element_two.node.classList.remove('active');
      dayObserver.notify('lalala');
      instructionsObserverDay.notify('lalala');
      progressObserverDay.notify('lalala');
      levelsObserverDay.notify('lalala');
      hintsObserverDay.notify('lalala');
      htmlviewerObserverDay.notify('lalala');
      csseditorObserverDay.notify('lalala');
      inputObserverDay.notify('lalala');
      rsschoolObserverDay.notify('lalala');
      lyutailsObserverDay.notify('lalala');
      treeObserverDay.notify('lalala');
      treePicObserverDay.notify('lalala');
      branchOneObserverDay.notify('lalala');
      branchTwoObserverDay.notify('lalala');
      branchThreeObserverDay.notify('lalala');
      branchFourObserverDay.notify('lalala');
      leavesObserverDay.notify('lalala');
    });
    element_two.node.addEventListener('click', () => {
      element_two.node.classList.add('active');
      element_one.node.classList.remove('active');
      nightObserver.notify('lalala');
      instructionsObserverNight.notify('lalala');
      progressObserverNight.notify('lalala');
      levelsObserverNight.notify('lalala');
      hintsObserverNight.notify('lalala');
      htmlviewerObserverNight.notify('lalala');
      csseditorObserverNight.notify('lalala');
      inputObserverNight.notify('lalala');
      rsschoolObserverNight.notify('lalala');
      lyutailsObserverNight.notify('lalala');
      treeObserverNight.notify('lalala');
      treePicObserverNight.notify('lalala');
      branchOneObserverNight.notify('lalala');
      branchTwoObserverNight.notify('lalala');
      branchThreeObserverNight.notify('lalala');
      branchFourObserverNight.notify('lalala');
      leavesObserverNight.notify('lalala');
    });
  }
}
