import React, { FC, useMemo, memo, useContext, CSSProperties } from 'react';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';
import './index.module.less';

interface FooterProps {
  className?: string;
  extraStyle?: CSSProperties;
  children?: Element | undefined | String | any;
}
const Footer: FC<FooterProps> = (props: FooterProps) => {
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
    <div className={classNames} style={propsStyle}>
      {children}
    </div>
  );
};
export default memo(Footer);
