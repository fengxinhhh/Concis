import React, { FC, memo, ReactNode, useState, useCallback, useMemo, Fragment } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import './index.module.less';

type checkGroup = {
  label: string;
  value: string | number;
  checked?: boolean;
  disabled?: boolean;
};
interface checkBoxProps {
  children?: ReactNode;
  /**
   * @description 默认选中状态
   * @default boolean
   */
  checked?: boolean;
  /**
   * @description 禁用
   * @default boolean
   */
  disabled?: boolean;
  /**
   * @description 多选组配置
   * @default Array
   */
  group?: Array<checkGroup>;
  /**
   * @description 多选框选中回调函数
   */
  checkCallback?: Function;
  /**
   * @description 多选组改变回调函数
   */
  checkGroupCallback?: Function;
}

const CheckBox: FC<checkBoxProps> = (props) => {
  const { children, checked, disabled, group, checkCallback, checkGroupCallback } = props;

  const [checkStatus, setCheckStatus] = useState<boolean>(checked || false);
  const [checkGroup, setCheckGroup] = useState<Array<checkGroup>>(group || []);

  const toggleCheckedStatus = () => {
    //多选单组件切换状态
    if (disabled) return;
    setCheckStatus(!checkStatus);
    checkCallback && checkCallback(!checkStatus);
  };
  const toggleGroupCheckedStatus = (index: number) => {
    //切换多选组状态
    const oldCheckGroup = [...checkGroup];
    oldCheckGroup[index].checked = oldCheckGroup[index]?.checked
      ? !oldCheckGroup[index].checked
      : true;
    setCheckGroup(oldCheckGroup);
    checkGroupCallback && checkGroupCallback(oldCheckGroup);
  };
  const renderCheckBoxDom = useMemo(() => {
    //渲染单check状态
    if (disabled) {
      return <div className="disblaed-checkBox"></div>;
    } else if (checkStatus) {
      return (
        <div className="checkBox-actived">
          <CheckOutlined />
        </div>
      );
    } else {
      return <div className="checkBox-noActived"></div>;
    }
  }, [checkStatus, checked]);
  const renderCheckGroupDom = useCallback(
    (checkBoxOptions: checkGroup) => {
      //渲染checkbox组状态
      if (checkBoxOptions.disabled) {
        return <div className="disblaed-checkBox"></div>;
      } else if (checkBoxOptions.checked) {
        return (
          <div className="checkBox-actived">
            <CheckOutlined />
          </div>
        );
      } else if (!checkBoxOptions.checked) {
        return <div className="checkBox-noActived"></div>;
      }
    },
    [group],
  );

  return (
    <Fragment>
      {group && group.length ? (
        <div className="checkGroup">
          {group.map((c: checkGroup, i: number) => {
            return (
              <div
                className="checkbox groupBox"
                key={i}
                onClick={() => toggleGroupCheckedStatus(i)}
              >
                {renderCheckGroupDom(c)}
                <div className="text">{c.label}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="checkbox" onClick={toggleCheckedStatus}>
          {renderCheckBoxDom}
          <div className="text">{children}</div>
        </div>
      )}
    </Fragment>
  );
};

export default memo(CheckBox);
