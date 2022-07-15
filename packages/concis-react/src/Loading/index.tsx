import React, { FC, useEffect, useState, Fragment, useMemo, useContext } from 'react';
import { LoadingProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

const Loading: FC<LoadingProps> = (props: LoadingProps) => {
  const {
    type = 'default',
    className,
    mask = false,
    loadingText,
    icon,
    width = '2em',
    height = '2em',
    style = {},
  } = props;

  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const { globalColor, prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  function getLoadingClass() {
    switch (type) {
      case 'default':
        return 'concis-loading';
      case 'dot':
        return 'concis-dot-loading';
      case 'strip':
        return 'concis-strip-loading';
      default:
        return 'concis-loading';
    }
  }
  const classNames = cs(prefixCls, className, getLoadingClass());

  useEffect(() => {
    if (type === 'dot') {
      setTimeout(() => {
        setActiveDotIndex((old: number) => {
          if (old === 2) {
            old = 0;
          } else {
            old++;
          }
          return old;
        });
      }, 500);
    }
  }, [activeDotIndex]);

  const loadingStyle = useMemo(() => {
    const returnStyle: any = style;
    returnStyle.width = width;
    returnStyle.height = height;
    if (globalColor) {
      returnStyle.color = globalColor;
    }
    return returnStyle;
  }, [width, height, style]);
  const gloabLoadingStyle = useMemo(() => {
    if (globalColor) {
      return {
        background: globalColor,
      };
    }
    return {};
  }, [globalColor]);

  const renderLoadingContainer = useMemo(() => {
    if (type === 'default') {
      return (
        <div className={classNames} style={loadingStyle}>
          <div className="loading-container" style={loadingStyle}>
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
          {loadingText && <div className="text">{loadingText}</div>}
        </div>
      );
    } else if (type === 'dot') {
      return (
        <div className={classNames}>
          {new Array(3).fill('').map((item, index) => {
            return (
              <div
                className={activeDotIndex === index ? 'dot-active' : 'dot'}
                style={gloabLoadingStyle}
              >
                {item}
              </div>
            );
          })}
        </div>
      );
    } else if (type === 'strip') {
      return (
        <div className={classNames}>
          {new Array(6).fill('').map((item, index) => {
            return (
              <div
                className="strip-list"
                style={{ ...gloabLoadingStyle, '--lineIndex': index } as any}
              />
            );
          })}
        </div>
      );
    }
  }, [type, activeDotIndex]);

  return (
    <Fragment>
      {mask && <div className="dialog" />}
      {renderLoadingContainer}
    </Fragment>
  );
};

export default Loading;
