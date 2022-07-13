import React, { FC, memo, useMemo, useContext } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../../../../scripts/common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { listItemProps } from './interface';
import { ctx } from './index';
import './style/item.module.less';

const Item: FC<listItemProps> = (props) => {
  const { children, className, style = {} } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-list-item');
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
    <div className={classNames} style={listItemStyle}>
      {children}
    </div>
  );
};

export default memo(Item);
