import React, { ReactNode, useState, useMemo } from 'react';
import TabPane from './tab-pane';
import TabHeader from './tab-header';
import TabContent from './tab-content';
import { TabsProps } from './interface';
import './styles/index.less';

function getPaneChild(props: TabsProps) {
  const { children } = props;

  const paneChildren: ReactNode[] = [];

  React.Children.forEach(children, (child: ReactNode) => {
    paneChildren.push(child);
  })
  return paneChildren as ReactNode[];
}
function Tabs(props: TabsProps) {
  const { children, defaultActiveTab, tabPosition = 'top', type = 'line' } = props;

  const [activeKey, setActiveKey] = useState<string>(defaultActiveTab || "1");

  const paneChildren = getPaneChild(props);
  //header改变回调
  const changeHeaderActiveCallback = (active: string) => {
    setActiveKey(active)
  }
  const domLayout = useMemo(() => {
    //tabs布局
    if (tabPosition === 'bottom' || tabPosition === 'right') {
      return (
        <>
          <div className="concis-tabs-content">
            <TabContent paneChildren={paneChildren} defaultActiveTab={activeKey} />
          </div>
          <div className={tabPosition === 'bottom' ? `concis-tabs-bottom-header-${type}` : `concis-tabs-header-position-vertical-${type}`}>
            <TabHeader paneChildren={paneChildren} defaultActiveTab={activeKey} changeHeaderActiveCallback={changeHeaderActiveCallback} />
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={tabPosition === 'top' ? `concis-tabs-header-${type}` : `concis-tabs-header-position-vertical-${type}`}>
            <TabHeader paneChildren={paneChildren} defaultActiveTab={activeKey} changeHeaderActiveCallback={changeHeaderActiveCallback} />
          </div>
          <div className="concis-tabs-content">
            <TabContent paneChildren={paneChildren} defaultActiveTab={activeKey} />
          </div>
        </>
      )
    }
  }, [tabPosition, activeKey, type])

  return (
    <div className="concis-tabs" style={{ '--align-way': tabPosition === 'top' || tabPosition === 'bottom' ? 'block' : 'flex' } as any}>
      {domLayout}
    </div>
  )
}

Tabs.TabPane = TabPane;

export default Tabs;