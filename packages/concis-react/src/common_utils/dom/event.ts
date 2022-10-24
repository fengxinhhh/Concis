function on(
  el: any,
  eventName: string,
  handler: EventListener | EventListenerObject | Function,
  options?: boolean
) {
  return function () {
    el && el.addEventListener(eventName, handler, options || false);
  };
}

function off(
  el: any,
  eventName: string,
  handler: EventListener | EventListenerObject | Function,
  options?: boolean
) {
  return function () {
    el && el.removeEventListener(eventName, handler, options || false);
  };
}

export { on, off };
