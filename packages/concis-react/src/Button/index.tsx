import React, { useMemo, useContext, forwardRef, ReactNode } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

interface ButtonProps {
  //自定义button接口
  children?: ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 按钮主题
   * @default primary
   */
  type?: 'primary' | 'danger' | 'warning' | 'info' | 'text';
  /**
   * @description 宽度
   */
  width?: Number;
  /**
   * @description 高度
   */
  height?: Number;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: Boolean;
  /**
   * @description 字体按钮
   * @default false
   */
  circle?: Boolean;
  /**
   * @description 按钮边框为虚线
   * @default false
   */
  dashed?: Boolean;
  /**
   * @description 加载状态
   * @default false
   */
  loading?: Boolean;
  /**
   * @description 自定义样式
   */
  style?: Object;
  /**
   * @description 按钮点击回调事件
   */
  handleClick?: Function | undefined;
}
interface ButtonStyle<T> {
  //button样式接口
  width?: T;
  height?: T;
  borderRadius?: T;
  border?: T;
  cursor?: T;
  background?: T;
  color?: T;
}
type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; //原生button接口

const Button = (props: ButtonProps) => {
  const {
    type,
    className,
    width = '100%',
    height = '40',
    disabled,
    circle,
    dashed,
    loading,
    handleClick,
    children,
    style = {},
  } = props;

  const { globalColor, prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-button');

  const buttonStyle = useMemo(() => {
    if (!type && type !== 'danger' && type !== 'warning' && type !== 'info' && type !== 'text') {
      return 'concis-button-primary';
    }
    if (type === 'text' && disabled) {
      return 'concis-button-disabled';
    }
    return `concis-button-${type}` as any;
  }, [type]);
  const buttonSize = useMemo(() => {
    var size: ButtonStyle<string> = {
      ...style,
      width: '100%',
      height: '40px',
    };
    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    if (circle) {
      size = { ...size, borderRadius: '50%' };
    }
    if (dashed && type === 'text') {
      size = { ...size, border: '1px dashed #ccc' };
    }
    if (disabled) {
      if (type === 'text') {
        size = { ...size, color: '#000000' };
      }
      size = { ...size, cursor: 'not-allowed' };
    }
    if (globalColor) {
      size = { ...size, background: globalColor };
    }
    return size;
  }, [width, height, circle, dashed]);
  return (
    <div
      className={classNames}
      style={{ '--loading-icon-color': type === 'text' ? '#000000' : '#ffffff' } as any}
    >
      <button
        className={buttonStyle}
        style={
          {
            width: width + 'px',
            height: height + 'px',
            opacity: disabled ? '0.7' : '1',
            ...buttonSize,
            '--isDisabled': disabled ? 1 : 0.7,
          } as any
        }
        disabled={disabled ? true : false}
        onClick={handleClick as undefined}
      >
        {loading && <div className="concis-button-loading" />}
        {children}
      </button>
    </div>
  );
};

const ForwardRefButton = forwardRef<unknown, ButtonProps>(Button);

const ButtonComponent = ForwardRefButton as typeof ForwardRefButton;

ButtonComponent.displayName = 'Button';

export default ButtonComponent;
