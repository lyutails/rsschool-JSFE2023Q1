import { BaseComponent } from './core/base-component';
import { BroomsParking } from './components/pages/brooms_parking';
import { NotFound } from './components/pages/not_found_page';
import { Quidditch } from './components/pages/quidditch_page';
import { Winners } from './components/pages/winners_page';
import { Footer } from './components/reused/footer';
import { Header } from './components/reused/header';
import './style.scss';
import { RouteName } from './types/enums';

class App {
  public raceBody: HTMLElement;
  public static pageBody: BaseComponent;
  public static quidditch: Quidditch;
  public static broomsParking: BroomsParking;
  public static winners: Winners;
  public static notFound: NotFound;

  constructor() {
    this.raceBody = document.body;

    const header = new Header();

    const footer = new Footer();

    App.quidditch = new Quidditch();

    App.notFound = new NotFound();

    App.winners = new Winners();

    App.broomsParking = new BroomsParking();

    App.pageBody = new BaseComponent({
      tagName: 'div',
      classList: ['page_body'],
    });

    App.pageBody.append(App.quidditch);

    App.run();

    this.raceBody.append(header.node, App.pageBody.node, footer.node);
  }

  public static renderNewView(idView: string): void {
    App.pageBody.node.textContent = '';

    if (idView === '') {
      App.pageBody.append(App.quidditch);
    }
    if (idView === RouteName.Quidditch) {
      App.pageBody.append(App.quidditch);
    }
    if (idView === RouteName.BroomParking) {
      App.pageBody.append(App.broomsParking);
    }
    if (idView === RouteName.Winners) {
      App.pageBody.append(App.winners);
    }
    if (idView === RouteName.NotFound) {
      App.pageBody.append(App.notFound);
    }
    if (
      idView !== RouteName.Quidditch &&
      idView !== RouteName.BroomParking &&
      idView !== RouteName.Winners &&
      idView !== ''
    ) {
      App.pageBody.append(App.notFound);
    }
  }

  private static enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewView(hash);
    });

    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewView(hash);
    });
  }

  public static run(): void {
    App.renderNewView(RouteName.Quidditch);
    App.enableRouteChange();
  }
}

new App();

export default App;
