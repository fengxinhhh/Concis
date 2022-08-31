import React, { useState } from 'react';
import { Drawer, Button, Space } from 'concis';

export default function index1() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeAsync = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible2(false);
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Space>
        <Button handleClick={() => setVisible1(true)}>打开禁用按钮Drawer</Button>
        <Button handleClick={() => setVisible2(true)}>打开自定义页脚Drawer</Button>
        <Button handleClick={() => setVisible3(true)}>打开无页脚Drawer</Button>
      </Space>
      <Drawer
        title="Drawer Title"
        visible={visible1}
        width="400px"
        onCancel={() => setVisible1(false)}
        onOk={() => setVisible1(false)}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
        <p>This is a Drawer view text.</p>
        <p>This is a Drawer view text.</p>
        <p>This is a Drawer view text.</p>
      </Drawer>
      <Drawer
        title="Drawer Title"
        visible={visible2}
        width="400px"
        onCancel={() => setVisible2(false)}
        footer={
          <Space>
            <Button type="text" handleClick={() => setVisible2(false)}>
              Return
            </Button>
            <Button type="text" handleClick={closeAsync} loading={loading}>
              Async Return
            </Button>
            <Button type="primary" handleClick={() => setVisible2(false)}>
              Enter
            </Button>
          </Space>
        }
      >
        <p>This is a Drawer view text.</p>
        <p>This is a Drawer view text.</p>
        <p>This is a Drawer view text.</p>
      </Drawer>
      <Drawer
        title="Drawer Title"
        visible={visible3}
        onCancel={() => setVisible3(false)}
        onOk={() => setVisible3(false)}
        footer={<></>}
      >
        <p>This is a Drawer view text.</p>
        <p>This is a Drawer view text.</p>
        <p>This is a Drawer view text.</p>
      </Drawer>
    </div>
  );
}
