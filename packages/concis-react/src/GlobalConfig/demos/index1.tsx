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
import Menu from '../../Menu';
import Pagination from '../../Pagination';
import Switch from '../../Switch';
import Steps from '../../Steps';
import Step from '../../Steps/Step';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
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
const getItem = (
  label: string,
  key: string | number,
  level: string | number,
  icon?: JSX.Element | null,
  children?: Array<Object> | null,
) => {
  return {
    label,
    key,
    level,
    icon,
    children,
  };
};
const items = [
  getItem('Navigation One', 'sub1', 1, <MailOutlined />, [
    getItem('Option 1', '1', 2),
    getItem('Option 2', '2', 2),
    getItem('Option 3', '3', 2),
    getItem('Option 4', '4', 2),
  ]),
  getItem('Navigation Two', 'sub2', 1, <AppstoreOutlined />, [
    getItem('Option 5', '5', 2),
    getItem('Option 6', '6', 2, null, [
      getItem('Option 13', '13', 3),
      getItem('Option 14', '14', 3),
    ]),
    getItem('Submenu', 'sub3', 2, null, [
      getItem('Option 15', '15', 3),
      getItem('Option 16', '16', 3),
    ]),
  ]),
  getItem('Navigation Three', 'sub4', 1, <SettingOutlined />, [
    getItem('Option 9', '9', 2),
    getItem('Option 10', '10', 2),
    getItem('Option 11', '11', 2),
    getItem('Option 12', '12', 2),
  ]),
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

  const [globalColor, setGlobalColor] = useState<Array<string>>(['#1890ff', 'orange', 'green']);

  const toggle = () => {
    setGlobalColor((oldColor) => {
      oldColor.push(oldColor.shift() as string);
      return [...oldColor];
    });
  };

  return (
    <GlobalConfig input="#c6e3fd" globalColor={globalColor[0]}>
      <div style={{ position: 'relative' }}>
        <Button type="primary" handleClick={toggle}>
          Toggle Config Color
        </Button>
        <p></p>
        <Loading loadingText="正在加载中..." />
        <p></p>
        <CheckBox>5</CheckBox>
        <p></p>
        <Switch />
        <p></p>
        <RangeDatePicker />
        <p></p>
        <Input placeholder="请输入" width="200" />
        <p></p>
        <RadioGroup value={1} canAddOption>
          <Radio disabled>Apple</Radio>
          <Radio>Orange</Radio>
          <Radio>Watch</Radio>
        </RadioGroup>
        <p></p>
        <Select option={option} width={200} placeholder={'请选择'} />
        <p></p>
        <Tree treeData={treeData} />
        <p></p>
        <Badge count={9} style={{ marginRight: '25px' }}>
          <Avatar shape="square">Num</Avatar>
        </Badge>
        <p></p>
        <TreeView treeData={treeData} />
        <p></p>
        <Menu items={items} />
        <p></p>
        <Pagination total={200} showSizeChanger pageSizeOptions={[10, 20, 30, 50]} showJumpInput />
        <p></p>
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
