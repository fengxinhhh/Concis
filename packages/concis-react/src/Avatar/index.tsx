import React, { useContext, useEffect, useRef, forwardRef } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import { AvatarStyle } from './style';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { ctx } from './group';
import { avatarProps } from './interface';

const Avatar = (props, ref) => {
  const {
    children,
    className,
    style = {},
    size = 40,
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
      // 如果用户配置了文本自适应
      if (textRef.current) {
        const textDomWidth = (textRef.current as HTMLElement).clientWidth;
        const avatarSize = groupProps.size || size || 40;
        if (textDomWidth - avatarSize > 0) {
          // 文本不够，需要自适应
          (textRef.current as HTMLElement).style.transform = `scale(${
            1 - (textDomWidth - avatarSize + 5) / 100
          })`;
        }
      }
    }
  };

  const handleClick = () => {
    triggerClick && triggerClick();
  };

  return (
    <AvatarStyle props={props} groupProps={groupProps}>
      <div className={classNames} style={{ ...groupProps.groupStyle, ...style }} ref={ref}>
        {children && (children as any).type === 'img' ? (
          children
        ) : (
          <div ref={textRef} className="text-ref">
            {children}
          </div>
        )}
        {
          // 按钮式dialog
          triggerType === 'button' && triggerIcon && (
            <div className="button-dialog" onClick={handleClick}>
              {triggerIcon}
            </div>
          )
        }
        {
          // 内嵌式dialog
          triggerType === 'mask' && triggerIcon && (
            <div className="dialog">
              <div className="icon" onClick={handleClick}>
                {triggerIcon}
              </div>
            </div>
          )
        }
      </div>
    </AvatarStyle>
  );
};

export default forwardRef<HTMLElement, avatarProps>(Avatar);
