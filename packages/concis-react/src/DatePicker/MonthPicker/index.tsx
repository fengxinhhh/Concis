import React, { useEffect, FC, memo, useState, useContext } from 'react';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import Input from '../../Input';
import Popover from '../../Popover';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';
import { ctx } from '../../Form';
import './index.module.less';
const dayjs = require('dayjs');

interface MonthPickerProps {
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
  showRange?: Boolean;
  /**
   * @description 显示日期重置按钮
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
const MonthPicker: FC<MonthPickerProps> = (props) => {
  const {
    className,
    showClear = false,
    align,
    handleChange,
    disableCheck = () => false,
    format = 'YYYY-MM',
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
  const { globalColor, prefixCls } = useContext(globalCtx) as GlobalConfigProps;
  const [clickDate, setClickDate] = useState(new Date());
  const classNames = cs(prefixCls, className, 'concis-month-picker');
  useEffect(() => {
    //用于监听Form组件的重置任务
    if (formCtx.reset) {
      setClickDate(new Date());
      setDateValue('');
    }
  }, [formCtx.reset]);
  useEffect(() => {
    if (formCtx.submitStatus) {
      formCtx.getChildVal(`${dayjs(dateValue).format(format)}`);
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
      dialogWidth={'auto'}
      propsVisible={false}
      content={
        <div className={classNames}>
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
      />
    </Popover>
  );
};

export default memo(MonthPicker);
