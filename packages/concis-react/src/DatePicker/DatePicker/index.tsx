import React, { useEffect, useState, useContext, forwardRef } from 'react';
import {
  DoubleLeftOutlined,
  LeftOutlined,
  DoubleRightOutlined,
  RightOutlined,
} from '@ant-design/icons';
import chunk from 'lodash/chunk';
import { DatePickerStyle } from './style';
import type { DatePickerProps, DateItemProps, NowDateProps } from './interface';
import Input from '../../Input';
import Popover from '../../Popover';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';
import { getSiteTheme } from '../../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../../common_utils/getRenderColor';
import { ctx } from '../../Form';

const dayjs = require('dayjs');

const DatePicker = (props, ref) => {
  const {
    className,
    style,
    showClear = false,
    align,
    handleChange,
    disableCheck = () => false,
    format = 'YYYY-MM-DD',
  } = props;

  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  const [nowDate, setNowDate] = useState(today);
  const titleList = ['日', '一', '二', '三', '四', '五', '六'];
  const [nowDayList, setNowDayList] = useState<DateItemProps[][]>([]);
  const [dateValue, setDateValue] = useState('');
  const [clickDate, setClickDate] = useState(new Date());
  const formCtx = useContext(ctx);
  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const basePopoverStyle = { boxShadow: '0 0 5px 2px #d0d0d0', bottom: '45px' };

  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}date-picker`);
  const siteTheme = getSiteTheme();

  useEffect(() => {
    const { year, month } = nowDate;
    // 1号是星期几
    const firstWeekDay = new Date(year, month, 1).getDay();
    // 最后一天几号
    const lastDay = new Date(year, month, 0).getDate();
    const daysArr = new Array(Math.ceil((firstWeekDay + lastDay) / 7) * 7).fill('');
    setNowDayList(
      chunk(
        daysArr.map((_, i) => {
          const day = `${
            i - firstWeekDay <= -1 || i - firstWeekDay + 1 > lastDay ? '' : i - firstWeekDay + 1
          }`;
          const date = new Date(year, month - 1, Number(day));
          return {
            date,
            disable: disableCheck(date),
            value: day,
          };
        }),
        7
      )
    );
  }, [nowDate.year, nowDate.month]);

  useEffect(() => {
    // 用于监听Form组件的重置任务
    if (formCtx.reset) {
      setNowDate(today);
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

  const setInputVal = (data: DateItemProps) => {
    if (data.disable) {
      return;
    }
    setClickDate(data.date);
    setDateValue(dayjs(data.date).format(format));
    setNowDate({
      year: dayjs(data.date).get('year'),
      month: dayjs(data.date).get('month') + 1,
      day: dayjs(data.date).get('date'),
    });
    handleChange && handleChange(data.date);
  };

  const setYear = (year: number): void => {
    setNowDate({ ...nowDate, year });
  };

  const setMonth = (month: number, type: string): void => {
    let date = {} as NowDateProps;
    if (type === 'add') {
      if (month > 12) {
        date = { ...nowDate, month: 1, year: nowDate.year + 1 };
      } else {
        date = { ...nowDate, month };
      }
    } else if (month < 0) {
      date = { ...nowDate, month: 12, year: nowDate.year - 1 };
    } else {
      date = { ...nowDate, month };
    }
    setNowDate(date);
  };

  const isSameDate = (date: Date) => {
    return (
      date.getFullYear() === clickDate.getFullYear() &&
      date.getMonth() + 1 === clickDate.getMonth() + 1 &&
      date.getDate() === clickDate.getDate()
    );
  };

  return (
    <DatePickerStyle
      activedOptionColor={getRenderColor(
        (siteTheme === 'dark' || siteTheme === 'auto' || darkTheme) as boolean,
        globalColor
      )}
    >
      <Popover
        type="click"
        align={align}
        dialogWidth="auto"
        closeDeps={[dateValue]}
        style={basePopoverStyle}
        content={
          <div className={classNames} style={style} ref={ref}>
            <div className="date-picker-select">
              <div className="left-select">
                <DoubleLeftOutlined onClick={() => setYear(nowDate.year - 1)} />
                <LeftOutlined onClick={() => setMonth(nowDate.month - 1, 'del')} />
              </div>
              <div className="middle-select">
                <span>{nowDate.year}</span>-<span>{nowDate.month}</span>
              </div>
              <div className="right-select">
                <RightOutlined onClick={() => setMonth(nowDate.month + 1, 'add')} />
                <DoubleRightOutlined onClick={() => setYear(nowDate.year + 1)} />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  {titleList.map((title, idx) => (
                    <th key={idx}>{title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {nowDayList.map((row, idx) => (
                  <tr key={idx}>
                    {row.map((day, idx) => (
                      <td
                        key={idx}
                        onClick={() => setInputVal(day)}
                        className={`${day.value === '' ? 'day-empty' : ''} ${
                          day.disable ? 'disable' : ''
                        } ${isSameDate(day.date) ? 'active' : ''}`}
                      >
                        {day.value}
                      </td>
                    ))}
                  </tr>
                ))}
                {nowDayList.length >= 6 ? <></> : <tr className="empty-row" />}
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
    </DatePickerStyle>
  );
};

export default forwardRef<unknown, DatePickerProps>(DatePicker);
