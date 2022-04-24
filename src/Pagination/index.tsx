import React, { useState, useEffect, FC, useMemo, memo } from 'react';
import { EllipsisOutlined, LeftOutlined, RightOutlined, DownOutlined } from '@ant-design/icons';
import { Select } from '..';
import './index.module.less';

interface PaginationProps {
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
   * @description 改变页码后的回调
   * @default {}
   */
  showJumpInput?: Boolean;
  /**
   * @description 显示跳转页面输入框
   * @default false
   */
  changePageCallback: Function;
}
const Pagination: FC<PaginationProps> = (props) => {
  const { changePageCallback, total, pageSizeOptions, showJumpInput, showSizeChanger } = props;

  const [nowIndex, setNowIndex] = useState<number>(1);
  const [pageRenderArray, setPageRenderArray] = useState<Array<number>>([]);
  const [sizePage, setSizePage] = useState<number>(pageSizeOptions ? pageSizeOptions[0] : 10);
  const [showSizeOptions, setShowSizeOptions] = useState(false);

  const totalPage = useMemo(() => {
    setNowIndex(1);
    if (Math.ceil(total / sizePage) > 6) {
      setPageRenderArray([2, 3, 4, 5, 6]);
    } else {
      if (Math.ceil(total / sizePage) > 2) {
        const array = new Array((Math.ceil(total / sizePage) as number) - 2).fill(0);
        array.forEach((item, index) => {
          array[index] = index + 2;
        });
        setPageRenderArray(array);
      } else {
        setPageRenderArray([]);
      }
    }
    return Math.ceil(total / sizePage);
  }, [total, sizePage]);
  useEffect(() => {
    console.log(typeof nowIndex);
  }, [nowIndex]);

  //点击改页码
  const changePage = (pageNum: number) => {
    return () => {
      //小型分页器
      if (totalPage <= 6) {
        changePageCallback(pageNum);
        return setNowIndex(pageNum);
      }
      if (pageNum > 4 && pageNum <= totalPage - 4) {
        setPageRenderArray([pageNum - 2, pageNum - 1, pageNum, pageNum + 1, pageNum + 2]);
      }
      //页码为1的情况
      if (pageNum <= 4) {
        setPageRenderArray([2, 3, 4, 5, 6]);
      }
      //页码到倒数第四页内的情况
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
      changePageCallback(pageNum);
    };
  };
  //向前翻一页
  const prevPage = () => {
    if (nowIndex === 1) {
      return;
    }
    setNowIndex(nowIndex - 1);
    if (totalPage > 6) {
      if (nowIndex > totalPage - 3) {
        return;
      } else if (nowIndex > 4) {
        setPageRenderArray(
          pageRenderArray.map((item) => {
            return item - 1;
          }),
        );
      } else if (nowIndex - 5 <= 4) {
        //开头几页翻页的情况，回到第一页
        setPageRenderArray([2, 3, 4, 5, 6]);
      }
    }
    changePageCallback(nowIndex - 1);
  };
  //向后翻一页
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
          pageRenderArray.map((item) => {
            return item + 1;
          }),
        );
      }
    }
    changePageCallback(nowIndex + 1);
  };
  //向前翻五页
  const prevFivePage = () => {
    var updateIndex: number = 0;
    if (nowIndex - 5 <= 4) {
      //开头几页翻页的情况，回到第一页
      setPageRenderArray([2, 3, 4, 5, 6]);
      updateIndex = nowIndex - 5 <= 1 ? 1 : nowIndex - 5;
    } else if (nowIndex + 5 > totalPage) {
      setPageRenderArray([nowIndex - 7, nowIndex - 6, nowIndex - 5, nowIndex - 4, nowIndex - 3]);
      updateIndex = nowIndex - 5;
    } else if (nowIndex - 5 > 4) {
      //中间翻页的情况
      setPageRenderArray(
        pageRenderArray.map((item) => {
          return item - 5;
        }),
      );
      updateIndex = nowIndex - 5;
    }
    setNowIndex(updateIndex);
    changePageCallback(updateIndex);
  };
  //向后翻五页
  const nextFivePage = () => {
    var updateIndex: number = 0;
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
        pageRenderArray.map((item) => {
          return item + 5;
        }),
      );
      updateIndex = nowIndex + 5;
    }
    setNowIndex(updateIndex);
    changePageCallback(updateIndex);
  };
  //跳页
  const jumpPageNum = (e: any) => {
    if (e.keyCode === 13) {
      const jumpPage = Number(e.target.value);
      if (jumpPage > totalPage || jumpPage < 0 || isNaN(jumpPage)) {
        //超出页码范围，不挑
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
      changePageCallback(jumpPage);
      e.target.value = '';
    }
  };
  //select回调
  const handleSelectCallback = (pageSize: number) => {
    console.log(pageSize);
    setSizePage(pageSize);
  };

  return (
    <div className="pagination">
      <div className={nowIndex === 1 ? `prev disabled` : `prev`} onClick={prevPage}>
        <LeftOutlined />
      </div>
      <div className={nowIndex === 1 ? `actived numberBox` : `numberBox`} onClick={changePage(1)}>
        1
      </div>
      {nowIndex > 4 && totalPage > 6 && (
        <div className="numberBox" onClick={prevFivePage}>
          <EllipsisOutlined />
        </div>
      )}

      {totalPage <= 4 &&
        pageRenderArray.length >= 1 &&
        pageRenderArray.map((index) => {
          return (
            <div
              className={nowIndex === index + 2 ? `actived numberBox` : `numberBox`}
              key={index}
              onClick={changePage(index + 2)}
            >
              {index + 2}
            </div>
          );
        })}
      {totalPage > 4 &&
        pageRenderArray.map((item, index) => {
          {
            return (
              <div
                className={nowIndex === item ? `actived numberBox` : `numberBox`}
                key={index}
                onClick={changePage(item)}
              >
                {item}
              </div>
            );
          }
        })}
      {totalPage - nowIndex >= 4 && totalPage > 6 && (
        <div className="numberBox" onClick={nextFivePage}>
          <EllipsisOutlined />
        </div>
      )}
      {totalPage > 1 && (
        <div
          className={nowIndex === totalPage ? `actived numberBox` : `numberBox`}
          onClick={changePage(totalPage)}
        >
          {totalPage}
        </div>
      )}
      <div
        className={nowIndex === totalPage || totalPage <= 1 ? `next disabled` : `next`}
        onClick={nextPage}
      >
        <RightOutlined />
      </div>
      {/* {
                Array.isArray(pageSizeOptions) && showSizeChanger
                &&
                <div className={pageSizeSelect} onClick={() => setShowSizeOptions(!showSizeOptions)}>
                    <>
                        <span className={size}>{sizePage} 条/页</span>
                        <DownOutlined />

                    </>
                    {
                        showSizeOptions
                        &&
                        <div className={options}>
                            {
                                pageSizeOptions.map(s => {
                                    return (
                                        <div key={s as number} className={option} onClick={() => setSizePage(s as number)}>
                                            {s} 条/页
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            } */}
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
        <div className="jumpBox">
          <span>跳至</span>
          <input type="text" className="jump" onKeyUp={jumpPageNum}></input>
          <span>页</span>
        </div>
      )}
    </div>
  );
};
export default memo(Pagination);
