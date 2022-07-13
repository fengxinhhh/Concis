import { CSSProperties, FormHTMLAttributes, ReactNode } from 'react';

interface FormProps<T>
  extends Omit<FormHTMLAttributes<any>, 'className' | 'onChange' | 'onSubmit'> {
  /**
   * @description 自定义样式（不包含Form.Item中其他Concis内置样式）
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 类名
   * @default null
   */
  className?: string;
  /**
   * @description 布局方式
   * @default horizontal
   */
  layout?: 'horizontal' | 'vertical';
  children: any;
  /**
   * @description 表单唯一ref，受控表单必传，通过useRef声明
   * @default null
   */
  formField?: any;
  /**
   * @description 全局禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description Form.Item标签
   * @default  null
   */
  label?: T;
  /**
   * @description Form.Item当行底部距离
   * @default  20px
   */
  wrapperCol?: number;
  /**
   * @description Form.Item当行顶部距离
   * @default  20px
   */
  wrapperTol?: number;
  /**
   * @description Form.Item受控项名称
   * @default  null
   */
  field?: T;
  /**
   * @description Form.Item当行校验规则
   * @default  20px
   */
  rules?: Array<ruleType>;
  /**
   * @description 受控表单向外暴露的hook
   */
  useForm?: Function;
  /**
   * @description useForm.onSubmit，提交事件
   */
  onSubmit?: Function;
  /**
   * @description useForm.resetFields，重置表单事件
   */
  resetFields?: Function;
  /**
   * @description useForm.validateFields，手动校验事件
   */
  validateFields?: Function;
  /**
   * @description useForm.useFormContext，获取表单当前受控状态事件
   */
  useFormContext?: Function;
}
type ruleType = {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  message: string;
  fn?: Function;
};
interface FormItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  label?: string;
  wrapperCol?: number;
  wrapperTol?: number;
  field?: string;
  rules?: Array<ruleType>;
  disabled?: boolean;
}

export type { FormProps, FormItemProps, ruleType };
