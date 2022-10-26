export default function addEventListener(
  target: HTMLElement | Window | Document,
  eventType: string,
  cb: (this: Element, ev: Event) => any,
  options?: boolean | AddEventListenerOptions
) {
  target?.addEventListener(eventType, cb, options);
  return {
    remove() {
      target.removeEventListener(eventType, cb, options);
    },
  };
}
