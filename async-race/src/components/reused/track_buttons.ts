import { TrackButton } from '../UI/track_button';
import { BaseComponent } from '../../core/base-component';
import { Observer } from '../../observer';

export const disableTrackButtonsObserver = new Observer();
export const enableTrackButtonsObserver = new Observer();
export const flyBackButtonsObserver = new Observer();

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
    this.backButton.disableButton();

    this.pickButton = new TrackButton();
    this.pickButton.node.textContent = 'Pick';

    this.delButton = new TrackButton();
    this.delButton.node.textContent = 'Del';

    this.node.append(
      this.flyButton.node,
      this.backButton.node,
      this.pickButton.node,
      this.delButton.node
    );

    disableTrackButtonsObserver.subscribe(() => {
      this.flyButton.disableButton();
      this.backButton.disableButton();
      this.pickButton.disableButton();
      this.delButton.disableButton();
    });

    enableTrackButtonsObserver.subscribe(() => {
      this.backButton.enableButton();
      this.pickButton.enableButton();
      this.delButton.enableButton();
    });

    flyBackButtonsObserver.subscribe(() => {
      this.flyButton.enableButton();
      this.backButton.disableButton();
    });
  }
}
