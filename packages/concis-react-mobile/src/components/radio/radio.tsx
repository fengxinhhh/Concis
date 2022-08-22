import React, {
  useMemo,
  useContext,
  useImperativeHandle,
  useRef,
  forwardRef,
  ReactNode,
  useState,
} from 'react';

import './index.module.less';

import { useControllableValue } from 'ahooks';

import { CheckOutlined } from '@ant-design/icons';

import { useConfig, ConfigProps } from '../config-provider';

import { useGroupContext } from './group-context';

import { getClassNames } from '../../utils/classNames';

type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; // 原生button接口

export type RadioValue = number | string;

export type RadioProps = {
  children?: ReactNode;
  value: RadioValue;
  checked?: boolean;
  /**
   * @description 按钮大小
   * @default middle
   */
  size?: ConfigProps['componentSize'];
  /**
   * @description 	将按钮宽度调整为其父宽度的选项
   * @default false
   */
  block?: boolean;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: Boolean;
  /**
   * @description 设置按钮的图标组件
   */
  icon?: React.ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 按钮点击回调事件
   */
  onChange?: (checked: boolean) => void;
} & NativeButtonProps;

export type ButtonRef = {
  nativeElement: HTMLButtonElement | null;
};

export const Radio: React.FC<RadioProps> = (props) => {
  const { size, block = false, icon, className = '', children, ...restProps } = props;

  const { prefixCls, componentSize } = useConfig();

  const groupContext = useGroupContext();

  const classPrefix = `${prefixCls}-radio`;

  let [checked, setChecked] = useControllableValue(props);

  let disabled = props.disabled;

  if (groupContext && props.value !== undefined) {
    disabled = disabled || groupContext.disabled;

    checked = groupContext.value === props.value;

    setChecked = (innerChecked: boolean) => {
      if (innerChecked) {
        groupContext.onSelect(props.value);
      } else {
        groupContext.onUnSelect(props.value);
      }

      props.onChange?.(innerChecked);
    };
  }

  const classNames = getClassNames({
    [classPrefix]: true,
    [`${classPrefix}-checked`]: checked,
    [`${classPrefix}-disabled`]: disabled,
    [className]: !!className,
  });

  return (
    <label className={classNames} {...restProps}>
      <input type="radio" hidden checked={checked} disabled={disabled} onChange={setChecked} />
      <div className={`${classPrefix}-icon`}>{icon || <CheckOutlined />}</div>
      <div className={`${classPrefix}-content`}>{children}</div>
    </label>
  );
};

export default Radio;
