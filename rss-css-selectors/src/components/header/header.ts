import { BaseComponent } from '@/core/base-component';

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

    const headerDay = new BaseComponent({
      tagName: 'span',
      classList: ['header_icon', 'day']
    });

    const headerNight = new BaseComponent({
      tagName: 'span',
      classList: ['header_icon', 'night']
    });

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
      children: [headerLogo, headerTheme, headerLinksWrapper]
    });

    this.node.append(headerWrapper.node);
  }
}
