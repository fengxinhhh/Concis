import React, { FC, useState, useEffect, memo, useCallback } from 'react';
import './index.module.less';

interface rateProps {
  num: number;
  starColor?: string;
  defaultShow?: number;
}
const Rate: FC<rateProps> = (props) => {
  const { num = 5, starColor, defaultShow = num ? num : 5 } = props;

  const [starShowStatus, setStarShowStatus] = useState<Array<boolean | string>>([]);

  useEffect(() => {
    setStarShowStatus((oldArr: any): Array<boolean | string> => {
      for (let i = 0; i < defaultShow; i++) {
        oldArr[i] = true;
      }
      return JSON.parse(JSON.stringify(oldArr));
    });
  }, []);

  const rateShowConfig = useCallback(
    (i: number) => {
      console.log(starShowStatus[i]);
      if (starShowStatus[i]) {
        return '0%';
      }
      if (!starShowStatus[i]) {
        return '100%';
      }
      if (starShowStatus[i] == 'half') {
        return '50%';
      }
    },
    [num, starShowStatus],
  );

  const enterStar = (e, i: number) => {
    //进入星星
    console.log(e.screenX, e);
    console.log(e);
  };
  return (
    <div className="rate">
      {new Array(num).fill('').map((ra, i) => {
        return (
          <div className="rate-box" key={i}>
            <div className="half-dialog" style={{ width: rateShowConfig(i) }}></div>
            <svg
              style={{ color: starColor }}
              onMouseOver={(e) => enterStar(e, i)}
              className="rate-row"
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="star"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
            </svg>
          </div>
        );
      })}
    </div>
  );
};
export default memo(Rate);
