import React, { createContext, useEffect, useState } from 'react';
import FormItem from './form-item';
import { FormProps } from './interface';

export const ctx = createContext<any>({} as any); //顶层通信装置

export interface FormComponent {
  Item: typeof FormItem;
}
export interface FromRefFunctions {
  onSubmit?: Function;
  resetFields?: Function;
  validateFields?: Function;
}
const collectFormFns: FromRefFunctions = {};

const Form = (props: FormProps) => {
  const { children, layout = 'horizontal', style } = props;
  const [fieldList, setFieldList] = useState({});
  const [isClear, setIsClear] = useState(false);

  //根组件状态管理，向下传入
  const providerList = {
    layout,
    isClear,
  };

  function outputFormData() {
    //生成表体内容
    const returnField: any = {};
    let fieldType = '';
    for (var key in fieldList) {
      getDomVal(document.querySelector(`.form-item .${key}`), key);
    }
    function getDomVal(dom: any, field: string) {
      if (dom?.childNodes.length === 0) {
        if (fieldType === 'input') {
          returnField[field] = dom.value;
        } else if (fieldType === 'select') {
          console.log(dom.parentNode, 40);
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
  const onSubmit = () => {
    const result = outputFormData();
    validateFields(result);
    return result;
  };
  function validateFields(resultField) {
    //表单校验
    if (resultField === undefined) {
      resultField = outputFormData();
    }
    for (var key in resultField) {
      if (fieldList[key].rules) {
        let isPass = true;
        const rules = fieldList[key].rules;
        rules.forEach((rule) => {
          if (rule.required && resultField[key] == '' && isPass) {
            isPass = false;
            changeValidateText(`.form-item .${key}`, rule.message);
          } else if (rule.maxLength && resultField[key].length > rule.maxLength && isPass) {
            isPass = false;
            changeValidateText(`.form-item .${key}`, rule.message);
          } else if (rule.minLength && resultField[key].length < rule.minLength && isPass) {
            isPass = false;
            changeValidateText(`.form-item .${key}`, rule.message);
          }
          if (isPass && document.querySelector(`.form-item .${key} .show-rule-label`)) {
            document
              .querySelector(`.form-item .${key} .show-rule-label`)
              ?.setAttribute('class', 'hide-rule-label');
          }
        });
      }
    }
    function changeValidateText(className, text) {
      const hideDom = document.querySelector(`${className} .hide-rule-label`) as HTMLElement;
      const showDom = document.querySelector(`${className} .show-rule-label`) as HTMLElement;
      if (hideDom) {
        hideDom.innerText = text;
      } else {
        showDom.innerText = text;
      }
      hideDom?.setAttribute('class', 'show-rule-label');
    }
  }
  const resetFields = () => {
    let fieldType = '';
    for (var key in fieldList) {
      getDomVal(document.querySelector(`.form-item .${key}`), key);
    }
    function getDomVal(dom: any, field: string) {
      if (dom?.childNodes.length === 0) {
        if (fieldType === 'input') {
          dom.value = '';
        } else if (fieldType === 'select' && document.querySelector('.size') !== null) {
          (document.querySelector('.size') as HTMLElement).innerText = '请选择';
          document.querySelector('.size')?.setAttribute('class', 'placeholder');
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
  };
  useEffect(() => {
    const fieldL: Object = {};
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
  }, [fieldList]);

  return (
    <ctx.Provider value={providerList}>
      <div className="form" style={style}>
        {children}
      </div>
    </ctx.Provider>
  );
};

Form.Item = FormItem;
Form.useForm = function () {
  return collectFormFns;
};

export default Form;
