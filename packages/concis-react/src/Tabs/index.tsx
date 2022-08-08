import React, { ReactNode, useState, useMemo, createContext, useContext } from 'react';
import TabPane from './tab-pane';
import TabHeader from './tab-header';
import TabContent from './tab-content';
import { TabsProps } from './interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import './styles/index.less';

function getPaneChild(props: TabsProps) {
  const { children } = props;

  const paneChildren: ReactNode[] = [];

  React.Children.forEach(children, (child: ReactNode) => {
    paneChildren.push(child);
  })
  return paneChildren as ReactNode[];
}

export const ctx = createContext<TabsProps>({ defaultActiveTab: '' }); //顶层通信装置

function Tabs(props: TabsProps) {
  const {
    defaultActiveTab,
    className,
    style,
    tabPosition = 'top',
    type = 'line',
    size = 'default',
    extra,
    editable,
    onAddTab,
    onDeleteTab,
    onChange
  } = props;

  const paneChildren = getPaneChild(props);

  const [activeKey, setActiveKey] = useState<string>(defaultActiveTab);

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(prefixCls, className, darkTheme ? 'concis-dark-tabs' : 'concis-tabs');

  //header改变回调
  const changeHeaderActiveCallback = (active: string) => {
    setActiveKey(active);
    onChange && onChange(active);
  }
  const addHeaderCallback = () => {
    onAddTab && onAddTab();
  }
  const delHeaderCallback = (key: string) => {
    //自动更新content
    const length = paneChildren.length;
    if (key === activeKey && length > 1) {
      setActiveKey((paneChildren[length - 2] as any).key);
    }
    onDeleteTab && onDeleteTab(key)
  }
  //context
  const tabsContext = {
    paneChildren,
    defaultActiveTab: activeKey,
    type,
    extra,
    tabPosition,
    changeHeaderActiveCallback,
    editable,
    addHeaderCallback,
    delHeaderCallback
  }
  const domLayout = useMemo(() => {
    //tabs布局
    if (tabPosition === 'bottom' || tabPosition === 'right') {
      return (
        <>
          <div className="concis-tabs-content">
            <TabContent paneChildren={paneChildren} defaultActiveTab={activeKey} />
          </div>
          <div className={cs(tabPosition === 'bottom' ? `concis-tabs-bottom-header-${type}` : `concis-tabs-header-position-vertical-${type}`, `concis-tabs-header-${size}`)}>
            <TabHeader />
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={cs(tabPosition === 'top' ? `concis-tabs-header-${type}` : `concis-tabs-header-position-vertical-${type}`, `concis-tabs-header-${size}`)}>
            <TabHeader />
          </div>
          <div className="concis-tabs-content">
            <TabContent paneChildren={paneChildren} defaultActiveTab={activeKey} />
          </div>
        </>
      )
    }
  }, [tabPosition, activeKey, type, size])

  return (
    <ctx.Provider value={tabsContext}>
      <div
        className={classNames}
        style={{ ...style, '--align-way': tabPosition === 'top' || tabPosition === 'bottom' ? 'block' : 'flex' } as any}
      >
        {domLayout}
      </div>
    </ctx.Provider>
  )
}

Tabs.TabPane = TabPane;

export default Tabs;