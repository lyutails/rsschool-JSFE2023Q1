import { BaseComponent } from '@/core/base-component';

import { Button } from '@/UI/button';

export class Header extends BaseComponent<'header'> {
  // eslint-disable-next-line max-lines-per-function
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

    this.node.append(headerWrapper.node);
  }
}
