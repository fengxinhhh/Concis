import React, { Children, memo, ReactNode, useContext, useState } from 'react';
import './index.module.less';
import Avatar from '../Avatar';
import TextArea from '../Input/TextArea';
import Button from '../Button';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../common_utils/getRenderColor';
import cs from '../common_utils/classNames';
type CommentProps = {
  children?: ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 作者名
   */
  author?: string;
  /**
   * @description 头像
   */
  avatar?: JSX.Element;
  /**
   * @description 评论内容
   */
  content?: string;
  /**
   * @description 时间描述
   */
  datetime?: string;
  /**
   * @description 显示回复输入框
   * @default false
   */
  showReplay?: boolean;
  /**
   * @description 输入框改变时的回调
   */
  handleChange?: (value: string) => void;
  /**
   * @description 点击回复的回调
   */
  handleClick?: (e: React.Dispatch<React.SetStateAction<boolean>>) => void;
};
const Comment = (props: CommentProps) => {
  const { className, author, avatar, content, datetime, showReplay, handleClick, handleChange } =
    props;
  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classFirstName = darkTheme ? 'concis-dark-comment' : 'concis-comment';
  const classNames = cs(prefixCls, className, classFirstName);

  const [replyVisible, setReplyVisible] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>('');
  const handelOnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (showReplay) {
      setReplyVisible(!replyVisible);
    }
    handleClick && handleClick(setReplyVisible);
  };
  const handelOnBlur = (e: React.FocusEvent<HTMLElement>) => {
    setReplyVisible(false);
  };
  const handelOnChange = (value: string) => {
    handleChange && handleChange(value);
  };
  return (
    <div
      className={classNames}
      style={
        {
          '--global-color': getRenderColor(
            (getSiteTheme() === ('dark' || 'auto') || darkTheme) as boolean,
            globalColor,
          ),
        } as any
      }
    >
      <div className="avatar">{avatar}</div>
      <div className="comment-content">
        <h4 className="author">{author}</h4>
        <p className="content">{content}</p>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <span className="date-time">{datetime}</span>
          <span className="replay-text" onClick={handelOnClick}>
            {replyVisible ? '取消回复' : '回复'}
          </span>
        </div>
        {showReplay && replyVisible && (
          <div className="reply-label">
            <TextArea
              moreStyle={{ margin: '5px 0' }}
              onBlur={handelOnBlur}
              // value={textValue}
              handleIptChange={handelOnChange}
            />
            <Button type="primary" style={{ height: '30px' }}>
              发 送
            </Button>
          </div>
        )}
        {props.children}
      </div>
    </div>
  );
};
export default memo(Comment);
