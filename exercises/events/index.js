// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.storage = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (!this.storage[eventName]) {
      this.storage[eventName] = [callback];
    } else {
      this.storage[eventName].push(callback);
    }
  }
  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (!this.storage[eventName]) {
      return;
    }
    for (let event of this.storage[eventName]) {
      event();
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.storage[eventName];
  }
}

module.exports = Events;
