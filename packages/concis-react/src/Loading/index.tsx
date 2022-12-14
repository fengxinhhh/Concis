import React, { useEffect, useState, useMemo, useContext, forwardRef } from 'react';
import { LoadingStyle } from './style';
import { LoadingProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../common_utils/getRenderColor';
import './index.module.less';

const Loading = (props, ref) => {
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
  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

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

  const classNames = useMemo(() => cs(prefixCls, className, getLoadingClass()), [type]);

  useEffect(() => {
    if (type === 'dot') {
      setTimeout(() => {
        setActiveDotIndex((old: number) => {
          return old === 2 ? 0 : ++old;
        });
      }, 400);
    }
  }, [activeDotIndex]);

  const loadingStyle = useMemo(() => {
    const returnStyle: React.CSSProperties = style;
    returnStyle.width = width;
    returnStyle.height = height;
    return returnStyle;
  }, [width, height, style]);

  const renderLoadingContainer = useMemo(() => {
    if (type === 'default') {
      return (
        <>
          <div className="loading-container" style={loadingStyle}>
            {icon || (
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                width={width}
                height={height}
                viewBox="0 0 48 48"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6" />
              </svg>
            )}
          </div>
          {loadingText && <div className="text">{loadingText}</div>}
        </>
      );
    }
    if (type === 'dot') {
      return (
        <>
          {new Array(3).fill('').map((item, index) => {
            return (
              <div className={activeDotIndex === index ? 'dot-active' : 'dot'} key={index}>
                {item}
              </div>
            );
          })}
        </>
      );
    }
    if (type === 'strip') {
      return (
        <>
          {new Array(6).fill('').map((item, index) => {
            return (
              <div className="strip-list" style={{ '--lineIndex': index } as any} key={index} />
            );
          })}
        </>
      );
    }
  }, [type, activeDotIndex, globalColor]);

  return (
    <LoadingStyle
      globalColor={getRenderColor(
        (getSiteTheme() === ('dark' || 'auto') || darkTheme) as boolean,
        globalColor
      )}
      darkTheme={darkTheme}
    >
      {mask && <div className="concis-loading-dialog" />}
      <div
        className={classNames}
        style={Object.assign(type === 'default' ? loadingStyle : {})}
        ref={ref}
      >
        {renderLoadingContainer}
      </div>
    </LoadingStyle>
  );
};

export default forwardRef<HTMLDivElement, LoadingProps>(Loading);
