import React, { useEffect, useState, useContext, forwardRef } from 'react';
import type { AffixProps, offsetProps } from './interface';
import { on, off } from '../common_utils/dom/event';
import type { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { AffixStyle } from './style';

const Affix = (props, ref) => {
  const {
    children,
    className,
    affixType,
    offsetTop,
    offsetLeft,
    offsetBottom,
    offsetRight,
    style,
  } = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}affix`);

  const [affixElOffset, setAffixElOffset] = useState<offsetProps>({});

  let io: IntersectionObserver; // 观察者

  function getOffset(affixEl) {
    if (affixType === 'scroll') {
      on(window, 'scroll', screenScroll)();
      affixEl.position = 'relative';
    } else {
      affixEl.position = 'fixed';
    }
    if (offsetTop && !affixEl.bottom) {
      affixEl.top = affixType === 'scroll' ? 0 : offsetTop;
    }
    if (offsetBottom && !affixEl.top) {
      affixEl.bottom = affixType === 'scroll' ? 0 : offsetBottom;
    }
    if (offsetLeft && !affixEl.right) {
      affixEl.left = affixType === 'scroll' ? 0 : offsetLeft;
    }
    if (offsetRight && !affixEl.left) {
      affixEl.right = affixType === 'scroll' ? 0 : offsetRight;
    }
    return affixEl;
  }

  function transformToFixed(affixEl) {
    affixEl = {
      position: 'fixed',
      top: offsetTop ? `${offsetTop}px` : affixEl.top,
      bottom: offsetBottom ? `${offsetBottom}px` : affixEl.bottom,
      left: offsetLeft ? `${offsetLeft}px` : affixEl.left,
      right: offsetRight ? `${offsetRight}px` : affixEl.right,
    };
    return affixEl;
  }

  useEffect(() => {
    const el = document.querySelector(`.concis${darkTheme ? '-dark' : ''}-affix`) as Element;
    io = new IntersectionObserver((entries) => elementObverse(entries));
    io.observe(el); // 数据劫持监听
    setAffixElOffset((old) => {
      return JSON.parse(JSON.stringify(getOffset(old)));
    });
    return () => {
      io.unobserve(el);
      off(window, 'scroll', screenScroll)();
    };
  }, []);

  const screenScroll = () => {
    if (window.scrollY < 200) {
      // 首屏时，无需脱离文档流
      setAffixElOffset((old: offsetProps) => {
        for (const key in old as offsetProps) {
          if (key === 'position') {
            old[key] = 'relative';
          } else if (key === 'right' || key === 'left' || key === 'top' || key === 'bottom') {
            old[key] = '0';
          }
        }
        return JSON.parse(JSON.stringify(old));
      });
    }
  };

  const elementObverse = (entries: Array<IntersectionObserverEntry>) => {
    // 监听函数
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) {
        // 元素未被观测
        if (affixElOffset.position === 'relative') {
          setAffixElOffset((old) => {
            return JSON.parse(JSON.stringify(transformToFixed(old)));
          });
        }
      }
    });
  };

  return (
    <AffixStyle>
      <div
        className={classNames}
        ref={ref}
        style={{
          ...(affixElOffset as React.HtmlHTMLAttributes<any>),
          ...style,
        }}
      >
        {children}
      </div>
    </AffixStyle>
  );
};

export default forwardRef<unknown, AffixProps>(Affix);
