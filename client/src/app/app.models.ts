export class Event {
  public event = 'events';
  public data: {
    sender: string,
    type: string,
    payload: any
  };
  constructor(
    sender: string,
    type: string,
    payload: any
  ) {
    this.data = Object.freeze({
      sender, type, payload
    });
  }
}

export interface EventResponse {
  event: string;
  data: {
    sender: string,
    type: string,
    payload: any
  };
}
