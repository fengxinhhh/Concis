import React, { useMemo, useContext, CSSProperties, forwardRef } from 'react';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';
import './index.module.less';

interface ContentProps {
  className?: string;
  row?: Number;
  extraStyle?: CSSProperties;
  children?: Element | undefined | String | any;
}
const Content = (props, ref) => {
  const { children, className, row, extraStyle } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-layout-content');

  const contentRow = useMemo(() => {
    if (row) {
      return {
        width: `${row}0%`,
      };
    }
    return {};
  }, [row]);
  const propsStyle = useMemo(() => {
    if (extraStyle) {
      return extraStyle;
    }
    return {};
  }, [extraStyle]);

  return (
    <div className={classNames} style={{ ...contentRow, ...propsStyle }} ref={ref}>
      {children}
    </div>
  );
};
export default forwardRef<unknown, ContentProps>(Content);
