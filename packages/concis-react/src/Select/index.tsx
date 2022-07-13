import React, {
  FC,
  useMemo,
  createRef,
  useEffect,
  useState,
  useCallback,
  memo,
  useContext,
} from 'react';
import { DownOutlined, LoadingOutlined, CloseOutlined } from '@ant-design/icons';
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

  const optionRef = createRef() as any;
  const formCtx: any = useContext(ctx);
  const { globalColor, prefixCls } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, 'concis-select');

  const closeSelect = () => {
    if (optionRef.current && optionRef.current.style) {
      optionRef.current.style.height = '0px';
    }
  };
  useEffect(() => {
    optionRef.current.height = `0px`;
    window.addEventListener('click', closeSelect);
    return () => {
      window.removeEventListener('click', closeSelect);
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
    if (disabled) {
      return {
        cursor: 'not-allowed',
        background: '#F2F3F5',
      };
    }
  }, [disabled]);

  const toggleOptions = (e: any) => {
    //切换下拉
    e.stopPropagation();
    if (disabled) return;
    if (optionRef.current.style.height === '0px' || optionRef.current.style.height === '') {
      if (showSearch) {
        optionRef.current.style.height = `${inputFilterOtpions.length * 100}%`;
      } else {
        optionRef.current.style.height = `${option.length * 100}%`;
      }
    } else {
      optionRef.current.style.height = '0px';
    }
  };
  const changeOptions = (v: Options, e: any) => {
    //选择选项
    e.stopPropagation();
    if (v.disabled) return;
    optionRef.current.style.height = '0px';
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
      optionRef.current.style.height =
        option.filter((item) => {
          return (item.label as string).includes(e.target.value);
        }).length *
          100 +
        '%';
      if (handleTextChange) {
        handleTextChange(e.target.value);
      }
    },
    [selected],
  );
  const selectClassName = useMemo(() => {
    return selected ? 'size' : 'placeholder';
  }, [selected]);

  return showSearch ? (
    <>
      <div
        className={classNames}
        style={
          { ...ownsWidth, '--global-color': disabled ? '#ccc' : globalColor || '#1890ff' } as any
        }
      >
        <div className="selected" style={disabledStyle}>
          <input
            type="text"
            className="selected"
            value={selected}
            placeholder={placeholder as string}
            onClick={toggleOptions}
            onChange={(e) => handleInputChange(e)}
          />
          {clearable ? (
            <CloseOutlined onClick={() => setSelected('')} />
          ) : (
            <DownOutlined onClick={toggleOptions} />
          )}
        </div>
        <div className="selectOptions" style={ownsWidth} ref={optionRef}>
          {inputFilterOtpions.map((s: any) => {
            return (
              <div
                key={s.label as any}
                className="option"
                style={
                  s.disabled
                    ? ({
                        cursor: 'not-allowed',
                        background: '#F2F3F5',
                        '--line-disabled': '#000000',
                      } as any)
                    : ({ '--line-disabled': globalColor || '#1890ff' } as any)
                }
                onClick={(e) => changeOptions(s as Options, e)}
              >
                {s.label}
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <div
      className={classNames}
      style={
        {
          ...ownsWidth,
          ...disabledStyle,
          '--global-color': disabled ? '#ccc' : globalColor || '#1890ff',
        } as any
      }
    >
      <div className="selected" onClick={toggleOptions} style={disabledStyle}>
        {
          <div className={selectClassName}>
            {selected || placeholder}
            {/* {selectClassName} */}
          </div>
        }
        {/* {selected ? (
          <div className="size">{selected}</div>
        ) : (
          (placeholder && <div className="placeholder">{placeholder}</div>) || <div />
        )} */}
        {loading ? <LoadingOutlined /> : <DownOutlined />}
      </div>
      <div className="selectOptions" style={ownsWidth} ref={optionRef}>
        {option?.map((s) => {
          return (
            <div
              key={s.label as any}
              className={s.value == selectedValue ? 'select-option' : 'option'}
              style={
                s.disabled
                  ? ({
                      cursor: 'not-allowed',
                      background: '#F2F3F5',
                      '--line-disabled': '#000000',
                    } as any)
                  : ({ '--line-disabled': globalColor || '#1890ff' } as any)
              }
              onClick={(e) => changeOptions(s as Options, e)}
            >
              {s.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default memo(Select);
