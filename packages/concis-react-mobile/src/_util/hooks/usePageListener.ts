import { useEffect, useRef } from 'react';
import getUserIp from '../track/getUserIp';
import getNativeBrowserInfo from '../track/getNativeBrowserInfo';
import { getErrorInfo } from '../track/getErrorInfo';
import sendData from '../track/sendData';

const usePageListener = (componentName: string) => {
  //监测单组件文档页面停留时间，进行埋点
  const startTime = useRef<Date>();
  const readTime = useRef<number>(0);

  getErrorInfo();
  useEffect(() => {
    startTime.current = new Date(); //保存进入页面的时间戳
    //计算页面停留时间
    return () => {
      const endTime = new Date();
      readTime.current = Math.round(
        Math.abs((startTime.current as Date).getTime() - endTime.getTime()) / 1000,
      );
      console.log(readTime.current, 25);
    };
  }, [startTime]);

  useEffect((): any => {
    return async () => {
      console.log('销毁', componentName, readTime.current);
      let trackInfo = {
        componentName,
        leaveTime: readTime.current,
      };
      const userDeviceInfo = (await getUserIp()) as object; //用户个人相关信息
      const nativeBrowserInfo = (await getNativeBrowserInfo()) as object; //浏览器原生的信息
      trackInfo = { ...trackInfo, ...userDeviceInfo, ...nativeBrowserInfo };
      console.log(trackInfo);
      //将收集到的数据发送给后端
      const result = await sendData(trackInfo);
      return result;
    };
  }, []);
};

export default usePageListener;
