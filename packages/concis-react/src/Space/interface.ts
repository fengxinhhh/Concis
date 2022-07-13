import { ReactNode } from 'react';

type sizeType = 'mini' | 'smail' | 'medium' | 'large';
type alignType = 'start' | 'center' | 'end' | 'baseline';

interface SpaceProps<T> {
  children?: ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 间距大小
   * @default smail
   */
  size?: sizeType | Array<sizeType>;
  /**
   * @description 垂直对齐方式
   * @default center
   */
  align?: alignType;
  /**
   * @description 环绕间距
   * @default false
   */
  wrap?: T;
}

export type { SpaceProps, sizeType, alignType };
