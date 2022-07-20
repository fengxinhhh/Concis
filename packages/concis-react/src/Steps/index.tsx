import React, { FC, memo, useCallback, useContext } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../common_utils/getRenderColor';
import { CheckOutlined } from '@ant-design/icons';
import './index.module.less';

interface stepsProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   *
   * @description 当前步骤下标
   * @default 1
   */
  current: number;
  /**
   * @description 步骤标题
   */
  title?: string;
  /**
   * @description 步骤子标题
   */
  subTitle?: string;
  /**
   * @description 步骤描述
   */
  description?: string;
  /**
   * @description 点击步骤条回调函数
   */
  onChange?: (value: number) => void;
  children: any;
}

const Steps: FC<stepsProps> = (props: stepsProps) => {
  const { current, className, onChange, children } = props;

  const { globalColor, prefixCls } = useContext(globalCtx) as GlobalConfigProps;
  const theme = getSiteTheme();

  const classNames = cs(prefixCls, className, 'concis-steps');

  const indexClassName = useCallback(
    (index: number): string => {
      if (index == current) {
        return 'active-index';
      } else if (index > current) {
        return 'after-index';
      } else if (index < current) {
        return 'before-index';
      }
      return 'before-index';
    },
    [current],
  );
  const indexTitleClassName = useCallback(
    (args: string): string => {
      return onChange ? 'hover-title ' + args : args;
    },
    [current],
  );
  return (
    <div
      className={classNames}
      style={{ '--global-color': getRenderColor(theme === ('auto' || 'dark'), globalColor) } as any}
    >
      <div className="step-content">
        {/* <div className="line" /> */}
        <div className="step-line">
          {children.map((step: any, index: number) => {
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

export default memo(Steps);
