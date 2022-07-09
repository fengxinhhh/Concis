import React from 'react';
import Notification from '../../src/Notification/index';
import Enzyme from '../setup';
import mountTest from '../mountTest';

const { mount } = Enzyme;

describe('Notification', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runAllTimers();
  });

  it('test base Notification show correctly', () => {
    //基础测试
    Notification.info({
      title: 'Notification',
      content: 'test',
      duration: 3000,
    });
    expect(document.querySelectorAll('.notification-container')).toHaveLength(1);
    expect(document.querySelectorAll('.notifica-container .title-content')[0].innerHTML).toBe(
      'Notification',
    );
    expect(
      document.querySelectorAll('.notifica-container .notification-content')[0].innerHTML,
    ).toBe('test');
  });

  it('test click five nums Notification show num correctly', () => {
    //测试多次渲染
    for (let i = 0; i < 5; i++) {
      Notification.info({
        title: 'Notification',
        content: 'test',
        duration: 3000,
      });
    }
    expect(document.querySelectorAll('.notification-container')[0].childNodes.length).toBe(5);
  });

  it('test four transform Notification show correctly', async () => {
    //测试不同方向
    const transforms = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    for (let i = 0; i < transforms.length; i++) {
      const transform = transforms[i] as 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
      Notification.info({
        title: 'Notification',
        content: 'test',
        duration: 3000,
        position: transform,
      });
      setTimeout(() => {
        const dom = document.querySelectorAll('.notifica-container')[i];
        switch (i) {
          case 0:
            expect(
              dom.getAttribute('style')?.includes('top') &&
                dom.getAttribute('style')?.includes('left'),
            ).toBe(true);
            break;
          case 1:
            expect(
              dom.getAttribute('style')?.includes('top') &&
                dom.getAttribute('style')?.includes('right'),
            ).toBe(true);
            break;
          case 2:
            expect(
              dom.getAttribute('style')?.includes('bottom') &&
                dom.getAttribute('style')?.includes('left'),
            ).toBe(true);
            break;
          case 3:
            expect(
              dom.getAttribute('style')?.includes('bottom') &&
                dom.getAttribute('style')?.includes('right'),
            ).toBe(true);
            break;
        }
      }, 500);
    }
  });

  it('test footer Notification show correctly', () => {
    //测试自定义按钮
    const mockFn = jest.fn();
    Notification.info({
      title: 'Notification',
      content: 'test',
      duration: 10000,
      clearable: true,
      showFooter: true,
      footerBtnVal: {
        enter: '确认',
        exit: '取消',
      },
      doneCallback: mockFn,
    });
    expect(document.querySelector('.notifica-container .title')?.childNodes.length).toBe(2);
    expect(document.querySelector('.notifica-container .notification-footer')).toBeDefined();
    expect(
      document.querySelector('.notifica-container .notification-footer .text')?.innerHTML,
    ).toBe('取消');
    expect(
      document.querySelector('.notifica-container .notification-footer .primary')?.innerHTML,
    ).toBe('确认');
  });

  it('test setting style Notification correctly', () => {
    //测试自定义样式
    Notification.info({
      title: 'Notification',
      content: 'test',
      duration: 3000,
      style: { width: '500px', fontSize: '15px' },
    });
    expect(
      document
        .querySelector('.notifica-container')
        ?.getAttribute('style')
        ?.includes('width: 500px, font-size: 15px'),
    );
  });
});
