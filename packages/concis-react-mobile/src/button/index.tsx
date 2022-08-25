import React, {
  useMemo,
  useContext,
  useImperativeHandle,
  useRef,
  forwardRef,
  ReactNode,
} from 'react';

import './index.module.less';

import { LoadingOutlined } from '@ant-design/icons';

import { useConfig, ConfigProps } from '../config-provider';

import { getClassNames } from '../utils/class-names';

type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; // 原生button接口

export type ButtonProps = {
  children?: ReactNode;
  /**
   * @description 按钮主题
   * @default default
   */
  type?: 'primary' | 'danger' | 'warning' | 'text' | 'default';
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
   * @description 	幽灵属性，使按钮背景透明
   * @default false
   */
  ghost?: boolean;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: Boolean;
  /**
   * @description 	设置按钮形状
   * @default default
   */
  shape?: 'default' | 'round' | 'circle';
  /**
   * @description 按钮边框为虚线
   * @default false
   */
  dashed?: Boolean;
  /**
   * @description 	设置危险按钮
   * @default false
   */
  danger?: boolean;
  /**
   * @description 加载状态
   * @default false
   */
  loading?: Boolean;
  /**
   * @description 设置按钮的图标组件
   */
  icon?: React.ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: Object;
  /**
   * @description 按钮点击回调事件
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & NativeButtonProps;

export type ButtonRef = {
  nativeElement: HTMLButtonElement | null;
};

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    size,
    type = 'default',
    shape = 'default',
    block = false,
    ghost = false,
    dashed = false,
    danger = false,
    disabled,
    loading,
    icon,
    className = '',
    style,
    onClick,
    children,
    ...restProps
  } = props;

  const nativeButtonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current;
    },
  }));

  const { prefixCls, componentSize } = useConfig();

  const btnClassName = `${prefixCls}-btn`;

  const classNames = getClassNames({
    [btnClassName]: true,
    [`${btnClassName}-${size || componentSize}`]: true,
    [`${btnClassName}-${type}`]: true,
    [`${btnClassName}-block`]: block,
    [`${btnClassName}-ghost`]: ghost,
    [`${btnClassName}-dashed`]: dashed,
    [`${btnClassName}-dangerous`]: danger,
    [`${btnClassName}-loading`]: loading,
    [`${btnClassName}-disabled`]: disabled,
    [`${btnClassName}-shape-${shape}`]: true,
    [className]: !!className,
  });

  return (
    <button
      ref={nativeButtonRef}
      className={classNames}
      disabled={!!disabled}
      style={style}
      onClick={onClick}
      {...restProps}
    >
      {loading ? <LoadingOutlined className={`${btnClassName}-loading-icon`} /> : icon}

      {children}
    </button>
  );
});

export default Button;
