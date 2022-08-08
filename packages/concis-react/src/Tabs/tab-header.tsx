import React, { useContext } from 'react';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { TabsHeaderProps } from './interface';
import { ctx } from './index';

export default function TabHeader(props: TabsHeaderProps) {
  const {
    paneChildren,
    defaultActiveTab,
    tabPosition,
    type,
    extra,
    changeHeaderActiveCallback,
    editable,
    addHeaderCallback,
    delHeaderCallback
  } = useContext(ctx);

  const changeHeader = (key: string, disabled: boolean) => {
    if (disabled) return;
    changeHeaderActiveCallback && changeHeaderActiveCallback(key);
  }
  const close = (key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    delHeaderCallback && delHeaderCallback(key)
  }
  const headerClass = (key: string, disabled: boolean) => {
    if (disabled) {
      return 'header-option header-option-disabled';
    } else if (key === defaultActiveTab) {
      return 'header-option header-option-active';
    }
    return 'header-option';
  }

  return (
    tabPosition === 'top' || tabPosition === 'bottom'
      ?
      <div className="header">
        <div className="header-list">
          {
            paneChildren?.map(item => {
              return (
                <span
                  className={headerClass(item.key, item.props.disabled)}
                  key={item.key}
                  onClick={() => changeHeader(item.key, item.props.disabled)}>
                  {item.props.title}
                  {
                    editable && type === 'card'
                    &&
                    <CloseOutlined className="close-icon" onClick={(e) => close(item.key, e)} />
                  }
                </span>
              )
            })
          }
          {
            editable && type === 'card'
            &&
            <PlusOutlined className="plus-icon" onClick={() => addHeaderCallback && addHeaderCallback()} />
          }
        </div>
        <div className="header-extra">
          {
            extra
          }
        </div>
      </div>
      :
      <>
        {
          paneChildren?.map(item => {
            return (
              <span
                className={headerClass(item.key, item.props.disabled)}
                key={item.key}
                onClick={() => changeHeader(item.key, item.props.disabled)}>
                {item.props.title}
                {
                  editable && type === 'card'
                  &&
                  <CloseOutlined className="close-icon" onClick={(e) => close(item.key, e)} />
                }
              </span>
            )
          })
        }
        {
          editable && type === 'card'
          &&
          <PlusOutlined className="plus-icon" onClick={() => addHeaderCallback && addHeaderCallback()} />
        }
      </>
  )
}
