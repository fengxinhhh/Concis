import { Awaitable } from 'puppeteer';
import { CSSProperties } from 'react';

export interface UploadProps {
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   * @default string
   */
  className?: string;
  /**
   * @description 允许的文件类型，参考MDN<input>accept属性
   * @default *
   */
  accept?: string;
  /**
   * @description 是否支持多选
   * @default false
   */
  multiple?: boolean;
  /**
   * @description 限制上传文件的数量
   * @default 无限制
   */
  limit?: number;
  /**
   * @description 是否禁用上传
   * @default false
   */
  disable?: boolean;
  /**
   * @description 文件列表的展示
   * @default file
   */
  showType?: string;
  /**
   * @description 上传文件的键名
   * @default file
   */
  name?: string;
  /**
   * @description 远程上传地址
   * @default 无
   */
  action: string;
  /**
   * @description 是否自动上传
   * @default true
   */
  autoUpload?: boolean;
  /**
   * @description 是否携带cookie上传
   * @default false
   */
  withCredentials?: boolean;
  /**
   * @description 默认文件列表
   * @default []
   */
  defaultFileList?: FileItem[];
  /**
   * @description 发送请求时自定义请求头
   * @default {}
   */
  headers?: HeadersInit;
  /**
   * @description 上传前回调函数
   * @default noop
   */
  beforeUpload?: (file: File) => Awaitable<void | boolean>;
  /**
   * @description 移除后回调函数
   * @default noop
   */
  onRemove?: (fileItem: FileItem, fileList: FileItem[]) => void;
  /**
   * @description 文件列表变动时回调函数
   * @default noop
   */
  onChange?: (fileList: FileItem[]) => void;
  /**
   * @description 上传成功回调函数
   * @default noop
   */
  onSuccess?: (response: any, fileItem: FileItem, fileList: FileItem[]) => void;
  /**
   * @description 上传失败回调函数
   * @default noop
   */
  onError?: (error: any, fileItem: FileItem, fileList: FileItem[]) => void;
  /**
   * @description 超出限制上传数量时回调
   * @default noop
   */
  onExceedLimit?: (fileList: FileItem[], uploadFiles: FileList) => void;
}
export interface FileItem {
  uid: string;
  file: File;
  status: string;
  name: string;
}
