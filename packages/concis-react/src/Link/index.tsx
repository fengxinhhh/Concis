import React, { useContext, forwardRef } from 'react';
import { LinkOutlined } from '@ant-design/icons';
import { LinkStyle } from './style';
import { LinkProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';

const Link = (props, ref) => {
  const { children, className, style, href, status = 'primary', disabled, icon = false } = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(
    prefixCls,
    className,
    darkTheme ? 'concis-dark-link' : 'concis-link',
    `concis-link-${status}`,
    disabled ? 'concis-link-disabled' : null
  );

  const TagWrapper = !disabled && href ? 'a' : 'span';

  return (
    <LinkStyle>
      <TagWrapper className={classNames} style={style} href={href} ref={ref}>
        {icon && <div className="concis-link-icon">{icon === true ? <LinkOutlined /> : icon}</div>}
        {children}
      </TagWrapper>
    </LinkStyle>
  );
};

const forwardRefLink = forwardRef<unknown, LinkProps>(Link);

forwardRefLink.displayName = 'Link';

export default forwardRefLink;
