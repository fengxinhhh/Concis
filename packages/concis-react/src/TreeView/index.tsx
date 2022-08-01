import React, { memo, FC, Fragment, useState, useEffect, useCallback, useContext } from 'react';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { CaretRightOutlined, CaretDownOutlined, CheckOutlined } from '@ant-design/icons';
import './index.module.less';

type treeViewProps = {
  /**
   * @description Tree配置参数
   */
  className?: string;
  /**
   * @description Tree配置参数
   */
  treeData: Array<treeData>;
  /**
   * @description 默认展开
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 可拖拽
   * @default false
   */
  avaDrop?: boolean;
  /**
   * @description 选中回调函数
   */
  checkCallback?: Function;
  /**
   * @description 拖拽回调函数
   */
  dropCallback?: Function;
};
interface treeData {
  title: string;
  value: string;
  group: number;
  level?: number;
  prev?: treeData | null;
  height?: string;
  disabled?: boolean;
  checked?: boolean;
  children?: Array<treeData>;
}

const TreeView: FC<treeViewProps> = (props) => {
  const { treeData, className, defaultOpen, avaDrop, checkCallback, dropCallback } = props;

  const [stateTreeData, setStateTreeData] = useState<Array<treeData>>(treeData); //树结构
  const [hoverTreeNode, setHoverTreeNode] = useState(''); //当前覆盖的节点

  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}tree-select`);

  useEffect(() => {
    resolveTreeData(stateTreeData as Array<treeData>, 1, null);
  }, []);

  const resolveTreeData = (
    treeData: Array<treeData>,
    nowIndexLevel: number,
    prev: treeData | null,
  ) => {
    //二次处理treeData
    const newTreeData = [...treeData];
    newTreeData.forEach((treeNode: treeData, index) => {
      treeNode.level = nowIndexLevel;
      if (defaultOpen) {
        //默认全展开
        treeNode.height = '30px';
      } else {
        treeNode.height = treeNode.level == 1 ? '30px' : '0';
      }
      treeNode.checked = false;

      treeNode.prev = prev;
      if (treeNode?.children?.length) {
        //有子节点
        resolveTreeData(treeNode.children, nowIndexLevel + 1, treeNode);
      } else {
        //没有子节点，重置level为当前层级，继续寻找
        nowIndexLevel = treeNode.level;
      }
    });
    setStateTreeData(newTreeData); //更新状态
  };
  const toggleTreeMenu = (clickTreeNode: treeData) => {
    //菜单切换或直接选中终极节点
    if (clickTreeNode?.children?.length) {
      //菜单切换的情况
      const oldStateTree = [...stateTreeData];
      const editTreeNode = (treeNode: Array<treeData>) => {
        //所选节点后代收起处理函数
        treeNode.forEach((child) => {
          //找到节点，对子节点进行处理
          if (child?.children?.length) {
            child.height = '0';
            editTreeNode(child.children);
          } else {
            child.height = '0';
          }
        });
      };
      const mapFn = (treeNode: Array<treeData>) => {
        //深度优先查找节点函数
        treeNode.forEach((t: treeData, i: number) => {
          if (t.title == clickTreeNode.title && t.value == clickTreeNode.value) {
            if (t?.children?.length) {
              //后代节点处理，如果打开，只需打开下一代即可，如果关闭，需要关闭所有后代
              if (t.children[0].height == '0') {
                //打开
                t.children = t.children.map((child: treeData) => {
                  return {
                    ...child,
                    height: child.height == '0' ? '30px' : '0',
                  };
                });
              } else {
                //关闭
                editTreeNode(t.children); //对后代节点进行处理
              }
            }
          } else if (t?.children?.length) {
            mapFn(t.children);
          }
        });
      };
      mapFn(oldStateTree);
      setStateTreeData(oldStateTree);
    } else {
    }
  };
  const checkTreeNode = (clickTreeNode: treeData) => {
    //选中节点
    if (clickTreeNode.disabled) {
      return;
    }
    const oldStateTree = [...stateTreeData];
    const editTreeNode = (treeNode: Array<treeData>, status: boolean) => {
      //所选节点后代处理函数
      treeNode.forEach((child) => {
        //找到节点，对子节点进行处理
        if (child?.children?.length) {
          child.checked = status;
          editTreeNode(child.children, status);
        } else {
          child.checked = status;
        }
      });
    };
    const mapFn = (treeNode: Array<treeData>, prevNode: treeData | null) => {
      //当前节点/上一代节点/爷爷节点
      //深度优先查找节点函数
      treeNode.forEach((t: treeData, i: number) => {
        if (t.title == clickTreeNode.title && t.value == clickTreeNode.value) {
          t.checked = !t.checked;
          //前代链表节点的处理
          if (prevNode) {
            //如果链表有上层节点
            let nowTreeList = treeNode; //当前层链表所有节点
            while (prevNode !== null) {
              //链表到起始点，结束，从后往前查找
              if (nowTreeList.every((c) => c.checked)) {
                //当前层全部选中才改变上层链表
                prevNode.checked = true;
                nowTreeList.map((c) => (c.prev = prevNode));
                nowTreeList = prevNode.children as Array<treeData>;
                prevNode = prevNode.prev as treeData;
              } else {
                break;
              }
            }
          }
          //后代链表节点的处理
          if (t?.children?.length) {
            editTreeNode(t.children, t.checked); //对后代节点进行处理
          }
        } else if (t?.children?.length) {
          //递归继续遍历，直到找到所选节点
          mapFn(t.children, t);
        }
      });
    };
    mapFn(oldStateTree, null);
    setStateTreeData(oldStateTree);
    checkCallback && checkCallback(oldStateTree);
  };
  const checkBoxRender = useCallback(
    (treeData: treeData) => {
      //根据index对指定数据进行查找
      if (treeData.disabled) {
        return <div className="disblaed-checkBox"></div>;
      }
      if (!treeData?.children?.length) {
        //无子节点
        if (treeData.checked) {
          //选中
          return (
            <div className="checkBox-actived" onClick={() => checkTreeNode(treeData)}>
              <CheckOutlined />
            </div>
          );
        } else {
          //未选中
          return <div className="checkBox-noActived" onClick={() => checkTreeNode(treeData)}></div>;
        }
      } else if (treeData.children && treeData.children.length) {
        //有子节点
        let treeList: Array<number> = []; //0 -> 子节点未选中，1->  子节点选中
        const mapFn = (treeNode: treeData): any => {
          for (let i = 0; i < (treeNode.children as Array<treeData>).length; i++) {
            const child: treeData = (treeNode.children as Array<treeData>)[i];
            treeList.push(child.checked ? 1 : 0);
            if (child.children && child.children.length) {
              //还有后代
              return mapFn(child);
            } else {
              //到终点，无子节点
              if (i == (treeNode.children as Array<treeData>).length - 1) {
                if (treeList.every((c) => c == 0)) {
                  //全都没选中
                  return (
                    <div
                      className="checkBox-noActived"
                      onClick={() => checkTreeNode(treeData)}
                    ></div>
                  );
                } else if (treeList.every((c) => c == 1)) {
                  //全都选中
                  return (
                    <div className="checkBox-actived" onClick={() => checkTreeNode(treeData)}>
                      <CheckOutlined />
                    </div>
                  );
                } else {
                  //部分选中
                  return (
                    <div className="checkBox-activedLess" onClick={() => checkTreeNode(treeData)}>
                      <div className="less-box"></div>
                    </div>
                  );
                }
              }
            }
          }
        };
        return mapFn(treeData);
      }
    },
    [stateTreeData],
  );

  const dragStartTree = (e: any, treeData: treeData) => {
    //开始拖拽
    if (!avaDrop) return;
    if (stateTreeData.length == 1 && treeData.level == 1) {
      const oldTree = [...stateTreeData];
      const mapTree = (tree: treeData) => {
        if (tree.level !== 1) {
          tree.height = '0';
        }
        if (tree?.children?.length) {
          tree.children.forEach((c) => {
            c.height = '0';
            if (c?.children?.length) {
              c.children.forEach((child) => {
                mapTree(child);
              });
            }
          });
        }
      };
      mapTree(oldTree[0]);
      setStateTreeData(oldTree);
    } else {
      e.nativeEvent.dataTransfer.setData('dargTree', treeData.title);
    }
  };
  const dropOver = (e: any, treeNode: treeData) => {
    //拖拽完成
    if (!avaDrop) return;
    e.nativeEvent.preventDefault();
    if (treeNode.title && treeNode.title !== hoverTreeNode) {
      setHoverTreeNode(treeNode.title);
      const oldTree = [...stateTreeData];
      const mapFn = (tree: treeData) => {
        tree?.children?.forEach((c) => {
          if (c.title == treeNode.title) {
            c.height = '30px';
            c?.children?.forEach((childNode) => {
              childNode.height = '30px';
            });
          } else if (c?.children?.length) {
            mapFn(c);
          }
        });
      };
      oldTree.forEach((c) => {
        mapFn(c);
      });
      setStateTreeData(oldTree);
    }
  };
  const drop = (e: any, treeNode: treeData) => {
    //拖拽完成，进行更新
    if (!avaDrop) return;
    e.nativeEvent.preventDefault();
    var dragTreeNode = e.nativeEvent.dataTransfer.getData('dargTree'); //被拖拽的树节点
    if (!dragTreeNode) {
      return;
    }
    const oldStateTree = [...stateTreeData];
    const findDragNode = (treeList: treeData) => {
      //寻找拖拽节点在链表中的位置
      if (treeList.title == dragTreeNode && treeNode !== treeList) {
        dragTreeNode = treeList;
        if (treeList.level == 1) {
          oldStateTree.splice(treeList.group, 1);
        } else {
          treeList?.children?.splice(0, 1);
        }
        if (treeList?.children?.length == 0) {
          delete treeList.children;
        }
        return;
      }
      if (treeList?.children?.length) {
        treeList.children.forEach((c, i) => {
          if (c.title == dragTreeNode) {
            dragTreeNode = c;
            treeList?.children?.splice(i, 1);
            if (treeList?.children?.length == 0) {
              delete treeList.children;
            }
          }
          if (c.children) {
            findDragNode(c);
          }
        });
      }
    };
    oldStateTree.forEach((c) => {
      findDragNode(c);
    });

    const mapFn = (treeList: treeData) => {
      //寻找放置节点在链表中的位置
      if (treeList.title == treeNode.title) {
        dragTreeNode.level = (treeList.level || 0) + 1;
        dragTreeNode.prev = treeList;
        if (treeList.children) {
          treeList.children.splice(0, 0, dragTreeNode);
        } else {
          treeList.children = [dragTreeNode];
        }
        return;
      } else if (treeList?.children?.length) {
        treeList.children.forEach((child: treeData, index) => {
          if (child.title == treeNode.title) {
            dragTreeNode.level = child.level;
            dragTreeNode.prev = treeList;
            if (treeList.children) {
              treeList.children.splice(index + 1, 0, dragTreeNode);
              if (treeList.children[index + 1].children) {
                treeList.children[index + 1].children = (
                  treeList?.children[index + 1]?.children as Array<treeData>
                ).map((c) => {
                  return {
                    ...c,
                    level: ((treeList?.children as Array<treeData>)[index + 1].level || 0) + 1,
                  };
                });
              }
            } else {
              treeList.children = [dragTreeNode];
            }
          } else if (child?.children?.length) {
            mapFn(child);
          }
        });
      }
    };
    if (typeof dragTreeNode == 'object')
      oldStateTree.forEach((c) => {
        mapFn(c);
      });
    if (dragTreeNode.group == treeNode.group && dragTreeNode.level < (treeNode.level || 0)) {
      //如果拖拽的层级比落地的层级小，不做更新
      return;
    }
    setStateTreeData(oldStateTree);
    dropCallback && dropCallback(oldStateTree);
  };

  const render = useCallback(
    (data: Array<treeData> = stateTreeData) => {
      //动态规划render函数
      return data.map((treeNode: treeData, index) => {
        return (
          <Fragment key={index}>
            <div
              className="treeNode"
              style={{
                marginLeft: `${(treeNode.level || 0) * 10}px`,
                height: `${treeNode.height}`,
              }}
              draggable={avaDrop}
              onDragStart={(e) => dragStartTree(e, treeNode)}
              onDrop={(e) => drop(e, treeNode)}
              onDragOver={(e) => dropOver(e, treeNode)}
            >
              {
                treeNode?.children?.length ? (
                  treeNode.children[0].height == '0' ? (
                    <CaretDownOutlined onClick={() => toggleTreeMenu(treeNode)} />
                  ) : (
                    <CaretRightOutlined onClick={() => toggleTreeMenu(treeNode)} />
                  )
                ) : (
                  <div style={{ width: '14px', height: '14px' }}></div>
                ) //空间占位符
              }
              {checkBoxRender(treeNode)}
              <span
                className="text"
                onClick={() => toggleTreeMenu(treeNode)}
                style={treeNode.disabled ? { color: '#00000040' } : { color: '#000000' }}
              >
                {treeNode.title}
              </span>
            </div>
            {treeNode?.children?.length && render(treeNode.children)}
          </Fragment>
        );
      });
    },
    [stateTreeData],
  );

  return (
    <Fragment>
      <div className={classNames} style={{ '--global-color': globalColor || '#325DFF' } as any}>
        {render(stateTreeData)}
      </div>
    </Fragment>
  );
};

export default memo(TreeView);
