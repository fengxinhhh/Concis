import React, { FC, memo, useState, useEffect, useCallback } from 'react';
import RangeDatePicker from './rangeDatePicker';
import {
  FieldTimeOutlined,
  CloseOutlined,
  CheckOutlined,
  LeftOutlined,
  RightOutlined,
  RollbackOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';
import './index.module.less';

interface DatePickerProps {
  /**
   * @description 日期选择器类型(primary/input)仅支持非range
   * @default primary
   */
  type?: string;
  /**
   * @description 设置日期区间选择器
   * @default false
   */
  showRange?: Boolean;
  /**
   * @description 显示日期重置按钮
   * @default false
   */
  showClear?: Boolean;
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
}
const monthList = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];

const DatePicker: FC<DatePickerProps> = (props) => {
  const { type, showRange, showClear, align, handleChange } = props;

  const [showTimeDialog, setShowTimeDialog] = useState(false); //显示dialog
  const [renderShowDialog, setRenderShowDialog] = useState(false);
  const [nowDate, setNowDate] = useState({
    //选中的日期
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });
  const [thisMonthFirstDay, setThisMonthFirstDay] = useState(0); //本月第一天是周几
  const [dayListArray, setDayListArray] = useState<Array<number>>([]); //每月的日历
  const [pickStatus, setPickStatus] = useState(0); //timerpick状态，0表示选择日期，1表示改变月份，2表示改变年份
  const [iptValue, setIptValue] = useState<null | string>(null); //文本框输入的值
  const [yearList, setYearList] = useState<Array<number>>([
    2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
  ]);

  useEffect(() => {
    window.addEventListener('click', () => {
      setShowTimeDialog(false);
      setTimeout(() => {
        setRenderShowDialog(false);
      }, 300);
    });
  }, []);
  useEffect(() => {
    const { year, month } = nowDate;
    const firstDay = new Date(`${year}/${month}/1`).getDay();
    const totalDay = new Date(year, month, 0).getDate();
    const dayList = new Array(firstDay).fill('');
    for (let i = 1; i < totalDay + 1; i++) {
      dayList.push(i);
    }
    setThisMonthFirstDay(firstDay); //重新计算本月第一天为周几
    setDayListArray(dayList); //重排本月日历
  }, [nowDate.year, nowDate.month]);
  const openDialog = (e: any) => {
    e.stopPropagation();
    setShowTimeDialog(true);
    setRenderShowDialog(true);
  };
  const changeDay = (day: number) => {
    //改变日期
    if (!day) return;
    setNowDate((old) => {
      old.day = day;
      return { ...old };
    });
    handleChange && handleChange(`${nowDate.year}-${nowDate.month}-${nowDate.day}`);
    setShowTimeDialog(false);
    setTimeout(() => {
      setRenderShowDialog(false);
    }, 300);
  };
  const setToToday = () => {
    //改变到今天
    const today = new Date();
    setNowDate((old) => {
      old.year = today.getFullYear();
      old.month = today.getMonth() + 1;
      old.day = today.getDate();
      return { ...old };
    });
  };
  const changeToNextMonth = () => {
    //改变到下个月
    const renderDate = { ...nowDate };
    if (renderDate.month == 12) {
      //12月新年
      renderDate.year += 1;
      renderDate.month = 1;
    } else {
      //普通递增
      renderDate.month += 1;
    }
    setNowDate(renderDate);
  };
  const changeToPreMonth = () => {
    const renderDate = { ...nowDate };
    if (renderDate.month == 1) {
      //12月新年
      renderDate.year -= 1;
      renderDate.month = 12;
    } else {
      //普通递增
      renderDate.month -= 1;
    }
    setNowDate(renderDate);
  };
  const changeMonth = (month: number) => {
    //改变月份
    setNowDate((old) => {
      old.month = month;
      return { ...old };
    });
    setPickStatus(0);
  };
  const changeYear = (year: number) => {
    //改变年份
    setNowDate((old) => {
      old.year = year;
      return { ...old };
    });
    setPickStatus(0);
  };
  const bindIptText = (e: any) => {
    //绑定文本框
    setIptValue(e.target.value);
  };
  const enterChangeDate = (e: any) => {
    //回车确认更改
    if (e.keyCode == 13) {
      //回车
      if (iptValue !== null) {
        if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(iptValue)) {
          const inputValue = iptValue.split('-');
          setNowDate((old) => {
            old.year = Number(inputValue[0]);
            old.month = Number(inputValue[1]);
            old.day = Number(inputValue[2]);
            return { ...old };
          });
          handleChange &&
            handleChange(
              `${Number(inputValue[0])}-${Number(inputValue[1])}-${Number(inputValue[2])}`,
            );
        }
      }
      setIptValue(null);
      setShowTimeDialog(false);
      setTimeout(() => {
        setRenderShowDialog(false);
      }, 300);
    }
  };
  const blurInput = () => {
    //文本框失去焦点
    if (iptValue !== null) {
      if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(iptValue)) {
        const inputValue = iptValue.split('-');
        setNowDate((old) => {
          old.year = Number(inputValue[0]);
          old.month = Number(inputValue[1]);
          old.day = Number(inputValue[2]);
          return { ...old };
        });
      }
    }
    setIptValue(null);
  };
  const setNextGroupYear = () => {
    //设定下一组年份
    setYearList((old) => {
      return [...old.map((y) => y + 9)];
    });
  };
  const setPreGroupYear = () => {
    setYearList((old) => {
      return [...old.map((y) => y - 9)];
    });
  };
  const clearDate = () => {
    //清空
    setNowDate((old) => {
      (old.year = new Date().getFullYear()),
        (old.month = new Date().getMonth() + 1),
        (old.day = new Date().getDate());
      return { ...old };
    });
    setIptValue(null);
  };
  const rangeDatePickChangeCallback = (start: string, end: string) => {
    handleChange && handleChange(start, end);
  };
  const activeStyle = {
    //选中的所有样式
    result: {
      letterSpacing: 'normal',
      color: '#1890FF',
      width: '120px',
    },
    icon: {
      opacity: 1,
      marginLeft: '5px',
    },
    checkBox: {
      opacity: 1,
    },
    dayActive: {
      backgroundColor: '#1890FF',
      color: '#fff',
      fontWeight: 'bold',
      borderRadius: '5px',
    },
  };
  const alignFn = useCallback(() => {
    //对齐方式
    if (!align) {
      return {
        bottom: {
          top: '40px',
        },
      };
    }
    return {
      right: {
        left: '170px',
        bottom: '20px',
      },
      left: {
        right: '800px',
        bottom: '40px',
      },
      top: {
        bottom: '40px',
      },
      bottom: {
        top: '40px',
      },
    }[align];
  }, [align]);

  return showRange ? (
    <RangeDatePicker
      showClear={showClear}
      align={align ? align : 'bottom'}
      handleChange={rangeDatePickChangeCallback}
    />
  ) : (
    <div className="time-picker">
      {(type == 'primary' || !type) && (
        <div
          className="result"
          style={showTimeDialog ? activeStyle.result : {}}
          onClick={(e) => openDialog(e)}
        >
          <span>
            {nowDate.year}-{nowDate.month}-{nowDate.day}
          </span>
          <div className="icon" style={showTimeDialog ? activeStyle.icon : {}}>
            <FieldTimeOutlined />
          </div>
        </div>
      )}
      {type == 'input' && (
        <div>
          <input
            className="input"
            value={iptValue !== null ? iptValue : `${nowDate.year}-${nowDate.month}-${nowDate.day}`}
            onClick={(e) => openDialog(e)}
            onChange={(e) => bindIptText(e)}
            onKeyDown={(e) => enterChangeDate(e)}
            onBlur={blurInput}
          />
          {showClear && (
            <CloseOutlined
              style={{ position: 'relative', right: '15px', fontSize: '12px', cursor: 'pointer' }}
              onClick={clearDate}
            />
          )}
        </div>
      )}
      {renderShowDialog && (
        <div
          className="check-box"
          style={{ ...(showTimeDialog ? activeStyle.checkBox : {}), ...alignFn() } as any}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="top-bar">
            <b className="year" onClick={() => setPickStatus(2)}>
              {nowDate.year}
            </b>
            <b className="month" onClick={() => setPickStatus(1)} style={{ marginRight: '20px' }}>
              {nowDate.month}
            </b>
            <div
              className="close-icon"
              onClick={() => {
                setShowTimeDialog(false);
                setTimeout(() => {
                  setRenderShowDialog(false);
                }, 300);
              }}
            >
              <CloseOutlined />
            </div>
          </div>
          <div className="date-content">
            {/* 日历 */}
            {pickStatus == 0 && (
              <>
                <div className="week">
                  <div>日</div>
                  <div>一</div>
                  <div>二</div>
                  <div>三</div>
                  <div>四</div>
                  <div>五</div>
                  <div>六</div>
                </div>
                <div className="day-list">
                  {dayListArray.map((day, index) => {
                    return (
                      <div
                        key={index}
                        className={day ? 'day' : 'white'}
                        style={nowDate.day == day ? activeStyle.dayActive : {}}
                        onClick={() => changeDay(day)}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            {/* 月份选择框 */}
            {pickStatus == 1 && (
              <div className="month-toggle-box">
                {monthList.map((m: string, index) => {
                  return (
                    <div
                      key={m}
                      className="month"
                      style={index + 1 == nowDate.month ? activeStyle.dayActive : {}}
                      onClick={() => changeMonth(index + 1)}
                    >
                      {m}
                    </div>
                  );
                })}
              </div>
            )}
            {/* 年份选择框 */}
            {pickStatus == 2 && (
              <div className="year-toggle-box">
                <div className="toggle-bar">
                  <DoubleLeftOutlined style={{ cursor: 'pointer' }} onClick={setPreGroupYear} />
                  <span>
                    {yearList[0]}-{yearList[8]}
                  </span>
                  <DoubleRightOutlined style={{ cursor: 'pointer' }} onClick={setNextGroupYear} />
                </div>
                <div className="list">
                  {yearList.map((m: number) => {
                    return (
                      <div
                        key={m}
                        className="year"
                        style={m == nowDate.year ? activeStyle.dayActive : {}}
                        onClick={() => changeYear(m)}
                      >
                        {m}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="time-footer">
            {pickStatus == 0 && (
              <>
                <div className="today" onClick={setToToday}>
                  <span>今天</span>
                  <CheckOutlined />
                </div>
                <div className="toggle-month">
                  <LeftOutlined style={{ marginRight: '5px' }} onClick={changeToPreMonth} />
                  <RightOutlined onClick={changeToNextMonth} />
                </div>
              </>
            )}
            {(pickStatus == 1 || pickStatus == 2) && (
              <>
                <div></div>
                <div className="go-back-icon" onClick={() => setPickStatus(0)}>
                  <RollbackOutlined />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(DatePicker);
