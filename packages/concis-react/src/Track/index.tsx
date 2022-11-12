import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';
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
  collectLoadTime,
} from './performance';
import { monitorXHRRequest, monitorFetchRequest } from './request';
import { getResources } from './resource';
import { getUserIp, getNativeBrowserInfo } from './userInfo';
import { getJavaScriptError, getJavaScriptAsyncError } from './error';

const Track = (props, ref) => {
  const { children } = props;

  const [performanceData, setPerformanceData] = useState({});
  const xhrRequestResList = useRef([]);
  const fetchRequestResList = useRef([]);
  const resourceList = useRef({});
  const userInfo = useRef({});
  const errorList = useRef([]);

  useImperativeHandle(ref, () => ({
    callbackTrackData,
  }));

  // 收集性能参数
  const collectPerformance = async () => {
    const fp = await collectFP();
    const fcp = await collectFCP();
    const lcp = await collectLCP();
    // const domReadyTime = await collectDOMReadyTime();
    const loadTime = await collectLoadTime();
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
      loadTime,
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

  // 上报数据
  const callbackTrackData = () => {
    return {
      performanceData,
      xhrRequestResList: xhrRequestResList.current,
      fetchRequestResList: fetchRequestResList.current,
      resourceList: resourceList.current,
      userInfo: userInfo.current,
      errorList: errorList.current,
    };
  };

  const over = () => {
    console.log('performance: ', performanceData);
    console.log('xhr network: ', xhrRequestResList.current);
    console.log('fetch network: ', fetchRequestResList.current);
    console.log('resource: ', resourceList.current);
    console.log('userInfo: ', userInfo.current);
    console.log('error: ', errorList.current);
  };

  useEffect(() => {
    collectPerformance();
    collectRequest();
    collectResources();
    collectUserInfo();
    collectError();
    // fetch('http://localhost:8888');
  }, []);

  return <div onClick={over}>track{children}</div>;
};

export default forwardRef(Track);
