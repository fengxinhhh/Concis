import React from 'react';
import Tree from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

const treeData = [
  {
    title: 'parent1',
    value: '0-0',
    children: [
      {
        title: 'parent 1-0',
        value: '0-0-1',
      },
      {
        title: 'parent 1-1',
        value: '0-0-2',
        children: [
          {
            title: 'leaf2',
            value: '0-0-0-1',
          },
        ],
      },
    ],
  },
  {
    title: 'parent2',
    value: '0-1',
    children: [
      {
        title: 'parent 2-0',
        value: '0-0-3',
      },
    ],
  },
];
export default function MenuDemos1() {
  process.env.NODE_ENV === 'production' && usePageListener('Tree');
  const chooseCallback = (val: string) => {
    console.log(val);
  };
  return <Tree treeData={treeData} chooseCallback={chooseCallback} />;
}

function arrToTree(arr) {
  function fn(cId) {
    let cArr = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element.parentId == cId) {
        if (!cId || !element.child) {
          element.child = [];
        }
        element.child = fn(element.id);
        cArr.push(element);
      }
    }
    return cArr;
  }
  fn('');
}
