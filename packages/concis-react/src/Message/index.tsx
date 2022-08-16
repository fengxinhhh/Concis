import React, { useState, useEffect, useMemo, useRef, CSSProperties, useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  ExclamationCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  LoadingOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { MessageProps } from './interface';
import './index.module.less';

let container: HTMLDivElement | null;
let topMessageNum: number = 0;
let bottomMessageNum: number = 0;

function addInstance(
  type: 'info' | 'success' | 'warning' | 'error' | 'normal' | 'loading',
  props: string | MessageProps<string>
) {
  let style: CSSProperties = {},
    duration: number = 3000,
    content,
    position: 'top' | 'bottom' = 'top',
    clearable = false,
    dark = false;
  if (typeof props === 'object') {
    style = props.style || {};
    duration = props.duration || 3000;
    content = props.content;
    position = props.position ? props.position : 'top';
    clearable = props.clearable ? props.clearable : false;
    dark = props.dark ? props.dark : false;
  } else if (typeof props === 'string') {
    content = props;
  }
  const div = document.createElement('div');
  const messageBoxId = String(Math.floor(Math.random() * 1000));
  div.setAttribute('class', `${position}-${messageBoxId}`);
  if (container) {
    container.appendChild(div);
  } else {
    container = document.createElement('div');
    container.setAttribute('class', 'all-container');
    document.body.appendChild(container);
    container.appendChild(div);
  }
  setTimeout(() => {
    if (Array.prototype.slice.call(container?.childNodes).includes(div)) {
      changeHeight(Array.prototype.slice.call(container?.childNodes), position);
      container?.removeChild(div);
      if (position === 'top') {
        topMessageNum--;
      } else {
        bottomMessageNum--;
      }
    }
  }, duration + 200);
  ReactDOM.render(
    <Message
      style={style}
      content={content}
      type={type}
      duration={duration}
      position={position}
      clearable={clearable}
      messageBoxId={messageBoxId}
      dark={dark}
    />,
    div
  );
}
function remove(id: string, position: string) {
  // 重排节点下元素高度
  const container = document.querySelector('.all-container');
  const children = Array.prototype.slice.call(container?.childNodes);
  for (const key in children) {
    if (children[key].getAttribute('class') === `${position}-${id}`) {
      const removeDom = children[key];
      container?.removeChild(removeDom);
      if (position === 'top') {
        topMessageNum--;
      } else {
        bottomMessageNum--;
      }
      changeHeight(children.slice(Number(key)), position);
    }
  }
}
function changeHeight(children: Array<HTMLElement>, position: any) {
  for (const key in children) {
    const child = children[key].childNodes[0] as HTMLElement;
    if (children[key].getAttribute('class')?.startsWith(position)) {
      child.style[position] = `${Number(child.style[position].split('p')[0]) - 70}px`;
    }
  }
}
const Message = (props: MessageProps<string>) => {
  const { style, content, type, duration, position, clearable, messageBoxId, dark } = props;
  const [opac, setOpac] = useState(1);
  const messageDom = useRef<any>(null);

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(
    prefixCls,
    dark ? 'concis-dark-message-container' : 'concis-message-container'
  );

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
    (messageDom?.current as HTMLElement).style[transform] = `${
      (transform === 'top' ? topMessageNum : bottomMessageNum) * 70
    }px`;
  }, [topMessageNum, bottomMessageNum]);

  const messageIcon = useMemo(() => {
    if (type === 'info') {
      return <ExclamationCircleFilled style={{ color: '#325DFF', fontSize: '16px' }} />;
    }
    if (type === 'error') {
      return <CloseCircleFilled style={{ color: '#f53f3f', fontSize: '16px' }} />;
    }
    if (type === 'normal') {
      return <></>;
    }
    if (type === 'success') {
      return <CheckCircleFilled style={{ color: '#00b42a', fontSize: '16px' }} />;
    }
    if (type === 'warning') {
      return <ExclamationCircleFilled style={{ color: '#ff7d00', fontSize: '16px' }} />;
    }
    if (type === 'loading') {
      return <LoadingOutlined style={{ color: '#325DFF', fontSize: '16px' }} />;
    }
  }, [type]);
  const closeMessage = () => {
    remove(messageBoxId as string, position as string);
  };

  return (
    <div className={classNames} style={{ opacity: opac, ...style }} ref={messageDom}>
      {messageIcon}
      <span className="toast-content">{content}</span>
      {clearable && <CloseOutlined onClick={closeMessage} />}
    </div>
  );
};

Message.info = (props: string | MessageProps<string>) => {
  return addInstance('info', props);
};
Message.success = (props: string | MessageProps<string>) => {
  return addInstance('success', props);
};
Message.error = (props: string | MessageProps<string>) => {
  return addInstance('error', props);
};
Message.normal = (props: string | MessageProps<string>) => {
  return addInstance('normal', props);
};
Message.warning = (props: string | MessageProps<string>) => {
  return addInstance('warning', props);
};
Message.loading = (props: string | MessageProps<string>) => {
  return addInstance('loading', props);
};

export default Message;
