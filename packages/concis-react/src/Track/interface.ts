type resourceItemType<T> = {
  initiatorType: string;
  transferSize: T;
  nextHopProtocol: string;
  name: string;
  duration: T;
  domainLookupEnd: T;
  domainLookupStart: T;
  connectEnd: T;
  connectStart: T;
  redirectEnd: T;
  redirectStart: T;
  responseStart: T;
  encodedBodySize: T;
  decodedBodySize: T;
};

type xhrRequestType = {
  duration: number;
  endTime: number;
  method: string;
  startTime: number;
  status: number;
  subType: string;
  success: boolean;
  type: string;
  url: RequestInfo | URL;
};

type fetchRequestType = {
  duration: number;
  endTime: number;
  method: string;
  startTime: number;
  status: number;
  subType: string;
  success: boolean;
  type: string;
  url: RequestInfo | URL;
};

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
};

type userInfoType = {
  cid: string;
  cip: string;
  cname: string;
};

type eventDom = {
  tagName: string;
  path: string[];
  outerHTML: string;
  innerHTML: string;
  offsetWidth: number;
  offsetHeight: number;
};

export type {
  resourceItemType,
  fetchRequestType,
  xhrRequestType,
  nativeBrowserInfoType,
  userInfoType,
  eventDom,
};
