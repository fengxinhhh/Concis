import React, { FC, memo, useMemo, useContext } from 'react';
import { listItemProps } from './interface';
import { ctx } from './index';
import './style/item.module.less';

const Item: FC<listItemProps> = (props) => {
  const { children, style = {} } = props;
  const { size } = useContext(ctx);

  const listItemStyle = useMemo(() => {
    const defaultStyles = style;
    switch (size) {
      case 'default':
        defaultStyles.padding = '13px 20px';
        break;
      case 'small':
        defaultStyles.padding = '9px 20px';
        break;
      case 'large':
        defaultStyles.padding = '17px 20px';
        break;
    }
    return defaultStyles;
  }, [size]);
  return (
    <div className="list-item" style={listItemStyle}>
      {children}
    </div>
  );
};

export default memo(Item);
