import React, { useState } from 'react';
import { CheckBox } from 'concis';

export default function TimePickerDemo1() {
  const [checkAll, setCheckAll] = useState(false);
  const [checkGroup, setCheckGroup] = useState([
    {
      label: 'Apple',
      value: 1,
    },
    {
      label: 'Peer',
      value: 2,
      checked: true,
    },
    {
      label: 'Orange',
      value: 3,
    },
  ]);
  const checkCallback = (result: boolean) => {
    setCheckAll(result);
    const oldCheckGroup = [...checkGroup];
    oldCheckGroup.forEach((item) => {
      item.checked = result;
    });
    setCheckGroup(oldCheckGroup as any);
  };
  return (
    <>
      <CheckBox checked={checkAll} checkCallback={checkCallback} style={{ padding: '5px 0' }}>
        全选
      </CheckBox>
      <p />
      <CheckBox group={checkGroup} style={{ padding: '5px 0' }} />
    </>
  );
}
