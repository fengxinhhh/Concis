import { getNowTime } from '../getNowTime';

type errorList<T> = {
  errorMessage?: T;
  scriptURI?: T;
  errorObj?: T;
  happenURI?: T;
  happenTime?: T;
};
const getErrorInfo = () => {
  const errorList: errorList<string | Event | number | undefined> = {};
  window.onerror = (errorMessage, scriptURI, errorObj) => {
    errorList.errorMessage = errorMessage;
    errorList.scriptURI = scriptURI;
    errorList.happenURI = window.location.href.replace('#', '');
    errorList.errorObj = errorObj;
    errorList.happenTime = getNowTime();
    const sendScript = document.createElement('script');
    const requestAddress = `https://concis.org.cn:9999/saveErrorMessage?info=${JSON.stringify(
      errorList,
    )}`;
    sendScript.src = requestAddress;
    document.body.appendChild(sendScript);
  };
};

export { getErrorInfo };
