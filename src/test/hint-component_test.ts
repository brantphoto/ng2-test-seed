import {
  inject,
  async,
  addProviders,
  fakeAsync,
  tick,
  ComponentFixture,
  TestComponentBuilder
} from '@angular/core/testing';

import { provide } from '@angular/core';
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
          let hintComponent: HintComponent = fixture.componentInstance;
          spyOn(hintComponent.pinService, 'suggestPin').and.callFake(() => '1232');

          //when
          hintComponent.ngOnChanges({pin: {previousValue: '2332', currentValue: '343'}});
          fixture.detectChanges();

          //then
          expect(hintComponent.pinService.suggestPin).toHaveBeenCalled();
          expect(hintComponent.suggestedPin).toEqual('1232');
        });
    }));
  });

});
