import React from 'react';
import Collapse from '../../../src/Collapse/index';
import CollapseItem from '../../../src/Collapse/CollapseItem';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';

const { mount } = Enzyme;

mountTest(Collapse);

describe('Collapse', () => {
  it('test base collapse correctly', () => {
    const component = mount(
      <Collapse defaultActive={[1, 2]}>
        <CollapseItem header="Beijing Toutiao Technology Co., Ltd." listKey="1">
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
        </CollapseItem>
        <CollapseItem header="introduce" listKey="2" disabled>
          <span style={{ fontSize: '14px' }}>
            ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and
            around the world. Toutiao started out as a news recommendation engine and gradually
            evolved into a platform delivering content in various formats, such as texts, images,
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
    expect(component.find('.concis-collapse-box')).toHaveLength(1);
    expect(component.find('.concis-collapse-box').getDOMNode().childNodes.length).toBe(3);
    expect(
      component
        .find('.concis-collapse-box .concis-collapse-item')
        .at(2)
        .find('.concis-collapse-item-content')
        .getDOMNode()
        .getAttribute('style')
        .includes('max-height: 0px')
    ).toBe(true);
    expect(
      component
        .find('.concis-collapse-box .concis-collapse-item')
        .at(1)
        .find('.concis-collapse-item-header')
        .getDOMNode()
        .getAttribute('style')
        .includes(' cursor: not-allowed')
    ).toBe(true);
  });
  it('test right node show correctly', () => {
    const component = mount(
      <Collapse>
        <CollapseItem header="Beijing Toutiao Technology Co., Ltd." listKey="1" extra={1}>
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
        </CollapseItem>
        <CollapseItem header="introduce" listKey="2" extra={1}>
          <span style={{ fontSize: '14px' }}>
            ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and
            around the world. Toutiao started out as a news recommendation engine and gradually
            evolved into a platform delivering content in various formats, such as texts, images,
            question-and-answer posts, microblogs, and videos.
          </span>
        </CollapseItem>
        <CollapseItem header="The Underlying AI Technology" listKey="3" extra={1}>
          <span style={{ fontSize: '14px' }}>
            In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (张小明), an
            artificial intelligence bot that writes news articles. The bot published 450 articles
            during the 15-day 2016 Summer Olympics in Rio de Janeiro. In general, Xiaomingbot
            published stories approximately two seconds after the event ended.
          </span>
        </CollapseItem>
      </Collapse>
    );
    expect(
      component
        .find('.concis-collapse-box .concis-collapse-item')
        .at(1)
        .find('.concis-collapse-item-header .right')
    ).toHaveLength(1);
  });
  it('test headerAlign props correctly', () => {
    const component = mount(
      <Collapse headerAlign="right">
        <CollapseItem header="Beijing Toutiao Technology Co., Ltd." listKey="1">
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
        </CollapseItem>
        <CollapseItem header="introduce" listKey="2">
          <span style={{ fontSize: '14px' }}>
            ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and
            around the world. Toutiao started out as a news recommendation engine and gradually
            evolved into a platform delivering content in various formats, such as texts, images,
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
    expect(
      component
        .find('.concis-collapse-box .concis-collapse-item')
        .at(1)
        .find('.concis-collapse-item-header .right')
    ).toHaveLength(1);
  });
  it('test lazyload correctly', () => {
    const component = mount(
      <Collapse lazyLoad>
        <CollapseItem header="Beijing Toutiao Technology Co., Ltd." listKey="1">
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
          <span style={{ fontSize: '14px' }}>Beijing Toutiao Technology Co., Ltd.</span>
        </CollapseItem>
        <CollapseItem header="introduce" listKey="2">
          <span style={{ fontSize: '14px' }}>
            ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and
            around the world. Toutiao started out as a news recommendation engine and gradually
            evolved into a platform delivering content in various formats, such as texts, images,
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
    expect(
      component
        .find('.concis-collapse-box .concis-collapse-item')
        .at(2)
        .find('.concis-collapse-item-content')
        .getDOMNode().childNodes.length
    ).toBe(0);
    component
      .find('.concis-collapse-box .concis-collapse-item')
      .at(2)
      .find('.concis-collapse-item-header')
      .simulate('click');
    expect(
      component
        .find('.concis-collapse-box .concis-collapse-item')
        .at(2)
        .find('.concis-collapse-item-content')
        .getDOMNode().childNodes.length
    ).toBe(1);
  });
});
