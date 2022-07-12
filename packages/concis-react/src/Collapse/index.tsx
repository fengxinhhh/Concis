import React, { FC, memo, useState, createContext } from 'react';
import { CollapseProps } from './interfase';
import './style/index.module.less';

export const ctx = createContext<any>({} as any); //顶层通信装置

const Collapse: FC<CollapseProps> = (props) => {
  const {
    children,
    defaultActive,
    accordion,
    noBorder,
    headerAlign = 'left',
    lazyLoad = false,
    toggleCallback,
  } = props;
  const [activeKeyList, setActiveKeyList] = useState<Array<number | string>>(defaultActive || []); //父组件管理选中列表

  const providerList = {
    //父组件状态管理store
    activeKeyList,
    setActiveKeyList,
    accordion,
    headerAlign,
    lazyLoad,
    toggleCallback,
  };

  return (
    <ctx.Provider value={providerList}>
      <div
        className="collapse-box"
        style={noBorder ? {} : { border: '1px solid rgba(229, 230, 235, 1)' }}
      >
        {children}
      </div>
    </ctx.Provider>
  );
};

export default memo(Collapse);
