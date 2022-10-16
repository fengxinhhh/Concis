import { ReactNode, CSSProperties } from 'react';

type sizeType = 'mini' | 'small' | 'medium' | 'large' | number;
type alignType = 'start' | 'center' | 'end' | 'baseline';
type spaceAlignParams = {
  display?: 'flex';
  flexDirection?: 'row' | 'column';
  alignItems?: any;
};

interface SpaceProps {
  children?: ReactNode;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
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
  wrap?: boolean;
}

export type { SpaceProps, sizeType, alignType, spaceAlignParams };
