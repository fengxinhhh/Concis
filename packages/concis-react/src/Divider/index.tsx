import React, { useMemo, useContext, useCallback, forwardRef } from 'react';
import { DividerStyle } from './style';
import type { DividerProps } from './interface';
import type { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';

const Divider = (props, ref) => {
  const { children, style, className, fontSize, align } = props;

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classFirstName = darkTheme ? 'concis-dark-divider' : 'concis-divider';
  const classNames = cs(prefixCls, className, classFirstName);

  const lineAlign = useMemo(() => {
    if (align === 'left' || align === 'right') {
      return {
        justifyContent: align,
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
      if (
        (domAlign === 'left' && align === 'left') ||
        (domAlign === 'right' && align === 'right')
      ) {
        return {
          flexBasis: '24px',
          flexGrow: 0,
        };
      }
      return {};
    },
    [align]
  );

  const formatClass = (className: string) => {
    return `${classFirstName}-${className}`;
  };

  return (
    <DividerStyle>
      <div className={classNames} style={style} ref={ref}>
        <div className={formatClass('line')} style={{ ...lineAlign }}>
          {children && (
            <>
              <span className={formatClass('before-line-text')} style={lineStyle('left')} />
              <span className={formatClass('line-text')} style={textStyle}>
                {children}
              </span>
              <span className={formatClass('after-line-text')} style={lineStyle('right')} />
            </>
          )}
        </div>
      </div>
    </DividerStyle>
  );
};

export default forwardRef<unknown, DividerProps>(Divider);
