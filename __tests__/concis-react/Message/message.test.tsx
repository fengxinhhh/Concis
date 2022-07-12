import React from 'react';
import Message from '../../../packages/concis-react/src/Message/index';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';

const { mount } = Enzyme;

describe('Message', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runAllTimers();
  });

  it('test base Message show correctly', () => {
    Message.info('this is a test');
    expect(document.querySelectorAll('.all-container')).toHaveLength(1);
    expect(document.querySelectorAll('.message-container .toast-content')[0].innerHTML).toBe(
      'this is a test',
    );
  });

  it('test click five nums Message show num correctly', () => {
    for (let i = 0; i < 5; i++) {
      Message.info('content');
    }
    expect(document.querySelectorAll('.all-container')[0].childNodes.length).toBe(5);
  });

  it('test bottom transform Message show correctly', () => {
    Message.info({
      content: 'this is a test',
      duration: 3000,
      position: 'bottom',
    });
    expect(
      document.querySelectorAll('.message-container')[0].getAttribute('style')?.includes('bottom:'),
    );
  });

  it('test clearable Message correctly', () => {
    Message.info({
      content: 'this is a test',
      duration: 3000,
      clearable: true,
    });
    expect(document.querySelectorAll('.message-container')[0].childNodes.length).toBe(3);
  });
});
