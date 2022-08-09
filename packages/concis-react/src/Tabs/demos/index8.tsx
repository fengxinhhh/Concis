import React, { useState } from 'react';
import Radio from '../../Radio';
import RadioGroup from '../../Radio/RadioGroup';
import Tabs from '..';

const TabPane = Tabs.TabPane;

export default function index1() {
  const [type, setType] = useState<'line' | 'text' | 'round' | 'card'>('line');
  const [size, setSize] = useState<'mini' | 'small' | 'default' | 'large'>('default');

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '100px 0',
  };
  return (
    <div>
      <RadioGroup
        value={0}
        onChange={(val: { children: 'line' | 'text' | 'round' | 'card' }) => setType(val.children)}
      >
        <Radio>line</Radio>
        <Radio>text</Radio>
        <Radio>round</Radio>
        <Radio>card</Radio>
      </RadioGroup>
      <RadioGroup
        value={2}
        onChange={(val: { children: 'mini' | 'small' | 'default' | 'large' }) =>
          setSize(val.children)
        }
        style={{ marginBottom: '100px' }}
      >
        <Radio>mini</Radio>
        <Radio>small</Radio>
        <Radio>default</Radio>
        <Radio>large</Radio>
      </RadioGroup>

      <Tabs defaultActiveTab="1" type={type} size={size}>
        <TabPane key="1" title="Tab 1">
          <div style={style}>Hello Concis!This is thie content of Tab Panel 1</div>
        </TabPane>
        <TabPane key="2" title="Tab 2" disabled>
          <div style={style}>Hello Concis!This is thie content of Tab Panel 2</div>
        </TabPane>
        <TabPane key="3" title="Tab 3">
          <div style={style}>Hello Concis!This is thie content of Tab Panel 3</div>
        </TabPane>
      </Tabs>
    </div>
  );
}
