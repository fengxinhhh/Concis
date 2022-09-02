import React from 'react';
import { Upload, Message } from 'concis';

export default function index1() {
  return (
    <Upload
      beforeUpload={(file: File) => {
        // console.log(file);
        return new Promise((resolve, reject) => {
          resolve(true);
        });
      }}
      onError={(e: any) => {
        console.log('e', e);
      }}
      onSuccess={(res: any) => {
        Message.success('上传成功');
        console.log('res', res);
      }}
      onExceedLimit={() => {
        console.log('onExceedLimit');
      }}
      onChange={() => console.log('change')}
      headers={{ token: '1' }}
      defaultFileList={[]}
      action="test"
      showType="image-list"
      limit={3}
      multiple
      autoUpload={false}
      accept="*"
    />
  );
}
