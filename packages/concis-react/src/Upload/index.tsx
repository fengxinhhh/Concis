import React, { memo, useEffect, useRef, useState } from 'react';
import Button from '../Button';
import { UploadOutlined, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { FileItem, UploadProps } from './interface';
import List from '../List';
import { isNumber } from 'util';
const Upload = (props: UploadProps) => {
  const {
    accept,
    multiple = false,
    disable,
    limit,
    action,
    name = 'file',
    headers = {},
    onExceedLimit,
    withCredentials = false,
    autoUpload = true,
    defaultFileList,
    beforeUpload,
    onSuccess,
    onError,
    onRemove,
    onChange,
  } = props;
  const inputRef = useRef<any>(null);
  const [fileList, setFileList] = useState<FileItem[]>(defaultFileList || []);
  useEffect(() => {
    onChange && onChange(fileList);
  }, [fileList.length]);
  const uploadClick = () => {
    if (disable) return;
    inputRef.current.click();
  };
  const beforeUploadFile = async (file: File): Promise<boolean> => {
    if (beforeUpload) {
      try {
        const res = await beforeUpload(file);
        return !(typeof res === 'boolean' && !res);
      } catch (e) {
        return false;
      }
    } else {
      return true;
    }
  };
  const uploadFile = async (file: File, fileItem: FileItem) => {
    if (!(await beforeUploadFile(file))) return;
    const formData = new FormData();
    formData.append(name, file);
    fetch(action, {
      method: 'POST',
      body: formData,
      credentials: withCredentials ? 'include' : 'omit',
      headers,
    })
      .then((response) => response)
      .then((data) => {
        setFileList((fileList) => {
          return fileList.map((_) => {
            if (_.uid === fileItem.uid) {
              return {
                ..._,
                status: 'success',
              };
            } else return _;
          });
        });
        onSuccess && onSuccess(data, fileItem, fileList);
      })
      .catch((error) => {
        setFileList((fileList) => {
          return fileList.map((_) => {
            if (_.uid === fileItem.uid) {
              return {
                ..._,
                status: 'error',
              };
            } else return _;
          });
        });
        onError && onError(error, fileItem, fileList);
      });
  };
  const fileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    const list: FileItem[] = [];
    for (let i = 0; i < files.length; i++) {
      if (isNumber(limit) && fileList.length + list.length >= limit) {
        onExceedLimit && onExceedLimit(fileList, files as FileList);
        break;
      }
      list.push({
        uid: crypto.randomUUID(),
        status: 'unUpload',
        name: files[i].name,
        file: files[i],
      });
      autoUpload && (await uploadFile(files[i], list[list.length - 1]));
    }
    inputRef.current.value = '';
    setFileList([...fileList, ...list]);
  };
  const deleteFile = (fileItem: FileItem) => {
    setFileList((fileList) => fileList.filter((_) => _.uid !== fileItem.uid));
    onRemove && onRemove(fileItem, fileList);
  };
  return (
    <div>
      <input
        accept={accept}
        multiple={multiple}
        onChange={fileChange}
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
      ></input>
      <Button handleClick={uploadClick} style={{ margin: '8px' }} type="primary">
        <UploadOutlined />
        上传
      </Button>
      {fileList.length !== 0 && (
        <List
          style={{ fontSize: '14px', width: '100%', marginTop: '10px' }}
          header="文件列表"
          size="small"
          dataSource={fileList}
          render={(_: FileItem, idx: number) => {
            return (
              <List.Item
                key={idx}
                style={{ fontSize: '14px', display: 'flex', justifyContent: 'space-between' }}
              >
                <span style={{ color: _.status === 'success' ? '#00b42a' : '#d81f27' }}>
                  {_.name}
                </span>
                <span>
                  {_.status === 'unUpload' ? (
                    <Button
                      handleClick={() => uploadFile(_.file, _)}
                      style={{
                        height: '100%',
                        fontSize: '12px',
                      }}
                    >
                      上传
                    </Button>
                  ) : (
                    <CheckCircleFilled style={{ color: '#00b42a' }} />
                  )}
                  <CloseCircleFilled
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteFile(_);
                    }}
                    style={{ color: '#d81f27', marginLeft: '5px' }}
                  />
                </span>
              </List.Item>
            );
          }}
        ></List>
      )}
    </div>
  );
};
export default memo(Upload);
