import React, { FC, useState, useEffect, memo, useCallback, useContext } from 'react';
import { ctx } from '../Form';
import './index.module.less';

interface rateProps {
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
   * @description 半星
   * @default false
   */
  avaHalf?: boolean;
  /**
   * @description 选择回调函数
   */
  chooseCallback?: Function;
}
const Rate: FC<rateProps> = (props: rateProps) => {
  const {
    num = 5,
    starColor,
    defaultShow = num ? num : 0,
    avaHalf,
    avaClear,
    chooseCallback,
  } = props;

  const [starShowStatus, setStarShowStatus] = useState<Array<number | boolean | string>>([]); //真实星星状态
  const [logStarShowStatus, setLogStarShowStatus] = useState<Array<number | boolean | string>>([]); //鼠标移动临时状态
  const [hasClick, setHasClick] = useState<boolean>(false);

  const formCtx = useContext(ctx);

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
    //用于监听Form组件的重置任务
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

  const rateShowConfig = useCallback(
    //星星样式
    (i: number) => {
      if (starShowStatus[i] == 'half' && avaHalf) {
        if (i == starShowStatus.length - 1) {
          return {
            width: '50%',
            opacity: 1,
            right: '5px',
          };
        }
        return {
          width: '50%',
          opacity: 1,
        };
      } else if (!starShowStatus[i]) {
        return {
          width: '100%',
          opacity: 1,
        };
      } else if (starShowStatus[i]) {
        return {
          width: '0%',
          opacity: 0,
        };
      }
    },
    [num, starShowStatus],
  );

  const enterStar = (e: any, i: number) => {
    //进入星星
    const event = e;
    const mouseLeft = event.offsetX;
    setStarShowStatus((oldArr: any): Array<boolean | string> => {
      if (mouseLeft >= 8) {
        oldArr[i] = true;
      } else if (mouseLeft < 5 && avaHalf) {
        oldArr[i] = 'half';
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
    //点击确认状态
    if (avaClear && hasClick && starShowStatus.toString() == logStarShowStatus.toString()) {
      setHasClick(false);
      setStarShowStatus((oldArr: any): Array<boolean | string> => {
        oldArr = oldArr.map((ra: any) => (ra = false));
        chooseCallback &&
          chooseCallback(
            oldArr.reduce((pre: number | string | boolean, next: number | string | boolean) => {
              //统计分数
              if (pre == 'half') {
                pre = 0.5;
              } else if (pre == true) {
                pre = 1;
              } else if (pre == false) {
                pre = 0;
              }
              if (next == 'half') {
                next = 0.5;
              } else if (next == true) {
                next = 1;
              } else if (next == false) {
                next = 0;
              }
              return (pre as number) + (next as number);
            }),
          );
        setLogStarShowStatus((oldArr: any): Array<boolean | string> => {
          //清除
          oldArr = oldArr.map((ra: any) => (ra = false));
          return JSON.parse(JSON.stringify(oldArr));
        });
        return JSON.parse(JSON.stringify(oldArr));
      });
    } else {
      setLogStarShowStatus((oldArr: any): Array<boolean | string> => {
        //更新历史数组
        oldArr = starShowStatus;
        return JSON.parse(JSON.stringify(oldArr));
      });
      setHasClick(true);
      chooseCallback &&
        chooseCallback(
          starShowStatus.reduce(
            (pre: number | string | boolean, next: number | string | boolean) => {
              if (pre == 'half') {
                pre = 0.5;
              } else if (pre == true) {
                pre = 1;
              } else if (pre == false) {
                pre = 0;
              }
              if (next == 'half') {
                next = 0.5;
              } else if (next == true) {
                next = 1;
              } else if (next == false) {
                next = 0;
              }
              return (pre as number) + (next as number);
            },
          ),
        );
    }
  };
  const enterRate = () => {
    //进入整个容器
    setLogStarShowStatus((oldArr: any): Array<boolean | string> => {
      oldArr = starShowStatus;
      return JSON.parse(JSON.stringify(oldArr));
    });
  };
  const leaveRate = () => {
    //离开整个容器
    if (!hasClick) {
      setStarShowStatus((oldArr: any): Array<boolean | string> => {
        oldArr = logStarShowStatus;
        return JSON.parse(JSON.stringify(oldArr));
      });
    }
    setHasClick(false);
  };
  return (
    <div className="rate">
      <div className="rate-container" onMouseLeave={leaveRate} onMouseEnter={enterRate}>
        {new Array(num).fill('').map((ra, i) => {
          return (
            <div
              className="rate-box"
              key={i}
              style={starShowStatus[i] ? { opacity: 1 } : { opacity: 0 }}
              onMouseMove={(event: any) => enterStar(event.nativeEvent, i)}
              onClick={isSureNowStatus}
            >
              <div className="half-dialog" style={rateShowConfig(i)}></div>
              <svg
                style={{ color: starColor }}
                className="rate-row"
                viewBox="80 80 896 896"
                focusable="false"
                data-icon="star"
                width="20px"
                height="20px"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default memo(Rate);
