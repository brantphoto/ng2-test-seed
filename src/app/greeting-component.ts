import {Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-greeting',
  template: `
    <input #pinInput placeholder="1111" type="number"/>
    <button (click)="enter(pinInput.value)">Enter</button>
    <h3>Status: {{greeting}}</h3>
  `,
  styles :[`
    input {font-family: monospace; font-size: 2em; width: 4em}
    button {border: 2px solid; height: 2em}
  `]
})
export class GreetingComponent {
  @Output() updatePin = new EventEmitter<string>();
  greeting: string = 'Enter PIN';
  pending: Promise<void>;

  enter(pin:string) {
    this.updatePin.emit(pin);
  }
}

