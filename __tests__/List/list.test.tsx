import React, { useState } from 'react';
import List from '../../src/List/index';
import Enzyme from '../setup';
import mountTest from '../mountTest';
import { act } from 'react-dom/test-utils';

const { render, mount } = Enzyme;

mountTest(List);

const dataSource = [
  'Beijing Bytedance Technology Co., Ltd.',
  'Bytedance Technology Co., Ltd.',
  'Beijing Toutiao Technology Co., Ltd.',
  'Beijing Volcengine Technology Co., Ltd.',
  'China Beijing Bytedance Technology Co., Ltd.',
];
const vicDataSource = [
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Toutiao Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'Beijing Volcengine Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    title: 'China Beijing Bytedance Technology Co., Ltd.',
    content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
];
interface vicDataType {
  title: string;
  content: string;
}

describe('list', () => {
  it('check list component render correctly', () => {
    //测试基础列表渲染数据正确
    const component = render(
      <List
        style={{ fontSize: '16px', width: '600px' }}
        header="List title"
        size={'default'}
        dataSource={dataSource}
        render={(item: string) => {
          return (
            <List.Item style={{ fontSize: '14px' }}>
              <div className="list">{item}</div>
            </List.Item>
          );
        }}
      ></List>,
    );
    expect(component.find('.list-item')).toHaveLength(5);
  });

  it('check noData list show correctly', () => {
    //测试空列表渲染数据正确
    const component = render(
      <List
        style={{ fontSize: '16px', width: '600px' }}
        header="List title"
        size={'default'}
        dataSource={[]}
        render={(item: string) => {
          return (
            <List.Item style={{ fontSize: '14px' }}>
              <div className="list">{item}</div>
            </List.Item>
          );
        }}
      ></List>,
    );
    expect(component.find('.list-item')).toHaveLength(0);
  });

  it('check different list size show correctly', () => {
    //测试列表size
    const ListSizeComponent = () => {
      //demo
      const [listSize, setListSize] = useState('default');

      return (
        <div>
          <span className="small" onClick={() => setListSize('small')}>
            small
          </span>
          <span className="default" onClick={() => setListSize('default')}>
            default
          </span>
          <span className="large" onClick={() => setListSize('large')}>
            large
          </span>
          <List
            style={{ fontSize: '16px', width: '600px', marginTop: '30px' }}
            header="List title"
            size={listSize}
            dataSource={dataSource}
            render={(item: string) => {
              return <List.Item style={{ fontSize: '14px' }}>{item}</List.Item>;
            }}
          ></List>
        </div>
      );
    };
    const component = mount(<ListSizeComponent />);
    //依次测试三种size状态
    ['large', 'default', 'small'].forEach((size: string) => {
      act(() => {
        component.find(`.${size}`).simulate('click');
      });
      component.update();
      expect(component.childAt(0).props().children[3].props.size).toEqual(size);
    });
  });

  it('check victurl list show correctly', () => {
    //测试虚拟列表
    const component = mount(
      <List
        style={{ fontSize: '16px', width: '600px' }}
        header="List title"
        size={'default'}
        dataSource={vicDataSource}
        render={(item: vicDataType) => {
          return (
            <List.Item style={{ fontSize: '14px' }}>
              <div className="list">{item.title}</div>
              <div className="list">{item.content}</div>
            </List.Item>
          );
        }}
        virtualListProps
        virtualShowNum={10}
      ></List>,
    );
    expect(component.find('.victurl-list-content')).toHaveLength(1);
    expect(component.find('.victurl-relly-content')).toHaveLength(1);
    expect(component.find('.list-item')).toHaveLength(12);
  });

  it('check lazyLoad list show correctly', () => {
    //测试懒加载列表
    const lazyScrollToBottom = jest.fn();
    const component = mount(
      <List
        style={{ fontSize: '16px', width: '600px' }}
        header="List title"
        size={'default'}
        dataSource={vicDataSource}
        render={(item: vicDataType) => {
          return (
            <List.Item style={{ fontSize: '14px' }}>
              <div className="list">{item.title}</div>
              <div className="list">{item.content}</div>
            </List.Item>
          );
        }}
        lazyLoad
        defaultShowNum={10}
        lazyScrollToBottom={lazyScrollToBottom}
      ></List>,
    );
    expect(component.find('.list-item')).toHaveLength(10);
    act(() => {
      component.find('.list-content').simulate('scroll');
    });
    component.update();
    expect(lazyScrollToBottom).toBeCalledWith(0, true);
  });
});
