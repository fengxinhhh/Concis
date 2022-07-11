import React, { FC, useState, memo, useCallback, useContext } from 'react';
import Input from '../../Input';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import { globalCtx } from '../../GlobalConfig';
import './index.module.less';

interface RadioGroupProps {
  children: Array<Object>;
  /**
   * @description 默认值
   * @default 0
   */
  value?: Number;
  canAddOption?: Boolean;
  boxStyle?: Boolean;
  onChange?: Function;
}
interface RadioProps {
  children: string;
  disabled: Boolean;
}

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { children, value, canAddOption, boxStyle, onChange } = props;

  const [selectIndex, setSelectIndex] = useState(value || 0); //选中索引
  const [renderOptions, setRenderOptions] = useState(children);
  const [addOptionVal, setAddOptionVal] = useState('');
  const [showAddOption, setShowAddOption] = useState(canAddOption && false);

  const { globalColor } = useContext(globalCtx) as GlobalConfigProps;

  const changeOptions = (item: RadioProps, i: number, e: any) => {
    if (item.disabled) return;
    e && e.stopPropagation();
    setSelectIndex(i);
    onChange && onChange(item, i);
    canAddOption && setShowAddOption(false);
  };
  const addOptions = () => {
    //新增options
    setSelectIndex(renderOptions.length);
    setShowAddOption(true);
  };
  const handleKeyDown = (e: any) => {
    //新增确认
    if (e.keyCode == 13 && addOptionVal) {
      setRenderOptions((old) => {
        const addOption = {
          props: {
            children: addOptionVal,
          },
        };
        return [...old, addOption];
      });
      setShowAddOption(false);
    }
  };
  const handleIptChange = (val: string) => {
    //新增输入框
    setAddOptionVal(val);
  };
  const boxStyleClassName = useCallback(
    (props: RadioProps, i: number) => {
      if (props.disabled) {
        return 'groupDisabledStyle';
      }
      if (i == selectIndex) {
        return 'groupActive';
      }
      return 'groupStyle';
    },
    [children, boxStyle, value, selectIndex],
  );

  return (
    <div className="radioGroup" style={{ '--global-color': globalColor || '#1890ff' } as any}>
      {renderOptions.map((item: any, index: number) => {
        return boxStyle ? (
          <div
            className={boxStyleClassName(item.props, index)}
            style={item.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
            key={index}
            onClick={(e) => changeOptions(item.props, index, e)}
          >
            {item.props.children}
          </div>
        ) : (
          <div
            className="radioBox"
            style={item.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
            key={index}
            onClick={(e) => changeOptions(item.props, index, e)}
          >
            <div
              className={selectIndex === index ? 'radio-checked' : 'radio'}
              style={item.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
            ></div>
            <span className={item.props.disabled ? 'disabledLabel' : 'radioLabel'}>
              {item.props.children}
            </span>
          </div>
        );
      })}
      {
        //新增Options项(优雅之王)
        canAddOption ? (
          boxStyle ? (
            <div className="addOption">
              <div
                className={selectIndex === renderOptions.length ? 'groupActive' : 'groupStyle'}
                onClick={addOptions}
              >
                More...
              </div>
              {showAddOption && (
                <Input handleKeyDown={handleKeyDown} handleIptChange={handleIptChange} />
              )}
            </div>
          ) : (
            <div className="addOption">
              <div className="radioBox" onClick={addOptions}>
                <div className={selectIndex === renderOptions.length ? 'radio-checked' : 'radio'} />
                <span className="radioLabel">More...</span>
              </div>
              {showAddOption && (
                <Input handleKeyDown={handleKeyDown} handleIptChange={handleIptChange} />
              )}
            </div>
          )
        ) : (
          <></>
        )
      }
    </div>
  );
};

export default memo(RadioGroup);
