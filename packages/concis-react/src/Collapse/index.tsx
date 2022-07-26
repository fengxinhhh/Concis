import React, { FC, memo, useState, createContext, useContext } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { CollapseProps } from './interfase';
import './style/index.module.less';

export const ctx = createContext<any>({} as any); //顶层通信装置

const Collapse: FC<CollapseProps> = (props) => {
  const {
    children,
    className,
    defaultActive,
    accordion,
    noBorder,
    headerAlign = 'left',
    lazyLoad = false,
    toggleCallback,
  } = props;
  const [activeKeyList, setActiveKeyList] = useState<Array<number | string>>(defaultActive || []); //父组件管理选中列表

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}collapse-box`);
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
        className={classNames}
        style={noBorder ? {} : { border: '1px solid rgba(229, 230, 235, 1)' }}
      >
        {children}
      </div>
    </ctx.Provider>
  );
};

export default memo(Collapse);
