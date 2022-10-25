import React, { useState, useEffect, useRef, useContext, useMemo, forwardRef } from 'react';
import lodash from 'lodash';
import { CSSTransition } from 'react-transition-group';
import { CloseOutlined } from '@ant-design/icons';
import { on, off } from '../common_utils/dom/event';
import Button from '../Button';
import { DrawerProps, alignProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import useOverFlowScroll from '../common_utils/hooks/useOverFlowScroll';
import './styles/index.module.less';

function isPromiseFn(fn: Function): boolean {
  if (fn && fn.toString().trim().includes('new Promise')) {
    return true;
  }
  return false;
}

const Drawer = (props, ref) => {
  const {
    className,
    style,
    children,
    title,
    visible,
    align = 'right',
    okButtonProps = {},
    cancelButtonProps = {},
    footer,
    okText,
    cancelText,
    width = '320px',
    onOk,
    onCancel,
  } = props;

  const [wrapperVisible, setWrapperVisible] = useState(visible);
  const [okLoading, setOkLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const isCloseWorking = useRef<boolean>(false); // 正在关闭

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classFirstName = darkTheme ? 'concis-dark-drawer' : 'concis-drawer';
  const classNames = cs(prefixCls, className, classFirstName);

  const clickDocumentCancel = lodash.throttle((e) => {
    const clickDom = e.target as HTMLElement;
    e.stopPropagation();
    if (clickDom.getAttribute('class')?.includes('concis-drawer-dialog')) {
      cancel();
    }
  }, 0);

  useEffect(() => {
    setWrapperVisible(visible);
  }, [visible]);

  useEffect(() => {
    wrapperVisible && on(window, 'click', clickDocumentCancel)();
    return () => {
      wrapperVisible && off(window, 'click', clickDocumentCancel)();
    };
  }, [wrapperVisible]);

  // 禁止滚动
  useOverFlowScroll('body', wrapperVisible as boolean);
  // 异步关闭后重置状态
  const afterAsyncClose = () => {
    setWrapperVisible(false);
    isCloseWorking.current = false;
    setOkLoading(false);
    setCancelLoading(false);
  };

  // 确认
  const finish = () => {
    if (!onOk) {
      setWrapperVisible(false);
    }
    if (!isCloseWorking.current) {
      isCloseWorking.current = true;
      if (typeof onOk === 'function' && isPromiseFn(onOk)) {
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
      }
    }
  };
  // 取消
  const cancel = () => {
    if (!onCancel) {
      setWrapperVisible(false);
    }
    if (!isCloseWorking.current) {
      isCloseWorking.current = true;
      if (typeof onCancel === 'function' && isPromiseFn(onCancel)) {
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
      }
    }
  };
  const drawerContentStyle = useMemo(() => {
    const size = typeof width === 'string' ? width : `${width}%`;
    function getStyleByAlign(align: alignProps) {
      switch (align) {
        case 'right':
          return {
            top: 0,
            right: 0,
            height: '100%',
            width: size,
          };
        case 'left':
          return {
            top: 0,
            left: 0,
            height: '100%',
            width: size,
          };
        case 'bottom':
          return {
            bottom: 0,
            left: 0,
            width: '100%',
            height: size,
          };
        case 'top':
          return {
            top: 0,
            left: 0,
            width: '100%',
            height: size,
          };
        default: {
          return {
            top: 0,
            right: 0,
            height: '100%',
            width: size,
          };
        }
      }
    }
    return getStyleByAlign(align);
  }, [align]);

  return (
    <div className={classNames} style={style} ref={ref}>
      <CSSTransition
        in={wrapperVisible}
        timeout={200}
        appear
        mountOnEnter
        classNames="fadedrawer"
        unmountOnExit
        onEnter={(e: HTMLDivElement) => {
          e.style.display = 'block';
        }}
        onExited={(e: HTMLDivElement) => {
          e.style.display = 'none';
        }}
      >
        <div className="concis-drawer-dialog">
          <CSSTransition
            in={wrapperVisible}
            timeout={300}
            appear
            mountOnEnter
            classNames={`fadedrawer-${align}-content`}
            unmountOnExit
            onEnter={(e: HTMLDivElement) => {
              e.style.display = 'flex';
            }}
            onExited={(e: HTMLDivElement) => {
              e.style.display = 'none';
            }}
          >
            <div
              className="concis-drawer-content"
              style={drawerContentStyle}
              onClick={(e: any) => e.stopPropagation()}
            >
              <div className="concis-drawer-content-header">
                <div className="concis-title">
                  <div className="title">
                    <span> {title}</span>
                  </div>
                  <CloseOutlined
                    className="close-icon"
                    style={{ fontSize: '12px' }}
                    onClick={cancel}
                  />
                </div>
              </div>
              <div className="concis-drawer-content-view">{children}</div>
              <div className="concis-drawer-content-footer">
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

export default forwardRef<unknown, DrawerProps>(Drawer);
