import React, { useContext } from 'react';
import { LinkOutlined } from '@ant-design/icons';
import { LinkProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

export default function Link(props: LinkProps) {
  const { children, className, style, href, status = 'primary', disabled, icon = false } = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(
    prefixCls,
    className,
    darkTheme ? 'concis-dark-link' : 'concis-link',
    `concis-link-${status}`,
    disabled ? 'concis-link-disabled' : ''
  );

  const TagWrapper = !disabled && href ? 'a' : 'span';

  return (
    <TagWrapper className={classNames} style={style} href={href}>
      {icon && <div className="concis-link-icon">{icon === true ? <LinkOutlined /> : icon}</div>}
      {children}
    </TagWrapper>
  );
}
