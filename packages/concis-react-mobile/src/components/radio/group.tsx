import React, {
  useMemo,
  useContext,
  useImperativeHandle,
  useRef,
  forwardRef,
  ReactNode,
} from 'react';

import { useControllableValue } from 'ahooks';

import { GroupContext } from './group-context';

import { Radio } from './radio';

import { RadioValue } from '.';

export type Option = {
  value: RadioValue;
  label: ReactNode;
  disabled?: boolean;
};

export type RadioGroupProps = {
  children?: ReactNode;
  value?: RadioValue | null;
  defaultValue?: RadioValue;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  options: Option[];
  /**
   * @description 按钮点击回调事件
   */
  onChange?: (value: RadioValue) => void;
};

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { disabled = false, defaultValue, options, children } = props;

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
    <GroupContext.Provider value={{ value, disabled, onSelect, onUnSelect }}>
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

export default RadioGroup;
