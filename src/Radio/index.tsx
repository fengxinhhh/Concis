import React, { FC, memo } from 'react';

interface RadioProps {
  children: any;
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
   * @description 方形样式
   * @default false
   */
  boxStyle?: Boolean;
  /**
   * @description 选项改变回调函数
   */
  onChange?: Function;
}
const Radio: FC<RadioProps> = (props) => {
  const { children } = props;
  return <div style={{ display: 'none' }}>{children}</div>;
};

export default memo(Radio);
