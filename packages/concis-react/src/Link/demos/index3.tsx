import React from 'react';
import { Link } from 'concis';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function LinkDemo1() {
  return (
    <div>
      <Link href="#" icon>
        Link
      </Link>
      <Link href="#" icon={<ArrowRightOutlined />} disabled style={{ marginLeft: 30 }}>
        Link
      </Link>
    </div>
  );
}
