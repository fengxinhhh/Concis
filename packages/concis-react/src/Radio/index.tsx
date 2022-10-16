import React, { CSSProperties, ReactNode, forwardRef } from 'react';

interface RadioProps {
  children: ReactNode;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 默认选中索引
   * @default 0
   */
  value?: Number;
  /**
   * @description 禁用
   * @default 0
   */
  disabled?: Boolean;
  /**
   * @description 支持手动扩展
   * @default false
   */
  canAddOption?: Boolean;
  /**
   * @description 扩展按钮文案
   * @default 'More...'
   */
  addOptionText?: Boolean;
  /**
   * @description 方形样式
   * @default false
   */
  boxStyle?: Boolean;
  /**
   * @description 选项改变回调函数
   */
  onChange?: Function;
}
const Radio = (props, ref) => {
  const { children, className, style } = props;

  return (
    <div className={className} style={style} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef<unknown, RadioProps>(Radio);
