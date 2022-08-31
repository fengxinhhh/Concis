import React, { useState, useEffect } from 'react';
import { Skeleton, List, Avatar, Switch } from 'concis';

export default function index1() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(loading);
  }, [loading]);

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
    <>
      <Switch handleChange={() => setLoading(!loading)} />
      <div style={{ width: '800px' }}>
        <List
          style={{ fontSize: '16px', width: '600px' }}
          size="default"
          dataSource={dataSource}
          render={(item: any) => {
            return loading ? (
              <Skeleton loading={loading} title avatar row={2} width={['60%', 400]} />
            ) : (
              <List.Item style={{ fontSize: '14px' }}>
                <div className="list">
                  <Avatar shape="square" style={{ background: '#325DFF' }}>
                    A
                  </Avatar>
                  <div className="text">
                    <span className="title">{item.title}</span>
                    <span className="content">{item.content}</span>
                  </div>
                </div>
              </List.Item>
            );
          }}
        />
      </div>
    </>
  );
}
