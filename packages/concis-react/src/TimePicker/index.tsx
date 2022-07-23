import React, { memo, useContext, useEffect, useState } from 'react';
import Input from '../Input';
import Popover from '../Popover';
import Button from '../Button';
import './index.module.less';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import dayjs from 'dayjs';
import { ctx } from '../Form';
import { getRenderColor } from '../common_utils/getRenderColor';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
const getIdxArr = (length: number) => {
  const arr = new Array(length).fill('');
  return arr.map((_, i) => (i < 10 ? '0' + i : String(i)));
};
export interface TimePickerProps {
  align?: string;
  defaultTime?: string;
  showClear?: boolean;
  className?: string;
  placeholder?: string;
  handleConfirm?: Function;
  clearCallback?: Function;
  changeCallback?: Function;
  disableHour?: Function;
  disableMin?: Function;
  disableSecond?: Function;
}
const TimePicker = (props: TimePickerProps) => {
  const {
    align,
    className,
    placeholder = '请选择时间',
    defaultTime,
    disableHour,
    disableMin,
    disableSecond,
    showClear,
    clearCallback,
    changeCallback,
  } = props;
  const HOUR_LIST = getIdxArr(24);
  const MIN_AND_SEC_LIST = getIdxArr(60);
  const NOW_TIME = new Date();
  const [hour, setHour] = useState(NOW_TIME.getHours());
  const [min, setMin] = useState(NOW_TIME.getMinutes());
  const [second, setSecond] = useState(NOW_TIME.getSeconds());
  const [timeValue, setTimeValue] = useState(defaultTime);
  const formCtx = useContext(ctx);
  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}time-picker`);
  const changeTime = (newHour: number = hour, newMin: number = min, newSecond: number = second) => {
    const time = `${newHour < 10 ? '0' + newHour : String(newHour)}:${
      newMin < 10 ? '0' + newMin : String(newMin)
    }:${newSecond < 10 ? '0' + newSecond : String(newSecond)}`;
    changeCallback && changeCallback(time);
    setTimeValue(time);
  };
  useEffect(() => {
    //用于监听Form组件的重置任务
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
  const scrollTo = (event: EventTarget, idx: number): boolean => {
    // @ts-ignore
    document.querySelectorAll('.time-panel div')[idx].scrollTo(0, event.offsetTop - 7);
    return true;
  };
  return (
    <Popover
      type="click"
      align={align}
      dialogWidth={'auto'}
      closeDeps={[timeValue]}
      content={
        <div className={classNames}>
          <div
            className="time-panel"
            style={
              {
                '--checked-color': getRenderColor(
                  (getSiteTheme() === ('dark' || 'auto') || darkTheme) as boolean,
                  globalColor,
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
                      scrollTo(e.target, 0);
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
                      scrollTo(e.target, 1);
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
                      scrollTo(e.target, 2);
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
export default memo(TimePicker);
