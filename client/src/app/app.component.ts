import { Component } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

import { Event } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private socket$: WebSocketSubject<Event>;

  constructor() {
    this.socket$ = new WebSocketSubject('ws://localhost:8080');

    this.socket$.subscribe(
        (message) => console.log(message),
        (err) => console.error(err),
        () => console.warn('Completed!')
      );
  }

  public test(): void {
      const message = new Event('client', 'TEST', {});
      console.dir(message);

      this.socket$.next(message);
  }

}
