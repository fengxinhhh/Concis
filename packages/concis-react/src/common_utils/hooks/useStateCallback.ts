import { SetStateAction, useCallback, useState, useEffect, useRef } from 'react';

const useStateCallback = (defaultVal: any) => {
  const [state, setState] = useState(defaultVal);
  const listenRef = useRef<any>(); // 监听新状态的回调器
  const _setState = useCallback((newVal: SetStateAction<any>, callback: Function) => {
    // 更新业务
    listenRef.current = callback;
    setState(newVal);
  }, []);
  useEffect(() => {
    listenRef.current && listenRef.current(state); // 回调新状态
  }, [state]);

  return [state, _setState];
};

export default useStateCallback;
