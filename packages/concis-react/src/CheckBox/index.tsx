import React, {
  FC,
  memo,
  ReactNode,
  useState,
  useCallback,
  useMemo,
  Fragment,
  useEffect,
  useContext,
} from 'react';
import { ctx } from '../Form';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
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
   * @description 类名
   */
  className?: string;
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

const CheckBox: FC<checkBoxProps> = (props: checkBoxProps) => {
  const { children, className, checked, disabled, group, checkCallback, checkGroupCallback } =
    props;

  const [checkStatus, setCheckStatus] = useState<boolean>();
  const [checkGroup, setCheckGroup] = useState<Array<checkGroup>>(group || []);

  const formCtx: any = useContext(ctx);

  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(
    prefixCls,
    className,
    group && group.length
      ? `concis-${darkTheme ? 'dark-' : ''}checkGroup`
      : `concis-${darkTheme ? 'dark-' : ''}checkbox`,
  );

  useEffect(() => {
    if (checked != undefined) {
      setCheckStatus(checked);
    } else {
      setCheckStatus(false);
    }
  }, [checked]);
  useEffect(() => {
    //用于监听Form组件的重置任务
    if (formCtx.reset) {
      setCheckStatus(checked);
    }
  }, [formCtx.reset]);

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
      return <div className="concis-checkbox-disabled"></div>;
    } else if (checkStatus) {
      return (
        <div className="concis-checkbox-actived">
          <CheckOutlined style={{ fontSize: '12px' }} />
        </div>
      );
    } else {
      return <div className="concis-checkbox-noActived"></div>;
    }
  }, [checkStatus, checked]);
  const renderCheckGroupDom = useCallback(
    (checkBoxOptions: checkGroup) => {
      //渲染checkbox组状态
      if (checkBoxOptions.disabled) {
        return <div className="concis-checkbox-disabled"></div>;
      } else if (checkBoxOptions.checked) {
        return (
          <div className="concis-checkbox-actived">
            <CheckOutlined style={{ fontSize: '12px' }} />
          </div>
        );
      } else if (!checkBoxOptions.checked) {
        return <div className="concis-checkbox-noActived"></div>;
      }
    },
    [group],
  );

  return (
    <Fragment>
      {group && group.length ? (
        <div className={classNames} style={{ '--global-color': globalColor || '#1890ff' } as any}>
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
        <div
          className={classNames}
          onClick={toggleCheckedStatus}
          style={{ '--global-color': globalColor || '#1890ff' } as any}
        >
          {renderCheckBoxDom}
          <div className="text">{children}</div>
        </div>
      )}
    </Fragment>
  );
};

export default memo(CheckBox);
