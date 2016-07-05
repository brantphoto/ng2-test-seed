import {Component, Input} from '@angular/core';
import {PinService} from './pin-service';

@Component({
  selector: 'my-hint',
  providers: [PinService],
  template: `<h1 *ngIf="suggestedPin">Have You Tried {{suggestedPin}}?`
})
export class HintComponent {
  @Input() pin: string;
  suggestedPin: string = "";
  constructor(public pinService: PinService) {
  }

  ngOnChanges(changes) {
    if (changes.pin && changes.pin.currentValue) {
      this.suggestedPin = this.pinService
        .suggestPin()
        .toString();
    }
  }

}
