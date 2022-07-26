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
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { CloseOutlined } from '@ant-design/icons';
import Button from '../Button';
import { ModalProps, ConfirmType } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../common_utils/getRenderColor';
import useOverFlowScroll from '../common_utils/hooks/useOverFlowScroll';
import Modal from './index';
import './index.module.less';

function confirm(props: ModalProps, type: ConfirmType) {
  const div = document.createElement('div');
  div.setAttribute('class', 'concis-modal-confirm');
  document.body.appendChild(div);
  const isPromiseOk = isPromiseFn(props.onOk);
  const isPromiseCancel = isPromiseFn(props.onCancel);

  ReactDOM.render(
    <Modal
      {...props}
      visible={true}
      type={type}
      isPromiseOk={isPromiseOk}
      isPromiseCancel={isPromiseCancel}
      confirm
    >
      {props.content}
    </Modal>,
    div,
  );
}

function isPromiseFn(fn: Function): boolean {
  if (fn && fn.toString().trim().includes('new Promise')) {
    return true;
  }
  return false;
}

export { isPromiseFn };
export default confirm;
