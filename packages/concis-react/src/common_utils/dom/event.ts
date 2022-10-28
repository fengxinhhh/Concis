import { RefObject, RefCallback } from 'react';

// 挂载事件
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

// 销毁事件
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

// 点击组件外部执行重置
function onClickOutSide(el: RefObject<HTMLElement> | HTMLElement, handler: EventListener) {
  if (!(el instanceof HTMLElement)) {
    el = el.current;
  }
  const clickOutsideHandler = function (e: MouseEvent) {
    if (el && !(el as HTMLElement).contains(e.target as HTMLElement)) {
      handler.call(this, e);
    }
  };
  on(window, 'click', clickOutsideHandler)();
  return function () {
    off(window, 'click', clickOutsideHandler)();
  };
}

// 分发给调用组件Ref
function dispatchRef<T>(ref: RefCallback<T> | RefObject<HTMLElement | null>, componentElement: T) {
  if (ref) {
    if (typeof ref === 'function') {
      ref(componentElement);
    } else if (typeof ref === 'object') {
      (ref.current as unknown) = componentElement;
    }
  }
}

export { on, off, onClickOutSide, dispatchRef };
