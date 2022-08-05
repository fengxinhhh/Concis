import React, { FC, useMemo, useEffect, useState, useCallback, memo, useContext, CSSProperties } from 'react';
import { DownOutlined, UpOutlined, LoadingOutlined, CloseOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group';
import { ctx } from '../Form';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

interface Options {
  label: String | number;
  value: String | number;
  disabled?: Boolean;
}
interface SelectProps {
  /**
   * @description 选择器数据
   * @default []
   */
  option: Array<Options>;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 宽度
   * @default 80px
   */
  width?: Number;
  /**
   * @description 提示
   * @default false
   */
  placeholder?: String;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: Boolean;
  /**
   * @description 加载状态
   * @default false
   */
  loading?: Boolean;
  /**
   * @description 可输入状态
   * @default false
   */
  showSearch?: Boolean;
  /**
   * @description 可输入状态下清除
   * @default false
   */
  clearable?: Boolean;
  /**
   * @description 选择后的回调
   * @default {}
   */
  handleSelectCallback?: Function;
  /**
   * @description 输入后的回调
   * @default {}
   */
  handleTextChange?: Function;
}

const Select: FC<SelectProps> = (props: SelectProps) => {
  const {
    option,
    className,
    style,
    width,
    placeholder,
    disabled,
    loading,
    showSearch,
    clearable,
    handleSelectCallback,
    handleTextChange,
  } = props;
  const [selected, setSelected] = useState<string | number | any>('');
  const [selectedValue, setSelectedValue] = useState<string | number | any>('');
  const [visible, setVisible] = useState(false);

  const formCtx: any = useContext(ctx);
  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}select`);

  const closeSelect = (e: any) => {
    if (!e.target?.getAttribute('class')?.includes('selected')) {
      setVisible(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      closeSelect(e);
    });
    return () => {
      document.body.removeEventListener('click', (e) => {
        closeSelect(e);
      });
    };
  }, []);
  useEffect(() => {
    //用于监听Form组件的重置任务
    if (formCtx.reset) {
      setSelected('');
    }
  }, [formCtx.reset]);
  useEffect(() => {
    if (formCtx.submitStatus) {
      formCtx.getChildVal(selected);
    }
  }, [formCtx.submitStatus]);

  const ownsWidth = useMemo(() => {
    //传参宽度
    if (width) {
      return {
        width: `${width}px`,
      };
    }
    return {};
  }, [width]);
  const disabledStyle = useMemo(() => {
    //禁用状态
    if (disabled || loading) {
      return {
        cursor: 'not-allowed',
        background: '#F2F3F5',
      };
    }
  }, [disabled, loading]);

  const toggleOptions = (e: any) => {
    //切换下拉
    e.stopPropagation();
    if (disabled || loading) return;
    setVisible(!visible);
  };
  const changeOptions = (v: Options, e: any) => {
    //选择选项
    e.stopPropagation();
    if (v.disabled) return;
    setVisible(false);
    setSelected(v.label);
    setSelectedValue(v.value);
    if (handleSelectCallback) {
      handleSelectCallback(v);
    }
  };
  const inputFilterOtpions = useMemo(() => {
    //输入状态options过滤
    return option?.filter((item) => {
      return (item.label as string).includes(selected);
    });
  }, [option, selected]);
  const handleInputChange = useCallback(
    (e: any) => {
      //输入后的回调
      setSelected(e.target.value);
      if (handleTextChange) {
        handleTextChange(e.target.value);
      }
    },
    [selected],
  );
  const clearSearchSelect = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setSelectedValue('');
    setSelected('');
  };
  const selectClassName = useMemo(() => {
    return selected ? 'size' : 'placeholder';
  }, [selected]);

  return showSearch ? (
    <>
      <div
        className={classNames}
        style={
          { ...style, ...ownsWidth, '--global-color': disabled ? '#ccc' : globalColor || '#325DFF' } as any
        }
      >
        <div className={`selected ${disabled ? 'disabled-selected' : ''}`} style={disabledStyle}>
          <input
            type="text"
            className="selected"
            value={selected}
            placeholder={placeholder as string}
            onClick={toggleOptions}
            onChange={(e) => handleInputChange(e)}
          />
          {clearable ? (
            <CloseOutlined style={{ fontSize: '12px' }} onClick={clearSearchSelect} />
          ) : visible ? (
            <UpOutlined style={{ fontSize: '12px' }} onClick={toggleOptions} />
          ) : (
            <DownOutlined style={{ fontSize: '12px' }} onClick={toggleOptions} />
          )}
        </div>
        <CSSTransition
          in={visible}
          timeout={100}
          appear
          mountOnEnter={true}
          classNames="selectOption"
          unmountOnExit={true}
          onEnter={(e: HTMLDivElement) => {
            e.style.display = 'block';
          }}
          onExited={(e: HTMLDivElement) => {
            e.style.display = 'none';
          }}
        >
          <div className="selectOptions" style={ownsWidth}>
            {inputFilterOtpions.map((s: any) => {
              return (
                <div
                  key={s.label as any}
                  className={
                    s.value == selectedValue
                      ? `select-option ${s.disabled ? 'disabled-option' : ''}`
                      : `option ${s.disabled ? 'disabled-option' : ''}`
                  }
                  style={
                    s.disabled
                      ? ({
                        cursor: 'not-allowed',
                        background: '#F2F3F5',
                        '--line-disabled': '#000000',
                      } as any)
                      : ({ '--line-disabled': globalColor || '#325DFF' } as any)
                  }
                  onClick={(e) => changeOptions(s as Options, e)}
                >
                  {s.label}
                </div>
              );
            })}
          </div>
        </CSSTransition>
      </div>
    </>
  ) : (
    <div
      className={classNames}
      style={
        {
          ...style,
          ...ownsWidth,
          ...disabledStyle,
          '--global-color': disabled ? '#ccc' : globalColor || '#325DFF',
        } as any
      }
    >
      <div
        className={`selected ${disabled ? 'disabled-selected' : ''}`}
        onClick={toggleOptions}
        style={disabledStyle}
      >
        {<div className={selectClassName}>{selected || placeholder}</div>}
        {loading ? (
          <LoadingOutlined style={{ fontSize: '12px' }} />
        ) : visible ? (
          <UpOutlined style={{ fontSize: '12px' }} onClick={toggleOptions} />
        ) : (
          <DownOutlined style={{ fontSize: '12px' }} onClick={toggleOptions} />
        )}
      </div>
      <CSSTransition
        in={visible}
        timeout={100}
        appear
        mountOnEnter={true}
        classNames="selectOption"
        unmountOnExit={true}
        onEnter={(e: HTMLDivElement) => {
          e.style.display = 'block';
        }}
        onExited={(e: HTMLDivElement) => {
          e.style.display = 'none';
        }}
      >
        <div className="selectOptions" style={ownsWidth}>
          {option?.map((s) => {
            return (
              <div
                key={s.label as any}
                className={
                  s.value == selectedValue
                    ? `select-option ${s.disabled ? 'disabled-option' : ''}`
                    : `option ${s.disabled ? 'disabled-option' : ''}`
                }
                style={
                  s.disabled
                    ? ({
                      cursor: 'not-allowed',
                      background: '#F2F3F5',
                      '--line-disabled': '#000000',
                    } as any)
                    : ({ '--line-disabled': globalColor || '#325DFF' } as any)
                }
                onClick={(e) => changeOptions(s as Options, e)}
              >
                {s.label}
              </div>
            );
          })}
        </div>
      </CSSTransition>
    </div>
  );
};
export default memo(Select);
