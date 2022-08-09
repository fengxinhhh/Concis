import React, { useState } from 'react';
import Radio from '../../Radio';
import RadioGroup from '../../Radio/RadioGroup';
import Tabs from '..';

const TabPane = Tabs.TabPane;

export default function index1() {
  const [position, setPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('top');
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
        onChange={(val: { children: 'top' | 'bottom' | 'left' | 'right' }) =>
          setPosition(val.children)
        }
        style={{ marginBottom: '100px' }}
      >
        <Radio>top</Radio>
        <Radio>bottom</Radio>
        <Radio>left</Radio>
        <Radio>right</Radio>
      </RadioGroup>
      <Tabs defaultActiveTab="0" tabPosition={position}>
        {new Array(25).fill('').map((item, i) => {
          return (
            <TabPane key={String(i)} title={`Tab ${i + 1}`}>
              <div style={style}>Hello Concis!This is thie content of Tab Panel {i + 1}</div>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}
