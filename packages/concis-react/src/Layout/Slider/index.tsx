import React, { useMemo, useContext, CSSProperties, forwardRef } from 'react';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';
import './index.module.less';

interface SliderProps {
  className?: string;
  row?: Number;
  extraStyle?: CSSProperties;
  children?: Element | undefined | String | any;
}
const Slider = (props, ref) => {
  const { className, row, extraStyle } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-slider');

  const sliderRow = useMemo(() => {
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
    <div className={classNames} style={{ ...sliderRow, ...propsStyle }} ref={ref}>
      {props.children}
    </div>
  );
};
export default forwardRef<unknown, SliderProps>(Slider);
