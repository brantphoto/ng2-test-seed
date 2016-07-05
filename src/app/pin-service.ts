import {Injectable} from '@angular/core';

@Injectable()
export class PinService {
  suggestPin() : number {
    return Math.floor(Math.random() * 9000) + 1000;
  }
}
