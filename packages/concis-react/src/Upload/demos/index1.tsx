import React from 'react';
import Upload from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Switch');

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
        console.log('res', res);
      }}
      onExceedLimit={() => {
        console.log('onExceedLimit');
      }}
      onChange={() => console.log('change')}
      headers={{ token: '1' }}
      defaultFileList={[]}
      action="test"
      limit={3}
      multiple={true}
      autoUpload={false}
      accept={'*'}
    />
  );
}
