import React, { useState, createContext, useContext, forwardRef } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { CollapseProps } from './interfase';
import './style/index.module.less';

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
    <ctx.Provider value={providerList}>
      <div
        className={classNames}
        style={
          noBorder
            ? { ...style }
            : {
                ...style,
                border:
                  getSiteTheme() === ('dark' || 'auto') || darkTheme
                    ? '1px solid#484849'
                    : '1px solid rgba(229, 230,235,1)',
              }
        }
        ref={ref}
      >
        {children}
      </div>
    </ctx.Provider>
  );
};

const collapseComponent = forwardRef<unknown, CollapseProps>(Collapse);

collapseComponent.displayName = 'Collapse';

export default collapseComponent;
