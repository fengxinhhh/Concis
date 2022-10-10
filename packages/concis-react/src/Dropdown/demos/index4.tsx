import React from 'react';
import { Dropdown } from 'concis';

export default function DropdownDemo1() {
  const data = new Array(50).fill('item').map((item, index) => `${item}${index + 1}`);

  return (
    <div>
      <Dropdown placeholder="Click me" data={data} colums />
    </div>
  );
}
