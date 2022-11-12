import type { nativeBrowserInfoType } from './interface';

const getUserIp = () => {
  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = `https://pv.sohu.com/cityjson?ie=utf-8`;
    document.body.appendChild(scriptElement);
    scriptElement.onload = () => {
      try {
        document.body.removeChild(scriptElement);
        // @ts-ignore
        resolve(window.returnCitySN);
      } catch (e) {
        reject(e);
      }
    };
  });
};

const getNativeBrowserInfo = () => {
  const res: nativeBrowserInfoType = {};
  if (document) {
    res.domain = document.domain || ''; // 获取域名
    // res.url = String(document.URL) || ''; //当前Url地址
    res.title = document.title || '';
    // res.referrer = String(document.referrer) || ''; //上一跳路径
  }
  // Window对象数据
  if (window && window.screen) {
    res.screenHeight = window.screen.height || 0; // 获取显示屏信息
    res.screenWidth = window.screen.width || 0;
    res.color = window.screen.colorDepth || 0;
  }
  // navigator对象数据
  if (navigator) {
    res.lang = navigator.language || ''; // 获取所用语言种类
    res.ua = navigator.userAgent.toLowerCase(); // 运行环境
  }
  return res;
};

export { getUserIp, getNativeBrowserInfo };
