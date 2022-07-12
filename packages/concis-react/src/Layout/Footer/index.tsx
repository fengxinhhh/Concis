import React, { FC, useMemo, memo } from 'react';
import './index.module.less';

interface FooterProps {
  extraStyle?: Object;
  children?: Element | undefined | String | any;
}
const Footer: FC<FooterProps> = (props) => {
  const { children, extraStyle } = props;

  const propsStyle = useMemo(() => {
    if (extraStyle) {
      return extraStyle;
    }
    return {};
  }, [extraStyle]);

  return (
    <div className="footer" style={propsStyle}>
      {children}
    </div>
  );
};
export default memo(Footer);
