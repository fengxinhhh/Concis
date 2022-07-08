import React, { createContext, Ref, useEffect, useState } from 'react';
import FormItem from './form-item';
import { FormProps, ruleType } from './interface';
import './styles/index.module.less';
import { getNowTime } from '../_util/getNowTime';

export const ctx = createContext<any>({} as any); //顶层通信装置

export interface FormComponent {
  Item: typeof FormItem;
}
export interface FromRefFunctions {
  formRef: string;
  onSubmit: Function;
  resetFields: Function;
  validateFields: Function;
  useFormContext: Function;
}
export type fieldListType = {
  rules?: Array<any>;
  field?: string;
};
const collectFormFns: FromRefFunctions = {
  formRef: '',
  onSubmit: () => {},
  resetFields: () => {},
  validateFields: () => {},
  useFormContext: () => {},
};

const Form = <T,>(props: FormProps<T>) => {
  const { children, layout = 'horizontal', style, formField, disabled } = props;

  const [fieldList, setFieldList] = useState<any>({});

  //根组件状态管理，向下传入
  const providerList = {
    layout,
  };

  function outputFormData(ref: Ref<T> | null) {
    //生成表体内容
    const returnField: any = {};
    let fieldType = '';
    for (var key in fieldList) {
      getDomVal((ref as any).current.querySelector(` .form-item .${key}`), key);
    }
    function getDomVal(dom: any, field: string) {
      if (dom?.childNodes.length === 0) {
        if (fieldType === 'input') {
          returnField[field] = dom.value;
        } else if (fieldType === 'select') {
          if (dom.parentNode.getAttribute('class') === 'placeholder') {
            returnField[field] = '';
          } else {
            returnField[field] = dom.parentNode.innerText;
          }
        }
        fieldType = '';
      } else {
        if (dom !== null) {
          if (fieldType === '') {
            switch (dom.getAttribute('class')) {
              case 'select':
                fieldType = 'select';
                break;
              case 'box':
                fieldType = 'input';
                break;
            }
          }
          getDomVal(dom.childNodes[0], field);
        }
      }
    }
    return returnField;
  }
  const onSubmit = (ref: Ref<T> | null) => {
    //表单提交
    const result = outputFormData(ref);
    const ruleResult = validateFields(result, ref);
    if (Object.keys(ruleResult).length > 0) {
      return { ...{ submitResult: false }, ruleResult };
    }
    return { ...{ submitResult: true }, result };
  };

  const validateFields = (resultField: any, ref: Ref<T> | null) => {
    //表单校验
    //表单校验
    if (resultField === undefined) {
      resultField = outputFormData(ref);
    }
    const resultRules: any = {};
    for (var key in resultField) {
      const field = fieldList[key];
      if (field.rules) {
        let isPass = true;
        const rules = fieldList[key].rules;
        rules.forEach((rule: ruleType) => {
          if (rule.required && resultField[key] == '' && isPass) {
            isPass = false;
            changeValidateText(` .form-item .${key}`, rule.message, key, ref);
          } else if (rule.maxLength && resultField[key].length > rule.maxLength && isPass) {
            isPass = false;
            changeValidateText(` .form-item .${key}`, rule.message, key, ref);
          } else if (rule.minLength && resultField[key].length < rule.minLength && isPass) {
            isPass = false;
            changeValidateText(` .form-item .${key}`, rule.message, key, ref);
          } else {
            if (rule.fn && !rule.fn(resultField[key])) {
              isPass = false;
              changeValidateText(` .form-item .${key}`, rule.message, key, ref);
            }
          }
          if (
            isPass &&
            (ref as any).current.querySelector(` .form-item .${key} .show-rule-label`)
          ) {
            (ref as any).current
              .querySelector(` .form-item .${key} .show-rule-label`)
              ?.setAttribute('class', 'hide-rule-label');
          }
        });
      }
    }
    function changeValidateText(
      className: string,
      text: string,
      field: string,
      ref: Ref<T | unknown> | null,
    ) {
      resultRules[field] = text;
      const hideDom = (ref as any).current.querySelector(
        `${className} .hide-rule-label`,
      ) as HTMLElement;
      const showDom = (ref as any).current.querySelector(
        `${className} .show-rule-label`,
      ) as HTMLElement;
      if (hideDom) {
        hideDom.innerText = text;
      } else {
        showDom.innerText = text;
      }
      hideDom?.setAttribute('class', 'show-rule-label');
    }
    return resultRules;
  };
  const resetFields = (ref: Ref<T | unknown> | null) => {
    //重置表单
    let fieldType = '';
    for (var key in fieldList) {
      getDomVal((ref as any).current.querySelector(` .form-item .${key}`), key);
    }
    function getDomVal(dom: any, field: string) {
      if (dom?.childNodes.length === 0) {
        if (fieldType === 'input') {
          dom.value = '';
        } else if (fieldType === 'select' && (ref as any).current.querySelector('.size') !== null) {
          ((ref as any).current.querySelector('.size') as HTMLElement).innerText = '请选择';
          (ref as any).current.querySelector('.size')?.setAttribute('class', 'placeholder');
        } else if (fieldType === 'datePicker') {
          const datePickerInputs = (ref as any).current.querySelectorAll('.rangePicker input');
          datePickerInputs[0].value = getNowTime(false).split(' ')[0];
          if (datePickerInputs.length === 2) {
            const endDay: Array<string | number> = getNowTime(false).split(' ')[0].split('-');
            endDay[1] = (Number(endDay[1]) + 1) as number;
            datePickerInputs[1].value = endDay.join('-');
          }
        }
        fieldType = '';
      } else {
        if (dom !== null) {
          if (fieldType === '') {
            switch (dom.getAttribute('class')) {
              case 'select':
                fieldType = 'select';
                break;
              case 'box':
                fieldType = 'input';
                break;
              case 'rangePicker':
                fieldType = 'datePicker';
            }
          }
          getDomVal(dom.childNodes[0], field);
        }
      }
    }
  };
  const useFormContext = (ref: Ref<T> | null) => {
    return outputFormData(ref);
  };
  useEffect(() => {
    const fieldL: any = {};
    children.forEach((child: any) => {
      if (child.props.field) {
        const key = child.props.field;
        fieldL[key] = {};
        fieldL[key].rules = child.props.rules || null;
      }
    });
    setFieldList(fieldL);
  }, []);
  useEffect(() => {
    collectFormFns.onSubmit = onSubmit;
    collectFormFns.resetFields = resetFields;
    collectFormFns.validateFields = validateFields;
    collectFormFns.useFormContext = useFormContext;
    collectFormFns.formRef = formField;
  }, [fieldList]);

  return (
    <ctx.Provider value={providerList}>
      <div className="form" style={style} ref={formField || null}>
        {disabled && <div className="disabled" />}
        {children}
      </div>
    </ctx.Provider>
  );
};

Form.Item = FormItem;
Form.useForm = () => {
  return collectFormFns;
};

export default Form;
