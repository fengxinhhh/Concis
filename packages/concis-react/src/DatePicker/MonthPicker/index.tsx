import React, { useEffect, FC, memo, useState, useContext, CSSProperties } from 'react';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import Input from '../../Input';
import Popover from '../../Popover';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';
import { getSiteTheme } from '../../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../../common_utils/getRenderColor';
import { ctx } from '../../Form';
import './index.module.less';

interface MonthPickerProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 设置日期的格式化
   * @default YYYY-MM-DD
   */
  format?: string;
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

export default memo(MonthPicker);
