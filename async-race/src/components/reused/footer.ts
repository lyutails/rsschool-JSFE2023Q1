import { BaseComponent } from '../../core/base-component';

export class Footer extends BaseComponent {
  constructor() {
    super({
      tagName: 'div',
      classList: ['footer'],
    });

    const rsschoolLink = new BaseComponent({
      tagName: 'a',
      classList: ['footer_rsschool'],
      textContent: 'RSSchool',
    });

    rsschoolLink.addLink('https://rs.school/');
    rsschoolLink.node.style.marginRight = '1vw';

    const year = new BaseComponent({
      tagName: 'a',
      classList: ['footer_year'],
      textContent: '2023',
    });

    const yearRSSchool = new BaseComponent({
      tagName: 'div',
      classList: ['footer_year_rs_wrapper'],
      children: [rsschoolLink, year],
    });

    const author = new BaseComponent({
      tagName: 'a',
      classList: ['footer_author'],
      textContent: 'lyutails',
    });

    author.addLink('https://github.com/lyutails');

    const footerWrapper = new BaseComponent({
      tagName: 'div',
      classList: ['footer_wrapper'],
      children: [yearRSSchool, author],
    });

    this.node.append(footerWrapper.node);
  }
}
