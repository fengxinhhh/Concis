import { ReactNode, CSSProperties } from 'react';

interface AffixProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 插槽样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 类型 scroll表示滚动容器
   * @default ''
   */
  affixType?: string;
  /**
   * @description 插槽
   */
  children?: ReactNode;
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
}
interface offsetProps {
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  position?: string;
}

export type { AffixProps, offsetProps };
