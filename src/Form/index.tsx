import React, { createContext, useEffect } from 'react';
import FormItem from './form-item';
import { FormProps } from './interface';

export const ctx = createContext<any>({} as any); //顶层通信装置

export interface FormComponent {
  Item: typeof FormItem;
}
const Form = (props: FormProps) => {
  const { children, layout = 'horizontal', style } = props;

  //根组件状态管理，向下传入
  const providerList = {
    layout,
  };

  return (
    <ctx.Provider value={providerList}>
      <div className="form" style={style}>
        {children}
      </div>
    </ctx.Provider>
  );
};

Form.Item = FormItem;

export default Form;
