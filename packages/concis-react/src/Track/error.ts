const getJavaScriptError = (callback) => {
  window.addEventListener('error', ({ message, filename, type }) => {
    callback({
      msg: message,
      url: filename,
      type,
      time: new Date().getTime(),
    });
  });
};

const getJavaScriptAsyncError = (callback) => {
  window.addEventListener('unhandledrejection', (e) => {
    callback({
      type: 'promise',
      msg: (e.reason && e.reason.msg) || e.reason || '',
      time: new Date().getTime(),
    });
  });
};

export { getJavaScriptError, getJavaScriptAsyncError };
