import React from 'react';
import { Link } from 'concis';

export default function LinkDemo2() {
  return (
    <>
      <div>
        <Link href="#">Primary Link</Link>
        <Link disabled style={{ marginLeft: 30 }}>
          Primary Link
        </Link>
      </div>
      <div>
        <Link status="error" href="#">
          Error Link
        </Link>
        <Link status="error" disabled style={{ marginLeft: 50 }}>
          Error Link
        </Link>
      </div>
      <div>
        <Link status="success" href="#">
          Success Link
        </Link>
        <Link status="success" disabled style={{ marginLeft: 30 }}>
          Success Link
        </Link>
      </div>
      <div>
        <Link status="warning" href="#">
          Warning Link
        </Link>
        <Link status="warning" disabled style={{ marginLeft: 30 }}>
          Warning Link
        </Link>
      </div>
    </>
  );
}
