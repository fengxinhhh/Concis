import type { resourceItemType } from './interface';

const getResources = () => {
  if (!window.performance) return;
  const data = window.performance.getEntriesByType('resource');
  const resource = {
    xmlhttprequest: [],
    css: [],
    other: [],
    script: [],
    img: [],
    link: [],
    fetch: [],
    // 获取资源信息时当前时间
    time: new Date().getTime(),
  };
  data.forEach((item: resourceItemType<number> & PerformanceEntry) => {
    const arry = resource[item.initiatorType];
    arry &&
      arry.push({
        name: item.name, // 资源名称
        type: 'resource',
        sourceType: item.initiatorType, // 资源类型
        duration: +item.duration.toFixed(2), // 资源加载耗时
        dns: item.domainLookupEnd - item.domainLookupStart, // DNS 耗时
        tcp: item.connectEnd - item.connectStart, // 建立 tcp 连接耗时
        redirect: item.redirectEnd - item.redirectStart, // 重定向耗时
        ttfb: +item.responseStart.toFixed(2), // 首字节时间
        protocol: item.nextHopProtocol, // 请求协议
        responseBodySize: item.encodedBodySize, // 响应内容大小
        resourceSize: item.decodedBodySize, // 资源解压后的大小
        isCache: isCache(item), // 是否命中缓存
        startTime: performance.now(),
      });
  });
  function isCache(entry) {
    // 直接从缓存读取或 304
    return entry.transferSize === 0 || (entry.transferSize !== 0 && entry.encodedBodySize === 0);
  }

  return resource;
};

export { getResources };
