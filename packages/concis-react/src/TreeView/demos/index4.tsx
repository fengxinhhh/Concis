import React from 'react';
import { TreeView } from 'concis';

const treeData = [
  {
    title: 'parent1',
    value: '0-0',
    group: 0,
    children: [
      {
        title: 'parent 1-0',
        value: '0-0-1',
        group: 0,
        disabled: true,
      },
      {
        title: 'parent 1-1',
        value: '0-0-2',
        group: 0,
        disabled: true,
        children: [
          {
            title: 'leaf2',
            value: '0-0-0-1',
            group: 0,
          },
          {
            title: 'leaf3',
            value: '0-0-0-1',
            group: 0,
            children: [
              {
                title: 'fengxin',
                value: '0-0-0-1',
                group: 0,
                children: [
                  {
                    title: 'dashuaige',
                    value: '0-0-0-1',
                    group: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'parent2',
    value: '0-1',
    group: 1,
    children: [
      {
        title: 'parent 2-0',
        value: '0-0-3',
        group: 1,
      },
      {
        title: 'parent 2-1',
        value: '0-0-3',
        group: 1,
      },
    ],
  },
];

export default function MenuDemos1() {
  const checkCallback = (va: Array<object>) => {
    console.log(va);
  };
  const dropCallback = (va: Array<object>) => {
    console.log(va);
  };
  return (
    <TreeView
      treeData={treeData}
      defaultOpen
      avaDrop
      checkCallback={checkCallback}
      dropCallback={dropCallback}
    />
  );
}
