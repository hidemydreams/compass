// eventBus.ts
import EventEmitter from 'events';

// Create the event bus
class EventBus extends EventEmitter {}
const eventBus = new EventBus();

export default eventBus;
