import { SourcesResponse, HeadlinesResponse, callbackFunction } from '../../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: callbackFunction<SourcesResponse>) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: callbackFunction<HeadlinesResponse>) {
    let target = e.target;
    const newsContainer = e.currentTarget;

    while (target !== newsContainer) {
      if (
        target !== null &&
        target instanceof HTMLElement &&
        newsContainer !== null &&
        newsContainer instanceof HTMLElement
      ) {
        if (target.classList.contains('source__item')) {
          const sourceId = target.getAttribute('data-source-id');
          if (!sourceId) {
            throw new Error('no source found out there');
          }
          if (newsContainer.getAttribute('data-source') !== sourceId) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp(
              {
                endpoint: 'everything',
                options: {
                  sources: sourceId,
                },
              },
              callback
            );
          }
          return;
        }
        target = target.parentNode;
      }
    }
  }
}

export default AppController;
