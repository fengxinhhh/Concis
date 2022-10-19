import { CSSProperties } from 'react';

interface stepsProps {
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   *
   * @description 当前步骤下标
   * @default 1
   */
  current: number;
  /**
   * @description 点击步骤条回调函数
   */
  onChange?: (value: number) => void;
  children: any;
}

interface stepProps {
  className?: string;
  /**
   * @description 步骤标题
   */
  title?: string;
  /**
   * @description 步骤子标题
   */
  subTitle?: string;
  /**
   * @description 步骤描述
   */
  description?: string;
}

export type { stepsProps, stepProps };
