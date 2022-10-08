import { ReactNode, CSSProperties } from 'react';

interface BackTopProps {
  /**
   * @description 自定义按钮内容
   */
  children?: ReactNode;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 回到顶部所需时间(ms)
   * @default 450
   */
  duration?: number;
  /**
   * @description 需要监听滚动事件的目标元素
   * @default window
   */
  target?: () => HTMLElement | Window | Document;
  /**
   * @description 滚动距离大于该参数时才会显示按钮
   * @default 400
   */
  visibilityHeight?: number;
  /**
   * @description 按钮点击事件回调函数
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * @description 滚动到顶部后的回调函数
   */
  onReachTop?: () => void;
}

export type { BackTopProps };
