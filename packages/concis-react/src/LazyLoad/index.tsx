import React, { FC, memo, useEffect, useState, createRef, useContext, ReactNode, CSSProperties } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';

interface LazyLoadProps {
  children?: ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 延迟加载
   * @default 0ms
   */
  delay?: number;
}

const LazyLoad: FC<LazyLoadProps> = (props: LazyLoadProps) => {
  const { children, style, className, delay } = props;
  const [showEl, setShowEl] = useState(false);
  const lazyRef = createRef();

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-lazyLoad');

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
    <div className={classNames} style={style} ref={lazyRef as any}>
      {showEl && children}
    </div>
  );
};

export default memo(LazyLoad);
