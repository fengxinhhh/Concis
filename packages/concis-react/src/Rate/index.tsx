import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  CSSProperties,
  forwardRef,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { ctx } from '../Form';
import './index.module.less';

interface rateProps {
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 星星个数
   * @default 5
   */
  num?: number;
  /**
   * @description 颜色
   * @default 5
   */
  starColor?: string;
  /**
   * @description 默认显示个数
   * @default num || 0
   */
  defaultShow?: number;
  /**
   * @description 双击清除
   * @default false
   */
  avaClear?: boolean;
  /**
   * @description 只读
   * @default false
   */
  readonly?: boolean;
  /**
   * @description 选择回调函数
   */
  chooseCallback?: Function;
}
const Rate = (props, ref) => {
  const {
    num = 5,
    className,
    style,
    starColor,
    defaultShow = num || 0,
    avaClear,
    readonly,
    chooseCallback,
  } = props;

  const [starShowStatus, setStarShowStatus] = useState<Array<number | boolean | string>>([]); // 真实星星状态
  const [logStarShowStatus, setLogStarShowStatus] = useState<Array<number | boolean | string>>([]); // 鼠标移动临时状态
  const [hasClick, setHasClick] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-rate');

  const formCtx: any = useContext(ctx);

  useEffect(() => {
    const initStar = [];
    for (let i = 0; i < defaultShow; i++) {
      initStar[i] = true;
    }
    if (num > defaultShow && initStar.length < num) {
      initStar.splice(initStar.length, 0, ...new Array(num - defaultShow).fill(false));
    }
    setStarShowStatus(initStar);
    setLogStarShowStatus(initStar);
  }, []);
  useEffect(() => {
    // 用于监听Form组件的重置任务
    if (formCtx.reset) {
      setLogStarShowStatus([]);
      setStarShowStatus((): Array<boolean | string> => {
        const oldArr = [];
        for (let i = 0; i < defaultShow; i++) {
          oldArr[i] = true;
        }
        if (num > defaultShow && oldArr.length < num) {
          oldArr.splice(oldArr.length, 0, ...new Array(num - defaultShow).fill(false));
        }
        return JSON.parse(JSON.stringify(oldArr));
      });
    }
  }, [formCtx.reset]);
  useEffect(() => {
    if (formCtx.submitStatus) {
      formCtx.getChildVal(starShowStatus.filter((s: any) => s).length);
    }
  }, [formCtx.submitStatus]);

  const enterStar = (e: any, i: number) => {
    // 进入星星
    if (readonly) return;
    const event = e;
    const mouseLeft = event.offsetX;
    setStarShowStatus((oldArr: any): Array<boolean | string> => {
      if (mouseLeft >= 8) {
        oldArr[i] = true;
      }
      for (let start = 0; start < i; start++) {
        oldArr[start] = true;
      }
      for (let start = i + 1; start < oldArr.length; start++) {
        oldArr[start] = false;
      }
      return JSON.parse(JSON.stringify(oldArr));
    });
  };
  const isSureNowStatus = () => {
    // 点击确认状态
    if (readonly) return;
    setToggle(!toggle);
    if (avaClear && hasClick && starShowStatus.toString() === logStarShowStatus.toString()) {
      setHasClick(false);
      setStarShowStatus((oldArr: any): Array<boolean | string> => {
        oldArr = oldArr.map((ra: any) => (ra = false));
        chooseCallback &&
          chooseCallback(
            oldArr.reduce((pre: number | string | boolean, next: number | string | boolean) => {
              // 统计分数
              if (pre === true) {
                pre = 1;
              } else if (pre === false) {
                pre = 0;
              }
              if (next === true) {
                next = 1;
              } else if (next === false) {
                next = 0;
              }
              return (pre as number) + (next as number);
            }),
          );
        setLogStarShowStatus((oldArr: any): Array<boolean | string> => {
          // 清除
          oldArr = oldArr.map((ra: any) => (ra = false));
          return JSON.parse(JSON.stringify(oldArr));
        });
        return JSON.parse(JSON.stringify(oldArr));
      });
    } else {
      setLogStarShowStatus((oldArr: any): Array<boolean | string> => {
        // 更新历史数组
        oldArr = starShowStatus;
        return JSON.parse(JSON.stringify(oldArr));
      });
      setHasClick(true);
      chooseCallback &&
        chooseCallback(
          starShowStatus.reduce(
            (pre: number | string | boolean, next: number | string | boolean) => {
              if (pre === 'half') {
                pre = 0.5;
              } else if (pre === true) {
                pre = 1;
              } else if (pre === false) {
                pre = 0;
              }
              if (next === 'half') {
                next = 0.5;
              } else if (next === true) {
                next = 1;
              } else if (next === false) {
                next = 0;
              }
              return (pre as number) + (next as number);
            },
          ),
        );
    }
  };
  const enterRate = () => {
    // 进入整个容器
    if (readonly) return;
    setLogStarShowStatus((oldArr: any): Array<boolean | string> => {
      oldArr = starShowStatus;
      return JSON.parse(JSON.stringify(oldArr));
    });
  };
  const leaveRate = () => {
    // 离开整个容器
    if (readonly) return;
    setStarShowStatus((oldArr: any): Array<boolean | string> => {
      oldArr = logStarShowStatus;
      return JSON.parse(JSON.stringify(oldArr));
    });
    setHasClick(false);
  };
  const starBg = useCallback(
    (i: number) => {
      return { color: starShowStatus[i] ? starColor : '#ccc' };
    },
    [starShowStatus],
  );

  return (
    <div className={classNames} style={style} ref={ref}>
      <div className="rate-container" onMouseLeave={leaveRate} onMouseEnter={enterRate}>
        {new Array(num).fill('').map((ra, i) => {
          return (
            <div
              className="rate-box"
              key={i}
              onMouseMove={(event: any) => enterStar(event.nativeEvent, i)}
              onClick={isSureNowStatus}
            >
              <CSSTransition
                in={toggle}
                timeout={100 + i * 80}
                classNames={`${starShowStatus[i] ? 'rate-option' : ''}`}
                appear
              >
                <svg
                  style={starBg(i)}
                  className={`rate-row ${readonly ? 'readonly-rate-row' : ''}`}
                  viewBox="80 80 896 896"
                  focusable="false"
                  data-icon="star"
                  width="30px"
                  height="30px"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                </svg>
              </CSSTransition>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default forwardRef<unknown, rateProps>(Rate);
