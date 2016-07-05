import {Component} from '@angular/core';

@Component({
  selector: 'my-fancy-border',
  template: `
    <div class="outer">
      <span>-- {{title}} --</span>
      <div class="inner">
        <ng-content></ng-content>
        </div>
      <span>-- {{title}} --</span>
    </div>
    `,
  styleUrls: ['app/border-component.css'],
  inputs: ['title: title']
})
export class BorderComponent {
  title: string;
}
