import React, { useEffect, FC, useState, useMemo } from 'react';
import { groupProps } from './interface';

const Group: FC<groupProps> = (props) => {
  const { data, tableProps } = props; //data为表格数据，tableProps为Table组件传来的参数

  const [columnData, setColumnData] = useState([]);

  const columnProps = useMemo(() => {
    //收集tableProps的memo
    return tableProps?.props || tableProps;
  }, [tableProps]);
  // const { width = "200", prop } = columnProps;
  useEffect(() => {
    //收集列数据
    const columnArray = JSON.parse(JSON.stringify(columnData));
    data?.forEach((item) => {
      for (let key in item) {
        if (columnProps?.prop == key) {
          columnArray.push(item[key]);
        }
      }
    });
    console.log(columnArray);
    setColumnData(columnArray);
  }, [columnProps, data]);
  return (
    <div>
      {columnData.map((d) => {
        return <div style={{ width: columnProps.width + 'px' }}>{d}</div>;
      })}
    </div>
  );
};

export default Group;
