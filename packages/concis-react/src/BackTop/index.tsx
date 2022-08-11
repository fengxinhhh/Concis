import React, { createRef, useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';
import addEventListener from '../common_utils/dom/addEventListener';
import getScrollTop from '../common_utils/dom/getScrollTop';
import scrollTo from '../common_utils/dom/scrollTo';
import { BackTopProps } from './interface';
import './index.module.less';

const BackTop = (props: BackTopProps) => {
  const [visible, setVisible] = useState(false);
  const ref = createRef<HTMLDivElement>();
  const scrollEventRef = useRef<any>();

  // acquire default container
  const getDefaultTarget = () => window;

  const handleScroll = throttle((e: any | { target: any }) => {
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
    const defaultChildren = (
      <div className="default-child">
        <svg
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
        >
          <path
            d="M737.706043 569.769728c3.148713-19.85828 4.894474-39.334867 4.894474-58.271148 0-215.3333-203.478298-423.12381-212.144678-431.849542-5.757121-5.836939-13.599739-9.106402-21.763676-9.106402l-0.080841 0c-8.18338 0.020466-16.047488 3.349281-21.784142 9.227152-8.625448 8.765641-210.67828 217.358423-210.67828 431.728792 0 18.554588 1.664919 37.631062 4.713348 57.108672-44.591591 42.764989-70.025866 101.499695-70.025866 164.202783l0 63.507406c0 17.150612 13.780865 31.051203 30.79026 31.051203 16.989953 0 30.770817-13.900591 30.770817-31.051203l0-63.507406c0-32.496112 9.447163-63.48694 26.557866-89.925079 9.30697 28.264741 21.443381 57.229422 36.426631 86.834694 5.275143 10.390651 15.84692 16.930601 27.40107 16.930601l115.13832-0.020466 0 49.686632c0 17.150612 13.760398 31.051203 30.770817 31.051203 17.009396 0 30.769794-13.900591 30.769794-31.051203l0-49.686632 116.341728 0c11.533684 0 22.084994-6.519484 27.360138-16.868179 14.803147-29.086455 26.879184-57.611116 36.18513-85.47165 16.528442 26.15673 25.635867 56.686047 25.635867 88.520079l0 63.507406c0 17.150612 13.800307 31.051203 30.791284 31.051203 16.989953 0 30.79026-13.900591 30.79026-31.051203l0-63.507406C806.568411 670.807912 781.534248 612.4549 737.706043 569.769728zM636.709815 684.507936l-97.245811 0.020466 0-49.706075c0-17.150612-13.760398-31.051203-30.769794-31.051203-17.010419 0-30.770817 13.900591-30.770817 31.051203l0 49.706075-96.001471 0c-17.551748-37.290301-29.807886-73.054853-36.928051-107.055225-0.181125-2.366907-0.701988-4.712325-1.424442-7.001461-3.850701-20.338211-5.857405-40.036855-5.857405-58.973136 0-150.000316 120.67543-305.497832 171.123402-363.969549 50.789757 58.170864 172.20606 213.025745 172.20606 363.969549C681.039439 564.173267 666.155451 622.304222 636.709815 684.507936zM399.251611 424.543136c0 61.640895 49.706075 111.809505 110.805642 111.809505s110.805642-50.16861 110.805642-111.809505-49.706075-111.789039-110.805642-111.789039S399.251611 362.901217 399.251611 424.543136zM510.05623 374.876969c27.160593 0 49.245587 22.265096 49.245587 49.666166s-22.084994 49.686632-49.245587 49.686632c-27.15957 0-49.225121-22.285562-49.225121-49.686632S482.89666 374.876969 510.05623 374.876969zM338.734306 787.93247c-16.989953 0-30.79026 13.900591-30.79026 31.051203l0 103.423511c0 17.150612 13.800307 31.051203 30.79026 31.051203 16.989953 0 30.769794-13.900591 30.769794-31.051203L369.5041 818.98265C369.5041 801.833061 355.723236 787.93247 338.734306 787.93247zM678.652066 787.93247c-16.989953 0-30.769794 13.900591-30.769794 31.051203l0 103.423511c0 17.150612 13.780865 31.051203 30.769794 31.051203 17.010419 0 30.791284-13.900591 30.791284-31.051203L709.443349 818.98265C709.443349 801.833061 695.662485 787.93247 678.652066 787.93247z"
            p-id="4289"
            fill="#325dff"
          />
        </svg>
      </div>
    );
    const childNode = children || defaultChildren;
    return visible && childNode;
  };

  useEffect(() => {
    initScrollEvent();
    return () => {
      // remove event listener
      scrollEventRef.current?.remove();
    };
  }, [props.target]);

  return (
    <div className="concis-back-top" ref={ref} onClick={scrollToTop}>
      {renderChildren()}
    </div>
  );
};

export default BackTop;
