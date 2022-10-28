import React, {
  useMemo,
  useEffect,
  useState,
  useCallback,
  useContext,
  forwardRef,
  useRef,
  RefObject,
} from 'react';
import { DownOutlined, UpOutlined, LoadingOutlined, CloseOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group';
import { onClickOutSide, dispatchRef } from '../common_utils/dom/event';
import type { SelectProps, Options } from './interface';
import { ctx } from '../Form';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './styles/index.module.less';

//  const disabledColor = '#F2F3F5';
const defaultColor = '#325dff';

const Select = (props, ref) => {
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
    type,
    handleSelectCallback,
    handleTextChange,
  } = props;
  const [selected, setSelected] = useState<string | number | any>('');
  const [selectedValue, setSelectedValue] = useState<string | number | any>('');
  const [visible, setVisible] = useState(false);
  const selectDom = useRef(null);

  const formCtx: any = useContext(ctx);
  const { globalColor, prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = useMemo(() => {
    return cs(
      prefixCls,
      className,
      `concis-${darkTheme ? 'dark-' : ''}select`,
      type ? `${type}-selected` : null,
      visible ? 'isChoose' : null
    );
  }, [visible, darkTheme, type]);

  const closeSelect = (e) => {
    if (!e.target?.getAttribute('class')?.includes('selected')) {
      setVisible(false);
    }
  };

  useEffect(() => {
    const destoryEvent = onClickOutSide(selectDom, closeSelect);
    return () => {
      destoryEvent();
    };
  }, []);

  useEffect(() => {
    // 用于监听Form组件的重置任务
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
    // 传参宽度
    if (width) {
      return {
        width: `${width}px`,
      };
    }
    return {};
  }, [width]);

  const disabledStyle = useMemo(() => {
    // 禁用状态
    if (disabled || loading) {
      return {
        cursor: 'not-allowed',
        // background: !type ? disabledColor : null,
      };
    }
  }, [disabled, loading, type]);

  const toggleOptions = (e: any) => {
    // 切换下拉
    // e.stopPropagation();
    if (disabled || loading) return;
    setVisible(!visible);
  };

  const changeOptions = (v: Options, e: any) => {
    // 选择选项
    // e.stopPropagation();
    if (v.disabled) return;
    setVisible(false);
    setSelected(v.label);
    setSelectedValue(v.value);
    if (handleSelectCallback) {
      handleSelectCallback(v);
    }
  };

  const inputFilterOtpions = useMemo(() => {
    // 输入状态options过滤
    return option?.filter((item) => {
      return (item.label as string).includes(selected);
    });
  }, [option, selected]);

  const handleInputChange = useCallback(
    (e) => {
      // 输入后的回调
      setSelected(e.target.value);
      if (handleTextChange) {
        handleTextChange(e.target.value);
      }
    },
    [selected]
  );

  const clearSearchSelect = (e: React.SyntheticEvent) => {
    // e.stopPropagation();
    setSelectedValue('');
    setSelected('');
  };

  const selectClassName = useMemo(() => {
    return selected ? 'size' : 'placeholder';
  }, [selected]);

  return (
    <div
      className={classNames}
      style={
        {
          ...style,
          ...ownsWidth,
          ...disabledStyle,
          '--global-color': disabled || loading ? '#ccc' : globalColor || defaultColor,
          '--option-size': `${
            (showSearch ? inputFilterOtpions.length : option?.length) * 33 || 0
          }px`,
        } as any
      }
      ref={(node) => {
        selectDom.current = node;
        dispatchRef<RefObject<HTMLElement> | HTMLElement>(ref, node);
      }}
    >
      <div
        className={cs('selected', disabled || loading ? 'disabled-selected' : null)}
        onClick={showSearch ? null : toggleOptions}
        style={disabledStyle}
      >
        {showSearch ? (
          <>
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
          </>
        ) : (
          <>
            <div className={selectClassName}>{selected || placeholder}</div>
            {loading ? (
              <LoadingOutlined style={{ fontSize: '12px' }} />
            ) : visible ? (
              <UpOutlined style={{ fontSize: '12px' }} onClick={toggleOptions} />
            ) : (
              <DownOutlined style={{ fontSize: '12px' }} onClick={toggleOptions} />
            )}
          </>
        )}
      </div>
      <CSSTransition
        in={visible}
        timeout={100}
        appear
        mountOnEnter
        classNames="selectOption"
        unmountOnExit
        onEnter={(e: HTMLDivElement) => {
          e.style.display = 'block';
        }}
        onExited={(e: HTMLDivElement) => {
          e.style.display = 'none';
        }}
      >
        <div className="selectOptions" style={ownsWidth}>
          {(showSearch ? inputFilterOtpions : option)?.map((s: any) => {
            return (
              <div
                key={s.label as any}
                className={
                  s.value === selectedValue
                    ? `select-option ${s.disabled ? 'disabled-option' : ''}`
                    : `option ${s.disabled ? 'disabled-option' : ''}`
                }
                style={
                  s.disabled
                    ? ({
                        cursor: 'not-allowed',
                        // background: disabledColor,
                        '--line-disabled': '#000000',
                      } as any)
                    : ({ '--line-disabled': globalColor || defaultColor } as any)
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

export default forwardRef<unknown, SelectProps>(Select);
