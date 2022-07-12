import React, { FC, memo, useMemo } from 'react';
import './index.module.less';

interface HeaderProps {
  extraStyle?: Object;
  children?: Element | undefined | String | any;
}
const Header: FC<HeaderProps> = (props) => {
  const { children, extraStyle } = props;

  const propsStyle = useMemo(() => {
    if (extraStyle) {
      return extraStyle;
    }
    return {};
  }, [extraStyle]);

  return (
    <div className="header" style={propsStyle}>
      {children}
    </div>
  );
};
export default memo(Header);
