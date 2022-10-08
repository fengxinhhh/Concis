import React, { useMemo, memo, FC, useContext, ReactNode, CSSProperties } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

interface layoutProps {
  children?: ReactNode;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   * @default {}
   */
  extraStyle?: CSSProperties;
}

const Layout: FC<layoutProps> = (props: layoutProps) => {
  const { children, className, extraStyle } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-layout');

  const propsStyles = useMemo(() => {
    if (extraStyle) {
      return extraStyle;
    }
    return {};
  }, [extraStyle]);

  return (
    <div className={classNames} style={propsStyles}>
      {children}
    </div>
  );
};
export default memo(Layout);
