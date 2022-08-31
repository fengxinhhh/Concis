import React, { useState } from 'react';
import { Comment, Avatar, TextArea, Button, Message } from 'concis';
import './demos.less';

export default function index1() {
  const [showReply, setShowReply] = useState(true);
  const [replyContent, setReplyContent] = useState('');
  const [replyList, setReplyList] = useState<{ content?: string }[]>([]);

  const reply = () => {
    if (replyContent) {
      Message.success('发布成功');
      setReplyList((_) => {
        _.push({
          content: replyContent,
        });
        return [..._];
      });
      setReplyContent('');
      setShowReply(false);
    } else {
      Message.error('请输入内容');
    }
  };

  const actions = (
    <div className="action">
      <div className="item" onClick={() => setShowReply(true)}>
        <span>Reply</span>
      </div>
    </div>
  );
  const replyActions = (
    <div className="replay-action">
      <Button
        type="text"
        height={35}
        className="cancel-btn"
        handleClick={() => setShowReply(false)}
      >
        Cancel
      </Button>
      <Button type="primary" height={35} handleClick={reply}>
        Reply
      </Button>
    </div>
  );

  return (
    <Comment
      author="Concis"
      avatar={
        <Avatar>
          <img src="http://concis.org.cn/images/swiper-img1.webp" />
        </Avatar>
      }
      content="Hello Concis,coding is life,comment body content."
      datetime="2022-7-24"
      actions={actions}
      align="right"
    >
      {replyList.length > 0 &&
        replyList.map((_) => {
          return (
            <Comment
              author="Concis"
              avatar={
                <Avatar>
                  <img src="http://concis.org.cn/images/swiper-img3.webp" />
                </Avatar>
              }
              content={_.content}
              datetime="2022-7-24"
              align="right"
            />
          );
        })}

      {showReply && (
        <Comment
          avatar={
            <Avatar>
              <img src="http://concis.org.cn/images/swiper-img3.webp" />
            </Avatar>
          }
          content={
            <TextArea
              defaultValue={replyContent}
              showCount
              maxLength={30}
              showClear
              handleIptChange={(v: string) => setReplyContent(v)}
            />
          }
          actions={replyActions}
        />
      )}
    </Comment>
  );
}
