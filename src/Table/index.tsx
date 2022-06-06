import React, { FC, useEffect, useCallback, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { tableProps } from './interface';
import CheckBox from '../CheckBox';
import './style/index.module.less';

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
  } = props;

  const [doTableData, setDoTableData] = useState(tableData); //表数据
  const [radioRow, setRadioRow] = useState({}); //单选选中行
  const [checkedRow, setCheckedRow] = useState<Array<object>>([]); //单选选中行

  useEffect(() => {
    const newDoTableData = [...doTableData];
    if (expandedRowRender) {
      //展开行处理
      newDoTableData.forEach((item: any) => {
        item.openLine = '';
      });
    }
    setDoTableData(newDoTableData);
  }, []);
  const tableStyle = useCallback(
    (thData: any) => {
      //表头样式
      const styleResult = {
        width: 'auto',
        textAlign: 'left',
      };
      if (thData?.width) {
        styleResult.width = `${thData.width}px`;
      }
      if (align) {
        styleResult.textAlign = align;
      }
      return styleResult;
    },
    [titleParams],
  );
  const openRow = (row: object, key: number): void => {
    //展开列表
    expandedRowRender && expandedRowRender(row);
    const newTableData = [...doTableData];
    if (newTableData[key].openLine) {
      newTableData[key].openLine = '';
    } else {
      newTableData[key]['openLine'] = expandedRowRender(row);
    }
    setDoTableData(newTableData);
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
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {(expandedRowRender || radio) && <th style={{ textAlign: (align as any) || 'left' }} />}
            {checked && (
              <th style={{ textAlign: (align as any) || 'left' }}>
                <CheckBox
                  checked={checkedRow.length == doTableData.length}
                  checkCallback={(checked: boolean) => checkAll(checked)}
                />
              </th>
            )}
            {titleParams.map((t, key) => {
              return (
                <th key={key} style={tableStyle(t) as any}>
                  {t.title}
                </th>
              );
            })}
          </tr>
        </thead>
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
      </table>
    </div>
  );
};
// Table.Group = Group;

export default Table;
