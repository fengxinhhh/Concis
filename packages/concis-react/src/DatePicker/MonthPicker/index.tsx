import React, { useEffect, useState, useContext, forwardRef } from 'react';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import type { MonthPickerProps } from './interface';
import Input from '../../Input';
import Popover from '../../Popover';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';
import { getSiteTheme } from '../../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../../common_utils/getRenderColor';
import { ctx } from '../../Form';
import './index.module.less';

const MonthPicker = (props, ref) => {
  const {
    className,
    showClear = false,
    align,
    handleChange,
    disableCheck = () => false,
    format = 'YYYY-MM',
    style,
  } = props;
  const monthList = [
    ['一月', '二月', '三月'],
    ['四月', '五月', '六月'],
    ['七月', '八月', '九月'],
    ['十月', '十一月', '十二月'],
  ];
  const [startYear, setStartYear] = useState(dayjs().get('year'));
  const [dateValue, setDateValue] = useState('');
  const formCtx = useContext(ctx);
  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const [clickDate, setClickDate] = useState(new Date());
  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}month-picker`);

  const basePopoverStyle = { boxShadow: '0 0 5px 2px #d0d0d0', bottom: '45px' };

  useEffect(() => {
    // 用于监听Form组件的重置任务
    if (formCtx.reset) {
      setClickDate(new Date());
      setDateValue('');
    }
  }, [formCtx.reset]);
  useEffect(() => {
    if (formCtx.submitStatus) {
      formCtx.getChildVal(dateValue);
    }
  }, [formCtx.submitStatus]);
  const clearCallback = () => {
    setDateValue('');
    handleChange && handleChange(null);
  };
  const setInputVal = (date: Date) => {
    if (disableCheck(date)) {
      return;
    }
    setClickDate(date);
    setDateValue(dayjs(date).format(format));
    handleChange && handleChange(date);
  };
  const isSameDate = (date: Date) => {
    return (
      date.getFullYear() === clickDate.getFullYear() &&
      date.getMonth() + 1 === clickDate.getMonth() + 1
    );
  };

  return (
    <Popover
      type="click"
      align={align}
      dialogWidth="auto"
      closeDeps={[dateValue]}
      style={basePopoverStyle}
      content={
        <div
          className={classNames}
          style={
            {
              '--checked-color': getRenderColor(
                (getSiteTheme() === ('dark' || 'auto') || darkTheme) as boolean,
                globalColor
              ),
              ...style,
            } as any
          }
          ref={ref}
        >
          <div className="month-picker-select">
            <div className="left-select">
              <DoubleLeftOutlined onClick={() => setStartYear(startYear - 1)} />
            </div>
            <div className="middle-select">
              <span>{startYear}</span>-<span>{startYear + 12}</span>
            </div>
            <div className="right-select">
              <DoubleRightOutlined onClick={() => setStartYear(startYear + 1)} />
            </div>
          </div>
          <table>
            <tbody>
              {monthList.map((row, idx) => (
                <tr key={idx}>
                  {row.map((month, i) => (
                    <td
                      key={i}
                      onClick={() => setInputVal(new Date(startYear, idx * 3 + i))}
                      className={`${
                        disableCheck(new Date(startYear, idx * 3 + i)) ? 'disable' : ''
                      }  ${isSameDate(new Date(startYear, idx * 3 + i)) ? 'active' : ''}`}
                    >
                      <span>{month}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    >
      <Input
        placeholder="请选择日期"
        defaultValue={dateValue}
        type="primary"
        showClear={showClear}
        clearCallback={clearCallback}
        isFather
      />
    </Popover>
  );
};

export default forwardRef<unknown, MonthPickerProps>(MonthPicker);
