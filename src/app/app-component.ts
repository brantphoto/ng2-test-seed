import {Component} from '@angular/core';
import {GreetingComponent} from './greeting-component';
import {BorderComponent} from './border-component';
import {HintComponent} from './hint-component';

@Component({
  selector: 'my-app',
  template: `
    <my-fancy-border title="The PIN Machine">
      <my-greeting (updatePin)="updatePin($event)"></my-greeting>
    </my-fancy-border>
    <my-hint [pin]="latestPin"></my-hint>
  `,
  directives: [GreetingComponent, BorderComponent, HintComponent]
})

export class AppComponent {
  latestPin: string = '';

  updatePin(pin: string) {
    this.latestPin = pin;
  }

}
