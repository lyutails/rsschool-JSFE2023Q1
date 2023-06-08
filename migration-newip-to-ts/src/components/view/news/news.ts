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
                if (newsItem) {
                    newsItem.classList.add('alt');
                } else {
                    throw new Error('no news item out there');
                }
            }

            const metaPhoto = newsClone.querySelector<HTMLDivElement>('.news__meta-photo');
            if (metaPhoto) {
                metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            } else {
                throw new Error('no photo out there');
            }

            const metaAuthor = newsClone.querySelector<HTMLUListElement>('.news__meta-author');
            if (metaAuthor) {
                metaAuthor.textContent = item.author || item.source.name;
            } else {
                throw new Error('no author found');
            }

            const metaDate = newsClone.querySelector<HTMLUListElement>('.news__meta-date');
            if (metaDate) {
                metaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');
            } else {
                throw new Error('no meta date out there');
            }

            const descriptionTitle = newsClone.querySelector<HTMLHeadingElement>('.news__description-title');
            if (descriptionTitle) {
                descriptionTitle.textContent = item.title;
            } else {
                throw new Error('no title out there');
            }

            const descriptionSource = newsClone.querySelector<HTMLHeadingElement>('.news__description-source');
            if (descriptionSource) {
                descriptionSource.textContent = item.source.name;
            } else {
                throw new Error('no description source found');
            }

            const descriptionContent = newsClone.querySelector<HTMLParagraphElement>('.news__description-content');
            if (descriptionContent) {
                descriptionContent.textContent = item.description;
            } else {
                throw new Error('no description content out there');
            }

            const readMore = newsClone.querySelector<HTMLLinkElement>('.news__read-more a');
            if (readMore) {
                readMore.setAttribute('href', item.url);
            } else {
                throw new Error('nothing to read more out there');
            }

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
