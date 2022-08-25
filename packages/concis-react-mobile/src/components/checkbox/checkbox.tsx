import React, { ReactNode } from 'react';

import { useControllableValue } from 'ahooks';

import { CheckOutlined } from '@ant-design/icons';

import { useRef } from 'react';
import { ConfigProps, useConfig } from '../config-provider';

import { useGroupContext } from './group-context';

import { CustomIcon, CustomIconType } from '../radio/custom-icon';

import { getClassNames } from '../../utils/class-names';

export type CheckboxValue = number | string;

export type CheckboxProps = {
  children?: ReactNode;
  /**
   * @description input 元素的 id，常用来配合 label 使用
   */
  id?: string;
  /**
   * @description 勾选图标大小
   * @default middle
   */
  size?: ConfigProps['componentSize'];
  /**
   * @description 指定当前是否选中
   * @default false
   */
  checked?: boolean;
  /**
   * @description 	将宽度调整为其父宽度的选项
   * @default false
   */
  block?: boolean;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 设置勾选图标图标组件
   */
  icon?: CustomIconType;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 携带的标识值，用于 Group 模式
   */
  value?: CheckboxValue;
  /**
   * @description 按钮点击回调事件
   */
  onChange?: (checked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { value, icon, className = '', children } = props;

  const inputRef = useRef(null);

  const { prefixCls, componentSize } = useConfig();

  const groupContext = useGroupContext();

  let [checked, setChecked] = useControllableValue(props, {
    defaultValue: false,
    valuePropName: groupContext ? 'value' : 'checked',
  });

  const classPrefix = `${prefixCls}-checkbox`;

  const size = props.size || componentSize;

  let block = props.block || false;

  let disabled = props.disabled || false;

  if (groupContext && value !== undefined) {
    disabled = disabled || groupContext.disabled;

    checked = groupContext.value.includes(value);

    block = groupContext.block;

    setChecked = (innerChecked: boolean) => {
      if (innerChecked) {
        groupContext.onSelect(value);
      } else {
        groupContext.onUnSelect(value);
      }

      props.onChange?.(innerChecked);
    };
  }

  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const latestChecked = (e.target as HTMLInputElement).checked;
    if (latestChecked === checked) return;
    setChecked(latestChecked);
  };

  const classNames = getClassNames({
    [classPrefix]: true,
    [`${classPrefix}-${size}`]: !!size,
    [`${classPrefix}-checked`]: checked,
    [`${classPrefix}-disabled`]: disabled,
    [`${classPrefix}-block`]: block,
    [className]: !!className,
  });

  return (
    <label className={classNames}>
      <input
        ref={inputRef}
        id={props.id}
        type="checkbox"
        hidden
        checked={checked}
        disabled={disabled}
        onClick={onClick}
        onChange={() => {}}
      />
      {icon ? (
        <CustomIcon classPrefix={classPrefix} icon={icon} checked={checked} />
      ) : (
        <div className={`${classPrefix}-icon`}>{checked ? <CheckOutlined /> : null}</div>
      )}
      <div className={`${classPrefix}-content`}>{children}</div>
    </label>
  );
};

export default Checkbox;
