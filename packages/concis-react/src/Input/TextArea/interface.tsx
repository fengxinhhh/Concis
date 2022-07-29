interface TextareaProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   * @default {}
   */
  moreStyle?: object;
  /**
   * @description 提示
   * @default ''
   */
  placeholder?: string;
  /**
   * @description 显示清空按钮
   * @default false
   */
  showClear?: boolean;
  /**
   * @description 文本域内容最大长度
   */
  maxLength?: number;
  /**
   * @description 是否展示字数
   * @default false
   */
  showCount?: boolean;
  /**
   * @description 输入框内容改变回调
   */
  handleIptChange?: Function;
  /**
   * @description 输入框聚焦回调
   */
  handleIptFocus?: Function;
  /**
   * @description 输入框点击回调
   */
  handleClick?: Function;
  /**
   * @description 输入框失去焦点回调
   */
  handleIptBlur?: Function;
  /**
   * @description 输入框键盘监听
   */
  handleKeyDown?: Function;
  /**
   * @description 清空回调
   */
  clearCallback?: Function;
  /**
   * @description 默认内容
   * @default ''
   */
  defaultValue?: string;
}

export type { TextareaProps };
