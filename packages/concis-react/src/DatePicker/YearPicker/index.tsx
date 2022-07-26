import React, { useEffect, FC, memo, useState, useContext } from 'react';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import Input from '../../Input';
import Popover from '../../Popover';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import { globalCtx } from '../../GlobalConfig';
import { getSiteTheme } from '../../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../../common_utils/getRenderColor';
import { ctx } from '../../Form';
import chunk from 'lodash/chunk';
import './index.module.less';
const dayjs = require('dayjs');

interface YearPickerProps {
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
interface YearItemProps {
  value: string;
  date: Date;
  disable: boolean;
}
interface NowDateProps {
  year: number;
  month: number;
  day: number;
}
const YearPicker: FC<YearPickerProps> = (props) => {
  const {
    className,
    showClear = false,
    align,
    handleChange,
    disableCheck = () => false,
    format = 'YYYY',
  } = props;
  const [year, setYear] = useState(dayjs().get('year'));
  const [yearList, setYearList] = useState<YearItemProps[][]>([]);
  const [dateValue, setDateValue] = useState('');
  const formCtx = useContext(ctx);

  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}year-picker`);
  const [clickDate, setClickDate] = useState(new Date());
  useEffect(() => {
    const length12 = new Array(12).fill('');
    setYearList(
      chunk(
        length12.map((_, i) => {
          const date = new Date(year + i, 1, 1);
          return {
            date,
            disable: disableCheck(date),
            value: year + i,
          };
        }),
        3,
      ),
    );
  }, [year]);
  // useEffect(() => {
  //   //用于监听Form组件的重置任务
  //   if (formCtx.reset) {
  //     setNowDate(today);
  //     setDateValue('');
  //   }
  // }, [formCtx.reset]);
  // useEffect(() => {
  //   if (formCtx.submitStatus) {
  //     formCtx.getChildVal(`${dayjs(nowDate).format(format)}`);
  //   }
  // }, [formCtx.submitStatus]);
  const clearCallback = () => {
    setDateValue('');
    handleChange && handleChange(null);
  };
  const setInputVal = (data: YearItemProps) => {
    if (data.disable) {
      return;
    }
    setClickDate(data.date);
    setDateValue(dayjs(data.date).format(format));
    handleChange && handleChange(data.date);
  };

  const isSameDate = (date: Date) => {
    return date.getFullYear() === clickDate.getFullYear();
  };

  return (
    <Popover
      type="click"
      align={align}
      dialogWidth={'auto'}
      closeDeps={[dateValue]}
      content={
        <div
          className={classNames}
          style={
            {
              '--checked-color': getRenderColor(
                (getSiteTheme() === ('dark' || 'auto') || darkTheme) as boolean,
                globalColor,
              ),
            } as any
          }
        >
          <div className="year-picker-select">
            <div className="left-select">
              <DoubleLeftOutlined onClick={() => setYear(year - 12)} />
            </div>
            <div className="middle-select">
              <span>{year}</span>-<span>{year + 11}</span>
            </div>
            <div className="right-select">
              <DoubleRightOutlined onClick={() => setYear(year + 12)} />
            </div>
          </div>
          <table>
            <tbody>
              {yearList.map((row, idx) => (
                <tr key={idx}>
                  {row.map((date, i) => (
                    <td
                      key={i}
                      onClick={() => setInputVal(date)}
                      className={`${date.disable ? 'disable' : ''}  ${
                        isSameDate(date.date) ? 'active' : ''
                      }`}
                    >
                      <span>{date.value}</span>
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

export default memo(YearPicker);
