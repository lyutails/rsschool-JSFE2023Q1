import { BaseComponent } from './components/core/base-component';
// import { BroomsParking } from './components/pages/brooms_parking';
// import { NotFound } from './components/pages/not_found_page';
import { Quidditch } from './components/pages/quidditch_page';
// import { Winners } from './components/pages/winners_page';
import { Footer } from './components/reused/footer';
import { Header } from './components/reused/header';
import './style.scss';

const header = new Header();

const quidditch = new Quidditch();

// const notFound = new NotFound();

// const winners = new Winners();

// const broomsParking = new BroomsParking();

const footer = new Footer();

const raceBody = document.body;

const pageBody = new BaseComponent({
  tagName: 'div',
  classList: ['page_body'],
  children: [quidditch]
});

raceBody.append(header.node, pageBody.node, footer.node);
