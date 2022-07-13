import React, { createContext, FC, memo, useContext } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { groupProps } from './interface';
import './styles/group.module.less';

export const ctx = createContext<any>({} as any); //顶层通信装置
const AvatarGroup: FC<groupProps> = (props) => {
  const { children, className } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-avatar-group');

  const groupProps = props;
  return (
    <ctx.Provider value={groupProps}>
      <div className={classNames}>{children}</div>
    </ctx.Provider>
  );
};

export default memo(AvatarGroup);
