import React, { FC, memo, useEffect, useState, createRef, useContext } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';

interface LazyLoadProps {
  children?: any;
  /**
   * @description 延迟加载
   * @default 0ms
   */
  delay?: number;
}

const LazyLoad: FC<LazyLoadProps> = (props) => {
  const { children, delay } = props;
  const [showEl, setShowEl] = useState(false);
  const lazyRef = createRef();

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, 'concis-lazyLoad');

  let io: IntersectionObserver; //观察者

  useEffect(() => {
    io = new IntersectionObserver((entries) => elementObverse(entries));
    io.observe(lazyRef.current as Element);
  }, []);

  const elementObverse = (entries: Array<IntersectionObserverEntry>) => {
    //监听函数
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        if (delay) {
          setTimeout(() => {
            setShowEl(true);
          }, delay);
        } else {
          setShowEl(true);
        }
      }
    });
  };

  return (
    <div className={classNames} ref={lazyRef as any}>
      {showEl && children}
    </div>
  );
};

export default memo(LazyLoad);
