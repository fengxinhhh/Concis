import React, { FC, memo, useMemo } from 'react';
import { badgeProps } from './interface';
import './index.module.less';

const Badge: FC<badgeProps> = (props) => {
  const {
    children,
    style = {},
    count,
    maxCount = 99,
    dotStyle = {},
    dot,
    offset = [2, 2],
    text,
  } = props;
  console.log(children);

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
        <div className="badge" style={style}>
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
        <div className="no-child-badge" style={{ ...style, ...dotStyle, ...countStyle }}>
          {computedCount}
        </div>
      )}
    </>
  );
};

export default memo(Badge);
