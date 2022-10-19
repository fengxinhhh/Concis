---
title: Upload 上传
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
---

# Upload 上传

通过点击上传文件。

## 基本使用

<code src="./demos/index1.tsx"/>

## 显示图片

<code src="./demos/index2.tsx"/>

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | 类名 | `string` | `--` |
| style | 自定义样式 | `CSSProperties` | `--` |
| accept | 允许的文件类型 | `string` | `--` |
| multiple | 是否支持多选 | `boolean` | `false` |
| limit | 限制上传文件的数量 | `number` | `无限制` |
| disable | 是否禁用上传 | `boolean` | `false` |
| showType | 文件列表的展示 | `string` | `file` |
| name | 上传文件的键名 | `string` | `file` |
| action | 远程上传地址 | `string` | `--` |
| autoUpload | 是否自动上传 | `boolean` | `false` |
| withCredentials | 是否携带 cookie 上传 | `boolean` | `false` |
| defaultFileList | 默认文件列表 | `FileItem[]` | `[]` |
| headers | 发送请求时自定义请求头 | `HeadersInit` | `{}` |
| beforeUpload | 上传前回调函数 | `(file: File) => Awaitable<void / boolean>` | `--` |
| onRemove | 移除后回调函数 | `(fileItem: FileItem, fileList: FileItem[]) => void` | `--` |
| onChange | 文件列表变动时回调函数 | `(fileList: FileItem[]) => void` | `--` |
| onSuccess | 上传成功回调函数 | `(response: any, fileItem: FileItem, fileList: FileItem[]) => void` | `--` |
| onError | 上传失败回调函数 | `(error: any, fileItem: FileItem, fileList: FileItem[]) => void` | `--` |
| onExceedLimit | 超出限制上传数量时回调 | `(fileList: FileItem[], uploadFiles: FileList) => void` | `--` |

## FileItem API

| Name   | Description | Type     | Default |
| ------ | ----------- | -------- | ------- |
| uid    | id          | `string` | `--`    |
| file   | 文件        | `File`   | `--`    |
| status | 状态        | `string` | `--`    |
| name   | 文件名      | `string` | `--`    |
