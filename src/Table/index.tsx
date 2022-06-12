import React, { FC, useEffect, useCallback, useState, createRef, useMemo, memo } from 'react';
import {
  PlusOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { tableProps, tableThType } from './interface';
import CheckBox from '../CheckBox';
import Pagination from '../Pagination';
import Popover from '../Popover';
import Input from '../Input';
import './style/index.module.less';

let sTop = 0;
const options = [10, 20, 30, 50];

const Table: FC<tableProps> = (props) => {
  const {
    titleParams,
    tableData,
    align,
    expandedRowRender,
    radio,
    checked,
    radioSelectCallback,
    checkedSelectCallback,
    filter,
    avableSort,
    virtualized,
    largeDateShowNum = 10,
    lazyLoad,
    pagination,
    paginationAlign,
    pageSizeOption,
    changePNumCallback,
    changePSizeCallback,
    dropabled,
    dropCallback,
  } = props;

  const [doColumnData, setDoColumnData] = useState(titleParams); //表头数据
  const [doTableData, setDoTableData] = useState(tableData); //表数据
  const [radioRow, setRadioRow] = useState({}); //单选选中行
  const [checkedRow, setCheckedRow] = useState<Array<object>>([]); //单选选中行
  const [scrollTop, setScrollTop] = useState(0);
  const [pageSize, setPageSize] = useState(options[0]);
  const [pageNum, setPageNum] = useState(1);

  const scrollDom = createRef();

  useEffect(() => {
    let newDoTableData = [...doTableData];
    if (expandedRowRender) {
      //展开行处理
      newDoTableData.forEach((item: any) => {
        item.openLine = '';
      });
    }
    if (avableSort) {
      //排序处理
      setDoColumnData((old) => {
        old.forEach((item: any) => {
          if (Array.isArray(item.sorter)) {
            item.sorter = item.sorter.map((s: any) => {
              return {
                fn: s,
                sorted: false,
              };
            });
          }
        });
        return [...old];
      });
    }
    if (virtualized || lazyLoad) {
      newDoTableData = newDoTableData.slice(0, largeDateShowNum || 10);
    }
    if (pagination) {
      newDoTableData = newDoTableData.slice(0, pageSize);
    }
    setDoTableData(newDoTableData);
  }, []);

  const tableStyle = useCallback(
    (thData: any) => {
      //表头样式
      const styleResult = {
        width: 'auto',
      };
      if (thData?.width) {
        styleResult.width = `${thData.width}px`;
      }
      return styleResult;
    },
    [titleParams],
  );
  const openRow = (row: object, key: number): void => {
    //展开列表
    if (expandedRowRender) {
      expandedRowRender(row);
      const newTableData = [...doTableData];
      if (newTableData[key].openLine) {
        newTableData[key].openLine = '';
      } else {
        if (expandedRowRender(row)) {
        }
        newTableData[key]['openLine'] = expandedRowRender(row);
      }
      setDoTableData(newTableData);
    }
  };
  const radioSelectRow = (row: object): void => {
    //单选行
    setRadioRow(row);
    radioSelectCallback && radioSelectCallback(row);
  };
  const checkedSelectRow = (checked: boolean, row: object): void => {
    //多选单行
    setCheckedRow((old: any) => {
      if (checked) {
        old.push(row);
      } else {
        const delIndex = old.findIndex((s: object) => s == row);
        old.splice(delIndex, 1);
      }
      checkedSelectCallback && checkedSelectCallback(old);
      return [...old];
    });
  };
  const checkAll = (checked: boolean): void => {
    // 全部选中
    setCheckedRow((old: Array<object>) => {
      if (checked) {
        //全选
        old = doTableData;
      } else {
        //全不选
        old = [];
      }
      checkedSelectCallback && checkedSelectCallback(old);
      return [...old];
    });
  };
  const sortColumn = (index: number, row: any, sortType: number) => {
    //表格单列排序  -> 2为升序 3为降序
    const sortKey = row.dataIndex;
    const newTableData = [...doTableData];
    if (Array.isArray(row.sorter) && typeof row.sorter[0] == 'object') {
      //自定义排序
      newTableData.sort(row.sorter[sortType - 2].fn);
      setDoTableData(newTableData);
      setDoColumnData((old: Array<any>): Array<any> => {
        if (sortType == 2) {
          old[index].sorter[0].sorted = true;
          old[index].sorter[1].sorted = false;
        } else {
          old[index].sorter[0].sorted = false;
          old[index].sorter[1].sorted = true;
        }

        return [...old];
      });
    } else {
      //默认排序
      newTableData.sort((a, b) => {
        return sortType == 2 ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
      });
      setDoTableData(newTableData);
      setDoColumnData((old) => {
        old[index].sorter = sortType;
        return [...old];
      });
    }
  };
  const handleIptChange = (v: string | boolean, t: tableThType) => {
    //筛选input改变回调
    if (v == '') {
      v = true;
    }
    setDoColumnData((old: Array<tableThType>) => {
      old.forEach((item: tableThType) => {
        if (item == t && old.filter) {
          item.filter = v;
        }
      });
      return [...old];
    });
  };
  const filterList = (t: tableThType) => {
    setDoTableData((old: Array<object>) => {
      if (t.filter == true) {
        old = tableData;
      } else {
        old = tableData.filter((item) => {
          return String(item[t.dataIndex]).includes(t.filter as string);
        });
      }
      return [...old];
    });
  };
  const renderContentTd = (rowData: object) => {
    //渲染正文行
    return Object.entries(rowData).map((value: any, key) => {
      if (value[0] !== 'openLine') {
        return (
          <td key={key} style={{ textAlign: align ? (align as any) : 'left' }}>
            {value[1]}
          </td>
        );
      }
    });
  };
  const sortIconStyle = useCallback(
    (thRow: any, iconType: number) => {
      //表头排序按钮样式
      if (typeof thRow.sorter == 'number' || typeof thRow.sorter == 'boolean') {
        //默认排序
        if (iconType == 0) {
          //升序箭头
          return {
            color: thRow.sorter == 2 ? '#1890ff' : '#a9adb2',
          };
        } else {
          //降序箭头
          return {
            color: thRow.sorter == 3 ? '#1890ff' : '#a9adb2',
          };
        }
      } else {
        //自定义排序
        if (iconType == 0) {
          //升序箭头
          return {
            color: thRow.sorter[0].sorted ? '#1890ff' : '#a9adb2',
          };
        } else {
          //降序箭头
          return {
            color: thRow.sorter[1].sorted ? '#1890ff' : '#a9adb2',
          };
        }
      }
    },
    [titleParams, doColumnData],
  );
  const scrollTable = (e: any) => {
    if (virtualized) {
      //虚拟加载
      const top = (scrollDom.current as any).scrollTop;
      //滚到底，不继续滚
      if (
        (tableData.length + 2) *
          (document.querySelector('.victurl-scroll-tr') as any)?.offsetHeight -
          sTop <
          (largeDateShowNum + 2) *
            (document.querySelector('.victurl-scroll-tr') as any)?.offsetHeight &&
        top > sTop
      ) {
        return;
      }
      const listHeight = (document.querySelector('.victurl-scroll-tr') as any)?.offsetHeight || 40;
      sTop = top;
      setScrollTop(top);
      setDoTableData((old) => {
        const showNum = largeDateShowNum ? largeDateShowNum : 10;
        old = tableData.slice(Math.floor(top / listHeight), Math.floor(top / listHeight) + showNum);
        return [...old];
      });
    } else if (lazyLoad) {
      //懒加载
      if (
        e.nativeEvent.target.scrollHeight -
          e.nativeEvent.target.clientHeight -
          e.nativeEvent.target.scrollTop ==
        0
      ) {
        setDoTableData((old) => {
          old = [...old, ...tableData.slice(old.length + 1, old.length + 11)];
          return [...old];
        });
      }
    }
  };
  const changePageCallback = (pageNum: number) => {
    //页码改变回调
    setPageNum(pageNum);
    setDoTableData((old) => {
      old = tableData.slice((pageNum - 1) * pageSize, (pageNum - 1) * pageSize + pageSize);
      return [...old];
    });
    changePNumCallback &&
      changePNumCallback(
        pageNum,
        tableData.slice((pageNum - 1) * pageSize, (pageNum - 1) * pageSize + pageSize),
      );
  };
  const changePageSizeCallback = (pageSize: number) => {
    //页数改变回调
    setPageSize(pageSize);
    setDoTableData((old) => {
      old = tableData.slice(0, pageSize);
      return [...old];
    });
    changePSizeCallback && changePSizeCallback(pageSize, tableData.slice(0, pageSize));
  };
  const dargStart = (e: any, index: number) => {
    e.nativeEvent.dataTransfer.setData('dragKey', index);
  };

  const drop = (e: any, index: number) => {
    e.nativeEvent.preventDefault();
    const drapIndex = e.nativeEvent.dataTransfer.getData('dragKey');
    const dropIndex = index;
    setDoTableData((old) => {
      [old[drapIndex], old[dropIndex]] = [old[dropIndex], old[drapIndex]];
      dropCallback && dropCallback(old);
      return [...old];
    });
  };
  const dragOver = (e: any) => {
    e.nativeEvent.preventDefault();
  };
  const renderScrollList = useCallback(() => {
    //虚拟列表tr栏渲染
    return doTableData?.map((t, key) => {
      return (
        <>
          <tr key={key} className="victurl-scroll-tr">
            {
              //展开行
              expandedRowRender && (
                <td
                  style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}
                  onClick={() => openRow(t, key)}
                >
                  <PlusOutlined />
                </td>
              )
            }
            {
              //单选
              radio && (
                <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>
                  <input
                    className="radioBox"
                    type="radio"
                    checked={radioRow == t ? true : false}
                    onClick={() => radioSelectRow(t)}
                  ></input>
                </td>
              )
            }
            {
              //多选
              checked && (
                <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>
                  <CheckBox
                    checked={checkedRow.indexOf(t) == -1 ? false : true}
                    checkCallback={(check: boolean) => checkedSelectRow(check, t)}
                  >
                    {checkedRow.indexOf(t) == -1}
                  </CheckBox>
                </td>
              )
            }
            {renderContentTd(t)}
          </tr>
          {t.openLine && (
            <tr>
              <td
                style={{ textAlign: (align as any) || 'left' }}
                colSpan={Object.keys(doTableData[0]).length + 1}
              >
                {t.openLine}
              </td>
            </tr>
          )}
        </>
      );
    });
  }, [doTableData, sTop, scrollTop, checkedRow, radioRow]);
  const tableContentRender = () => {
    //表正文渲染
    if (virtualized) {
      //虚拟列表
      return (
        <div
          style={{
            height:
              (tableData.length + 2) *
                (document.querySelector('.victurl-scroll-tr') as any)?.offsetHeight -
              sTop +
              'px',
            transform: `translateY(${sTop}px)`,
          }}
        >
          <thead>
            <tr>
              {(expandedRowRender || radio) && (
                <th style={{ textAlign: (align as any) || 'left' }} />
              )}
              {checked && (
                <th style={{ textAlign: (align as any) || 'left' }}>
                  <CheckBox
                    checked={checkedRow.length == doTableData.length}
                    checkCallback={(checked: boolean) => checkAll(checked)}
                  />
                </th>
              )}
              {doColumnData?.map((t, key) => {
                return (
                  <th key={key} style={tableStyle(t) as any} className="tableHead">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: align || 'flex-start',
                        alignItems: 'center',
                      }}
                    >
                      <span>{t.title}</span>
                      {t?.sorter && avableSort && (
                        <div className="sort-icon">
                          <CaretUpOutlined
                            onClick={() => sortColumn(key, t, 2)}
                            style={sortIconStyle(t, 0)}
                          />
                          <CaretDownOutlined
                            onClick={() => sortColumn(key, t, 3)}
                            style={sortIconStyle(t, 1)}
                          />
                        </div>
                      )}
                      {t?.filter && filter && (
                        <Popover
                          type="click"
                          align="bottom"
                          dialogWidth={130}
                          noBorder
                          content={
                            <div className="filter-dialog">
                              <Input
                                placeholder="请输入"
                                width="70"
                                handleIptChange={(v: string) => handleIptChange(v, t)}
                              />
                              <div className="search-btn" onClick={() => filterList(t)}>
                                <SearchOutlined />
                              </div>
                            </div>
                          }
                        >
                          <div className="search-th-btn">
                            <SearchOutlined />
                          </div>
                        </Popover>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>{renderScrollList()}</tbody>
        </div>
      );
    } else if (lazyLoad) {
      //懒加载
      return (
        <tbody>
          {doTableData?.map((t, key) => {
            return (
              <>
                <tr key={key}>
                  {
                    //展开行
                    expandedRowRender && (
                      <td
                        style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}
                        onClick={() => openRow(t, key)}
                      >
                        <PlusOutlined />
                      </td>
                    )
                  }
                  {
                    //单选
                    radio && (
                      <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>
                        <input
                          className="radioBox"
                          type="radio"
                          checked={radioRow == t ? true : false}
                          onClick={() => radioSelectRow(t)}
                        ></input>
                      </td>
                    )
                  }
                  {
                    //多选
                    checked && (
                      <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>
                        <CheckBox
                          checked={checkedRow.indexOf(t) == -1 ? false : true}
                          checkCallback={(check: boolean) => checkedSelectRow(check, t)}
                        >
                          {checkedRow.indexOf(t) == -1}
                        </CheckBox>
                      </td>
                    )
                  }
                  {renderContentTd(t)}
                </tr>
                {t.openLine && (
                  <tr>
                    <td
                      style={{ textAlign: (align as any) || 'left' }}
                      colSpan={Object.keys(doTableData[0]).length + 1}
                    >
                      {t.openLine}
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      );
    } else if (pagination) {
      //分页渲染
      return (
        <tbody>
          {
            //常规表正文
            doTableData?.map((t, key) => {
              return (
                <>
                  <tr key={key}>
                    {
                      //展开行
                      expandedRowRender && (
                        <td
                          style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}
                          onClick={() => openRow(t, key)}
                        >
                          <PlusOutlined />
                        </td>
                      )
                    }
                    {
                      //单选
                      radio && (
                        <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>
                          <input
                            className="radioBox"
                            type="radio"
                            checked={radioRow == t ? true : false}
                            onClick={() => radioSelectRow(t)}
                          ></input>
                        </td>
                      )
                    }
                    {
                      //多选
                      checked && (
                        <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>
                          <CheckBox
                            checked={checkedRow.indexOf(t) == -1 ? false : true}
                            checkCallback={(check: boolean) => checkedSelectRow(check, t)}
                          >
                            {checkedRow.indexOf(t) == -1}
                          </CheckBox>
                        </td>
                      )
                    }
                    {renderContentTd(t)}
                  </tr>
                  {t.openLine && (
                    <tr>
                      <td
                        style={{ textAlign: (align as any) || 'left' }}
                        colSpan={Object.keys(doTableData[0]).length + 1}
                      >
                        {t.openLine}
                      </td>
                    </tr>
                  )}
                </>
              );
            })
          }
        </tbody>
      );
    } else if (dropabled) {
      //拖拽表渲染
      return (
        <tbody>
          {
            //常规表正文
            doTableData?.map((t, key) => {
              return (
                <>
                  <tr
                    key={key}
                    style={{ cursor: 'move' }}
                    draggable
                    onDragStart={(e) => dargStart(e, key)}
                    onDrop={(e) => drop(e, key)}
                    onDragOver={(e) => dragOver(e)}
                  >
                    {
                      //展开行
                      expandedRowRender && (
                        <td
                          style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}
                          onClick={() => openRow(t, key)}
                        >
                          <PlusOutlined />
                        </td>
                      )
                    }
                    {
                      //单选
                      radio && (
                        <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>
                          <input
                            className="radioBox"
                            type="radio"
                            checked={radioRow == t ? true : false}
                            onClick={() => radioSelectRow(t)}
                          ></input>
                        </td>
                      )
                    }
                    {
                      //多选
                      checked && (
                        <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>
                          <CheckBox
                            checked={checkedRow.indexOf(t) == -1 ? false : true}
                            checkCallback={(check: boolean) => checkedSelectRow(check, t)}
                          >
                            {checkedRow.indexOf(t) == -1}
                          </CheckBox>
                        </td>
                      )
                    }
                    {renderContentTd(t)}
                  </tr>
                  {t.openLine && (
                    <tr>
                      <td
                        style={{ textAlign: (align as any) || 'left' }}
                        colSpan={Object.keys(doTableData[0]).length + 1}
                      >
                        {t.openLine}
                      </td>
                    </tr>
                  )}
                </>
              );
            })
          }
        </tbody>
      );
    } else {
      //常规表渲染
      return (
        <tbody>
          {
            //常规表正文
            doTableData?.map((t, key) => {
              return (
                <>
                  <tr key={key}>
                    {
                      //展开行
                      expandedRowRender && (
                        <td
                          style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}
                          onClick={() => openRow(t, key)}
                        >
                          <PlusOutlined />
                        </td>
                      )
                    }
                    {
                      //单选
                      radio && (
                        <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>
                          <input
                            className="radioBox"
                            type="radio"
                            checked={radioRow == t ? true : false}
                            onClick={() => radioSelectRow(t)}
                          ></input>
                        </td>
                      )
                    }
                    {
                      //多选
                      checked && (
                        <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>
                          <CheckBox
                            checked={checkedRow.indexOf(t) == -1 ? false : true}
                            checkCallback={(check: boolean) => checkedSelectRow(check, t)}
                          >
                            {checkedRow.indexOf(t) == -1}
                          </CheckBox>
                        </td>
                      )
                    }
                    {renderContentTd(t)}
                  </tr>
                  {t.openLine && (
                    <tr>
                      <td
                        style={{ textAlign: (align as any) || 'left' }}
                        colSpan={Object.keys(doTableData[0]).length + 1}
                      >
                        {t.openLine}
                      </td>
                    </tr>
                  )}
                </>
              );
            })
          }
        </tbody>
      );
    }
  };
  const paginationAlignStyle = useMemo(() => {
    let returnStyle = {};
    if (!paginationAlign) {
      returnStyle = {
        justifyContent: 'flex-start',
      };
    } else {
      switch (paginationAlign) {
        case 'left':
          returnStyle = {
            justifyContent: 'flex-start',
          };
          break;
        case 'center':
          returnStyle = {
            justifyContent: 'center',
          };
          break;
        case 'right':
          returnStyle = {
            justifyContent: 'flex-end',
          };
          break;
      }
    }
    return returnStyle;
  }, [paginationAlign]);
  return (
    <div
      className="table-container"
      style={
        virtualized || lazyLoad
          ? {
              height: `${
                (largeDateShowNum + 2) *
                (document.querySelector('.victurl-scroll-tr') as any)?.offsetHeight
              }px`,
            }
          : {}
      }
    >
      <div
        className="table"
        style={
          virtualized || lazyLoad
            ? {
                maxHeight: `${
                  (largeDateShowNum + 2) *
                  (document.querySelector('.victurl-scroll-tr') as any)?.offsetHeight
                }px`,
                overflow: 'scroll',
                position: 'absolute',
                top: '40px',
                left: '0',
              }
            : {}
        }
        onScroll={(e) => scrollTable(e)}
        ref={scrollDom as any}
      >
        <table>
          {
            //常规表格
            !virtualized && (
              <thead>
                <tr>
                  {(expandedRowRender || radio) && (
                    <th style={{ textAlign: (align as any) || 'left' }} />
                  )}
                  {checked && (
                    <th style={{ textAlign: (align as any) || 'left' }}>
                      <CheckBox
                        checked={checkedRow.length == doTableData.length}
                        checkCallback={(checked: boolean) => checkAll(checked)}
                      />
                    </th>
                  )}
                  {doColumnData.map((t, key) => {
                    return (
                      <th key={key} style={tableStyle(t) as any} className="tableHead">
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: align || 'flex-start',
                            alignItems: 'center',
                          }}
                        >
                          <span>{t.title}</span>
                          {t?.sorter && avableSort && (
                            <div className="sort-icon">
                              <CaretUpOutlined
                                onClick={() => sortColumn(key, t, 2)}
                                style={sortIconStyle(t, 0)}
                              />
                              <CaretDownOutlined
                                onClick={() => sortColumn(key, t, 3)}
                                style={sortIconStyle(t, 1)}
                              />
                            </div>
                          )}
                          {t?.filter && filter && (
                            <Popover
                              type="click"
                              align="bottom"
                              dialogWidth={130}
                              noBorder
                              content={
                                <div className="filter-dialog">
                                  <Input
                                    placeholder="请输入"
                                    width="70"
                                    handleIptChange={(v: string) => handleIptChange(v, t)}
                                  />
                                  <div className="search-btn" onClick={() => filterList(t)}>
                                    <SearchOutlined />
                                  </div>
                                </div>
                              }
                            >
                              <div className="search-th-btn">
                                <SearchOutlined />
                              </div>
                            </Popover>
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
            )
          }
          {
            //表正文
            tableContentRender()
          }
        </table>
      </div>
      {pagination && (
        <div className="pagination" style={paginationAlignStyle}>
          <Pagination
            style={paginationAlignStyle}
            total={tableData.length}
            showSizeChanger
            pageSizeOptions={pageSizeOption || options}
            showJumpInput
            changePageSizeCallback={changePageSizeCallback}
            changePageCallback={changePageCallback}
          />
        </div>
      )}
    </div>
  );
};

export default memo(Table);
