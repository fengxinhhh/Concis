import React, { useState, useMemo, useContext, useEffect, forwardRef } from 'react';
import { EyeOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import { InputProps } from './interface';
import { ctx } from '../Form';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLElement>, 'type'>; // 原生Input接口
const Input = (props, ref) => {
  const {
    className,
    style,
    width,
    moreStyle,
    type,
    placeholder,
    showClear,
    showTogglePwd,
    min,
    max,
    step,
    handleIptChange,
    handleKeyDown,
    handleIptFocus,
    handleClick,
    handleIptBlur,
    handleNumChange,
    clearCallback,
    defaultValue,
    isFather = false,
  } = props;

  const [iptValue, setIptValue] = useState<string | number>(defaultValue || '');
  const [pwdIptState, setPwdIptState] = useState(true); // 密码框切换状态

  const { prefixCls, darkTheme, globalColor } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}input`);

  const formCtx: any = useContext(ctx);

  useEffect(() => {
    // 用于监听Form组件的重置任务
    if (formCtx.reset) {
      setIptValue('');
    }
  }, [formCtx.reset]);
  useEffect(() => {
    if (formCtx.submitStatus && !isFather) {
      formCtx.getChildVal(iptValue);
    }
  }, [formCtx.submitStatus]);

  const changeIpt = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 改变文本框
    if (moreStyle && Object.keys(moreStyle).includes('caretColor')) {
      return;
    }
    const val = e.target.value;
    setIptValue(val);
    handleIptChange && handleIptChange(val);
  };
  const blurIpt = () => {
    // 失去焦点
    if (type === 'num') {
      const val = Number(iptValue);
      if (isNaN(val)) {
        setIptValue('');
        handleIptChange && handleIptChange('');
      } else {
        const num = getNum(val);
        if (val !== num) {
          setIptValue(num);
          handleIptChange && handleIptChange(num);
        }
      }
    }
    handleIptBlur && handleIptBlur();
  };
  const focusIpt = () => {
    handleIptFocus && handleIptFocus(iptValue);
  };
  const iptHandleClick = () => {
    handleClick && handleClick();
  };
  const addNum = () => {
    // 加
    if (type === 'num' && isNaN(Number(iptValue))) {
      return setIptValue('');
    }
    const stepNum = step || 1;
    const res = getNum(Number(iptValue) + stepNum);
    handleNumChange && handleNumChange(res);
    setIptValue(res);
  };
  const lowNum = () => {
    // 减
    if (type === 'num' && isNaN(Number(iptValue))) {
      return setIptValue('');
    }
    const stepNum = step || 1;
    const res = getNum(Number(iptValue) - stepNum);
    handleNumChange && handleNumChange(res);
    setIptValue(res);
  };
  // 获取数字框范围内的值
  const getNum = (num: number) => {
    if (step && typeof max === 'number' && num > max) {
      return max;
    }
    if (step && typeof min === 'number' && num < min) {
      return min;
    }
    return num;
  };
  const iptType = useMemo(() => {
    if (showTogglePwd && type === 'password') {
      return pwdIptState ? 'password' : 'text';
    }
    return type || 'text';
  }, [type, showTogglePwd, pwdIptState]);
  const exticStyle = useMemo(() => {
    const style = { width: '170px' };
    if (width) {
      style.width = `${width}px`;
    }
    return { ...style, ...moreStyle };
  }, [width, moreStyle]);
  return (
    <div className={classNames} style={{ width: width ? `${width}px` : '170px', ...style }}>
      <input
        className="input"
        style={{ ...exticStyle, '--focus-color': globalColor || '#325dff' } as any}
        type={iptType}
        placeholder={placeholder}
        value={defaultValue || iptValue}
        onChange={changeIpt}
        onBlur={blurIpt}
        onFocus={focusIpt}
        onKeyUp={(e) => handleKeyDown && handleKeyDown(e)}
        onClick={iptHandleClick}
        ref={ref}
      />
      {
        // 可清除
        (showClear && (
          <span
            className="clear-svg input-clear"
            onClick={(e) => {
              e.stopPropagation();
              setIptValue('');
              clearCallback && clearCallback();
            }}
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="close-circle"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
            </svg>
          </span>
        )) ||
          // 密码框
          (type === 'password' && showTogglePwd && (
            <EyeOutlined
              style={{ position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' }}
              onClick={() => setPwdIptState(!pwdIptState)}
            />
          )) ||
          // 数字框
          (type === 'num' && (
            <div className="numTags">
              <UpOutlined style={{ cursor: 'pointer', fontSize: '10px' }} onClick={addNum} />
              <DownOutlined style={{ cursor: 'pointer', fontSize: '10px' }} onClick={lowNum} />
            </div>
          ))
      }
    </div>
  );
};

export default forwardRef<unknown, NativeInputProps & InputProps>(Input);
