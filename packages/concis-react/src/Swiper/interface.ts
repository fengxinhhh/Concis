import { CSSProperties } from 'react';

interface swiperProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 图片列表
   * @default []
   */
  imgList: Array<string>;
  /**
   * @description 轮播图宽度
   * @default 400px
   */
  pictureSize?: number;
  /**
   * @description 轮播图高度
   * @default 240px
   */
  height?: number;
  /**
   * @description 自动播放
   * @default false
   */
  autoPlayer?: boolean;
  /**
   * @description 展示小圆点
   * @default false
   */
  showTrigger?: boolean;
  /**
   * @description 自动播放间隔
   * @default 3000ms
   */
  deply?: number;
  /**
   * @description 卡片式轮播图
   * @default false
   */
  card?: boolean;
}

type imgPos = {
  // 卡片图配置接口范式
  left: number | string;
  top?: number | string;
  right?: number;
  bottom?: number;
  margin?: string;
};

interface imgOptions {
  leftPic: {
    pos: imgPos;
    width: string;
    height: string;
    zIndex: number;
    top: string;
    picIndex: number;
    opacity: number;
  };
  centerPic: {
    pos: imgPos;
    width: string;
    height: string;
    zIndex: number;
    top: string;
    picIndex: number;
    opacity: number;
  };
  rightPic: {
    pos: imgPos;
    width: string;
    height: string;
    zIndex: number;
    top: string;
    picIndex: number;
    opacity: number;
  };
}

export type { swiperProps, imgOptions };
