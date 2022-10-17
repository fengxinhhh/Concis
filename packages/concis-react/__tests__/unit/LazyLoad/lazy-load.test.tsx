import React, { useLayoutEffect, useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from '@testing-library/react';
import Enzyme, { setupIntersectionObserverMock } from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';
import LazyLoad from '../../../src/LazyLoad';

const { mount } = Enzyme;
mountTest(LazyLoad);

let container: HTMLDivElement | null = null;
let observeInstance: Record<'observeElement', { element: Element; callback: () => void }[]> | null =
  null;
let target: Element | null = null;
const observe = jest.fn();
beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement('div');
  document.body.appendChild(container);
  observeInstance = setupIntersectionObserverMock({
    observe,
    disconnect: jest.fn(),
    unobserve: jest.fn(),
  });
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container!);
  container?.remove();
  container = null;
});

function Demo() {
  const [showEl, setShowEl] = useState(false);

  const _callback: IntersectionObserverCallback = (entries) => {
    if (entries[0].intersectionRatio > 0) {
      setShowEl(true);
    }
  };

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(_callback);
    target = document.querySelector('.lazy');
    observer.observe(target!);
  }, []);

  return (
    <div className="view">
      <div className="lazy">
        {showEl && (
          <>
            <div style={{ height: 50 }} className="child">
              1
            </div>
            <div style={{ height: 50 }} className="child">
              1
            </div>
            <div style={{ height: 50 }} className="child">
              1
            </div>
          </>
        )}
      </div>
    </div>
  );
}

describe('LazyLoad', () => {
  it('test LazyLoad correctly render', () => {
    const component = mount(
      <LazyLoad delay={1000}>
        <div className="a">111</div>
        <div className="a">111</div>
        <div className="a">111</div>
      </LazyLoad>,
    );

    expect(component.find('.concis-lazyLoad').length).toBe(1);
  });
  it('test LazyLoad lazy effect', () => {
    act(() => {
      render(<Demo />, container, () => {
        observeInstance?.observeElement.forEach((x) => {
          if (x.element === target) {
            x.callback();
          }
        });
      });
    });

    expect(observe).toBeCalled();
    expect(document.querySelector('.lazy')?.childNodes.length).toBe(3);
  });
});
