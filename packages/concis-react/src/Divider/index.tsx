import React, { useMemo, useContext, useCallback, forwardRef } from 'react';
import type { DividerProps } from './interface';
import type { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

const Divider = (props, ref) => {
  const { children, style, className, fontSize, align } = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classFirstName = darkTheme ? 'concis-dark-divider' : 'concis-divider';
  const classNames = cs(prefixCls, className, classFirstName);

  const lineAlign = useMemo(() => {
    if (align === 'left') {
      return {
        justifyContent: 'left',
      };
    }
    if (align === 'right') {
      return {
        justifyContent: 'right',
      };
    }
    return {};
  }, [align]);
  const textStyle = useMemo(() => {
    if (fontSize) {
      return {
        fontSize: `${fontSize}px`,
      };
    }
  }, [fontSize]);
  const lineStyle = useCallback(
    (domAlign: string) => {
      if (domAlign === 'left' && align === 'left') {
        return {
          flexBasis: '24px',
          flexGrow: 0,
        };
      }
      if (domAlign === 'right' && align === 'right') {
        return {
          flexBasis: '24px',
          flexGrow: 0,
        };
      }
    },
    [align],
  );

  return (
    <div className={classNames} style={style} ref={ref}>
      <div className={`${classFirstName}-line`} style={{ ...lineAlign }}>
        {children && (
          <>
            <span className={`${classFirstName}-before-line-text`} style={lineStyle('left')} />
            <span className={`${classFirstName}-line-text`} style={textStyle}>
              {children}
            </span>
            <span className={`${classFirstName}-after-line-text`} style={lineStyle('right')} />
          </>
        )}
      </div>
    </div>
  );
};

export default forwardRef<unknown, DividerProps>(Divider);
