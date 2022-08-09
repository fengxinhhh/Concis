import React, { useState } from 'react';
import GlobalConfig from '..';
import Button from '../../Button';
import Loading from '../../Loading';
import CheckBox from '../../CheckBox';
import { RangeDatePicker } from '../../DatePicker';
import Input from '../../Input';
import RadioGroup from '../../Radio/RadioGroup';
import Radio from '../../Radio';
import Select from '../../Select';
import Tree from '../../Tree';
import Badge from '../../Badge';
import Avatar from '../../Avatar';
import TreeView from '../../TreeView';
import Pagination from '../../Pagination';
import Switch from '../../Switch';
import Steps from '../../Steps';
import Step from '../../Steps/Step';
import InputPro from '../../InputPro';
import usePageListener from '../../common_utils/hooks/usePageListener';

const option = [
  {
    label: 'Mucy',
    value: 'mucy',
  },
  {
    label: 'Mike',
    value: 'mike',
    disabled: true,
  },
  {
    label: 'aMck',
    value: 'amck',
  },
];
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
      },
      {
        title: 'parent 1-1',
        value: '0-0-2',
        group: 0,
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
const stepsData = [
  {
    title: 'Waiting',
    subTitle: 'subTitle',
    description: 'this is description',
  },
  {
    title: 'In Process',
    subTitle: 'subTitle',
    description: 'this is description',
  },
  {
    title: 'Finished',
    subTitle: 'subTitle',
    description: 'this is description',
  },
];

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('GlobalConfig');

  const [dark, setDark] = useState(document.documentElement.getAttribute('data-prefers-color'));
  const [globalColor, setGlobalColor] = useState('');

  const toggle = () => {
    document.documentElement.setAttribute(
      'data-prefers-color',
      dark === 'light' ? 'dark' : 'light'
    );
    setDark(dark === 'light' ? 'dark' : 'light');
  };
  const changeColor = () => {
    setGlobalColor(!globalColor ? 'orange' : '');
  };

  return (
    <GlobalConfig globalColor={globalColor} darkTheme={dark === 'dark'}>
      <div style={{ position: 'relative' }}>
        <Button type="primary" handleClick={toggle}>
          切换主题
        </Button>
        <Button type="danger" style={{ marginLeft: '20px' }} handleClick={changeColor}>
          开启自定义主题
        </Button>
        <p />
        <Loading loadingText="正在加载中..." />
        <p />
        <CheckBox>5</CheckBox>
        <p />
        <Switch />
        <p />
        <RangeDatePicker />
        <p />
        <Input placeholder="请输入" width="200" />
        <p />
        <RadioGroup value={1} canAddOption>
          <Radio disabled>Apple</Radio>
          <Radio>Orange</Radio>
          <Radio>Watch</Radio>
        </RadioGroup>
        <p />
        <Select option={option} width={200} placeholder="请选择" />
        <p />
        <Tree treeData={treeData} />
        <p />
        <Badge count={9} style={{ marginRight: '25px' }}>
          <Avatar shape="square">Num</Avatar>
        </Badge>
        <p />
        <TreeView treeData={treeData} />
        <p />
        <InputPro align="top" option={option} />
        <p />
        <Pagination total={200} showSizeChanger pageSizeOptions={[10, 20, 30, 50]} showJumpInput />
        <p />
        <Steps current={2}>
          {stepsData.map((step) => {
            return (
              <Step
                key={step.title}
                title={step.title}
                subTitle={step.subTitle}
                description={step.description}
              />
            );
          })}
        </Steps>
      </div>
    </GlobalConfig>
  );
}
