import React from 'react';
import Tabs from '..';

const TabPane = Tabs.TabPane;

export default function index1() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };
  return (
    <div>
      <Tabs defaultActiveTab="tab1" tabPosition="left">
        <TabPane key="tab1" title="Tab 1">
          <div>
            <Tabs defaultActiveTab="tab1">
              <TabPane key="tab1" title="Tab 1">
                <div style={{ ...style, padding: '100px' }}>
                  Hello Concis!This is thie content of Tab Panel 1
                </div>
              </TabPane>
              <TabPane key="tab2" title="Tab 2">
                <div style={{ ...style, padding: '100px' }}>
                  Hello Concis!This is thie content of Tab Panel 2
                </div>
              </TabPane>
              <TabPane key="tab3" title="Tab 3">
                <div style={{ ...style, padding: '100px' }}>
                  Hello Concis!This is thie content of Tab Panel 3
                </div>
              </TabPane>
            </Tabs>
          </div>
        </TabPane>
        <TabPane key="tab2" title="Tab 2">
          <div style={style}>Hello Concis!This is thie content of Tab Panel 2</div>
        </TabPane>
        <TabPane key="tab3" title="Tab 3">
          <div style={style}>Hello Concis!This is thie content of Tab Panel 3</div>
        </TabPane>
      </Tabs>
    </div>
  );
}
