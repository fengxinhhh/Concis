import React, { FC, useContext, useEffect, memo, useMemo, useRef } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../../../../scripts/common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { ctx } from './group';
import { avatarProps, avatarStyles } from './interface';
import './styles/avatar.module.less';

const Avatar: FC<avatarProps> = (props) => {
  const {
    children,
    className,
    style = {},
    size = 40,
    shape,
    autoFixFontSize = true,
    triggerType = 'button',
    triggerIcon,
    triggerClick,
  } = props;

  const groupProps = useContext(ctx);
  const textRef = useRef(null);

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(prefixCls, className, 'concis-avatar');

  useEffect(() => {
    autoFixFontSizeHandler();
  }, []);
  const autoFixFontSizeHandler = () => {
    if (autoFixFontSize) {
      //如果用户配置了文本自适应
      if (textRef.current) {
        const textDomWidth = (textRef.current as HTMLElement).clientWidth;
        const avatarSize = groupProps.size || size || 40;
        if (textDomWidth - avatarSize > 0) {
          //文本不够，需要自适应
          (textRef.current as HTMLElement).style.transform = `scale(${
            1 - (textDomWidth - avatarSize + 5) / 100
          })`;
        }
      }
    }
  };
  const formatStyle = useMemo(() => {
    //整合所有头像传参样式
    const returnStyle: avatarStyles = { ...groupProps.groupStyle, ...style };
    if (Object.keys(groupProps).length > 0) {
      //头像组
      if (groupProps.size) {
        returnStyle.width = `${groupProps.size}px`;
        returnStyle.height = `${groupProps.size}px`;
        returnStyle.fontSize = `${groupProps.size / 3}px`;
      }
    } else {
      //单头像
      if (size) {
        returnStyle.width = `${size}px`;
        returnStyle.height = `${size}px`;
        returnStyle.fontSize = `${size / 3}px`;
      }
    }
    if (shape && shape === 'square') {
      returnStyle.borderRadius = '5px';
    }
    return returnStyle;
  }, [style, shape, size, groupProps]);
  const buttonDialogTransform = useMemo(() => {
    return shape == 'square' ? { right: '-2px', bottom: '-2px' } : { right: '2px', bottom: '-2px' };
  }, [triggerType]);
  const handleClick = () => {
    triggerClick && triggerClick();
  };

  return (
    <div className={classNames} style={formatStyle}>
      {children && (children as any).type === 'img' ? (
        children
      ) : (
        <div ref={textRef} className="text-ref">
          {children}
        </div>
      )}
      {
        //按钮式dialog
        triggerType === 'button' && triggerIcon && (
          <div className="button-dialog" style={buttonDialogTransform} onClick={handleClick}>
            {triggerIcon}
          </div>
        )
      }
      {
        //内嵌式dialog
        triggerType === 'mask' && triggerIcon && (
          <div className="dialog">
            <div className="icon" onClick={handleClick}>
              {triggerIcon}
            </div>
          </div>
        )
      }
    </div>
  );
};

export default memo(Avatar);
