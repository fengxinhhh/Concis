import React, { useContext } from 'react';
import { ButtonGroupProps } from './interface';
import cs from '../common_utils/classNames';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import { globalCtx } from '../GlobalConfig';

export default function Group(props: ButtonGroupProps) {
  const { children, style, className } = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, darkTheme ? 'concis-dark-button-group' : 'concis-button-group');


  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  )
}
