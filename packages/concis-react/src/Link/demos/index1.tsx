import React from 'react';
import { Link } from 'concis';

export default function LinkDemo1() {
  return (
    <div>
      <Link href="#">Link</Link>
      <Link href="#" disabled style={{ marginLeft: 30 }}>
        Link
      </Link>
    </div>
  );
}
