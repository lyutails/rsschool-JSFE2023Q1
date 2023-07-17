import { TrackButton } from '../UI/track_button';
import { BaseComponent } from '../core/base-component';
import { witchNameUpdateObserver } from '../features/track_wrapper';

export class TrackButtons extends BaseComponent {
  public flyButton: TrackButton;
  public backButton: TrackButton;
  public pickButton: TrackButton;
  public delButton: TrackButton;
  constructor() {
    super({
      tagName: 'div',
      classList: ['track_buttons'],
    });

    this.flyButton = new TrackButton();
    this.flyButton.node.textContent = 'Fly';

    this.backButton = new TrackButton();
    this.backButton.node.textContent = 'Back';

    this.pickButton = new TrackButton();
    this.pickButton.node.textContent = 'Pick';

    this.pickButton.node.addEventListener('click', () => {
      witchNameUpdateObserver.notify('lalala');
    });

    this.delButton = new TrackButton();
    this.delButton.node.textContent = 'Del';

    this.node.append(
      this.flyButton.node,
      this.backButton.node,
      this.pickButton.node,
      this.delButton.node
    );
  }
}
