import { Tree } from './components';
import { CSSEditor } from './components/css_editor';
import { GameProgress } from './components/game_progress/game_progress';
import { Header } from './components/header';
import { Hints } from './components/hints';
import { HTMLViewer } from './components/html_viewer';
import { Instructions } from './components/instructions/instructions';
import { Observer } from './components/observer';
import { ViewerEditor } from './components/viewer_editor/viewer_editor';
import { Viewport } from './components/viewport';
import { BaseComponent } from './core/base-component';
import './style.scss';

const cssEditor = new CSSEditor();

const htmlViewer = new HTMLViewer();

const viewerEditor = new ViewerEditor();
viewerEditor.append(htmlViewer, cssEditor);

const hints = new Hints();

const gameProgress = new GameProgress();

const tree = new Tree();

const viewport = new Viewport();

viewport.append(tree, gameProgress, hints);

const instructions = new Instructions();

const header = new Header();

const game = new BaseComponent({
  tagName: 'div',
  classList: ['game'],
  children: [instructions, viewport, viewerEditor]
});

const selectorsBody = document.body;

selectorsBody.append(header.node, game.node);
