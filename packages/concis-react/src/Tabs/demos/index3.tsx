import React, { useState } from 'react';
import Radio from '../../Radio';
import RadioGroup from '../../Radio/RadioGroup';
import Tabs from '..';

const TabPane = Tabs.TabPane;

export default function index1() {
  const [type, setType] = useState<'line' | 'text' | 'round'>('line');
  const [position, setPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('top');

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    margin: position === 'top' || position === 'bottom' ? '80px 0' : '0'
  }
  return (
    <div style={{ height: '300px' }}>
      <RadioGroup value={0} onChange={(val: { children: 'line' | 'text' | 'round' }) => setType(val.children)} >
        <Radio>line</Radio>
        <Radio>text</Radio>
        <Radio>round</Radio>
      </RadioGroup>
      <RadioGroup value={0} onChange={(val: { children: 'top' | 'bottom' | 'left' | 'right' }) => setPosition(val.children)} style={{ marginBottom: '100px' }}>
        <Radio>top</Radio>
        <Radio>bottom</Radio>
        <Radio>left</Radio>
        <Radio>right</Radio>
      </RadioGroup>

      <Tabs defaultActiveTab="1" type={type} tabPosition={position}>
        <TabPane key='1' title='Tab 1'>
          <div style={style}>Hello Concis!This is thie content of Tab Panel 1</div>
        </TabPane>
        <TabPane key='2' title='Tab 2' disabled>
          <div style={style}>Hello Concis!This is thie content of Tab Panel 2</div>
        </TabPane>
        <TabPane key='3' title='Tab 3'>
          <div style={style}>Hello Concis!This is thie content of Tab Panel 3</div>
        </TabPane>
      </Tabs>
    </div>
  )
}
