import React, { CSSProperties, FormHTMLAttributes, ReactNode } from 'react';

interface FormProps extends Omit<FormHTMLAttributes<any>, 'className' | 'onChange' | 'onSubmit'> {
  style?: CSSProperties;
  className?: string | string[];
  formData?: Array<any>;
  layout?: string;
  children: any;
  formRef?: React.Ref<unknown | undefined>;
}
type ruleType = {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  message?: string;
};
interface FormItemProps {
  children: ReactNode;
  label?: string;
  wrapperCol?: number;
  wrapperTol?: number;
  field?: string;
  rules?: Array<ruleType>;
}

export type { FormProps, FormItemProps };
