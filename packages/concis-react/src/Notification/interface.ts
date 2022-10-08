import { CSSProperties } from 'react';

type footerBtnVal = {
  enter?: string;
  exit?: string;
};
interface NotificationProps<T> {
  /**
   * @description 自定义样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 标题
   */
  title: T;
  /**
   * @description 正文
   */
  content?: T;
  /**
   * @description 提醒框类型类型
   */
  type?: 'info' | 'success' | 'warning' | 'error' | 'normal' | 'loading';
  /**
   * @description 显示时间
   * @default 3000ms
   */
  duration?: number;
  /**
   * @description 显示位置
   * @default top
   */
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  /**
   * @description 出现可清除按钮
   * @default false
   */
  clearable?: boolean;
  /**
   * @description 出现底部菜单
   * @default false
   */
  showFooter?: boolean;
  /**
   * @description 底部按钮名称
   * @default {Cancel、OK}
   */
  footerBtnVal?: footerBtnVal;
  /**
   * @description 关闭/确认回调函数，根据返回参数判断事件触发类型
   * @default {1 -> 确认 2 -> 取消 3 -> 关闭}
   */
  doneCallback?: Function;
  /**
   * @description 暗黑模式
   * @default false
   */
  dark?: boolean;
  messageBoxId?: string;
}

export type { NotificationProps, footerBtnVal };
