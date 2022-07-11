import React, { FC, memo, useCallback, useContext } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import { globalCtx } from '../GlobalConfig';
import { CheckOutlined } from '@ant-design/icons';
import './index.module.less';

interface stepsProps {
  /**
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
  children: any;
}

const Steps: FC<stepsProps> = (props) => {
  const { current, children } = props;

  const { globalColor } = useContext(globalCtx) as GlobalConfigProps;

  const indexClassName = useCallback(
    (index: any): string => {
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

  return (
    <div className="steps" style={{ '--global-color': globalColor || '#1890ff' } as any}>
      <div className="step-content">
        {/* <div className="line" /> */}
        <div className="step-line">
          {children.map((step: any, index: number) => {
            return (
              <div className="step-box" key={index}>
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
                      className="title"
                      style={index + 1 > current ? { color: '#999999' } : { color: '#000000' }}
                    >
                      {step.props.title}
                    </span>
                    <span className="sub-title">{step.props.subTitle}</span>
                  </div>
                  <div
                    className="bottom"
                    style={index + 1 !== current ? { color: '#999999' } : { color: '#000000' }}
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
