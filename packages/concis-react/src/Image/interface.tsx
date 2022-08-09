import { CSSProperties } from 'react';


interface ImageProps {
  /**
   * @description 图片路径
   * @default ''
   */
  src?: string;
  /**
   * @description 原生alt属性
   */
  alt?: string;
  /**
   * @description 填充方式
   */
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  /**
   * @description 是否可拖动
   * @default true
   */
  draggable?: boolean;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 图片宽度
   */
  width?: string;
  /**
   * @description 图片高度
   */
  height?: string;
  /**
   * @description 配置圆角
   */
  round?: string;
  /**
   * @description 是否可预览
   * @default false
   */
  preview?: boolean;
  /**
   * @description 图片上的描述文案
   */
  caption?: string;
  /**
   * @description 描述文案样式
   */
  captionStyle?: CSSProperties;
}

export type { ImageProps };
