import {
  inject,
  async,
  addProviders,
  fakeAsync,
  tick,
  ComponentFixture,
  TestComponentBuilder
} from '@angular/core/testing';

import { provide, SimpleChange } from '@angular/core';
import { PinService } from '../app/pin-service';
import { HintComponent } from '../app/hint-component';

describe('component: HintComponent', () => {
  var builder;

  beforeEach(inject([TestComponentBuilder], tcb => {
    builder = tcb;
  }));

  describe('when ngOnChanges is called', () => {
    it('when pin changes', async(() => {
      builder.createAsync(HintComponent)
        .then((fixture: ComponentFixture<HintComponent>) => {
          //given
          //when
          //then
        });
    }));
  });

});
