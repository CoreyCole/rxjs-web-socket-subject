import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';

import { Event } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private socket$: WebSocketSubject<any>;
  private serverEvents: Event[];

  constructor() {
    this.socket$ = WebSocketSubject.create('ws://localhost:8080');
    this.socket$
      .subscribe(
        (e) => this.handle(e),
        (err) => console.error(err),
        () => console.warn('Completed!')
      );
  }

  public test(): void {
    const testMessage: Event = new Event('client', 'test', null);
    console.log('sending', testMessage);
    this.socket$.next(JSON.stringify({
        event: 'events',
        data: 'test',
    }));
  }

  private handle(e: Event): void {
    console.log('receiving', e);
  }
}
