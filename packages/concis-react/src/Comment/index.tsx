import React, { useContext, forwardRef } from 'react';
import { CommentProps } from './interface';
import './index.module.less';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../common_utils/getRenderColor';
import cs from '../common_utils/classNames';

const Comment = (props, ref) => {
  const {
    className,
    style,
    author,
    afterAuthor,
    avatar,
    content,
    datetime,
    actions,
    align = 'left',
    children,
  } = props;
  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classFirstName = darkTheme ? 'concis-dark-comment' : 'concis-comment';
  const classNames = cs(prefixCls, className, classFirstName);

  return (
    <div
      className={classNames}
      style={
        {
          '--global-color': getRenderColor(
            (getSiteTheme() === ('dark' || 'auto') || darkTheme) as boolean,
            globalColor
          ),
          '--header-align': align === 'left' ? 'flex-start' : 'space-between',
          ...style,
        } as any
      }
      ref={ref}
    >
      <div className="avatar">{avatar}</div>
      <div className="comment-content">
        <div className="comment-content-header">
          <div className="author">
            <span>{author}</span>
            <div className="extra-header">{afterAuthor}</div>
          </div>
          <span className="date-time">{datetime}</span>
        </div>
        <div className="content">{content}</div>
        <div className="comment-content-actions">{actions}</div>
        {children}
      </div>
    </div>
  );
};

export default forwardRef<unknown, CommentProps>(Comment);
