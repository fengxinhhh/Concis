import React, { useState, createContext, useContext, forwardRef } from 'react';
import { CollapseStyle } from './style';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { CollapseProps } from './interface';

export const ctx = createContext<any>({} as any); // 顶层通信装置

const Collapse = (props, ref) => {
  const {
    children,
    style,
    className,
    defaultActive,
    accordion,
    noBorder,
    headerAlign = 'left',
    lazyLoad = false,
    toggleCallback,
  } = props;
  const [activeKeyList, setActiveKeyList] = useState<Array<number | string>>(defaultActive || []); // 父组件管理选中列表

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}collapse-box`);
  const siteTheme = getSiteTheme();

  const providerList = {
    // 父组件状态管理store
    activeKeyList,
    setActiveKeyList,
    accordion,
    headerAlign,
    lazyLoad,
    toggleCallback,
  };

  return (
    <CollapseStyle
      isDark={siteTheme === 'dark' || siteTheme === 'auto' || darkTheme}
      noBorder={noBorder}
    >
      <ctx.Provider value={providerList}>
        <div className={classNames} style={style} ref={ref}>
          {children}
        </div>
      </ctx.Provider>
    </CollapseStyle>
  );
};

const collapseComponent = forwardRef<unknown, CollapseProps>(Collapse);

collapseComponent.displayName = 'Collapse';

export default collapseComponent;
