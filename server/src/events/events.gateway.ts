import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Event, EventResponse } from '../../../client/src/app/app.models';

@WebSocketGateway(8080)
export class EventsGateway {
  @WebSocketServer() server;

  constructor() {
    console.log('started websocket listener on port 8080 :)');
  }

  @SubscribeMessage('events')
  onEvent(client, data): WsResponse<EventResponse> {
    console.log(data);

    return { event: 'events', data };
  }
}
