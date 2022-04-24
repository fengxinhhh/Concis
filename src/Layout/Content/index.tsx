import React, { FC, useMemo, memo } from 'react';
import './index.module.less';

interface ContentProps {
  row?: Number;
  extraStyle?: Object;
  children?: Element | undefined | String | any;
}
const Content: FC<ContentProps> = (props) => {
  const { children, row, extraStyle } = props;
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
    <div className="content" style={{ ...contentRow, ...propsStyle }}>
      {children}
    </div>
  );
};
export default memo(Content);
