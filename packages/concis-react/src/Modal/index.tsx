import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import lodash from 'lodash';
import { CSSTransition } from 'react-transition-group';
import {
  CloseOutlined,
  ExclamationCircleFilled,
  CheckCircleFilled,
  WarningFilled,
  CloseCircleFilled,
} from '@ant-design/icons';
import Button from '../Button';
import { ModalProps, ConfirmType } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../common_utils/getRenderColor';
import useOverFlowScroll from '../common_utils/hooks/useOverFlowScroll';
import confirm, { isPromiseFn } from './confirm';
import './index.module.less';

const addInstance = (props: ModalProps, type: ConfirmType) => {
  confirm(props, type);
};

const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    title,
    visible,
    okButtonProps = {},
    cancelButtonProps = {},
    footer,
    okText,
    cancelText,
    width = '520px',
    onCancel,
    onOk,
    confirm = false,
    isPromiseOk,
    isPromiseCancel,
    type,
  } = props;

  const [wrapperVisible, setWrapperVisible] = useState(visible);
  const [okLoading, setOkLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const isCloseWorking = useRef<boolean>(false); //正在关闭

  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classFirstName = darkTheme ? 'concis-dark-modal' : 'concis-modal';
  const classNames = cs(prefixCls, className, classFirstName);

  const clickDocumentCancel = lodash.throttle((e) => {
    const clickDom = e.target as HTMLElement;
    e.stopPropagation();
    if (clickDom.getAttribute('class')?.includes('concis-modal-dialog')) {
      cancel();
    }
  }, 0);

  useEffect(() => {
    setWrapperVisible(visible);
  }, [visible]);

  useEffect(() => {
    wrapperVisible && window.addEventListener('click', clickDocumentCancel);
    return () => {
      window.removeEventListener('click', clickDocumentCancel);
    };
  }, [wrapperVisible]);

  //禁止滚动
  useOverFlowScroll('body', wrapperVisible as boolean);
  const removeConfirmContainer = () => {
    const dom = document.querySelector('.concis-modal-confirm');
    dom &&
      setTimeout(() => {
        document.body.removeChild(document.querySelector('.concis-modal-confirm') as HTMLElement);
      }, 400);
  };

  //异步关闭后重置状态
  const afterAsyncClose = () => {
    setWrapperVisible(false);
    confirm && removeConfirmContainer();
    isCloseWorking.current = false;
    setOkLoading(false);
    setCancelLoading(false);
    isCloseWorking.current = false;
  };
  //确认
  const finish = () => {
    if (!onOk) {
      setWrapperVisible(false);
    }
    if (!isCloseWorking.current) {
      isCloseWorking.current = true;
      if ((confirm && isPromiseOk) || (typeof onOk === 'function' && isPromiseFn(onOk))) {
        setOkLoading(true);
        onOk &&
          onOk()
            .then(() => {
              afterAsyncClose();
            })
            .catch(() => {
              afterAsyncClose();
            });
      } else {
        onOk && onOk();
        setWrapperVisible(false);
        isCloseWorking.current = false;
        confirm && removeConfirmContainer();
      }
    }
  };

  //取消
  const cancel = () => {
    if (!onCancel) {
      setWrapperVisible(false);
    }
    if (!isCloseWorking.current) {
      isCloseWorking.current = true;
      if (
        (confirm && isPromiseCancel) ||
        (typeof onCancel === 'function' && isPromiseFn(onCancel))
      ) {
        setCancelLoading(true);
        onCancel &&
          onCancel()
            .then(() => {
              afterAsyncClose();
            })
            .catch(() => {
              afterAsyncClose();
            });
      } else {
        onCancel && onCancel();
        setWrapperVisible(false);
        isCloseWorking.current = false;
        confirm && removeConfirmContainer();
      }
    }
  };
  const titleIcon = useMemo(() => {
    switch (type) {
      case 'info':
        return <ExclamationCircleFilled style={{ color: '#325DFF' }} />;
      case 'success':
        return <CheckCircleFilled style={{ color: '#00b42a' }} />;
      case 'warning':
        return <WarningFilled style={{ color: '#ff7d00' }} />;
      case 'error':
        return <CloseCircleFilled style={{ color: '#f53f3f' }} />;
    }
  }, [type]);

  return (
    <div
      className={classNames}
      style={{ '--modal-width': `${typeof width === 'string' ? width : width + '%'}` } as any}
    >
      <CSSTransition
        in={wrapperVisible}
        timeout={200}
        appear
        mountOnEnter={true}
        classNames="fadeModal"
        unmountOnExit={true}
        onEnter={(e: HTMLDivElement) => {
          e.style.display = 'block';
        }}
        onExited={(e: HTMLDivElement) => {
          e.style.display = 'none';
        }}
      >
        <div className="concis-modal-dialog">
          <CSSTransition
            in={wrapperVisible}
            timeout={200}
            appear
            mountOnEnter={true}
            classNames="fadeContent"
            unmountOnExit={true}
            onEnter={(e: HTMLDivElement) => {
              e.style.display = 'block';
            }}
            onExited={(e: HTMLDivElement) => {
              e.style.display = 'none';
            }}
          >
            <div className="concis-modal-content" onClick={(e: any) => e.stopPropagation()}>
              <div className="concis-modal-content-header">
                <div className="concis-title">
                  <i></i>
                  <div className="title">
                    {type && titleIcon}
                    <span> {title}</span>
                  </div>
                  <CloseOutlined
                    className="close-icon"
                    style={{ fontSize: '12px' }}
                    onClick={cancel}
                  />
                </div>
              </div>
              <div className="concis-modal-content-view">{children}</div>
              <div className="concis-modal-content-footer">
                {footer || (
                  <>
                    <Button
                      type="text"
                      loading={cancelLoading}
                      className="cancel-btn button"
                      handleClick={cancel}
                      {...(Object.keys(cancelButtonProps).length && { ...cancelButtonProps })}
                    >
                      {cancelText || '取消'}
                    </Button>
                    <Button
                      type="primary"
                      loading={okLoading}
                      className="enter-btn button"
                      handleClick={finish}
                      {...(Object.keys(okButtonProps).length && { ...okButtonProps })}
                    >
                      {okText || '确定'}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
};

Modal.confirm = (props: ModalProps) => {
  return addInstance(props, 'info');
};
Modal.info = (props: ModalProps) => {
  return addInstance(props, 'info');
};
Modal.success = (props: ModalProps) => {
  return addInstance(props, 'success');
};
Modal.error = (props: ModalProps) => {
  return addInstance(props, 'error');
};
Modal.warning = (props: ModalProps) => {
  return addInstance(props, 'warning');
};

export default Modal;
