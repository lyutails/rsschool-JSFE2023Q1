import { Tree } from './components';
import { Header } from './components/header';
import { Hints } from './components/hints';
import { Instructions } from './components/instructions/instructions';
import { ViewerEditor } from './components/viewer_editor/viewer_editor';
import { Viewport } from './components/viewport';
import { BaseComponent } from './core/base-component';
import './style.scss';

const viewerEditor = new ViewerEditor();

const hints = new Hints();

const tree = new Tree();

const viewport = new Viewport();

viewport.append(tree, hints);

const instructions = new Instructions();

const header = new Header();

const game = new BaseComponent({
  tagName: 'div',
  classList: ['game'],
  children: [instructions, viewport, viewerEditor]
});

const selectorsBody = document.body;

selectorsBody.append(header.node, game.node);
