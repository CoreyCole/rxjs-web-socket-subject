export class Event {
  public event = 'events';
  constructor(
    public sender: string,
    public type: string,
    public payload: any
  ) { }
}
