import React, { useContext, forwardRef } from 'react';
import { ButtonGroupProps } from './interface';
import cs from '../common_utils/classNames';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import { globalCtx } from '../GlobalConfig';

function Group(props: ButtonGroupProps, ref) {
  const { children, style, className } = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(
    prefixCls,
    className,
    darkTheme ? 'concis-dark-button-group' : 'concis-button-group'
  );

  return (
    <div className={classNames} style={style} ref={ref}>
      {children}
    </div>
  );
}

const groupComponent = forwardRef<unknown, ButtonGroupProps>(Group);

groupComponent.displayName = 'ButtonGroup';

export default groupComponent;
