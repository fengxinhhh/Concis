type resourceItemType = {
  initiatorType: string;
  transferSize: number;
  nextHopProtocol: string;
  name: string;
  duration: number;
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

export type { resourceItemType, fetchRequestType, xhrRequestType };
