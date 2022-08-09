import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps, ConfirmType } from './interface';
import Modal from './index';
import './index.module.less';

function confirm(props: ModalProps, type: ConfirmType) {
  const div = document.createElement('div');
  div.setAttribute('class', 'concis-modal-confirm');
  document.body.appendChild(div);
  const isPromiseOk = props.onOk && isPromiseFn(props.onOk);
  const isPromiseCancel = props.onCancel && isPromiseFn(props.onCancel);

  ReactDOM.render(
    <Modal
      {...props}
      visible
      type={type}
      isPromiseOk={isPromiseOk}
      isPromiseCancel={isPromiseCancel}
      confirm
    >
      {props.content}
    </Modal>,
    div
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
