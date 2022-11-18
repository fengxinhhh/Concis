import React, { useContext, forwardRef } from 'react';
import { CommentProps } from './interface';
import { CommentStyle } from './style';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';
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

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classFirstName = darkTheme ? 'concis-dark-comment' : 'concis-comment';
  const classNames = cs(prefixCls, className, classFirstName);

  return (
    <CommentStyle commentAlign={align}>
      <div className={classNames} style={style} ref={ref}>
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
    </CommentStyle>
  );
};

export default forwardRef<unknown, CommentProps>(Comment);
