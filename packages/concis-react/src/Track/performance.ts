const collectFP = () => {
  return new Promise((resolve) => {
    const entryHandler = (list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-paint') {
          resolve(entry);
          observer.disconnect();
        }
      }
    };
    const observer = new PerformanceObserver(entryHandler);
    observer.observe({ type: 'paint', buffered: true });
  });
};

const collectFCP = () => {
  return new Promise((resolve) => {
    const entryHandler = (list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          resolve(entry);
          observer.disconnect();
        }
      }
    };
    const observer = new PerformanceObserver(entryHandler);
    observer.observe({ type: 'paint', buffered: true });
  });
};

const collectLCP = () => {
  return new Promise((resolve) => {
    const entryHandler = (list) => {
      if (observer) {
        observer.disconnect();
      }
      for (const entry of list.getEntries()) {
        resolve(entry);
      }
    };
    const observer = new PerformanceObserver(entryHandler);
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  });
};

// const collectDOMReadyTime = () => {
//   return new Promise((resolve) => {
//     const callback = () => {
//       window.removeEventListener('DOMContentLoaded', callback);
//       resolve({
//         entryType: 'domReadyTime',
//         startTime: performance.now(),
//       });
//     };
//     window.addEventListener('DOMContentLoaded', callback);
//   });
// };

const collectLoadTime = () => {
  return new Promise((resolve) => {
    const callback = () => {
      window.removeEventListener('load', callback, true);
      resolve({
        entryType: 'loadTime',
        startTime: performance.now(),
      });
    };
    window.addEventListener('load', callback, true);
  });
};

const collectDNSQueryTime = () => {
  const { domainLookupEnd, domainLookupStart } = window.performance.timing;
  return domainLookupEnd - domainLookupStart;
};

const collectTCPConnectTime = () => {
  const { connectEnd, connectStart } = window.performance.timing;
  return connectEnd - connectStart;
};

const collectRequestTime = () => {
  const { responseEnd, requestStart } = window.performance.timing;
  return responseEnd - requestStart;
};

const collectParseDOMTree = () => {
  const { domComplete, domInteractive } = window.performance.timing;
  return domComplete - domInteractive;
};

const collectWhiteTime = () => {
  const { domLoading, fetchStart } = window.performance.timing;
  return domLoading - fetchStart;
};

export {
  collectFP,
  collectFCP,
  collectLCP,
  collectDNSQueryTime,
  collectTCPConnectTime,
  collectRequestTime,
  collectParseDOMTree,
  collectWhiteTime,
  // collectDOMReadyTime,
  collectLoadTime,
};
