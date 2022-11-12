import type { fetchRequestType, xhrRequestType } from './interface';

// 统计每个xhr网络请求的信息
const monitorXHRRequest = (callback) => {
  const originOpen = XMLHttpRequest.prototype.open;
  const originSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function newOpen(...args) {
    this.url = args[1];
    this.method = args[0];
    originOpen.apply(this, args);
  };

  XMLHttpRequest.prototype.send = function newSend(...args) {
    this.startTime = Date.now();

    const onLoadend = () => {
      this.endTime = Date.now();
      this.duration = this.endTime - this.startTime;

      const { status, duration, startTime, endTime, url, method } = this;
      const reportData: xhrRequestType = {
        status,
        duration,
        startTime,
        endTime,
        url,
        method: (method || 'GET').toUpperCase(),
        success: status >= 200 && status < 300,
        subType: 'xhr',
        type: 'performance',
      };
      callback(reportData);
      this.removeEventListener('loadend', onLoadend, true);
    };

    this.addEventListener('loadend', onLoadend, true);
    originSend.apply(this, args);
  };
};

// 统计每个fetch请求的信息
const monitorFetchRequest = (callback) => {
  const originalFetch = window.fetch;

  function overwriteFetch() {
    window.fetch = function newFetch(url, config) {
      const startTime = Date.now();
      const reportData: fetchRequestType = {
        startTime,
        endTime: 0,
        duration: 0,
        success: false,
        status: 0,
        url,
        method: (config?.method || 'GET').toUpperCase(),
        subType: 'fetch',
        type: 'performance',
      };
      return originalFetch(url, config)
        .then((res) => {
          reportData.endTime = Date.now();
          reportData.duration = reportData.endTime - reportData.startTime;
          const data = res.clone();
          reportData.status = data.status;
          reportData.success = data.ok;
          callback(reportData);
          return res;
        })
        .catch((err) => {
          reportData.endTime = Date.now();
          reportData.duration = reportData.endTime - reportData.startTime;
          reportData.status = 0;
          reportData.success = false;
          callback(reportData);
          throw err;
        });
    };
  }
  overwriteFetch();
};

export { monitorXHRRequest, monitorFetchRequest };
