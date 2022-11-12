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
  const [xhrRequestResListState, setXhrRequestResListState] = useState([]);
  const [fetchRequestResListState, setFetchRequestResListState] = useState([]);
  const [resourceListState, setResourceListState] = useState({});
  const [userInfoState, setUserInfoState] = useState({});
  const [errorListState, setErrorListState] = useState([]);
  const [clickEventListState, setClickEventListState] = useState([]);
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
      setXhrRequestResListState((xhrRequestResListState) => {
        return [...xhrRequestResListState, res];
      });
    });
    monitorFetchRequest((res) => {
      setFetchRequestResListState((fetchRequestResListState) => {
        return [...fetchRequestResListState, res];
      });
    });
  };

  // 收集静态资源信息参数
  const collectResources = () => {
    const resourceList = getResources();
    setResourceListState(resourceList);
  };

  // 收集用户信息参数
  const collectUserInfo = async () => {
    const userIp = await getUserIp();
    setUserInfoState((userInfoState) => {
      return {
        ...(userIp as userInfoType),
        ...getNativeBrowserInfo(),
      };
    });
  };

  // 收集错误捕捉信息
  const collectError = () => {
    getJavaScriptError((res) => {
      setErrorListState((errorListState) => {
        return [...errorListState, res];
      });
    });
    getJavaScriptAsyncError((res) => {
      setErrorListState((errorListState) => {
        return [...errorListState, res];
      });
    });
  };

  // 收集页面点击事务
  const collectClick = () => {
    onClick((res) => {
      setClickEventListState((clickEventListState) => {
        return [...clickEventListState, res];
      });
    });
  };

  // 收集所有数据
  const callbackTrackData = () => {
    return {
      performanceData,
      xhrRequestResList: xhrRequestResListState,
      fetchRequestResList: fetchRequestResListState,
      resourceList: resourceListState,
      userInfo: userInfoState,
      errorList: errorListState,
      clickEventList: clickEventListState,
      leaveTime: Math.round(
        Math.abs((enterPageTime.current as Date).getTime() - new Date().getTime()) / 1000
      ),
    };
  };

  // 切换页面时，重置所有数据
  const resetData = () => {
    enterPageTime.current = new Date();
    setPerformanceData({});
    setXhrRequestResListState([]);
    setFetchRequestResListState([]);
    setResourceListState({});
    setUserInfoState({});
    setErrorListState([]);
    setClickEventListState([]);
  };

  // 路由切换时，重新统计数据
  useEffect(() => {
    resetData();
    collectPerformance();
    collectRequest();
    collectResources();
    collectUserInfo();
    collectError();
    collectClick();
    // fetch('http://localhost:8888');
  }, [refresh]);

  return <Fragment>{children}</Fragment>;
};

export default forwardRef(Track);
