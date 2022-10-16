import React, { useContext, useMemo, useState, forwardRef } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { TagProps } from './interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import './index.module.less';

const Tag = (props, ref) => {
  const {
    children,
    className,
    style = {},
    color,
    size = 'default',
    tagBackground,
    checkable = false,
    closeable = false,
    defaultChecked = true,
    clickCallback,
    checkCallback,
    closeCallback,
  } = props;

  const [visible, setVisible] = useState<boolean>(defaultChecked);
  const [show, setShow] = useState<boolean>(true);

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, darkTheme ? 'concis-dark-tag' : 'concis-tag');

  const clickTag = () => {
    clickCallback && clickCallback();
    if (!checkable) return;
    if (checkable) {
      setVisible(!visible);
      checkCallback && checkCallback(!visible);
    }
  };
  const closeTag = () => {
    setShow(false);
    closeCallback && closeCallback();
  };
  const mergeStyle = useMemo(() => {
    const returnStyle: any = { ...style, '--size': '' };
    if (color) {
      returnStyle.color = color;
    }
    if (tagBackground) {
      returnStyle.background = tagBackground;
    }
    if (checkable && !visible) {
      returnStyle.background = 'transparent';
    }
    switch (size) {
      case 'large':
        returnStyle['--size'] = '32px';
        break;
      case 'medium':
        returnStyle['--size'] = '28px';
        break;
      case 'default':
        returnStyle['--size'] = '24px';
        break;
      case 'small':
        returnStyle['--size'] = '20px';
        break;
      default:
        returnStyle['--size'] = '24px';
    }
    return returnStyle;
  }, [color, tagBackground, visible, size]);

  return show ? (
    <div className={classNames} style={mergeStyle} ref={ref} onClick={clickTag}>
      <div className="tag-content">
        <div className="tag-text">{children}</div>
        {closeable && <CloseOutlined className="close-icon" onClick={closeTag} />}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default forwardRef<unknown, TagProps>(Tag);
