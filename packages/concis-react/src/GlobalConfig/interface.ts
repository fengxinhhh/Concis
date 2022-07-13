import { ReactNode } from 'react';

interface GlobalConfigProps {
  children?: ReactNode;
  /**
   * @description 主题颜色
   * @default #1890FF
   */
  globalColor?: string;
  /**
   * @description Input输入框组件聚焦、点击时的外发光颜色
   * @default #C6F7FF
   */
  input?: string;
  /**
   * @description Tree选择器组件选中时的字体颜色
   * @default #1890FF
   */
  treeSelectTextColor?: string;
  /**
   * @description Menu导航菜单组件选中时的背景颜色
   * @default #C6F7FF
   */
  menuSelectBgColor?: string;
  /**
   * @description 全局组件类名前缀
   * @default concis
   */
  prefixCls?: string;
}

export type { GlobalConfigProps };
