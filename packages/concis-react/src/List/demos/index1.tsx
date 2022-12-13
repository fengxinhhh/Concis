import React from 'react';
import { List } from 'concis';
import { ListDemoStyle } from './demoStyle';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function listDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('List');

  const dataSource = [
    'Beijing Bytedance Technology Co., Ltd.',
    'Bytedance Technology Co., Ltd.',
    'Beijing Toutiao Technology Co., Ltd.',
    'Beijing Volcengine Technology Co., Ltd.',
    'China Beijing Bytedance Technology Co., Ltd.',
  ];

  return (
    <ListDemoStyle>
      <List
        style={{ fontSize: '16px', width: '600px' }}
        header="List title"
        size="default"
        dataSource={dataSource}
        render={(item: string) => {
          return (
            <List.Item style={{ fontSize: '14px' }} key={item}>
              <div className="list">{item}</div>
            </List.Item>
          );
        }}
      />
    </ListDemoStyle>
  );
}
