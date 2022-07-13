import React, { FC, memo, useMemo, useContext } from 'react';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../../../../scripts/common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';
import './index.module.less';

interface HeaderProps {
  className?: string;
  extraStyle?: Object;
  children?: Element | undefined | String | any;
}
const Header: FC<HeaderProps> = (props) => {
  const { className, children, extraStyle } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-header');

  const propsStyle = useMemo(() => {
    if (extraStyle) {
      return extraStyle;
    }
    return {};
  }, [extraStyle]);

  return (
    <div className={classNames} style={propsStyle}>
      {children}
    </div>
  );
};
export default memo(Header);
