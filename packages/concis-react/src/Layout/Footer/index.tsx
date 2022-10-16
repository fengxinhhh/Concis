import React, { useMemo, useContext, CSSProperties, forwardRef } from 'react';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';
import './index.module.less';

interface FooterProps {
  className?: string;
  extraStyle?: CSSProperties;
  children?: Element | undefined | String | any;
}
const Footer = (props, ref) => {
  const { className, children, extraStyle } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-footer');

  const propsStyle = useMemo(() => {
    if (extraStyle) {
      return extraStyle;
    }
    return {};
  }, [extraStyle]);

  return (
    <div className={classNames} style={propsStyle} ref={ref}>
      {children}
    </div>
  );
};
export default forwardRef<unknown, FooterProps>(Footer);
