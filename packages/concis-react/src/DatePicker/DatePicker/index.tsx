import React, { useEffect, FC, memo, useState, useContext } from 'react';
import {
  DoubleLeftOutlined,
  LeftOutlined,
  DoubleRightOutlined,
  RightOutlined,
} from '@ant-design/icons';
import chunk from 'lodash/chunk';
import Input from '../../Input';
import Popover from '../../Popover';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';
import { ctx } from '../../Form';
import './index.module.less';
const dayjs = require('dayjs');

export interface DatePickerProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 日期选择器类型(primary/input)仅支持非range
   * @default primary
   */
  type?: string;
  /**
   * @description 设置日期的格式化
   * @default YYYY-MM-DD
   */
  format?: string;
  /**
   * @description 设置日期区间选择器
   * @default false
   */
  showClear?: boolean;
  /**
   * @description 方向
   * @default false
   */
  align?: string;
  /**
   * @description 选择完毕后的回调函数
   * @default Function
   */
  handleChange?: Function;
  /**
   * @description 验证是否禁用选项的函数
   * @default Function
   */
  disableCheck?: Function;
}
interface DateItemProps {
  value: string;
  date: Date;
  disable: boolean;
}
interface NowDateProps {
  year: number;
  month: number;
  day: number;
}
const DatePicker: FC<DatePickerProps> = (props) => {
  const {
    className,
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
  const formCtx = useContext(ctx);
  const { globalColor, prefixCls } = useContext(globalCtx) as GlobalConfigProps;
  const [clickDate, setClickDate] = useState(new Date());
  useEffect(() => {
    const { year, month } = nowDate;
    //1号是星期几
    const firstWeekDay = new Date(year, month, 1).getDay();
    //最后一天几号
    const lastDay = new Date(year, month, 0).getDate();
    const daysArr = new Array(Math.ceil((firstWeekDay + lastDay) / 7) * 7).fill('');
    // console.log(firstWeekDay, lastDay);
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
        7,
      ),
    );
  }, [nowDate.year, nowDate.month]);
  useEffect(() => {
    //用于监听Form组件的重置任务
    if (formCtx.reset) {
      setNowDate(today);
      setDateValue('');
    }
  }, [formCtx.reset]);
  useEffect(() => {
    if (formCtx.submitStatus) {
      formCtx.getChildVal(`${dayjs(nowDate).format(format)}`);
    }
  }, [formCtx.submitStatus]);
  const classNames = cs(prefixCls, className, 'concis-date-picker');
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
    setNowDate({
      ...nowDate,
      year,
    });
  };
  const setMonth = (month: number, type: string): void => {
    let date = {} as NowDateProps;
    if (type === 'add') {
      if (month > 12) {
        date = { ...nowDate, month: 1, year: nowDate.year + 1 };
      } else {
        date = { ...nowDate, month };
      }
    } else {
      if (month < 0) {
        date = { ...nowDate, month: 12, year: nowDate.year - 1 };
      } else {
        date = { ...nowDate, month };
      }
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
    <Popover
      type="click"
      align={align}
      dialogWidth={'auto'}
      propsVisible={false}
      content={
        <div className={classNames}>
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
      />
    </Popover>
  );
};

export default memo(DatePicker);
