import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  Fragment,
} from 'react';
import type { userInfoType } from './interface';
import {
  collectFP,
  collectFCP,
  collectLCP,
  collectDNSQueryTime,
  collectTCPConnectTime,
  collectRequestTime,
  collectParseDOMTree,
  collectWhiteTime,
  // collectDOMReadyTime,
  // collectLoadTime,
} from './performance';
import { monitorXHRRequest, monitorFetchRequest } from './request';
import { getResources } from './resource';
import { getUserIp, getNativeBrowserInfo } from './userInfo';
import { getJavaScriptError, getJavaScriptAsyncError } from './error';
import { onClick } from './domChange';

const Track = (props, ref) => {
  const { children } = props;

  const [refresh, setRefresh] = useState(false);
  const [performanceData, setPerformanceData] = useState({});
  const xhrRequestResList = useRef([]);
  const fetchRequestResList = useRef([]);
  const resourceList = useRef({});
  const userInfo = useRef({});
  const errorList = useRef([]);
  const clickEventList = useRef([]);
  const enterPageTime = useRef(null);

  // 监听url变化，Track内部重新统计数据
  const _wr = function (type) {
    const orig = window.history[type];
    return function (...args) {
      const rv = orig.apply(this, args);
      const e: any = new Event(type);
      e.arguments = args;
      window.dispatchEvent(e);
      return rv;
    };
  };

  window.history.pushState = _wr('pushState');
  window.history.replaceState = _wr('replaceState');

  function refreshComponent() {
    setRefresh(!refresh);
  }
  window.addEventListener('replaceState', refreshComponent);
  window.addEventListener('pushState', refreshComponent);
  window.addEventListener('hashchange', refreshComponent);

  useImperativeHandle(ref, () => ({
    callbackTrackData,
  }));

  // 收集性能参数
  const collectPerformance = async () => {
    const fp = await collectFP();
    const fcp = await collectFCP();
    const lcp = await collectLCP();
    // const domReadyTime = await collectDOMReadyTime();
    // const loadTime = await collectLoadTime();
    const dnsQueryTime = collectDNSQueryTime();
    const tcpConnectTime = collectTCPConnectTime();
    const requestTime = collectRequestTime();
    const parseDOMTreeTime = collectParseDOMTree();
    const whiteTime = collectWhiteTime();
    setPerformanceData({
      fp,
      fcp,
      lcp,
      dnsQueryTime,
      tcpConnectTime,
      requestTime,
      parseDOMTreeTime,
      whiteTime,
      // domReadyTime,
      // loadTime,
    });
  };

  // 收集网络请求参数
  const collectRequest = () => {
    monitorXHRRequest((res) => {
      xhrRequestResList.current.push(res);
    });
    monitorFetchRequest((res) => {
      fetchRequestResList.current.push(res);
    });
  };

  // 收集静态资源信息参数
  const collectResources = () => {
    resourceList.current = getResources();
  };

  // 收集用户信息参数
  const collectUserInfo = async () => {
    const userIp = await getUserIp();
    userInfo.current = {
      ...(userIp as userInfoType),
      ...getNativeBrowserInfo(),
    };
  };

  // 收集错误捕捉信息
  const collectError = () => {
    getJavaScriptError((res) => {
      errorList.current.push(res);
    });
    getJavaScriptAsyncError((res) => {
      errorList.current.push(res);
    });
  };

  // 收集页面点击事务
  const collectClick = () => {
    onClick((res) => {
      clickEventList.current.push(res);
    });
  };

  // 收集所有数据
  const callbackTrackData = () => {
    return {
      performanceData,
      xhrRequestResList: xhrRequestResList.current,
      fetchRequestResList: fetchRequestResList.current,
      resourceList: resourceList.current,
      userInfo: userInfo.current,
      errorList: errorList.current,
      clickEventList: clickEventList.current,
      leaveTime: Math.round(
        Math.abs((enterPageTime.current as Date).getTime() - new Date().getTime()) / 1000
      ),
    };
  };

  // 路由切换时，重新统计数据
  useEffect(() => {
    console.log('start');
    collectPerformance();
    collectRequest();
    collectResources();
    collectUserInfo();
    collectError();
    collectClick();
    enterPageTime.current = new Date();
    // fetch('http://localhost:8888');
  }, [refresh]);

  return <Fragment>{children}</Fragment>;
};

export default forwardRef(Track);
