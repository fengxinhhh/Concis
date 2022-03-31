import React, { FC, useMemo, createRef, useEffect, useState } from 'react';
import { DownOutlined, LoadingOutlined } from '@ant-design/icons';
import style from './index.module.less';

interface Options {
  label: String | number;
  value: String | number;
  disabled?: Boolean;
}
interface SelectProps {
  option: Array<Options>;
  width?: Number;
  placeholder?: String;
  disabled?: Boolean;
  loading?: Boolean;
  handleSelectCallback?: Function;
}

const Select: FC<SelectProps> = (props) => {
  const { option, width, placeholder, disabled, loading, handleSelectCallback } = props;
  const [selected, setSelected] = useState<string | number | any>(option ? option[0].label : '');
  const optionRef = createRef() as any;

  useEffect(() => {
    optionRef.current.style.height = `0px`;
  }, []);
  const ownsWidth = useMemo(() => {
    if (width) {
      return {
        width: `${width}px`,
      };
    }
    return {};
  }, [width]);
  const disabledStyle = useMemo(() => {
    if (disabled) {
      return {
        cursor: 'not-allowed',
        background: 'rgb(238, 238, 238)',
      };
    }
  }, [disabled]);

  const toggleOptions = (e: any) => {
    e.stopPropagation();
    if (disabled) return;
    if (optionRef.current.style.height === '0px') {
      optionRef.current.style.height = `${option.length * 100}%`;
    } else {
      optionRef.current.style.height = '0px';
    }
  };
  const changeOptions = (v: Options) => {
    if (v.disabled) return;
    optionRef.current.style.height = '0px';
    setSelected(v.label);
    if (handleSelectCallback) {
      handleSelectCallback(v.value);
    }
  };

  return (
    <div className={style.select} style={{ ...ownsWidth, ...disabledStyle }}>
      <div className={style.selected} onClick={toggleOptions}>
        {selected ? (
          <div className={style.size}>{selected}</div>
        ) : (
          placeholder && <div className={style.placeholder}>{placeholder}</div>
        )}

        {loading ? <LoadingOutlined /> : <DownOutlined />}
      </div>
      <div className={style.selectOptions} style={ownsWidth} ref={optionRef}>
        {option.map((s) => {
          return (
            <div
              key={s.label as any}
              className={style.option}
              style={s.disabled ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' } : {}}
              onClick={() => changeOptions(s as Options)}
            >
              {s.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Select;
