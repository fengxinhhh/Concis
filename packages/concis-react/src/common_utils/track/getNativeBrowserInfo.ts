import { getNowTime } from '../getNowTime';

type nativeBrowserInfoType = {
  domain?: string;
  url?: string;
  title?: string;
  referrer?: string;
  screenHeight?: number | string;
  screenWidth?: number | string;
  color?: number;
  lang?: string;
  ua?: string;
  watchTime?: string;
  memory?: string;
  connectTime?: string;
  responseTime?: string;
  renderTime?: string;
};
const formatMemory = (val: number) => {
  //格式化内存数据
  return Math.floor(val / 1024 / 1024) + 'mb';
};
const formatTimeToSecord = (val: number) => {
  //转换为秒
  return val / 1000 + 's';
};
const getNativeBrowserInfo = () => {
  //获取浏览器原生数据
  return new Promise((resolve) => {
    const params: nativeBrowserInfoType = {};
    if (document) {
      params.domain = document.domain || ''; //获取域名
      // params.url = String(document.URL) || ''; //当前Url地址
      params.title = document.title || '';
      // params.referrer = String(document.referrer) || ''; //上一跳路径
    }
    //Window对象数据
    if (window && window.screen) {
      params.screenHeight = window.screen.height || 0; //获取显示屏信息
      params.screenWidth = window.screen.width || 0;
      params.color = window.screen.colorDepth || 0;
    }
    //navigator对象数据
    if (navigator) {
      params.lang = navigator.language || ''; //获取所用语言种类
      params.ua = navigator.userAgent.toLowerCase(); //运行环境
    }
    //获取性能相关参数
    if (window && window.performance) {
      params.memory = formatMemory(window.performance.memory.usedJSHeapSize);
      params.connectTime = formatTimeToSecord(
        window.performance.timing.connectEnd - window.performance.timing.connectStart,
      );
      params.responseTime = formatTimeToSecord(
        window.performance.timing.responseEnd - window.performance.timing.responseStart,
      );
      params.renderTime = formatTimeToSecord(
        window.performance.timing.domComplete - window.performance.timing.domLoading,
      );
    }
    params.watchTime = getNowTime();
    resolve(params);
  });
};

export default getNativeBrowserInfo;
