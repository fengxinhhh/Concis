import type { eventDom } from './interface';

const onClick = (callback) => {
  ['mousedown', 'touchstart'].forEach((eventType) => {
    let timer;
    window.addEventListener(eventType, (event) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const target = event.target as eventDom & EventTarget;
        const { top, left } = (target as any).getBoundingClientRect();
        callback({
          top,
          left,
          eventType,
          pageHeight: document.documentElement.scrollHeight || document.body.scrollHeight,
          scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
          type: 'behavior',
          subType: 'click',
          target: target.tagName,
          paths: (event as any).path?.map((item) => item.tagName).filter(Boolean),
          startTime: event.timeStamp,
          outerHTML: target.outerHTML,
          innerHTML: target.innerHTML,
          width: target.offsetWidth,
          height: target.offsetHeight,
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
          },
        });
      }, 500);
    });
  });
};

export { onClick };
