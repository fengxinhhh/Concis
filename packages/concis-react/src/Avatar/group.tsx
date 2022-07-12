import React, { createContext, FC, memo } from 'react';
import { groupProps } from './interface';
import './styles/group.module.less';

export const ctx = createContext<any>({} as any); //顶层通信装置
const AvatarGroup: FC<groupProps> = (props) => {
  const { children, size, groupStyle = {} } = props;

  const groupProps = props;
  return (
    <ctx.Provider value={groupProps}>
      <div className="avatar-group">{children}</div>
    </ctx.Provider>
  );
};

export default memo(AvatarGroup);
