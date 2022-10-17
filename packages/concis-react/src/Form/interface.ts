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
  className?: T;
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
  /**
   * @description 必填
   */
  required?: boolean;
  /**
   * @description 最大长度
   */
  maxLength?: number;
  /**
   * @description 最小长度
   */
  minLength?: number;
  /**
   * @description 提示信息
   */
  message: string;
  /**
   * @description 自定义校验规则
   */
  fn?: Function;
};
interface FormItemProps {
  children: ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 标题
   */
  label?: string;
  /**
   * @description 单行距离顶部Item距离
   * @default 20px
   */
  wrapperCol?: number;
  /**
   * @description 单行距离底部Item距离
   * @default 20px
   */
  wrapperTol?: number;
  /**
   * @description 单行受控唯一名称
   */
  field?: string;
  /**
   * @description 单行校验规则
   */
  rules?: Array<ruleType>;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
}

export type { FormProps, FormItemProps, ruleType };
