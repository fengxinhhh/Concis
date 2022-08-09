import React, { memo, useEffect, useRef, useState, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { UploadOutlined, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { isNumber } from 'util';
import Button from '../Button';
import { FileItem, UploadProps } from './interface';
import List from '../List';
import './styles/index.module.less';

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
            }
            return _;
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
            }
            return _;
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
    setFileList((fileList) => [...fileList.filter((_) => _.uid !== fileItem.uid)]);
    onRemove && onRemove(fileItem, fileList);
  };
  const domNode = useMemo(() => {
    return (
      <List
        className="concis-upload-container"
        header="文件列表"
        size="small"
        dataSource={fileList}
        render={(_: FileItem, idx: number) => {
          return (
            <CSSTransition key={_.uid} appear timeout={300} classNames="fadeIn">
              <List.Item key={idx} className="file-list">
                <span style={{ color: _.status === 'success' ? '#00b42a' : '#d81f27' }}>
                  {_.name}
                </span>
                <span>
                  {_.status === 'unUpload' ? (
                    <Button
                      height={30}
                      handleClick={() => uploadFile(_.file, _)}
                      className="file-list-upload-button"
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
            </CSSTransition>
          );
        }}
      />
    );
  }, [fileList]);
  return (
    <div>
      <input
        accept={accept}
        multiple={multiple}
        onChange={fileChange}
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
      />
      <Button
        handleClick={uploadClick}
        icon={<UploadOutlined />}
        style={{ margin: '8px' }}
        type="primary"
      >
        上传
      </Button>
      {fileList.length !== 0 && domNode}
    </div>
  );
};
export default memo(Upload);
