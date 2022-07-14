import React, { useContext, useCallback } from 'react';
import { SkeletonProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

const Skeleton = <T,>(props: SkeletonProps<T>) => {
  const { className, loading = true, title, avatar, row = 3, width = [], size = 40 } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-skeleton');

  const lineHeight = useCallback(
    (i: number) => {
      if (width && width.length) {
        if (typeof width[i] === 'string') {
          return {
            width: width[i],
          };
        } else if (typeof width[i] === 'number') {
          return {
            width: `${width[i]}px`,
          };
        }
      }
      return {};
    },
    [width],
  );

  return loading ? (
    <div className={classNames} style={{ '--skeleton-container-avatar-size': `${size}px` } as any}>
      {avatar && <div className="concis-skeleton-avatar" />}
      <div className="concis-skeleton-container">
        {title && <div className="concis-skeleton-container-title" />}
        {new Array(row).fill('').map((r, i) => {
          return <div className="concis-skeleton-container-line" style={lineHeight(i)} />;
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Skeleton;
