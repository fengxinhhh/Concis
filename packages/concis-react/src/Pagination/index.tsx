import React, { useState, FC, useMemo, memo, useContext } from 'react';
import { EllipsisOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Select } from '..';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { getSiteTheme } from '../common_utils/storage/getSiteTheme';
import { getRenderColor } from '../common_utils/getRenderColor';
import './index.module.less';

interface PaginationProps {
  style?: object;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 总数据条数
   * @default 0
   */
  total: number;
  /**
   * @description 显示每页条数Select
   * @default false
   */
  showSizeChanger?: Boolean;
  /**
   * @description 每页条数配置
   * @default 每页10条数据
   */
  pageSizeOptions?: Array<number>;
  /**
   * @description 显示跳转页面输入框
   * @default false
   */
  showJumpInput?: Boolean;
  /**
   * @description 改变页码后的回调
   * @default {}
   */
  changePageCallback?: Function;
  /**
   * @description 改变每页显示后的回调
   * @default {}
   */
  changePageSizeCallback?: Function;
}
const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
  const {
    className,
    style,
    changePageCallback,
    changePageSizeCallback,
    total,
    pageSizeOptions,
    showJumpInput,
    showSizeChanger,
  } = props;

  const [nowIndex, setNowIndex] = useState<number>(1);
  const [pageRenderArray, setPageRenderArray] = useState<Array<number>>([]);
  const [sizePage, setSizePage] = useState<number>(pageSizeOptions ? pageSizeOptions[0] : 10);

  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classFirstName = darkTheme ? 'concis-dark-pagination' : 'concis-pagination';
  const classNames = cs(prefixCls, className, classFirstName);

  const totalPage = useMemo(() => {
    setNowIndex(1);
    if (Math.ceil(total / sizePage) > 6) {
      setPageRenderArray([2, 3, 4, 5, 6]);
    } else if (Math.ceil(total / sizePage) > 2) {
      const array = new Array((Math.ceil(total / sizePage) as number) - 2).fill(0);
      array.forEach((item, index) => {
        array[index] = index + 2;
      });
      setPageRenderArray(array);
    } else {
      setPageRenderArray([]);
    }
    return Math.ceil(total / sizePage);
  }, [total, sizePage]);
  // 点击改页码
  const changePage = (pageNum: number) => {
    return () => {
      // 小型分页器
      if (totalPage <= 6) {
        changePageCallback && changePageCallback(pageNum);
        return setNowIndex(pageNum);
      }
      if (pageNum > 4 && pageNum <= totalPage - 4) {
        setPageRenderArray([pageNum - 2, pageNum - 1, pageNum, pageNum + 1, pageNum + 2]);
      }
      // 页码为1的情况
      if (pageNum <= 4) {
        setPageRenderArray([2, 3, 4, 5, 6]);
      }
      // 页码到倒数第四页内的情况
      if (pageNum > totalPage - 4) {
        setPageRenderArray([
          totalPage - 5,
          totalPage - 4,
          totalPage - 3,
          totalPage - 2,
          totalPage - 1,
        ]);
      }
      setNowIndex(pageNum);
      changePageCallback && changePageCallback(pageNum);
    };
  };
  // 向前翻一页
  const prevPage = () => {
    if (nowIndex === 1) {
      return;
    }
    setNowIndex(nowIndex - 1);
    if (totalPage > 6) {
      if (nowIndex > totalPage - 3) {
        return;
      }
      if (nowIndex > 4) {
        setPageRenderArray(
          pageRenderArray.map((item: number) => {
            return item - 1;
          })
        );
      } else if (nowIndex - 5 <= 4) {
        // 开头几页翻页的情况，回到第一页
        setPageRenderArray([2, 3, 4, 5, 6]);
      }
    }
    changePageCallback && changePageCallback(nowIndex - 1);
  };
  // 向后翻一页
  const nextPage = () => {
    if (nowIndex === totalPage) {
      return;
    }
    setNowIndex(nowIndex + 1);
    if (totalPage > 6) {
      if (nowIndex + 5 > totalPage) {
        setPageRenderArray([
          totalPage - 5,
          totalPage - 4,
          totalPage - 3,
          totalPage - 2,
          totalPage - 1,
        ]);
      } else if (nowIndex < 4) {
        return;
      } else if (nowIndex + 5 < totalPage) {
        setPageRenderArray(
          pageRenderArray.map((item: number) => {
            return item + 1;
          })
        );
      }
    }
    changePageCallback && changePageCallback(nowIndex + 1);
  };
  // 向前翻五页
  const prevFivePage = () => {
    let updateIndex: number = 0;
    if (nowIndex - 5 <= 4) {
      // 开头几页翻页的情况，回到第一页
      setPageRenderArray([2, 3, 4, 5, 6]);
      updateIndex = nowIndex - 5 <= 1 ? 1 : nowIndex - 5;
    } else if (nowIndex + 5 > totalPage) {
      setPageRenderArray([nowIndex - 7, nowIndex - 6, nowIndex - 5, nowIndex - 4, nowIndex - 3]);
      updateIndex = nowIndex - 5;
    } else if (nowIndex - 5 > 4) {
      // 中间翻页的情况
      setPageRenderArray(
        pageRenderArray.map((item: number) => {
          return item - 5;
        })
      );
      updateIndex = nowIndex - 5;
    }
    setNowIndex(updateIndex);
    changePageCallback && changePageCallback(updateIndex);
  };
  // 向后翻五页
  const nextFivePage = () => {
    let updateIndex: number = 0;
    if (nowIndex + 7 >= totalPage) {
      setPageRenderArray([
        totalPage - 5,
        totalPage - 4,
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
      ]);
      updateIndex = nowIndex + 5 > totalPage ? totalPage : nowIndex + 5;
    } else if (nowIndex - 5 < 0) {
      setPageRenderArray([nowIndex + 3, nowIndex + 4, nowIndex + 5, nowIndex + 6, nowIndex + 7]);
      updateIndex = nowIndex + 5;
    } else if (nowIndex + 5 < totalPage) {
      setPageRenderArray(
        pageRenderArray.map((item: number) => {
          return item + 5;
        })
      );
      updateIndex = nowIndex + 5;
    }
    setNowIndex(updateIndex);
    changePageCallback && changePageCallback(updateIndex);
  };
  // 跳页
  const jumpPageNum = (e: any) => {
    if (e.keyCode === 13) {
      const jumpPage = Number(e.target.value);
      if (jumpPage > totalPage || jumpPage < 0 || isNaN(jumpPage)) {
        // 超出页码范围，不挑
        return (e.target.value = '');
      }
      if (jumpPage > 6 && jumpPage < totalPage - 6) {
        setPageRenderArray([jumpPage - 2, jumpPage - 1, jumpPage, jumpPage + 1, jumpPage + 2]);
      } else if (jumpPage - 5 < 0) {
        setPageRenderArray([2, 3, 4, 5, 6]);
      } else if (jumpPage + 5 > totalPage) {
        setPageRenderArray([
          totalPage - 5,
          totalPage - 4,
          totalPage - 3,
          totalPage - 2,
          totalPage - 1,
        ]);
      }
      setNowIndex(jumpPage);
      changePageCallback && changePageCallback(jumpPage);
      e.target.value = '';
    }
  };
  // select回调
  const handleSelectCallback = (pageSize: any) => {
    setSizePage(pageSize.value);
    changePageSizeCallback && changePageSizeCallback(pageSize.value);
  };

  return (
    <div
      className={classNames}
      style={
        {
          ...style,
          '--global-color': getRenderColor(
            (getSiteTheme() === ('dark' || 'auto') || darkTheme) as boolean,
            globalColor
          ),
        } as any
      }
    >
      <div
        className={
          nowIndex === 1
            ? `${classFirstName}-prev ${classFirstName}-disabled`
            : `${classFirstName}-prev`
        }
        onClick={prevPage}
      >
        <LeftOutlined />
      </div>
      <div
        className={
          nowIndex === 1
            ? `${classFirstName}-actived ${classFirstName}-numberBox`
            : `${classFirstName}-numberBox`
        }
        onClick={changePage(1)}
      >
        1
      </div>
      {nowIndex > 4 && totalPage > 6 && (
        <div className={`${classFirstName}-numberBox`} onClick={prevFivePage}>
          <EllipsisOutlined />
        </div>
      )}
      {totalPage >= 1 &&
        pageRenderArray.map((item: number, index: number) => {
          return (
            <div
              className={
                nowIndex === item
                  ? `${classFirstName}-actived  ${classFirstName}-numberBox`
                  : `${classFirstName}-numberBox`
              }
              key={index}
              onClick={changePage(item)}
            >
              {item}
            </div>
          );
        })}
      {totalPage - nowIndex >= 4 && totalPage > 6 && (
        <div className={`${classFirstName}-numberBox`} onClick={nextFivePage}>
          <EllipsisOutlined />
        </div>
      )}
      {totalPage > 1 && (
        <div
          className={
            nowIndex === totalPage
              ? `${classFirstName}-actived ${classFirstName}-numberBox`
              : `${classFirstName}-numberBox`
          }
          onClick={changePage(totalPage)}
        >
          {totalPage}
        </div>
      )}
      <div
        className={
          nowIndex === totalPage || totalPage <= 1
            ? `${classFirstName}-next ${classFirstName}-disabled`
            : `${classFirstName}-next`
        }
        onClick={nextPage}
      >
        <RightOutlined />
      </div>
      {Array.isArray(pageSizeOptions) && showSizeChanger && (
        <Select
          option={pageSizeOptions.map((item) => {
            return {
              label: `${item} 条/页`,
              value: item,
            };
          })}
          width={100}
          handleSelectCallback={handleSelectCallback}
        />
      )}
      {showJumpInput && (
        <div className={`${classFirstName}-jumpBox`}>
          <span>跳至</span>
          <input type="text" className={`${classFirstName}-jumpBox-jump`} onKeyUp={jumpPageNum} />
          <span>页</span>
        </div>
      )}
    </div>
  );
};
export default memo(Pagination);
