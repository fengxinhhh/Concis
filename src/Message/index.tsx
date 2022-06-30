import React, { useState, useEffect, useMemo, useRef, memo, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { MessageProps } from './interface';
import './index.module.less';
import {
  ExclamationCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  LoadingOutlined,
  CloseOutlined,
} from '@ant-design/icons';

let container: HTMLDivElement | null;
let topMessageNum: number = 0;
let bottomMessageNum: number = 0;

function addInstance(
  type: 'info' | 'success' | 'warning' | 'error' | 'normal' | 'loading',
  props: string | MessageProps,
) {
  let style: CSSProperties = {},
    duration: number = 3000,
    content,
    position: 'top' | 'bottom' = 'top',
    clearable = false;
  if (typeof props === 'object') {
    style = props.style || {};
    duration = props.duration || 3000;
    content = props.content;
    position = props.position ? props.position : 'top';
    clearable = props.clearable ? props.clearable : false;
  } else if (typeof props === 'string') {
    content = props;
  }
  const div = document.createElement('div');
  if (container) {
    container.appendChild(div);
  } else {
    container = document.createElement('div');
    container.setAttribute('class', 'all-container');
    document.body.appendChild(container);
    container.appendChild(div);
  }
  setTimeout(() => {
    if (position === 'top') {
      topMessageNum--;
    } else {
      bottomMessageNum--;
    }
    container?.removeChild(div);
  }, duration + 200);
  ReactDOM.render(
    <Message
      style={style}
      content={content}
      type={type}
      duration={duration}
      position={position}
      clearable={clearable}
    />,
    div,
  );
}
const Message = (props: MessageProps) => {
  const { style, content, type, duration, position, clearable } = props;
  const [opac, setOpac] = useState(1);
  const messageDom = useRef<any>(null);

  useEffect(() => {
    if (position === 'top') {
      topMessageNum++;
    } else {
      bottomMessageNum++;
    }
    setTimeout(() => {
      (messageDom.current as HTMLElement).style.transition = '0.2s linear';
      (messageDom.current as HTMLElement).style.animation = 'none';
    }, 500);
    setTimeout(() => {
      setOpac(0);
    }, duration);
  }, []);
  useEffect(() => {
    const transform = position || 'top';
    (messageDom.current as HTMLElement).style[transform] =
      (transform === 'top' ? topMessageNum : bottomMessageNum) * 70 + 'px';
  }, [topMessageNum, bottomMessageNum]);

  const messageIcon = useMemo(() => {
    if (type === 'info') {
      return <ExclamationCircleFilled style={{ color: '#1890ff', fontSize: '16px' }} />;
    } else if (type === 'error') {
      return <CloseCircleFilled style={{ color: '#f53f3f', fontSize: '16px' }} />;
    } else if (type === 'normal') {
      return <></>;
    } else if (type === 'success') {
      return <CheckCircleFilled style={{ color: '#19b42a', fontSize: '16px' }} />;
    } else if (type === 'warning') {
      return <ExclamationCircleFilled style={{ color: '#fa7d00', fontSize: '16px' }} />;
    } else if (type === 'loading') {
      return <LoadingOutlined style={{ color: '#1890ff', fontSize: '16px' }} />;
    }
  }, [type]);

  return (
    <div className="message-container" style={{ opacity: opac, ...style }} ref={messageDom}>
      {messageIcon}
      <span className="toast-content">{content}</span>
      {clearable && <CloseOutlined onClick={() => setOpac(0)} />}
    </div>
  );
};

Message.info = (props: string | MessageProps) => {
  return addInstance('info', props);
};
Message.success = (props: string | MessageProps) => {
  return addInstance('success', props);
};
Message.error = (props: string | MessageProps) => {
  return addInstance('error', props);
};
Message.normal = (props: string | MessageProps) => {
  return addInstance('normal', props);
};
Message.warning = (props: string | MessageProps) => {
  return addInstance('warning', props);
};
Message.loading = (props: string | MessageProps) => {
  return addInstance('loading', props);
};

export default memo(Message);
