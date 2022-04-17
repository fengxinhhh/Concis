import React, { FC, useState, useMemo, memo } from 'react';
import { CloseOutlined, EyeOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import style from './index.module.less';

interface InputProps {
  width?: string;
  moreStyle?: object;
  type?: string;
  placeholder?: string;
  showClear?: boolean;
  showTogglePwd?: boolean;
  min?: number;
  max?: number;
  step?: number;
  handleIptChange?: Function;
  handleNumChange?: Function;
  defaultValue?: string;
}
const Input: FC<InputProps> = (props) => {
  const {
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
    handleNumChange,
    defaultValue,
  } = props;
  const [iptValue, setIptValue] = useState<string | number>(defaultValue || '');
  const [pwdIptState, setPwdIptState] = useState(true); //密码框切换状态
  const changeIpt = (e: any) => {
    //改变文本框
    setIptValue(e.target.value);
    if (handleIptChange) {
      handleIptChange(e.target.value);
    }
  };
  const blurIpt = (e: any) => {
    //失去焦点
    if (type === 'num' && Number(iptValue) == NaN) {
      setIptValue('');
    }
  };
  const addNum = () => {
    //加
    if (type === 'num' && Number(iptValue) == NaN) {
      return setIptValue('');
    }
    const stepNum = step || 1;
    if (step && max && Number(iptValue) + stepNum > max) {
      handleNumChange && handleNumChange(max);
      return setIptValue(max);
    }
    if (step && min && Number(iptValue) + stepNum < min) {
      handleNumChange && handleNumChange(min);
      return setIptValue(min);
    }
    handleNumChange && handleNumChange(Number(iptValue) + stepNum);
    setIptValue(Number(iptValue) + stepNum);
  };
  const lowNum = () => {
    //减
    if (type === 'num' && Number(iptValue) == NaN) {
      return setIptValue('');
    }
    const stepNum = step || 1;
    if (step && min && Number(iptValue) - stepNum < min) {
      handleNumChange && handleNumChange(min);
      return setIptValue(min);
    }
    handleNumChange && handleNumChange(Number(iptValue) - stepNum);
    setIptValue(Number(iptValue) - stepNum);
  };
  const iptType = useMemo(() => {
    if (showTogglePwd && type === 'password') {
      return pwdIptState ? 'password' : 'text';
    }
    return type || 'text';
  }, [type, showTogglePwd, pwdIptState]);
  const exticStyle = useMemo(() => {
    let style = { width: '170px' };
    if (width) {
      style.width = width + 'px';
    }
    console.log({ ...style, ...moreStyle });
    return { ...style, ...moreStyle };
  }, [width, moreStyle]);
  return (
    <div className={style.box} style={{ width: width ? width + 'px' : '170px' }}>
      <input
        className={style.input}
        style={exticStyle}
        type={iptType}
        placeholder={placeholder}
        value={iptValue}
        onChange={changeIpt}
        onBlur={blurIpt}
      />
      {
        //可清除
        (showClear && (
          <CloseOutlined
            style={{ position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' }}
            onClick={() => setIptValue('')}
          />
        )) ||
          //密码框
          (type === 'password' && showTogglePwd && (
            <EyeOutlined
              style={{ position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' }}
              onClick={() => setPwdIptState(!pwdIptState)}
            />
          )) ||
          //数字框
          (type === 'num' && (
            <div className={style.numTags}>
              <UpOutlined style={{ cursor: 'pointer', fontSize: '10px' }} onClick={addNum} />
              <DownOutlined style={{ cursor: 'pointer', fontSize: '10px' }} onClick={lowNum} />
            </div>
          ))
      }
    </div>
  );
};
export default memo(Input);
