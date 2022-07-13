import React, { FC, memo, useMemo, useContext } from 'react';
import { badgeProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

const Badge: FC<badgeProps> = (props) => {
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
        } else {
          return count;
        }
      } else {
        return count;
      }
    }
  }, [count, maxCount]);
  const countStyle = useMemo(() => {
    if (children) {
      if (String(computedCount).length > 1) {
        return {
          borderRadius: '20px',
        };
      } else {
        return {
          borderRadius: '50%',
        };
      }
    } else {
      if (String(computedCount).length == 1) {
        return {
          padding: '',
        };
      } else {
        return {
          padding: '0 6px',
        };
      }
    }
  }, [children, count, maxCount]);
  return (
    <>
      {children ? (
        <div
          className={classNames}
          style={{ ...style, ...({ '--global-color': globalColor || '#f53f3f' } as any) }}
        >
          {children}
          {dot ? (
            <span
              className="dot"
              style={{ ...dotStyle, right: `${offset[0]}px`, top: `${offset[1]}px` }}
            ></span>
          ) : text ? (
            <span className="badge-text">{text}</span>
          ) : (
            <span className="count" style={{ ...dotStyle, ...countStyle }}>
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
            ...{ '--global-color': globalColor || '#f53f3f' },
          }}
        >
          {computedCount}
        </div>
      )}
    </>
  );
};

export default memo(Badge);
