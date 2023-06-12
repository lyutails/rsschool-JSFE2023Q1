import { NewsItem } from '../../../types';
import './news.css';

class News {
  draw(data: NewsItem[]) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
    if (!(newsItemTemp instanceof HTMLTemplateElement)) {
      throw new Error('no news out there');
    }

    news.forEach((item: NewsItem, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true);
      if (!(newsClone instanceof DocumentFragment)) {
        throw new Error('no such news');
      }

      if (idx % 2) {
        const newsItem = newsClone.querySelector<HTMLDivElement>('.news__item');
        if (!newsItem) {
          throw new Error('no news item out there');
        }
        newsItem.classList.add('alt');
      }

      const metaPhoto = newsClone.querySelector<HTMLDivElement>('.news__meta-photo');
      if (!metaPhoto) {
        throw new Error('no photo out there');
      }
      metaPhoto.style.backgroundImage = `url(${item.urlToImage || '/assets/placeholder.png'})`;

      const metaAuthor = newsClone.querySelector<HTMLUListElement>('.news__meta-author');
      if (!metaAuthor) {
        throw new Error('no author found');
      }
      metaAuthor.textContent = item.author || item.source.name;

      const metaDate = newsClone.querySelector<HTMLUListElement>('.news__meta-date');
      if (!metaDate) {
        throw new Error('no meta date out there');
      }
      metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      const descriptionTitle = newsClone.querySelector<HTMLHeadingElement>('.news__description-title');
      if (!descriptionTitle) {
        throw new Error('no title out there');
      }
      descriptionTitle.textContent = item.title;

      const descriptionSource = newsClone.querySelector<HTMLHeadingElement>('.news__description-source');
      if (!descriptionSource) {
        throw new Error('no description source found');
      }
      descriptionSource.textContent = item.source.name;

      const descriptionContent = newsClone.querySelector<HTMLParagraphElement>('.news__description-content');
      if (!descriptionContent) {
        throw new Error('no description content out there');
      }
      descriptionContent.textContent = item.description;

      const readMore = newsClone.querySelector<HTMLLinkElement>('.news__read-more a');
      if (!readMore) {
        throw new Error('nothing to read more out there');
      }
      readMore.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const mainNews = document.querySelector<HTMLDivElement>('.news');
    if (mainNews) {
      mainNews.innerHTML = '';
    } else {
      throw new Error('no news out there');
    }

    const someNews = document.querySelector<HTMLDivElement>('.news');
    if (someNews) {
      someNews.appendChild(fragment);
    } else {
      throw new Error('no even some news out there');
    }
  }
}

export default News;
