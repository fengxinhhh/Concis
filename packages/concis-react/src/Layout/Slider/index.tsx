import React, { FC, useMemo, memo } from 'react';
import './index.module.less';

interface SliderProps {
  row?: Number;
  extraStyle?: Object;
  children?: Element | undefined | String | any;
}
const Slider: FC<SliderProps> = (props) => {
  const { row, extraStyle } = props;

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
    <div className="slider" style={{ ...sliderRow, ...propsStyle }}>
      {props.children}
    </div>
  );
};
export default memo(Slider);
