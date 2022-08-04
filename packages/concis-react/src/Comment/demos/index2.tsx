import React from 'react';
import Comment from '..';
import Avatar from '../../Avatar';
import './demos.less';

export default function index1() {
  const actions = (
    <div className="action">
      <div className="item">
        <span>Reply</span>
      </div>
    </div>
  );

  return (
    <Comment
      author="Concis"
      avatar={
        <Avatar>
          <img src="http://concis.org.cn/images/swiper-img1.webp"></img>
        </Avatar>
      }
      content="Hello Concis,coding is life,comment body content."
      datetime="2022-7-24"
      actions={actions}
    >
      <Comment
        author="Concis"
        avatar={
          <Avatar>
            <img src="http://concis.org.cn/images/swiper-img2.webp"></img>
          </Avatar>
        }
        content="Hello Concis,coding is life,comment body content."
        datetime="2022-7-24"
        actions={actions}
      >
        <Comment
          author="Concis"
          avatar={
            <Avatar>
              <img src="http://concis.org.cn/images/swiper-img3.webp"></img>
            </Avatar>
          }
          content="Hello Concis,coding is life,comment body content."
          datetime="2022-7-24"
          actions={actions}
        />
        <Comment
          author="Concis"
          avatar={
            <Avatar>
              <img src="http://concis.org.cn/images/swiper-img4.webp"></img>
            </Avatar>
          }
          content="Hello Concis,coding is life,comment body content."
          datetime="2022-7-24"
          actions={actions}
        />
      </Comment>
    </Comment>
  );
}
