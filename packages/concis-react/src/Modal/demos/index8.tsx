import React, { useState } from 'react';
import Modal from '..';
import Button from '../../Button';
import Table from '../../Table';
import Steps from '../../Steps';
import Step from '../../Steps/Step';

export default function index1() {
  const [visible, setVisible] = useState(false);

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

  return (
    <div>
      <Button handleClick={() => setVisible(true)}>Open Modal</Button>
      <Modal
        title="Modal Title"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width="620px"
      >
        <div>
          <>
            <Steps current={2}>
              <Step title="Waiting" />
              <Step title="In Process" />
              <Step title="Finished" />
            </Steps>
            <p style={{ lineHeight: '20px' }}>
              You can select multiple plugins for the current project so that our app will verify
              that the plugins are installed and enabled.
            </p>
            <Table titleParams={columns} tableData={defaultData} checked />
          </>
        </div>
      </Modal>
    </div>
  );
}
