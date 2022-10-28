import { RefObject } from 'react';

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

function onClickOutSide(el: RefObject<HTMLElement> | HTMLElement, handler: EventListener) {
  if (!(el instanceof HTMLElement)) {
    el = el.current;
  }
  const clickOutsideHandler = function (e: MouseEvent) {
    if (el && !(el as HTMLElement).contains(e.target as HTMLElement)) {
      handler.call(this, e);
    }
  };
  window.addEventListener('mousedown', clickOutsideHandler);
  return function () {
    window.removeEventListener('mousedown', clickOutsideHandler);
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

export { on, off, onClickOutSide };
