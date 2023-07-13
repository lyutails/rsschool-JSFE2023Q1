import { BaseComponent } from './components/core/base-component';
import { Quidditch } from './components/pages/quidditch_page';
import { Footer } from './components/reused/footer';
import { Header } from './components/reused/header';
import './style.scss';

const header = new Header();

const quidditch = new Quidditch();

const footer = new Footer();

const raceBody = document.body;

const pageBody = new BaseComponent({
  tagName: 'div',
  classList: ['page_body'],
  children: [quidditch]
});

raceBody.append(header.node, pageBody.node, footer.node);
