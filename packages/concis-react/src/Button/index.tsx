import React, { useMemo, useContext, forwardRef } from 'react';
import { ButtonStyle } from './style';
import { ButtonProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import Group from './group';

const Button = (props, ref) => {
  const { type, className, disabled, loading, icon, handleClick, children, style = {} } = props;

  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, darkTheme ? 'concis-dark-button' : 'concis-button');

  const buttonClassName = useMemo(() => {
    let isPrimary = false;
    if (!type && type !== 'danger' && type !== 'warning' && type !== 'info' && type !== 'text') {
      isPrimary = true;
    }
    return cs(
      `${isPrimary ? 'concis-button-primary' : `concis-button-${type}`}`,
      disabled ? 'disabled' : '',
      loading ? 'loading' : ''
    );
  }, [type, loading, disabled]);

  const clickButton: React.MouseEventHandler<HTMLElement> = (event: any) => {
    handleClick && handleClick(event);
  };

  return (
    <ButtonStyle props={props} globalColor={globalColor}>
      <div className={classNames} ref={ref} style={style}>
        <button className={buttonClassName} disabled={!!disabled} onClick={clickButton}>
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
    </ButtonStyle>
  );
};

const forwardRefButton = forwardRef<unknown, ButtonProps>(Button);

const ButtonComponent = forwardRefButton as typeof forwardRefButton & {
  Group: typeof Group;
};

ButtonComponent.Group = Group;

ButtonComponent.displayName = 'Button';

export default ButtonComponent;
