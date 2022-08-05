import React, { useState, useRef } from 'react';
import Modal from '..';
import Button from '../../Button';
import Loading from '../../Loading';
import Table from '../../Table';

export default function index1() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const timer = useRef<any>(null);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      // width: '200',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      // width: '300'
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const defaultData = [
    {
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
    },
    {
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
    },
    {
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
    },
    {
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
    },
    {
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
    },
  ];

  const open = () => {
    setLoading(true);
    setVisible(true);
    timer.current = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const close = () => {
    setVisible(false);
    timer.current = null;
    setTimeout(() => {
      setLoading(true);
    }, 200);
  };
  return (
    <div>
      <Button handleClick={open}>Open Modal</Button>
      <Modal title="Modal Title" visible={visible} onOk={close} onCancel={close} width={'620px'}>
        <div style={{ height: loading ? '300px' : '100%', position: 'relative' }}>
          {loading ? (
            <Loading loadingText="数据请求中..." />
          ) : (
            <>
              <p style={{ lineHeight: '20px' }}>
                You can select multiple plugins for the current project so that our app will verify
                that the plugins are installed and enabled.
              </p>
              <Table titleParams={columns} tableData={defaultData} checked />
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
