import React, { createRef, useContext, useEffect, useRef, useState, memo, FC } from 'react';
import lodash from 'lodash';
import { CSSTransition } from 'react-transition-group';
import addEventListener from '../common_utils/dom/addEventListener';
import getScrollTop from '../common_utils/dom/getScrollTop';
import scrollTo from '../common_utils/dom/scrollTo';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import { BackTopProps } from './interface';
import './index.module.less';

const defaultChildren = (
  <div className="default-child">
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2355"
      width="40"
      height="40"
    >
      <path
        d="M640 608c-6.4 0-19.2 0-25.6-6.4L512 492.8 409.6 601.6c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8l128-128c12.8-12.8 32-12.8 44.8 0l128 128c12.8 12.8 12.8 32 0 44.8C659.2 608 646.4 608 640 608z"
        p-id="2356"
      />
    </svg>
  </div>
);

const BackTop: FC<BackTopProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const ref = createRef<HTMLDivElement>();
  const scrollEventRef = useRef<any>();

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(
    prefixCls,
    props.className,
    darkTheme ? 'concis-dark-back-top' : 'concis-back-top',
  );

  // acquire default container
  const getDefaultTarget = () => window;

  const handleScroll = lodash.throttle((e: any | { target: any }) => {
    const { visibilityHeight = 400 } = props;
    const scrollTop = getScrollTop(e.target);
    setVisible(scrollTop > visibilityHeight);
  }, 100);

  const initScrollEvent = () => {
    const targetGetter = props.target || getDefaultTarget;
    const container = targetGetter();
    scrollEventRef.current = addEventListener(container, 'scroll', (e: any) => {
      handleScroll(e);
    });
    handleScroll({ target: container });
  };

  const scrollToTop = () => {
    const { duration = 450, target, onReachTop } = props;
    scrollTo(0, {
      duration,
      getContainer: target || getDefaultTarget,
      callback: onReachTop,
    });
  };

  const renderChildren = () => {
    const { children } = props;
    const childNode = children || defaultChildren;
    return (
      <CSSTransition
        in={visible}
        timeout={100}
        appear
        mountOnEnter
        classNames="back-top-trigger"
        unmountOnExit
        onEnter={(e: HTMLDivElement) => {
          e.style.display = 'block';
        }}
        onExited={(e: HTMLDivElement) => {
          e.style.display = 'none';
        }}
      >
        {childNode}
      </CSSTransition>
    );
  };

  useEffect(() => {
    initScrollEvent();
    return () => {
      // remove event listener
      scrollEventRef.current?.remove();
    };
  }, [props.target]);

  return (
    <div className={classNames} style={props.style} ref={ref} onClick={scrollToTop}>
      {renderChildren()}
    </div>
  );
};

export default memo(BackTop);
