import React from 'react';
import List from '..';
import Avatar from '../../Avatar/index';
import './demo.module.less';

export default function listDemo1() {
  const dataSource = [
    {
      title: 'Beijing Bytedance Technology Co., Ltd.',
      content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
    },
    {
      title: 'Bytedance Technology Co., Ltd.',
      content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
    },
    {
      title: 'Beijing Toutiao Technology Co., Ltd.',
      content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
    },
    {
      title: 'Beijing Volcengine Technology Co., Ltd.',
      content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
    },
    {
      title: 'China Beijing Bytedance Technology Co., Ltd.',
      content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
    },
  ];

  return (
    <List
      style={{ fontSize: '16px', width: '600px' }}
      header="List title"
      size="default"
      dataSource={dataSource}
      render={(item: any) => {
        return (
          <List.Item style={{ fontSize: '14px' }}>
            <div className="list">
              <Avatar shape="square">A</Avatar>
              <div className="text">
                <span className="title">{item.title}</span>
                <span className="content">{item.content}</span>
              </div>
            </div>
          </List.Item>
        );
      }}
    />
  );
}
