import React from 'react';
import { Tabs, Button } from 'concis';

const TabPane = Tabs.TabPane;

export default function index1() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '80px 0',
  };
  return (
    <div>
      <Tabs
        defaultActiveTab="1"
        extra={
          <Button type="primary" height={28}>
            Action
          </Button>
        }
      >
        <TabPane key="1" title="Tab 1">
          <div style={style}>Hello Concis!This is thie content of Tab Panel 1</div>
        </TabPane>
        <TabPane key="2" title="Tab 2">
          <div style={style}>Hello Concis!This is thie content of Tab Panel 2</div>
        </TabPane>
        <TabPane key="3" title="Tab 3">
          <div style={style}>Hello Concis!This is thie content of Tab Panel 3</div>
        </TabPane>
      </Tabs>
    </div>
  );
}
