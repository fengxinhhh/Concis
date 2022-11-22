import React, { useState } from 'react';
import { List } from 'concis';
import { ListDemoStyle } from './demoStyle';
import './demoStyle.tsx';

export default function listDemo1() {
  const [listSize, setListSize] = useState('default');
  const dataSource = [
    'Beijing Bytedance Technology Co., Ltd.',
    'Bytedance Technology Co., Ltd.',
    'Beijing Toutiao Technology Co., Ltd.',
    'Beijing Volcengine Technology Co., Ltd.',
    'China Beijing Bytedance Technology Co., Ltd.',
  ];

  return (
    <ListDemoStyle>
      <span
        className={listSize === 'small' ? 'active-size-bar' : 'size-change-bar'}
        onClick={() => setListSize('small')}
      >
        small
      </span>
      <span
        className={listSize === 'default' ? 'active-size-bar' : 'size-change-bar'}
        onClick={() => setListSize('default')}
      >
        default
      </span>
      <span
        className={listSize === 'large' ? 'active-size-bar' : 'size-change-bar'}
        onClick={() => setListSize('large')}
      >
        large
      </span>
      <List
        style={{ fontSize: '16px', width: '600px', marginTop: '30px' }}
        header="List title"
        size={listSize}
        dataSource={dataSource}
        render={(item: string) => {
          return <List.Item style={{ fontSize: '14px' }}>{item}</List.Item>;
        }}
      />
    </ListDemoStyle>
  );
}
