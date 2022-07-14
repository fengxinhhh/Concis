import React, { FC, useMemo, memo, useContext } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

interface dividerProps {
  children?: any;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 字体大小
   */
  fontSize?: Number;
  /**
   * @description 分割线颜色
   * @default #e5e6eb
   */
  borderColor?: String;
  /**
   * @description 对齐方式
   * @default center
   */
  align?: String;
  /**
   * @description 分割线类型
   * @default border
   */
  dashed?: Boolean;
}
const Divider: FC<dividerProps> = memo((props) => {
  const { children, className, fontSize, borderColor, align, dashed } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classFirstName = 'concis-divider';
  const classNames = cs(prefixCls, className, classFirstName);

  const lineAlign = useMemo(() => {
    if (align === 'left') {
      return {
        justifyContent: 'left',
      };
    } else if (align === 'right') {
      return {
        justifyContent: 'right',
      };
    }
    return {};
  }, [align]);
  const lineColor = useMemo((): Object => {
    if (borderColor) {
      return {
        borderColor: borderColor,
      };
    }
    return {};
  }, [borderColor]);
  const textStyle = useMemo(() => {
    if (fontSize) {
      return {
        fontSize: `${fontSize}px`,
      };
    }
  }, [fontSize]);
  return (
    <div className={classNames}>
      <div
        className={dashed ? `${classFirstName}-dashed` : `${classFirstName}-line`}
        style={{ ...lineAlign, ...lineColor }}
      >
        {children && (
          <span className={`${classFirstName}-line-text`} style={textStyle}>
            {children}
          </span>
        )}
      </div>
    </div>
  );
});

export default Divider;
