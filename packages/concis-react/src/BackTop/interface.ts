import { ReactNode } from 'react';

interface BackTopProps {
  children?: ReactNode;
  /**
   * @description 回到顶部所需时间(ms)
   * @default 450
   */
  duration?: number;
  target?: () => HTMLElement | Window | Document;
  /**
   * @description 滚动距离大于该参数才会显示
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
