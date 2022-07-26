import React, { useState, useEffect, useMemo, useRef, CSSProperties, useContext } from 'react';
import ReactDOM from 'react-dom';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { NotificationProps, footerBtnVal } from './interface';
import Button from '../Button';
import './index.module.less';
import {
  ExclamationCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  LoadingOutlined,
  CloseOutlined,
} from '@ant-design/icons';

let container: HTMLDivElement | null;
let topLeftMessageNum: number = 0;
let topRightMessageNum: number = 0;
let bottomLeftMessageNum: number = 0;
let bottomRightMessageNum: number = 0;

//添加消息窗口
function addInstance(
  type: 'info' | 'success' | 'warning' | 'error' | 'normal' | 'loading',
  props: string | NotificationProps<string>,
) {
  let style: CSSProperties = {},
    duration: number = 3000,
    title: string = '',
    content: string = '',
    position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' = 'topRight',
    clearable: boolean = false,
    showFooter: boolean = false,
    dark: boolean = false,
    footerBtnVal: footerBtnVal = {
      enter: 'OK',
      exit: 'Cancel',
    },
    doneCallback: Function | undefined;
  if (typeof props === 'object') {
    title = props.title;
    style = props.style || {};
    duration = props.duration || 3000;
    content = props.content as string;
    doneCallback = props.doneCallback;
    dark = props.dark ? props.dark : false;
    if (!props.position) {
      position = 'topRight';
    } else {
      position = props.position;
    }
    clearable = props.clearable ? props.clearable : false;
    showFooter = props.showFooter ? props.showFooter : false;
    if (props.footerBtnVal) {
      footerBtnVal = props.footerBtnVal as footerBtnVal;
    }
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
    container.setAttribute('class', 'notification-container');
    document.body.appendChild(container);
    container.appendChild(div);
  }
  setTimeout(() => {
    if (Array.prototype.slice.call(container?.childNodes).includes(div)) {
      changeHeight(Array.prototype.slice.call(container?.childNodes), position);
      container?.removeChild(div);
      if (position === 'topLeft') {
        topLeftMessageNum--;
      } else if (position === 'topRight') {
        topRightMessageNum--;
      } else if (position === 'bottomLeft') {
        bottomLeftMessageNum--;
      } else if (position === 'bottomRight') {
        bottomRightMessageNum--;
      }
    }
  }, duration + 200);
  //挂载组件
  ReactDOM.render(
    <Notification
      title={title}
      style={style}
      content={content}
      type={type}
      duration={duration}
      position={position}
      clearable={clearable}
      showFooter={showFooter}
      footerBtnVal={footerBtnVal}
      doneCallback={doneCallback}
      messageBoxId={messageBoxId}
      dark={dark}
    />,
    div,
  );
}
//移除窗口
function remove(id: string, position: string, callback: Function) {
  const container = document.querySelector('.notification-container');
  const children = Array.prototype.slice.call(container?.childNodes);

  for (let key in children) {
    if (children[key].getAttribute('class') === `${position}-${id}`) {
      const removeDom = children[key];
      console.log(removeDom.childNodes);
      removeDom.childNodes[0].style.opacity = 0;
      setTimeout(() => {
        container?.removeChild(removeDom);
      }, 50);

      if (position === 'topLeft') {
        topLeftMessageNum--;
      } else if (position === 'topRight') {
        topRightMessageNum--;
      } else if (position === 'bottomLeft') {
        bottomLeftMessageNum--;
      } else if (position === 'bottomRight') {
        bottomRightMessageNum--;
      }
      changeHeight(children.slice(Number(key)), position);
      callback();
    }
  }
}
//重排节点下窗口高度
function changeHeight(children: Array<HTMLElement>, position: any) {
  const transform = position.startsWith('top') ? 'top' : 'bottom';
  for (let key in children) {
    const child = children[key].childNodes[0] as HTMLElement;
    if (children[key].getAttribute('class')?.startsWith(transform)) {
      const domHeight = document.querySelector('.concis-notifica-container')?.clientHeight;
      child.style[transform] =
        Number(child.style[transform].split('p')[0]) - 30 - (domHeight as number) + 'px';
    }
  }
}
const Notification = (props: NotificationProps<string>) => {
  const {
    style,
    title,
    content,
    type,
    duration,
    position,
    clearable,
    showFooter,
    footerBtnVal,
    doneCallback,
    messageBoxId,
    dark,
  } = props;
  const [opac, setOpac] = useState(1);
  const messageDom = useRef<any>(null);

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(
    prefixCls,
    dark ? 'concis-dark-notifica-container' : 'concis-notifica-container',
  );

  useEffect(() => {
    if (position === 'topLeft') {
      topLeftMessageNum++;
    } else if (position === 'topRight') {
      topRightMessageNum++;
    } else if (position === 'bottomLeft') {
      bottomLeftMessageNum++;
    } else if (position === 'bottomRight') {
      bottomRightMessageNum++;
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
    let transform;
    if (position?.startsWith('top')) {
      transform = 'top';
    } else {
      transform = 'bottom';
    }
    let defaultHeight = 0;
    let avaHeight;
    if (position === 'topLeft' && topLeftMessageNum >= 1) {
      defaultHeight = messageDom.current.clientHeight * (topLeftMessageNum - 1);
      avaHeight = topLeftMessageNum;
    } else if (position === 'topRight' && topRightMessageNum >= 1) {
      defaultHeight = messageDom.current.clientHeight * (topRightMessageNum - 1);
      avaHeight = topRightMessageNum;
    } else if (position === 'bottomLeft' && bottomLeftMessageNum >= 1) {
      defaultHeight = messageDom.current.clientHeight * (bottomLeftMessageNum - 1);
      avaHeight = bottomLeftMessageNum;
    } else if (position === 'bottomRight' && bottomRightMessageNum >= 1) {
      defaultHeight = messageDom.current.clientHeight * (bottomRightMessageNum - 1);
      avaHeight = bottomRightMessageNum;
    }
    (messageDom?.current as HTMLElement).style[transform as 'top' | 'bottom'] =
      (avaHeight as number) * 30 + defaultHeight + 'px';
  }, [topLeftMessageNum, topRightMessageNum, bottomLeftMessageNum, bottomRightMessageNum]);

  const messageIcon = useMemo(() => {
    if (type === 'info') {
      return <ExclamationCircleFilled style={{ color: '#1890ff', fontSize: '24px' }} />;
    } else if (type === 'error') {
      return <CloseCircleFilled style={{ color: '#f53f3f', fontSize: '24px' }} />;
    } else if (type === 'normal') {
      return <></>;
    } else if (type === 'success') {
      return <CheckCircleFilled style={{ color: '#19b42a', fontSize: '24px' }} />;
    } else if (type === 'warning') {
      return <ExclamationCircleFilled style={{ color: '#fa7d00', fontSize: '24px' }} />;
    } else if (type === 'loading') {
      return <LoadingOutlined style={{ color: '#1890ff', fontSize: '24px' }} />;
    }
  }, [type]);

  const messageXtransform = useMemo(() => {
    //提示框水平位置，居左/居右
    if (position?.includes('Left')) {
      return {
        left: '20px',
      };
    } else {
      return {
        right: '20px',
      };
    }
  }, [position]);
  const closeMessage = () => {
    //close按钮关闭
    remove(messageBoxId as string, position as string, () => {
      doneCallback && doneCallback(1);
    });
  };
  const enter = () => {
    //确认关闭
    remove(messageBoxId as string, position as string, () => {
      doneCallback && doneCallback(2);
    });
  };
  const exit = () => {
    //取消关闭
    remove(messageBoxId as string, position as string, () => {
      doneCallback && doneCallback(3);
    });
  };

  return (
    <div
      className={classNames}
      style={{ opacity: opac, ...messageXtransform, ...style }}
      ref={messageDom}
    >
      <div className="title">
        <div className="title-left">
          {messageIcon}
          <span className="title-content">{title}</span>
        </div>
        {clearable && <CloseOutlined className="close-icon" onClick={closeMessage} />}
      </div>
      <div className="notification-content">{content}</div>
      {showFooter && (
        <div className="notification-footer">
          <div></div>
          <div>
            <Button type="text" height={30} handleClick={enter}>
              {(footerBtnVal as footerBtnVal).exit}
            </Button>
            <Button type="primary" height={30} style={{ marginLeft: '15px' }} handleClick={exit}>
              {(footerBtnVal as footerBtnVal).enter}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

Notification.info = (props: string | NotificationProps<string>) => {
  return addInstance('info', props);
};
Notification.success = (props: string | NotificationProps<string>) => {
  return addInstance('success', props);
};
Notification.error = (props: string | NotificationProps<string>) => {
  return addInstance('error', props);
};
Notification.normal = (props: string | NotificationProps<string>) => {
  return addInstance('normal', props);
};
Notification.warning = (props: string | NotificationProps<string>) => {
  return addInstance('warning', props);
};
Notification.loading = (props: string | NotificationProps<string>) => {
  return addInstance('loading', props);
};

export default Notification;
