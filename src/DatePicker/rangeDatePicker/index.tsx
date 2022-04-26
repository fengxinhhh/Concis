import React, { useEffect, FC, memo, useState, useCallback } from 'react';
import {
  DoubleLeftOutlined,
  LeftOutlined,
  DoubleRightOutlined,
  RightOutlined,
  SwapRightOutlined,
} from '@ant-design/icons';
import Input from '../../Input';
import './index.module.less';

interface RangeProps {
  showClear?: Boolean;
  align?: string;
  handleChange?: Function;
}
const RangeDatePicker: FC<RangeProps> = (props) => {
  const { showClear, align, handleChange } = props;
  const [startDate, setStartDate] = useState({
    startYear: new Date().getFullYear(),
    startMonth: new Date().getMonth() + 1,
    startDay: new Date().getDate(),
  });
  const [endDate, setEndDate] = useState({
    endYear: new Date().getFullYear(),
    endMonth: new Date().getMonth() + 2,
    endDay: new Date().getDate(),
  });
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startMonthFirstDay, setStartMonthFirstDay] = useState(0); //本月第一天是周几
  const [endMonthFirstDay, setEndMonthFirstDay] = useState(0); //本月第一天是周几
  const [startDayListArray, setStartDayListArray] = useState<Array<number>>([]); //start月的日历
  const [endDayListArray, setEndDayListArray] = useState<Array<number>>([]); //end月的日历
  const [showTimeDiaglog, setShowTimeDialog] = useState(false); //日期选择器dialog show
  const [renderShowDialog, setRenderShowDialog] = useState(false);
  const [chooseStatus, setChooseStatus] = useState({
    start: false,
    end: false,
  }); //是否被选择过

  let activeBorderDom: Element | null = document.querySelector('.activeBorder');

  useEffect(() => {
    const { startYear, startMonth } = startDate;
    const { endYear, endMonth } = endDate;
    const startFirstDay = new Date(`${startYear}/${startMonth}/1`).getDay();
    const endFirstDay = new Date(`${endYear}/${endMonth}/1`).getDay();
    const startTotalDay = new Date(startYear, startMonth, 0).getDate();
    const endTotalDay = new Date(endYear, endMonth, 0).getDate();
    const startDayList = new Array(startFirstDay).fill('');
    const endDayList = new Array(endFirstDay).fill('');
    for (let i = 1; i < startTotalDay + 1; i++) {
      startDayList.push(i);
    }
    for (let i = 1; i < endTotalDay + 1; i++) {
      endDayList.push(i);
    }
    setStartDayListArray(startDayList);
    setStartMonthFirstDay(startFirstDay);
    setEndDayListArray(endDayList);
    setEndMonthFirstDay(endFirstDay);
  }, [startDate.startYear, startDate.startMonth, endDate.endYear, endDate.endMonth]);
  useEffect(() => {
    window.addEventListener('click', () => {
      setShowTimeDialog(false);
      setTimeout(() => {
        setRenderShowDialog(false);
      }, 300);
    });
  }, []);
  useEffect(() => {
    if (chooseStatus.start && chooseStatus.end) {
      setShowTimeDialog(false);
      setTimeout(() => {
        setRenderShowDialog(false);
      }, 300);
      setChooseStatus((old) => {
        old.start = false;
        old.end = false;
        return { ...old };
      });
      handleChange && handleChange(startTime, endTime);
    }
  }, [chooseStatus]);

  const startIptFocus = () => {
    setShowTimeDialog(true);
    setRenderShowDialog(true);
    (activeBorderDom as any).style.left = '0';
  };
  const endIptFocus = () => {
    setShowTimeDialog(true);
    setRenderShowDialog(true);
    (activeBorderDom as any).style.left = '190px';
  };
  const preYear = (type: string) => {
    //切换上一年
    if (type == 'start') {
      const renderDate = { ...startDate };
      renderDate.startYear -= 1;
      setStartDate(renderDate);
    } else if (type == 'end') {
      if (endDate.endYear > startDate.startYear) {
        const renderDate = { ...endDate };
        renderDate.endYear -= 1;
        setEndDate(renderDate);
      }
    }
  };
  const nextYear = (type: string) => {
    //切换下一年
    if (type == 'start') {
      if (startDate.startYear < endDate.endYear) {
        const renderDate = { ...startDate };
        renderDate.startYear += 1;
        setStartDate(renderDate);
      }
    } else if (type == 'end') {
      const renderDate = { ...endDate };
      renderDate.endYear += 1;
      setEndDate(renderDate);
    }
  };
  const preMonth = (type: string) => {
    //切换上一个月
    if (type == 'start') {
      const renderDate = { ...startDate };
      if (renderDate.startMonth == 1) {
        renderDate.startMonth = 12;
        renderDate.startYear -= 1;
      } else {
        renderDate.startMonth -= 1;
      }
      setStartDate(renderDate);
    } else if (type == 'end') {
      if (endDate.endYear == startDate.startYear && endDate.endMonth == startDate.startMonth) {
        return;
      } else {
        const renderDate = { ...endDate };
        if (renderDate.endMonth == 1) {
          renderDate.endMonth = 12;
          renderDate.endYear -= 1;
        } else {
          renderDate.endMonth -= 1;
        }
        if (renderDate.endDay < startDate.startDay) {
          renderDate.endDay = startDate.startDay;
        }
        setEndDate(renderDate);
      }
    }
  };
  const nextMonth = (type: string) => {
    //切换下一个月
    if (type == 'start') {
      if (endDate.endYear == startDate.startYear && endDate.endMonth == startDate.startMonth) {
        return;
      } else {
        const renderDate = { ...startDate };
        if (renderDate.startMonth == 12) {
          renderDate.startMonth = 1;
          renderDate.startYear += 1;
        } else {
          renderDate.startMonth += 1;
        }
        setStartDate(renderDate);
      }
    } else if (type == 'end') {
      const renderDate = { ...endDate };
      if (renderDate.endMonth == 12) {
        renderDate.endMonth = 1;
        renderDate.endYear += 1;
      } else {
        renderDate.endMonth += 1;
      }
      setEndDate(renderDate);
    }
  };
  const chooseStartDay = (day: number | string) => {
    //选择开始日期
    if (day == '') return;
    setStartDate((old) => {
      old.startDay = day as number;
      return { ...old };
    });
    setChooseStatus((old) => {
      old.start = true;
      return { ...old };
    });
    setStartTime(`${startDate.startYear}-${startDate.startMonth}-${day}`);
    if (startDate.startYear == endDate.endYear && startDate.startMonth == endDate.endMonth) {
      if (day > endDate.endDay) {
        setEndDate((old) => {
          old.endDay = day as number;
          return { ...old };
        });
      }
    }
  };
  const chooseEndDay = (day: number | string) => {
    //选择结束日期
    if (startDate.startYear == endDate.endYear && startDate.startMonth == endDate.endMonth) {
      if (day < startDate.startDay) {
        return;
      }
    }
    setChooseStatus((old) => {
      old.end = true;
      return { ...old };
    });
    setEndDate((old) => {
      old.endDay = day as number;
      return { ...old };
    });
    setEndTime(`${endDate.endYear}-${endDate.endMonth}-${day}`);
  };
  const enterChangeStartTime = (e: any) => {
    //回车改变
    if (e.keyCode == 13) {
      if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(startTime)) {
        const start = startTime.split('-');
        if (
          Number(start[0]) <= endDate.endYear &&
          Number(start[1]) <= endDate.endMonth &&
          Number(start[2]) <= endDate.endDay
        ) {
          setStartDate((old) => {
            old.startYear = Number(start[0]);
            old.startMonth = Number(start[1]);
            old.startDay = Number(start[2]);
            return { ...old };
          });
          setChooseStatus((old) => {
            old.start = true;
            return { ...old };
          });
        } else {
          setStartTime('');
        }
      } else {
        setStartTime('');
      }
    }
  };
  const blurStartTime = () => {
    //失去焦点
    if (!/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(startTime)) {
      setStartTime('');
    }
  };
  const enterChangeEndTime = (e: any) => {
    //回车改变
    if (e.keyCode == 13) {
      if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(endTime)) {
        const start = endTime.split('-');
        if (
          Number(start[0]) >= startDate.startYear &&
          Number(start[1]) >= startDate.startMonth &&
          Number(start[2]) >= startDate.startDay
        ) {
          setEndDate((old) => {
            old.endYear = Number(start[0]);
            old.endMonth = Number(start[1]);
            old.endDay = Number(start[2]);
            return { ...old };
          });
          setChooseStatus((old) => {
            old.end = true;
            return { ...old };
          });
        } else {
          setEndTime('');
        }
      } else {
        setEndTime('');
      }
    }
  };
  const blurEndTime = () => {
    //失去焦点
    if (!/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(endTime)) {
      setEndTime('');
    }
  };
  const clearStartTime = () => {
    //清空开始时间
    setStartTime('');
    setStartDate((old) => {
      const now = new Date();
      old.startDay = now.getDate();
      old.startMonth = now.getMonth() + 1;
      old.startYear = now.getFullYear();
      return { ...old };
    });
  };
  const clearEndTime = () => {
    //清空结束时间
    setEndTime('');
    setEndDate((old) => {
      const now = new Date();
      old.endDay = now.getDate();
      old.endMonth = now.getMonth() + 1;
      old.endYear = now.getFullYear();
      return { ...old };
    });
  };
  const activeStyles = () => {
    //选中的样式
    return {
      activeDay: {
        color: '#fff',
        background: '#1890FF',
        fontWeight: 'bold',
        borderRadius: '5px',
      },
      showDialog: {
        opacity: 1,
      },
    };
  };
  const alignFn = useCallback(() => {
    if (!align) {
      return {
        bottom: {
          top: '40px',
        },
      };
    }
    return {
      right: {
        left: '360px',
        bottom: '20px',
      },
      left: {
        right: '600px',
        bottom: '20px',
      },
      top: {
        bottom: '40px',
      },
      bottom: {
        top: '40px',
      },
    }[align];
  }, [align]);
  const disabledClass = useCallback(
    (day: number | string) => {
      if (day == '') {
        return 'white';
      }
      if (startDate.startYear == endDate.endYear && startDate.startMonth == endDate.endMonth) {
        if (day < startDate.startDay) {
          return 'disabled-day';
        }
        return 'day-box';
      }
      return 'day-box';
    },
    [startDate, endDate],
  );
  return (
    <div className="range" onClick={(e) => e.stopPropagation()}>
      <div className="rangePicker" onClick={(e) => e.stopPropagation()}>
        <Input
          placeholder="请输入开始日期"
          defaultValue={
            startTime
              ? startTime
              : `${startDate.startYear}-${startDate.startMonth}-${startDate.startDay}`
          }
          handleIptChange={(v: string) => setStartTime(v)}
          handleIptFocus={startIptFocus}
          handleKeyDown={(e: any) => enterChangeStartTime(e)}
          handleIptBlur={blurStartTime}
          clearCallback={clearStartTime}
          showClear={showClear as boolean}
        />
        <SwapRightOutlined style={{ color: '#cccccc', fontSize: '20px' }} />
        <Input
          placeholder="请输入结束日期"
          defaultValue={
            endTime ? endTime : `${endDate.endYear}-${endDate.endMonth}-${endDate.endDay}`
          }
          handleIptChange={(v: string) => setEndTime(v)}
          handleIptFocus={endIptFocus}
          handleKeyDown={(e: any) => enterChangeEndTime(e)}
          handleIptBlur={blurEndTime}
          clearCallback={clearEndTime}
          showClear={showClear as boolean}
        />
        <div className="activeBorder"></div>
      </div>
      {renderShowDialog && (
        <div
          className="date-box"
          onClick={(e) => e.stopPropagation()}
          style={{ ...(showTimeDiaglog ? activeStyles().showDialog : {}), ...alignFn() } as any}
        >
          <div className="left">
            <div className="top-bar">
              <div className="icon">
                <DoubleLeftOutlined
                  style={{ cursor: 'pointer' }}
                  onClick={() => preYear('start')}
                />
                <LeftOutlined
                  style={{ marginLeft: '10px', cursor: 'pointer' }}
                  onClick={() => preMonth('start')}
                />
              </div>
              <div className="info">
                {startDate.startYear}年 {startDate.startMonth}月
              </div>
              <div>
                <RightOutlined style={{ cursor: 'pointer' }} onClick={() => nextMonth('start')} />
                <DoubleRightOutlined
                  style={{ marginLeft: '10px', cursor: 'pointer' }}
                  onClick={() => nextYear('start')}
                />
              </div>
            </div>
            <div className="week">
              <div>一</div>
              <div>二</div>
              <div>三</div>
              <div>四</div>
              <div>五</div>
              <div>六</div>
              <div>日</div>
            </div>
            <div className="day-list">
              {startDayListArray.map((i: string | number, index) => {
                return (
                  <div
                    key={index}
                    className={i == '' ? 'white' : 'box-list'}
                    style={i == startDate.startDay ? activeStyles().activeDay : {}}
                    onClick={() => chooseStartDay(Number(i))}
                  >
                    {i}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right">
            <div className="top-bar">
              <div>
                <DoubleLeftOutlined style={{ cursor: 'pointer' }} onClick={() => preYear('end')} />
                <LeftOutlined
                  style={{ marginLeft: '10px', cursor: 'pointer' }}
                  onClick={() => preMonth('end')}
                />
              </div>
              <div className="info">
                {endDate.endYear}年 {endDate.endMonth}月
              </div>

              <div className="icon">
                <RightOutlined style={{ cursor: 'pointer' }} onClick={() => nextMonth('end')} />
                <DoubleRightOutlined
                  style={{ marginLeft: '10px', cursor: 'pointer' }}
                  onClick={() => nextYear('end')}
                />
              </div>
            </div>
            <div className="week">
              <div>一</div>
              <div>二</div>
              <div>三</div>
              <div>四</div>
              <div>五</div>
              <div>六</div>
              <div>日</div>
            </div>
            <div className="day-list">
              {endDayListArray.map((i: string | number, index) => {
                return (
                  <div
                    key={index}
                    className={disabledClass(i)}
                    style={i == endDate.endDay ? activeStyles().activeDay : {}}
                    onClick={() => chooseEndDay(Number(i))}
                  >
                    {i}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(RangeDatePicker);
