import React, {
  useState,
  useCallback,
  useMemo,
  Fragment,
  useEffect,
  useContext,
  forwardRef,
} from 'react';
import { CheckOutlined } from '@ant-design/icons';
import type { checkGroup, checkBoxProps } from './interface';
import { ctx } from '../Form';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

const CheckBox = (props, ref) => {
  const {
    children,
    className,
    style,
    checked,
    disabled,
    group,
    checkCallback,
    checkGroupCallback,
  } = props;

  const [checkStatus, setCheckStatus] = useState<boolean>();
  const [checkGroup, setCheckGroup] = useState<Array<checkGroup>>(group || []);

  const formCtx: any = useContext(ctx);

  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(
    prefixCls,
    className,
    disabled ? 'disabled-checkbox' : '',
    group && group.length
      ? `concis-${darkTheme ? 'dark-' : ''}checkGroup`
      : `concis-${darkTheme ? 'dark-' : ''}checkbox`
  );

  const defaultPrimaryColor = '#325DFF';

  const checkBoxDom = {
    disabled: <div className="concis-checkbox-disabled" />,
    actived: (
      <div className="concis-checkbox-actived">
        <CheckOutlined style={{ fontSize: '12px' }} />
      </div>
    ),
    noActived: <div className="concis-checkbox-noActived" />,
  };

  useEffect(() => {
    if (checked !== undefined) {
      setCheckStatus(checked);
    } else {
      setCheckStatus(false);
    }
  }, [checked]);

  useEffect(() => {
    // 用于监听Form组件的重置任务
    if (formCtx.reset) {
      setCheckStatus(checked);
    }
  }, [formCtx.reset]);

  const toggleCheckedStatus = () => {
    // 多选单组件切换状态
    if (disabled) return;
    setCheckStatus(!checkStatus);
    checkCallback && checkCallback(!checkStatus);
  };
  const toggleGroupCheckedStatus = (index: number) => {
    // 切换多选组状态
    const oldCheckGroup = [...checkGroup];
    oldCheckGroup[index].checked = oldCheckGroup[index]?.checked
      ? !oldCheckGroup[index].checked
      : true;
    setCheckGroup(oldCheckGroup);
    checkGroupCallback && checkGroupCallback(oldCheckGroup);
  };

  const renderCheckBoxDom = useMemo(() => {
    // 渲染单check状态
    if (disabled) {
      return checkBoxDom.disabled;
    }
    if (checkStatus) {
      return checkBoxDom.actived;
    }
    return checkBoxDom.noActived;
  }, [checkStatus, checked]);

  const renderCheckGroupDom = useCallback(
    (checkBoxOptions: checkGroup) => {
      // 渲染checkbox组状态
      const { disabled, checked } = checkBoxOptions;

      if (disabled) {
        return checkBoxDom.disabled;
      }
      if (checked) {
        return checkBoxDom.actived;
      }
      return checkBoxDom.noActived;
    },
    [group]
  );

  return (
    <Fragment>
      {group && group.length ? (
        <div
          className={classNames}
          style={{ '--global-color': globalColor || defaultPrimaryColor, ...style } as any}
          ref={ref}
        >
          <div className="concis-checkbox-content">
            {group.map((c: checkGroup, i: number) => {
              return (
                <div
                  className={`checkbox groupBox ${c.disabled ? 'disabled' : ''}`}
                  key={i}
                  onClick={() => toggleGroupCheckedStatus(i)}
                >
                  {renderCheckGroupDom(c)}
                  <div className="text">{c.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div
          className={classNames}
          onClick={toggleCheckedStatus}
          style={{ '--global-color': globalColor || defaultPrimaryColor, ...style } as any}
          ref={ref}
        >
          <div className="concis-checkbox-content">
            {renderCheckBoxDom}
            <div className={disabled ? `text disabled` : `text`}>{children}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default forwardRef<unknown, checkBoxProps>(CheckBox);
