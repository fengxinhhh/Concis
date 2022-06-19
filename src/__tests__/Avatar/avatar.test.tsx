import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Avatar from '../../Avatar/index';
import AvatarGroup from '../../Avatar/group';
import { CameraOutlined } from '@ant-design/icons';
import Enzyme from '../setup';
import mountTest from '../mountTest';
import { act } from 'react-dom/test-utils';

const { mount } = Enzyme;

let container: HTMLDivElement | null;

mountTest(Avatar);

describe('Avatar', () => {
  //测试前准备容器
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  //测试后删除容器
  afterEach(() => {
    document.body.removeChild(container as HTMLDivElement);
    container = null;
  });

  it('test avatar children content show correctly', () => {
    //测试头像文本显示
    let contextText: string | ReactNode = 'test';
    const component = mount(<Avatar>{contextText}</Avatar>);
    expect(component.find('.text-ref').text()).toEqual('test');
    const imgSrc =
      'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png';
    act(() => {
      contextText = <img src={imgSrc}></img>;
    });
    expect(component.find('img')).toBeDefined();
  });
  it('test avatar group correctly', () => {
    //测试头像样式
    const component = (
      <AvatarGroup size={50} groupStyle={{ margin: '0 10px' }}>
        <Avatar style={{ background: 'rgb(20, 169, 248)' }} shape="square">
          View
        </Avatar>
        <Avatar style={{ background: 'rgb(51, 112, 255)' }}>React</Avatar>
        <Avatar style={{ background: 'rgb(0, 208, 184)' }}>UI</Avatar>
      </AvatarGroup>
    );

    act(() => {
      ReactDOM.render(component, container);
    });

    const avatarStyleList = [
      {
        background: 'rgb(20, 169, 248)',
        content: 'View',
      },
      {
        background: 'rgb(51, 112, 255)',
        content: 'React',
      },
      {
        background: 'rgb(0, 208, 184)',
        content: 'UI',
      },
    ];
    const groupDom = (container as HTMLDivElement).querySelector('.avatar-group') as HTMLElement;
    expect(groupDom.childElementCount).toBe(3);

    const avatars = Array.from((container as HTMLDivElement).querySelectorAll('.avatar'));
    avatars.forEach((avatar, index) => {
      //测试头像组的每个头像样式
      expect(
        avatar
          .getAttribute('style')
          ?.includes(`background: ${avatarStyleList[index].background}`) &&
          avatar.querySelector('.text-ref')?.innerHTML === avatarStyleList[index].content,
      ).toBe(true);
      if (index === 0) {
        //测试头像形状
        expect(avatar.getAttribute('style')?.includes(`border-radius: 5px`)).toBe(true);
      }
    });
  });

  it('test avatar click callback correctly', () => {
    //头像点击交互测试
    const mockFn = jest.fn();
    const component = mount(
      <Avatar
        size={54}
        triggerType="mask"
        triggerIcon={<CameraOutlined style={{ fontSize: '20px' }} />}
        triggerClick={mockFn}
      >
        <img src="https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png"></img>
      </Avatar>,
    );
    act(() => {
      component.simulate('click');
    });
    let mockFnCallLength = mockFn.mock.calls.length;
    expect(mockFnCallLength).toBe(0);
    act(() => {
      component.setProps({
        triggerType: 'button',
      });
    });
    component.update();
    mockFnCallLength = mockFn.mock.calls.length;
    expect(mockFnCallLength).toBe(0);
  });
});
