import React, { useState, ReactNode } from 'react';
import { LikeOutlined, StarOutlined, StarFilled, LikeFilled } from '@ant-design/icons';
import Comment from '../../../src/Comment';
import Avatar from '../../../src/Avatar';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

mountTest(Comment);

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
   * @description 作者名后的额外内容
   */
  afterAuthor?: ReactNode;
  /**
   * @description 头像
   */
  avatar?: JSX.Element;
  /**
   * @description 评论内容
   */
  content?: ReactNode;
  /**
   * @description 时间描述
   */
  datetime?: string;
  /**
   * @description 底部配置项
   */
  actions?: ReactNode;
  /**
   * @description 标题栏对齐方式
   * @default left
   */
  align?: 'left' | 'right';
};

function Demo(props: { commentData: CommentProps }) {
  const { commentData } = props;

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

  return <Comment {...commentData} actions={actions} />;
}

describe('test Comment', () => {
  it('test base Comment show correctly', () => {
    const component = mount(
      <Demo
        commentData={{
          author: 'Concis',
          avatar: (
            <Avatar>
              <img src="https://concis.org.cn/images/swiper-img1.webp" />
            </Avatar>
          ),
          content: 'Hello Concis,coding is life,comment body content.',
          datetime: '2022-7-24',
        }}
      />
    );
    expect(component.find('.concis-comment').length).toBe(1);
    expect(
      component.find('.concis-comment .concis-avatar img').getDOMNode().getAttribute('src')
    ).toBe('https://concis.org.cn/images/swiper-img1.webp');
    expect(
      component.find('.concis-comment .comment-content .comment-content-header .author span').text()
    ).toBe('Concis');
    expect(
      component.find('.concis-comment .comment-content .comment-content-header .date-time').text()
    ).toBe('2022-7-24');
    expect(component.find('.concis-comment .comment-content .content').text()).toBe(
      'Hello Concis,coding is life,comment body content.'
    );
    expect(
      component
        .find('.concis-comment .comment-content .comment-content-actions .action')
        .getDOMNode().childNodes.length
    ).toBe(3);
    component
      .find('.concis-comment .comment-content .comment-content-actions .action .item')
      .at(0)
      .simulate('click');
    expect(
      component
        .find('.concis-comment .comment-content .comment-content-actions .action .item')
        .at(0)
        .find('span')
        .at(1)
        .text()
    ).toBe('52');
    component
      .find('.concis-comment .comment-content .comment-content-actions .action .item')
      .at(1)
      .simulate('click');
    expect(
      component
        .find('.concis-comment .comment-content .comment-content-actions .action .item')
        .at(1)
        .find('span')
        .at(1)
        .text()
    ).toBe('13');
  });

  it('test afterAuthor prop work correctly', () => {
    const component = mount(
      <Demo
        commentData={{
          author: 'Concis',
          avatar: (
            <Avatar>
              <img src="https://concis.org.cn/images/swiper-img1.webp" />
            </Avatar>
          ),
          content: 'Hello Concis,coding is life,comment body content.',
          datetime: '2022-7-24',
          afterAuthor: <span>钻石用户</span>,
        }}
      />
    );
    expect(
      component.find('.concis-comment .comment-content-header .extra-header span').text()
    ).toBe('钻石用户');
  });
});
