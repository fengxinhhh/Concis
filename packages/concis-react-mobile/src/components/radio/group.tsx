import React, { ReactNode } from 'react';

import { useControllableValue } from 'ahooks';

import { GroupContext } from './group-context';

import { Radio } from './radio';

import { RadioValue } from '.';

export type Option = {
  /**
   * @description 携带的标识值
   */
  value: RadioValue;
  /**
   * @description 标题
   */
  label: ReactNode;
  /**
   * @description 禁用状态
   */
  disabled?: boolean;
};

export type RadioGroupProps = {
  children?: ReactNode;
  /**
   * @description 指定选中的选项
   */
  value?: RadioValue | null;
  /**
   * @description 默认选中的选项
   */
  defaultValue?: RadioValue;
  /**
   * @description 整组禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 将整组宽度调整为其父宽度的选项
   * @default false
   */
  block?: boolean;
  /**
   * @description 以配置形式设置子元素
   */
  options?: Option[];
  /**
   * @description 变化时回调函数
   */
  onChange?: (value: RadioValue) => void;
};

export const Group: React.FC<RadioGroupProps> = (props) => {
  const { block = false, disabled = false, defaultValue, options, children } = props;

  const [value, setValue] = useControllableValue<any>(props, {
    defaultValue,
  });

  const onSelect = (v: RadioValue) => {
    setValue(v);
  };

  const onUnSelect = (v: RadioValue) => {
    setValue(v);
  };

  return (
    <GroupContext.Provider value={{ block, value, disabled, onSelect, onUnSelect }}>
      {Array.isArray(options)
        ? options.map((item) => {
            return (
              <Radio key={item.value} value={item.value} disabled={item.disabled}>
                {item.label}
              </Radio>
            );
          })
        : children}
    </GroupContext.Provider>
  );
};

export default Group;
