import { CSSProperties, ReactNode } from 'react';

interface NavProps {
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 导航栏标签配置项
   */
  navData: navDataOption[];
  /**
   * @description 导航栏标题显示窗配置项
   */
  navContent: ReactNode[];
  /**
   * @description 左侧插槽
   */
  leftSlot?: ReactNode;
  /**
   * @description 右侧插槽
   */
  rightSlot?: ReactNode;
}

type navDataOption = {
  label: string;
  link?: string;
};
type lineStyleProps = {
  width: string;
  left: string;
};

type dialogStyleProps = {
  width: string;
  height: string;
  left: string;
};

export type { NavProps, lineStyleProps, dialogStyleProps, navDataOption };
