import React, { memo, FC, useContext } from 'react';
import { EmptyProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

const Empty: FC<EmptyProps> = (props) => {
  const { className, style, icon, description = '暂无数据' } = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, darkTheme ? 'concis-dark-empty' : 'concis-empty');

  return (
    <div className={classNames} style={style}>
      {icon || (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          viewBox="0 0 48 48"
          aria-hidden="true"
          focusable="false"
          className="empty-icon"
        >
          <path d="M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z" />
        </svg>
      )}
      <span className="empty-text">{description}</span>
    </div>
  );
};

export default memo(Empty);
