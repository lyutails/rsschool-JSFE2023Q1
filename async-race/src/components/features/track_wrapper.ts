import { TrackButtons } from '../reused/track_buttons';
import { BaseComponent } from '../core/base-component';
import { Track } from '../reused/track';
import { Witch } from '../reused/witch';
import { Owl } from '../reused/owl';
import { owlsArray } from '../../data/owls';

export class TrackWrapper extends BaseComponent {
  public broomWitchName: BaseComponent;
  constructor() {
    super({
      tagName: 'div',
      classList: ['track_wrapper'],
    });

    const witch = new Witch();

    const owl = new Owl();

    owl.node.style.backgroundImage = `url('${owl.randomizeOwl(owlsArray)}')`;

    const trackPath = new BaseComponent({
      tagName: 'div',
      classList: ['track_path'],
      children: [witch, owl]
    })

    const track = new Track();

    const trackButtons = new TrackButtons();

    this.broomWitchName = new BaseComponent({
      tagName: 'div',
      classList: ['track_broom_witch_name']
    })

    this.broomWitchName.node.textContent = 'broom witch name paste here';

    const buttonsAndName = new BaseComponent({
      tagName: 'div',
      classList: ['track_buttons_and_name'],
      children: [trackButtons, this.broomWitchName]
    })

    this.node.append(trackPath.node, track.node, buttonsAndName.node);
  }
}