import React, { useContext, useEffect, useRef, useState, forwardRef } from 'react';
import type { TimePickerProps } from './interface';
import Input from '../Input';
import Popover from '../Popover';
import Button from '../Button';
import './index.module.less';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import { ctx } from '../Form';
import { getRenderColor } from '../common_utils/getRenderColor';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';

const getIdxArr = (length: number) => {
  const arr = new Array(length).fill('');
  return arr.map((_, i) => (i < 10 ? `0${i}` : String(i)));
};

const TimePicker = (props, ref) => {
  const {
    align,
    className,
    style,
    placeholder = '请选择时间',
    defaultTime,
    disableHour,
    disableMin,
    handleConfirm,
    disableSecond,
    showClear,
    clearCallback,
    changeCallback,
  } = props;
  const HOUR_LIST = getIdxArr(24);
  const MIN_AND_SEC_LIST = getIdxArr(60);
  const NOW_TIME = new Date();
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);
  const [timeValue, setTimeValue] = useState(defaultTime);
  const formCtx = useContext(ctx);
  const parentRef = useRef(null);
  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}time-picker`);
  const changeTime = (newHour: number = hour, newMin: number = min, newSecond: number = second) => {
    const time = `${newHour < 10 ? `0${newHour}` : String(newHour)}:${
      newMin < 10 ? `0${newMin}` : String(newMin)
    }:${newSecond < 10 ? `0${newSecond}` : String(newSecond)}`;
    changeCallback && changeCallback(time);
    handleConfirm && handleConfirm(time);
    setTimeValue(time);
  };
  useEffect(() => {
    setHour(NOW_TIME.getHours());
    setMin(NOW_TIME.getMinutes());
    setSecond(NOW_TIME.getSeconds());
  }, []);
  useEffect(() => {
    // 用于监听Form组件的重置任务
    if (formCtx.reset) {
      setHour(0);
      setMin(0);
      setSecond(0);
      setTimeValue('');
    }
  }, [formCtx.reset]);
  useEffect(() => {
    if (formCtx.submitStatus) {
      formCtx.getChildVal(`${hour}:${min}:${second}`);
    }
  }, [formCtx.submitStatus]);

  const handleClear = () => {
    setTimeValue('');
    clearCallback && clearCallback();
  };
  const scrollTo = (eventIdx: number, idx: number): boolean => {
    const divDom = (parentRef.current as any).querySelectorAll('.time-panel div')[idx];
    if (!divDom || !divDom.scrollTo) {
      return false;
    }
    // @ts-ignore
    divDom.scrollTo(0, divDom.querySelector(`.active`).offsetTop - 7);
    return true;
  };
  useEffect(() => {
    scrollTo(hour, 0);
  }, [hour]);
  useEffect(() => {
    scrollTo(min, 1);
  }, [min]);
  useEffect(() => {
    scrollTo(second, 2);
  }, [second]);
  return (
    <Popover
      type="click"
      align={align}
      dialogWidth="auto"
      closeDeps={[timeValue]}
      content={
        <div className={classNames} style={style} ref={ref}>
          <div
            ref={parentRef}
            className="time-panel"
            style={
              {
                '--checked-color': getRenderColor(
                  (getSiteTheme() === ('dark' || 'auto') || darkTheme) as boolean,
                  globalColor
                ),
              } as any
            }
          >
            <div>
              {HOUR_LIST.map((_) => (
                <span
                  className={`${Number(_) === hour ? 'active' : ''} ${
                    disableHour !== undefined && disableHour(_) ? 'disable' : ''
                  }`}
                  onClick={(e) => {
                    if (disableHour === undefined || !disableHour(_)) {
                      setHour(Number(_));
                    }
                  }}
                  key={_}
                >
                  {_}
                </span>
              ))}
            </div>
            <div>
              {MIN_AND_SEC_LIST.map((_) => (
                <span
                  className={`${Number(_) === min ? 'active' : ''} ${
                    disableMin !== undefined && disableMin(_) ? 'disable' : ''
                  }`}
                  onClick={(e) => {
                    if (disableMin === undefined || !disableMin(_)) {
                      setMin(Number(_));
                    }
                  }}
                  key={_}
                >
                  {_}
                </span>
              ))}
            </div>
            <div>
              {MIN_AND_SEC_LIST.map((_) => (
                <span
                  className={`${Number(_) === second ? 'active' : ''} ${
                    disableSecond !== undefined && disableSecond(_) ? 'disable' : ''
                  }`}
                  onClick={(e) => {
                    if (disableSecond === undefined || !disableSecond(_)) {
                      setSecond(Number(_));
                    }
                  }}
                  key={_}
                >
                  {_}
                </span>
              ))}
            </div>
          </div>
          <div className="time-footer">
            <Button type="text" height={25}>
              <span
                onClick={() => {
                  const hour = new Date().getHours();
                  const min = new Date().getMinutes();
                  const second = new Date().getSeconds();
                  setHour(hour);
                  setMin(min);
                  setSecond(second);
                  changeTime(hour, min, second);
                }}
              >
                此刻
              </span>
            </Button>
            <Button type="primary" height={25}>
              <span onClick={() => changeTime()}>确定</span>
            </Button>
          </div>
        </div>
      }
    >
      <Input
        placeholder={placeholder}
        defaultValue={timeValue}
        type="primary"
        showClear={showClear}
        clearCallback={handleClear}
      />
    </Popover>
  );
};
export default forwardRef<unknown, TimePickerProps>(TimePicker);
