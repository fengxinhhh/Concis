import React, { useCallback, useContext, forwardRef } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import type { stepsProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../common_utils/getRenderColor';
import './index.module.less';

const Steps = (props, ref) => {
  const { current, className, style, onChange, children } = props;

  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}steps`);

  const indexClassName = useCallback(
    (index: number): string => {
      if (index === current) {
        return 'active-index';
      }
      if (index > current) {
        return 'after-index';
      }
      if (index < current) {
        return 'before-index';
      }
      return 'before-index';
    },
    [current]
  );
  const indexTitleClassName = useCallback(
    (args: string): string => {
      return onChange ? `hover-title ${args}` : args;
    },
    [current]
  );
  return (
    <div
      className={classNames}
      style={
        {
          '--global-color': getRenderColor(
            (getSiteTheme() === ('dark' || 'auto') || darkTheme) as boolean,
            globalColor
          ),
          ...style,
        } as any
      }
      ref={ref}
    >
      <div className="step-content">
        <div className="step-line">
          {!children
            ? null
            : children.map((step: any, index: number) => {
                return (
                  <div
                    className="step-box"
                    key={index}
                    onClick={() => {
                      onChange && onChange(index + 1);
                    }}
                  >
                    {index + 1 < current ? (
                      <div className={indexClassName(index + 1)}>
                        <CheckOutlined />
                      </div>
                    ) : (
                      <span className={indexClassName(index + 1)}>{index + 1}</span>
                    )}

                    <div className="sub-content">
                      <div className="top">
                        <span
                          className={
                            index + 1 > current
                              ? indexTitleClassName('grey-title')
                              : indexTitleClassName('light-title')
                          }
                        >
                          {step.props.title}
                        </span>
                        <span className="sub-title">{step.props.subTitle}</span>
                      </div>
                      <div
                        className={
                          index + 1 !== current
                            ? indexTitleClassName('bottom grey-title')
                            : indexTitleClassName('bottom light-title')
                        }
                      >
                        {step.props.description}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default forwardRef<unknown, stepsProps>(Steps);
