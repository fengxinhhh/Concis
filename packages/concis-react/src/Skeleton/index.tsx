import React, { useContext, useCallback, forwardRef } from 'react';
import { SkeletonProps } from './interface';
import { SkeletonStyle } from './style';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';

const Skeleton = (props, ref) => {
  const { className, style, loading = true, title, avatar, row = 3, width = [], size = 40 } = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const firstClass = darkTheme ? 'concis-skeleton-dark' : 'concis-skeleton';
  const classNames = cs(prefixCls, className, firstClass);

  const lineHeight = useCallback(
    (i: number) => {
      if (width && width.length) {
        if (typeof width[i] === 'string') {
          return {
            width: width[i],
          };
        }
        if (typeof width[i] === 'number') {
          return {
            width: `${width[i]}px`,
          };
        }
      }
      return {};
    },
    [width]
  );

  return (
    <SkeletonStyle avatarSize={size}>
      {loading ? (
        <div className={classNames} style={style} ref={ref}>
          {avatar && <div className={`${firstClass}-avatar`} />}
          <div className={`${firstClass}-container`}>
            {title && <div className={`${firstClass}-container-title`} />}
            {new Array(row).fill('').map((r, i) => {
              return <div className={`${firstClass}-container-line`} style={lineHeight(i)} />;
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </SkeletonStyle>
  );
};

export default forwardRef<unknown, SkeletonProps>(Skeleton);
