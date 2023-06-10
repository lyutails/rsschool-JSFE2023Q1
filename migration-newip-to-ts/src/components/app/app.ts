import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start() {
    const newsSources = document.querySelector<HTMLDivElement>('.sources');
    if (!(newsSources instanceof HTMLDivElement)) {
      throw new Error('no news sources out there');
    } else {
      newsSources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
    }

    this.controller.getSources((data) => this.view.drawSources(data));
  }
}

export default App;
