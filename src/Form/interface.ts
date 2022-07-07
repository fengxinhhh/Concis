import { CSSProperties, FormHTMLAttributes, ReactNode } from 'react';

interface FormProps extends Omit<FormHTMLAttributes<any>, 'className' | 'onChange' | 'onSubmit'> {
  style?: CSSProperties;
  className?: string | string[];
  formData?: Array<any>;
  layout?: string;
  children: any;
}

interface FormItemProps {
  children: ReactNode;
  label?: string;
  wrapperCol?: number;
  wrapperTol?: number;
}

export type { FormProps, FormItemProps };
