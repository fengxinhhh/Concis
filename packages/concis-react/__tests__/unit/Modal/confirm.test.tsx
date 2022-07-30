import Modal from '../../../src/Modal';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';

const { mount } = Enzyme;

mountTest(Modal);

describe('Modal confirm', () => {
  it('test base api correctly', () => {
    jest.useFakeTimers();
    Modal.confirm({
      title: 'confirm',
      content: 'test',
    });
    jest.runAllTimers();
    expect(document.querySelectorAll('.concis-modal-content')).toHaveLength(1);
    expect(document.querySelector('.concis-modal-content-header .title')?.childNodes.length).toBe(
      2,
    );
    document.body.innerHTML = '';
    jest.useFakeTimers();
    Modal.info({
      title: 'confirm',
      content: 'test',
    });
    jest.runAllTimers();
    expect(document.querySelectorAll('.concis-modal-content')).toHaveLength(1);
    expect(document.querySelector('.concis-modal-content-header .title')?.childNodes.length).toBe(
      2,
    );
    document.body.innerHTML = '';
    jest.useFakeTimers();
    Modal.success({
      title: 'confirm',
      content: 'test',
    });
    jest.runAllTimers();
    expect(document.querySelectorAll('.concis-modal-content')).toHaveLength(1);
    expect(document.querySelector('.concis-modal-content-header .title')?.childNodes.length).toBe(
      2,
    );
    document.body.innerHTML = '';
    jest.useFakeTimers();
    Modal.warning({
      title: 'confirm',
      content: 'test',
    });
    jest.runAllTimers();
    expect(document.querySelectorAll('.concis-modal-content')).toHaveLength(1);
    expect(document.querySelector('.concis-modal-content-header .title')?.childNodes.length).toBe(
      2,
    );
    document.body.innerHTML = '';
    jest.useFakeTimers();
    Modal.error({
      title: 'confirm',
      content: 'test',
    });
    jest.runAllTimers();
    expect(document.querySelectorAll('.concis-modal-content')).toHaveLength(1);
    expect(document.querySelector('.concis-modal-content-header .title')?.childNodes.length).toBe(
      2,
    );
  });

  it('test confirm api onOk and onCancel correctly', () => {
    const okFn = jest.fn();
    const cancelFn = jest.fn();

    jest.useFakeTimers();
    Modal.confirm({
      title: 'confirm',
      content: 'test',
      onOk: okFn,
      onCancel: cancelFn,
    });
    jest.runAllTimers();
    (document.querySelectorAll('.concis-modal-content .concis-button-primary') as any)[0].click();
    expect(okFn).toBeCalledTimes(0);
  });

  it('test confirm async promise loading correctly', () => {
    jest.useFakeTimers();
    Modal.confirm({
      title: 'confirm',
      content: 'test',
      onOk: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('');
          }, 1000);
        });
      },
    });
    jest.runAllTimers();
    (document.querySelectorAll('.concis-modal-content .concis-button-primary') as any)[0].click();
    setTimeout(() => {
      expect(
        document
          .querySelector('.concis-modal-content .concis-button-primary')
          ?.getAttribute('class')
          ?.includes('loading'),
      ).toBe(true);
    }, 200);
  });
});
