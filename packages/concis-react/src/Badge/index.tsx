import React, { useMemo, useContext, forwardRef } from 'react';
import { BackTopStyle } from './style';
import { badgeProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';

const Badge = (props, ref) => {
  const {
    children,
    className,
    style = {},
    count,
    maxCount = 99,
    dotStyle = {},
    dot,
    offset = [2, 2],
    text,
  } = props;

  const { globalColor, prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, children ? 'concis-badge' : 'concis-no-child-badge');

  const computedCount = useMemo(() => {
    if (count) {
      if (maxCount) {
        if (count > maxCount) {
          return `${maxCount}+`;
        }
        return count;
      }
      return count;
    }
  }, [count, maxCount]);

  const countStyle = useMemo(() => {
    if (children) {
      if (String(computedCount).length > 1) {
        return {
          borderRadius: '20px',
        };
      }
      return {
        borderRadius: '50%',
      };
    }
    if (String(computedCount).length === 1) {
      return {
        padding: '',
      };
    }
    return {
      padding: '0 6px',
    };
  }, [children, count, maxCount]);

  return (
    <BackTopStyle globalColor={globalColor}>
      {children ? (
        <div className={classNames} ref={ref} style={style}>
          {children}
          {dot ? (
            <span
              className="concis-badge-dot"
              style={{ ...dotStyle, right: `${offset[0]}px`, top: `${offset[1]}px` }}
            />
          ) : text ? (
            <span className="concis-badge-text">{text}</span>
          ) : (
            <span className="concis-badge-count" style={{ ...dotStyle, ...countStyle }}>
              {computedCount}
            </span>
          )}
        </div>
      ) : (
        <div
          className={classNames}
          style={{
            ...style,
            ...dotStyle,
            ...countStyle,
          }}
          ref={ref}
        >
          {computedCount}
        </div>
      )}
    </BackTopStyle>
  );
};

export default forwardRef<unknown, badgeProps>(Badge);
