import React, { useEffect, useState, useRef } from 'react';
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

const Track = (props) => {
  const { children } = props;

  const [performanceData, setPerformanceData] = useState({});
  const xhrRequestResList = useRef([]);
  const fetchRequestResList = useRef([]);
  const resourceList = useRef({});

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

  const over = () => {
    console.log('performance: ', performanceData);
    console.log('xhr network: ', xhrRequestResList.current);
    console.log('fetch network: ', fetchRequestResList.current);
    console.log('resource: ', resourceList.current);
  };

  useEffect(() => {
    collectPerformance();
    collectRequest();
    collectResources();
    fetch('http://localhost:8888');
  }, []);

  return <div onClick={over}>track{children}</div>;
};

export default Track;
