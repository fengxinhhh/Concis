import React, { useContext, useState, forwardRef } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { TagStyle } from './style';
import { TagProps } from './interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';

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

  const getTagSize = () => {
    const sizeMap = {
      large: '32px',
      medium: '28px',
      default: '24px',
      small: '20px',
    };
    return sizeMap[size] || sizeMap.default;
  };

  return show ? (
    <TagStyle
      size={getTagSize}
      color={color}
      tagBackground={tagBackground}
      isCheckable={checkable && !visible}
    >
      <div className={classNames} style={style} ref={ref} onClick={clickTag}>
        <div className="tag-content">
          <div className="tag-text">{children}</div>
          {closeable && <CloseOutlined className="close-icon" onClick={closeTag} />}
        </div>
      </div>
    </TagStyle>
  ) : (
    <></>
  );
};

export default forwardRef<unknown, TagProps>(Tag);
