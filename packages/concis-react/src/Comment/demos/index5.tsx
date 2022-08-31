import React, { useState } from 'react';
import { LikeOutlined, StarOutlined, StarFilled, LikeFilled } from '@ant-design/icons';
import { Comment, Avatar } from 'concis';
import './demos.less';

export default function index1() {
  const [like, setLike] = useState(false);
  const [star, setStar] = useState(false);

  const actions = (
    <div className="action">
      <div className="item" onClick={() => setLike(!like)}>
        {like ? <LikeFilled style={{ color: '#f53f3f' }} /> : <LikeOutlined />}
        <span>{like ? 52 : 51}</span>
      </div>
      <div className="item" onClick={() => setStar(!star)}>
        {star ? <StarFilled style={{ color: '#fab401' }} /> : <StarOutlined />}
        <span>{star ? 13 : 12}</span>
      </div>
      <div className="item">
        <span>Reply</span>
      </div>
    </div>
  );
  const commentData = {
    author: 'Concis',
    avatar: (
      <Avatar>
        <img src="http://concis.org.cn/images/swiper-img1.webp" />
      </Avatar>
    ),
    align: 'right' as 'left' | 'right',
    content: 'Hello Concis,coding is life,comment body content.',
    datetime: '2022-7-24',
    actions,
  };
  return <Comment {...commentData} />;
}
