import React, { useMemo, useContext, CSSProperties } from 'react';
import { ButtonProps, ButtonGroupProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import Group from './group';
import './index.module.less';

const Button = (props: ButtonProps) => {
  const {
    type,
    className,
    width = '100%',
    height,
    disabled,
    circle,
    dashed,
    loading,
    icon,
    handleClick,
    children,
    style = {},
  } = props;

  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, darkTheme ? 'concis-dark-button' : 'concis-button');

  const buttonStyle = useMemo(() => {
    if (!type && type !== 'danger' && type !== 'warning' && type !== 'info' && type !== 'text') {
      return `concis-button-primary ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}`;
    }
    return `concis-button-${type} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}` as any;
  }, [type, loading, disabled]);
  const buttonSize = useMemo(() => {
    let size: CSSProperties = {
      width: '100%',
      height: '40px',
      ...style,
    };
    if (width) {
      size.width = `${width}px`;
    }
    if (height) {
      size.height = `${height}px`;
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
  }, [width, height, circle, dashed, globalColor]);
  const clickButton: React.MouseEventHandler<HTMLElement> = (event: any) => {
    handleClick && handleClick(event);
  };

  return (
    <div
      className={classNames}
      style={{ '--loading-icon-color': type === 'text' ? '#000000' : '#ffffff' } as any}
    >
      <button
        className={buttonStyle}
        style={
          {
            width: `${width}px`,
            height: `${height}px`,
            ...buttonSize,
            '--isDisabled': disabled ? 0.5 : 1,
          } as any
        }
        disabled={!!disabled}
        onClick={clickButton}
      >
        {loading && <div className="concis-button-loading" />}
        {icon && (
          <div
            className="button-icon"
            style={{ '--right-transform': children ? '10px' : '0' } as any}
          >
            {icon}
          </div>
        )}
        {children}
      </button>
    </div>
  );
};

const GroupComponent = React.forwardRef<unknown, ButtonGroupProps>(Group);
GroupComponent.displayName = 'ButtonGroup';
Button.Group = GroupComponent;

export default Button;
