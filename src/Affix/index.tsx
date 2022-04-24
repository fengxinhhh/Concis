import React, { FC, memo, useEffect, useState } from 'react';
import './index.module.less';

interface AffixProps {
  /**
   * @description 类型 scroll表示滚动容器
   * @default ''
   */
  affixType?: string;
  /**
   * @description 插槽
   */
  children?: any;
  /**
   * @description 顶部距离
   * @default 0
   */
  offsetTop?: number | string;
  /**
   * @description 左侧距离
   * @default 0
   */
  offsetLeft?: number | string;
  /**
   * @description 底部距离
   * @default 0
   */
  offsetBottom?: number | string;
  /**
   * @description 右侧距离
   * @default 0
   */
  offsetRight?: number | string;
  /**
   * @description 插槽样式
   * @default {}
   */
  style?: Object;
}
interface offsetProps {
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  position?: string;
}
const Affix: FC<AffixProps> = (props) => {
  const { children, affixType, offsetTop, offsetLeft, offsetBottom, offsetRight, style } = props;

  const [affixElOffset, setAffixElOffset] = useState<offsetProps>({});
  let io: IntersectionObserver; //观察者

  useEffect(() => {
    const el = document.querySelector('.affix') as Element;
    io = new IntersectionObserver((entries) => elementObverse(entries));
    io.observe(el); //数据劫持监听
    if (affixType == 'scroll') {
      window.addEventListener('scroll', screenScroll);
      setAffixElOffset((old) => {
        old.position = 'relative';
        if (offsetTop && !old.bottom) {
          old.top = 0;
        }
        if (offsetBottom && !old.top) {
          old.bottom = 0;
        }
        if (offsetLeft && !old.right) {
          old.left = 0;
        }
        if (offsetRight && !old.left) {
          old.right = 0;
        }
        return JSON.parse(JSON.stringify(old));
      });
    } else {
      setAffixElOffset((old) => {
        old.position = 'fixed';
        if (offsetTop && !old.bottom) {
          old.top = offsetTop;
        }
        if (offsetBottom && !old.top) {
          old.bottom = offsetBottom;
        }
        if (offsetLeft && !old.right) {
          old.left = offsetLeft;
        }
        if (offsetRight && !old.left) {
          old.right = offsetRight;
        }
        return JSON.parse(JSON.stringify(old));
      });
    }
    return () => {
      io.unobserve(el);
    };
  }, []);
  const screenScroll = () => {
    const el: any = document.querySelector('.affix');
    if (window.scrollY < 200) {
      //首屏时，无需脱离文档流
      setAffixElOffset((old: offsetProps) => {
        for (const key in old as offsetProps) {
          if (key == 'position') {
            old[key] = 'relative';
          } else if (key == 'right' || key == 'left' || key == 'top' || key == 'bottom') {
            old[key] = '0';
          }
        }
        return JSON.parse(JSON.stringify(old));
      });
    }
  };
  const elementObverse = (entries: Array<IntersectionObserverEntry>) => {
    //监听函数
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) {
        // 元素未被观测
        if (affixElOffset.position == 'relative') {
          setAffixElOffset((old) => {
            old.position = 'fixed';
            if (offsetTop && offsetTop !== old.top) {
              old.top = `${offsetTop}px`;
            }
            if (offsetBottom && offsetBottom !== old.bottom) {
              old.bottom = `${offsetBottom}px`;
            }
            if (offsetLeft && offsetLeft !== old.left) {
              old.left = `${offsetLeft}px`;
            }
            if (offsetRight && offsetRight !== old.right) {
              old.right = `${offsetRight}px`;
            }
            return JSON.parse(JSON.stringify(old));
          });
        }
      }
    });
  };

  return (
    <div
      className="affix"
      style={{ ...(affixElOffset as React.HtmlHTMLAttributes<any>), ...style }}
    >
      {children}
    </div>
  );
};

export default memo(Affix);
