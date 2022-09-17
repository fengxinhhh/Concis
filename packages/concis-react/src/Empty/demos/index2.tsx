import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Empty } from 'concis';

export default function index1() {
  return (
    <Empty icon={<ExclamationCircleFilled style={{ fontSize: '48px', color: '#f2994b' }} />} />
  );
}
