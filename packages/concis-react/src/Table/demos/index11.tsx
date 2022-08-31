import React from 'react';
import { Table } from 'concis';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '200',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    sorter: true, // 默认排序，根据原生sort排序
    filter: true,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    sorter: [
      // 自定义排序规则，根据地址长度排序
      (a: any, b: any) => a.address.length - b.address.length,
      (a: any, b: any) => b.address.length - a.address.length,
    ],
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: [
      // 自定义排序规则，根据邮箱前缀排序
      (a: any, b: any) => a.email.split('@')[0].length - b.email.split('@')[0].length,
      (a: any, b: any) => b.email.split('@')[0].length - a.email.split('@')[0].length,
    ],
    filter: true,
  },
];

const defaultData = [
  {
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London11111111',
    email: 'jane.doe@example.com',
  },
  {
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London11',
    email: 'alisa.ross@example.com',
  },
  {
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London111111111111',
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
  return <Table titleParams={columns} tableData={defaultData} avableSort filter />;
}
