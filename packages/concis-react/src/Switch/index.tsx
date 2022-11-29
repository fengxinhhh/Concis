import React, { useState, useContext, useEffect, forwardRef } from 'react';
import { SwitchProps } from './interface';
import { SwitchStyle } from './style';
import Loading from '../Loading';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../common_utils/getRenderColor';

const Switch = (props, ref) => {
  const {
    disabled,
    className,
    style,
    defaultChecked = false,
    small,
    checkedChildren,
    unCheckedChildren,
    loading,
    handleChange,
  } = props;

  const [switchWidth, setSwitchWidth] = useState<number>(0);
  const [switchChildWidth, setSwitchChildWidth] = useState<number>(0);
  const [switchStatus, setSwitchStatus] = useState<boolean>(defaultChecked);

  const theme = getSiteTheme();
  const { globalColor, prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-switch');

  useEffect(() => {
    if (checkedChildren && unCheckedChildren && document.querySelector('.concis-switch-child')) {
      setSwitchChildWidth((document.querySelector('.concis-switch-child') as any).clientWidth);
      setSwitchWidth((document.querySelector('.concis-switch-child') as any).clientWidth + 30);
    } else {
      setSwitchWidth(small ? 28 : 40);
    }
  }, [
    document.querySelector('.concis-switch-child')?.clientWidth,
    checkedChildren,
    unCheckedChildren,
  ]);

  const toggleSwitch = () => {
    if (disabled || loading) return;
    setSwitchStatus(!switchStatus);
    handleChange && handleChange(!switchStatus);
  };

  return (
    <SwitchStyle
      switchStatus={switchStatus}
      disabled={disabled}
      loading={loading}
      switchWidth={switchWidth}
      small={small}
      globalColor={
        switchStatus
          ? getRenderColor(theme === ('auto' || 'dark'), globalColor)
          : 'rgba(201,205,212,1)'
      }
      checkedChildren={checkedChildren}
      switchChildWidth={switchChildWidth}
    >
      <div className={classNames} style={style} onClick={toggleSwitch} ref={ref}>
        <div className="concis-switch-dot">{loading && <Loading width="1em" height="1em" />}</div>
        {checkedChildren && unCheckedChildren && (
          <div className="concis-switch-child">
            {switchStatus ? checkedChildren : unCheckedChildren}
          </div>
        )}
      </div>
    </SwitchStyle>
  );
};

export default forwardRef<unknown, SwitchProps>(Switch);
