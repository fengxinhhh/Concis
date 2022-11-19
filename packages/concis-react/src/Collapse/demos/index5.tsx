import React from 'react';
import { Collapse, CollapseItem, Divider } from '../..';

export default function CollapseDemo3() {
  return (
    <Collapse lazyLoad>
      <CollapseItem header="Beijing Toutiao Technology Co., Ltd." listKey="1">
        <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
        <Divider />
        <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
        <Divider />
        <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
      </CollapseItem>
      <CollapseItem header="introduce" listKey="2">
        <span style={{ fontSize: '14px' }}>
          ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around
          the world. Toutiao started out as a news recommendation engine and gradually evolved into
          a platform delivering content in various formats, such as texts, images,
          question-and-answer posts, microblogs, and videos.
        </span>
      </CollapseItem>
      <CollapseItem header="The Underlying AI Technology" listKey="3">
        <span style={{ fontSize: '14px' }}>
          In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (张小明), an
          artificial intelligence bot that writes news articles. The bot published 450 articles
          during the 15-day 2016 Summer Olympics in Rio de Janeiro. In general, Xiaomingbot
          published stories approximately two seconds after the event ended.
        </span>
      </CollapseItem>
    </Collapse>
  );
}
