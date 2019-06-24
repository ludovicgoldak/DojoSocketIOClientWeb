import { EventWrapper } from './eventWrapper';
import { EventEmitter } from 'events';

export class Dispatcher {
  public eventEmitter: EventEmitter = new EventEmitter();
  public wrappers: EventWrapper[] = [];

  public wrap() {
    const wrapper = new EventWrapper(this.eventEmitter);
    wrapper.dispatcher = this;
    this.wrappers.push(wrapper);
    return wrapper;
  }

  public emit(events: string | string[], data?: any) {
    if (!Array.isArray(events)) {
      events = [events];
    }
    for (const event of events) {
      this.eventEmitter.emit(event, data);
    }
  }

  public done(): this {
    for (const wrapper of this.wrappers) {
      wrapper.doneWithoutOrigin();
    }
    this.wrappers = [];
    return this;
  }
}
