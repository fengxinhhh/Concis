import { ReactNode } from 'react';

type sizeType = 'mini' | 'small' | 'medium' | 'large';
type alignType = 'start' | 'center' | 'end' | 'baseline';
type spaceAlignParams = {
  display?: 'flex';
  flexDirection?: 'row' | 'column';
  alignItems?: any;
};

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
   * @default small
   */
  size?: sizeType | Array<number>;
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

export type { SpaceProps, sizeType, alignType, spaceAlignParams };
