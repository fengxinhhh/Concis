import React, { FC, useEffect, useRef, useState, Fragment, useMemo } from 'react';
import { LoadingProps } from './interface';
import './index.module.less';

const Loading: FC<LoadingProps> = (props) => {
  const {
    type = 'default',
    mask = false,
    loadingText,
    icon,
    width = '2em',
    height = '2em',
    style = {},
  } = props;

  const timer = useRef<any>(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      setActiveDotIndex((old) => {
        if (old === 2) {
          old = 0;
        } else {
          old++;
        }
        return old;
      });
    }, 500);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const loadingStyle = useMemo(() => {
    const returnStyle = style;
    returnStyle.width = width;
    returnStyle.height = height;
    return returnStyle;
  }, [width, height, style]);
  return (
    <Fragment>
      {mask && <div className="dialog" />}
      {type === 'default' ? (
        <div className="loading" style={loadingStyle}>
          <div className="loading-container">
            {icon || (
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                width={width}
                height={height}
                viewBox="0 0 48 48"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"></path>
              </svg>
            )}
          </div>

          <div className="text">{loadingText}</div>
        </div>
      ) : (
        <div className="dot-loading">
          {new Array(3).fill('').map((item, index) => {
            return <div className={activeDotIndex === index ? 'dot-active' : 'dot'}>{item}</div>;
          })}
        </div>
      )}
    </Fragment>
  );
};

export default Loading;
