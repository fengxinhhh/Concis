---
title: Upload
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
---

# Upload

Upload the file by clicking.

## Basic use

<code src="./demos/index1.tsx"></code>

## Show Pictures

<code src="./demos/index2.tsx"></code>

## API

| Name            | Description                                     | Type                                                                | Default     |
| --------------- | ----------------------------------------------- | ------------------------------------------------------------------- | ----------- |
| className       | class name                                      | `string`                                                            | `--`        |
| style           | Custom styles                                   | `CSSProperties`                                                     | `--`        |
| accept          | allowed file types                              | `string`                                                            | `--`        |
| multiple        | Whether to support multiple selection           | `boolean`                                                           | `false`     |
| limit           | limit the number of uploaded files              | `number`                                                            | `unlimited` |
| disable         | Whether to disable uploading                    | `boolean`                                                           | `false`     |
| showType        | Display of file list                            | `string`                                                            | `file`      |
| name            | The key name of the uploaded file               | `string`                                                            | `file`      |
| action          | remote upload address                           | `string`                                                            | `--`        |
| autoUpload      | Whether to upload automatically                 | `boolean`                                                           | `false`     |
| withCredentials | Whether to upload with cookies                  | `boolean`                                                           | `false`     |
| defaultFileList | Default file list                               | `FileItem[]`                                                        | `[]`        |
| headers         | Customize request headers when sending requests | `HeadersInit`                                                       | `{}`        |
| beforeUpload    | callback function before upload                 | `(file: File) => Awaitable<void / boolean>`                         | `--`        |
| onRemove        | callback function after removal                 | `(fileItem: FileItem, fileList: FileItem[]) => void`                | `--`        |
| onChange        | Callback function when file list changes        | `(fileList: FileItem[]) => void`                                    | `--`        |
| onSuccess       | Upload success callback function                | `(response: any, fileItem: FileItem, fileList: FileItem[]) => void` | `--`        |
| onError         | Upload failure callback function                | `(error: any, fileItem: FileItem, fileList: FileItem[]) => void`    | `--`        |
| onExceedLimit   | Callback when the upload limit is exceeded      | `(fileList: FileItem[], uploadFiles: FileList) => void`             | `--`        |

## FileItem API

| Name   | Description | Type     | Default |
| ------ | ----------- | -------- | ------- |
| uid    | id          | `string` | `--`    |
| file   | file        | `File`   | `--`    |
| status | status      | `string` | `--`    |
| name   | filename    | `string` | `--`    |
