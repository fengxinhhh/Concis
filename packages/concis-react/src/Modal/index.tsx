import React, {
  FC,
  memo,
  useState,
  useEffect,
  useMemo,
  useContext,
  useCallback,
  createRef,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { CloseOutlined } from '@ant-design/icons';
import Button from '../Button';
import { ModalProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../common_utils/getRenderColor';
import useOverFlowScroll from '../common_utils/hooks/useOverFlowScroll';
import './index.module.less';

const Modal: FC<ModalProps> = (props: ModalProps) => {
  const { className, children, title, visible, onCancel, onOk } = props;

  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classFirstName = darkTheme ? 'concis-dark-modal' : 'concis-modal';
  const classNames = cs(prefixCls, className, classFirstName);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      const clickDom = e.target as HTMLElement;
      if (clickDom.getAttribute('class') === 'concis-modal-dialog fadeModal-enter-done') {
        cancel();
      }
    });
  }, []);

  useOverFlowScroll('body', visible);

  const finish = () => {
    onOk && onOk();
  };

  const cancel = () => {
    onCancel && onCancel();
  };

  return (
    <div className={classNames}>
      <CSSTransition
        in={visible}
        timeout={100}
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
            in={visible}
            timeout={100}
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
                  <span>{title}</span>
                  <CloseOutlined
                    className="close-icon"
                    style={{ fontSize: '12px' }}
                    onClick={cancel}
                  />
                </div>
              </div>
              <div className="concis-modal-content-view">{children}</div>
              <div className="concis-modal-content-footer">
                <Button type="text" className="cancel-btn button" handleClick={cancel}>
                  取消
                </Button>
                <Button type="primary" className="enter-btn button" handleClick={finish}>
                  确定
                </Button>
              </div>
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
};

export default memo(Modal);
