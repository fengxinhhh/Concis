import React from 'react';
import { Table } from 'concis';

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
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const defaultData = [
  {
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
  },
  {
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  },
  {
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
  {
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com',
  },
  {
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
  },
];

export default function MenuDemos1() {
  return (
    <>
      <Table
        titleParams={columns}
        tableData={defaultData}
        radio
        radioSelectCallback={(a) => console.log(a)}
      />
    </>
  );
}
