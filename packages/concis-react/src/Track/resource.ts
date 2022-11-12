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
  data.forEach((item: resourceItemType & PerformanceEntry) => {
    const arry = resource[item.initiatorType];
    arry &&
      arry.push({
        // 资源的名称
        name: item.name,
        // 资源加载耗时
        duration: item.duration.toFixed(2),
        // 资源大小
        size: item.transferSize,
        // 资源所用协议
        protocol: item.nextHopProtocol,
      });
  });

  return resource;
};

export { getResources };
