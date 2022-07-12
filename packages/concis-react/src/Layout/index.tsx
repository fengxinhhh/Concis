import React, { useMemo, memo, FC } from 'react';
import './index.module.less';

interface layoutProps {
  children?: any;
  /**
   * @description 自定义样式
   * @default {}
   */
  extraStyle?: Object;
  /**
   * @description Slider/Content横向栅格比例
   * @default Slider-3,Content-7
   */
  row?: Number;
}

const Layout: FC<layoutProps> = (props) => {
  const { children, extraStyle } = props;

  const propsStyles = useMemo(() => {
    if (extraStyle) {
      return extraStyle;
    }
    return {};
  }, [extraStyle]);

  return (
    <div className="layout" style={propsStyles}>
      {children}
    </div>
  );
};
export default memo(Layout);
