import { useEffect, useRef } from 'react';
import getUserIp from '../track/getUserIp';
import getNativeBrowserInfo from '../track/getNativeBrowserInfo';
import sendData from '../track/sendData';

const usePageListener = (componentName: string) => {
  //监测单组件文档页面停留时间，进行埋点
  const leaveTime = useRef<number>(0);
  const timer = useRef<any>();

  useEffect(() => {
    //计算页面停留时间
    timer.current = setInterval(() => {
      leaveTime.current = leaveTime.current + 1;
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, [leaveTime]);

  useEffect((): any => {
    return async () => {
      //组件销毁，如果停留时间大于十秒，发送单组件埋点记录
      console.log('销毁', componentName, leaveTime.current);
      let trackInfo = {
        componentName,
        leaveTime: leaveTime.current,
      };
      const userDeviceInfo = (await getUserIp()) as object; //用户个人相关信息
      const nativeBrowserInfo = (await getNativeBrowserInfo()) as object; //浏览器原生的信息
      trackInfo = { ...trackInfo, ...userDeviceInfo, ...nativeBrowserInfo };
      //将收集到的数据发送给后端
      const result = await sendData(trackInfo);
      return result;
    };
  }, []);
};

export default usePageListener;
