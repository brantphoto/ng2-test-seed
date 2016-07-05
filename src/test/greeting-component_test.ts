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
import { UserService } from '../app/user-service';
import { LoginService } from '../app/login-service';
import { GreetingComponent } from '../app/greeting-component';

class MockLoginService extends LoginService {
  login(pin: number) {
    return Promise.resolve(true);
  }
}

describe('greeting component', () => {
  var builder;

  beforeEach(() => {
    addProviders([
      provide(LoginService, { useClass: MockLoginService }),
      UserService
    ]);
  });

  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb;
  }));

  describe('method enter', () => {
    it('should emit update event with arguement', async(() => {
      builder.createAsync(GreetingComponent)
        .then((fixture: ComponentFixture<GreetingComponent>) => {
          let greetingComponent: GreetingComponent = fixture.componentInstance;
          spyOn(greetingComponent.updatePin, 'emit');

          greetingComponent.enter('3343');

          expect(greetingComponent.updatePin.emit).toHaveBeenCalledWith('3343');

        });
    }));
  });

  it('should ask for PIN', async(() => {
    builder.createAsync(GreetingComponent).then((fixture: ComponentFixture<GreetingComponent>) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;


      expect(compiled).toContainText('Enter PIN');
      expect(compiled.querySelector('h3')).toHaveText('Status: Enter PIN');
    });
  }));

  it('should override the template', async(() => {
    builder.overrideTemplate(GreetingComponent, `<span>{{greeting}}<span>`)
      .createAsync(GreetingComponent)
      .then((fixture: ComponentFixture<GreetingComponent>) => {
          fixture.detectChanges();

          var compiled = fixture.debugElement.nativeElement;
          expect(compiled).toHaveText('Enter PIN');
      });
    }));
});
