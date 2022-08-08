import React, { useState } from 'react';
import Tabs from '..';

const TabPane = Tabs.TabPane;

type tabListType = {
  key: string;
  title: string;
  content: string;
}
export default function index1() {
  const [tabList, setTabList] = useState<tabListType[]>([
    {
      key: '1',
      title: 'Tab 1',
      content: 'Hello Concis!This is thie content of Tab Panel 1'
    },
    {
      key: '2',
      title: 'Tab 2',
      content: 'Hello Concis!This is thie content of Tab Panel 2'
    },
    {
      key: '3',
      title: 'Tab 3',
      content: 'Hello Concis!This is thie content of Tab Panel 3'
    }
  ]);

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '80px 0'
  }
  const add = () => {
    setTabList((old: tabListType[]) => {
      return [...old, {
        key: `key-${old.length + 1}`,
        title: `New Tab ${old.length + 1}`,
        content: `Hello Concis!This is thie content of Tab Panel ${old.length + 1}`
      }]
    })
  }
  const del = (key: string) => {
    setTabList((old: tabListType[]) => {
      return old.filter(t => t.key !== key);
    })
  }

  return (
    <div>
      <Tabs defaultActiveTab="1" type="card" tabPosition='top' editable onAddTab={add} onDeleteTab={del}>
        {
          tabList.map(item => {
            return (
              <TabPane key={item.key} title={item.title}>
                <div style={style}>{item.content}</div>
              </TabPane>
            )
          })
        }
      </Tabs>
    </div>
  )
}
