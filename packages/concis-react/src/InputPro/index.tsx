import React, { memo, FC, useState, useEffect, useContext, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { InputProProps } from './interface';
import { ctx } from '../Form';
import Input from '../Input';
import './index.module.less';

const InputPro: FC<InputProProps<string>> = (props: InputProProps<string>) => {
  const {
    style,
    className,
    option = [],
    align = 'top',
    handleClick,
    handleChange,
    handleClear,
  } = props;

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const { prefixCls, darkTheme, globalColor } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}input-pro`);
  const formCtx = useContext(ctx);

  useEffect(() => {
    if (formCtx.reset) {
      setValue('');
    }
  }, [formCtx.reset])
  useEffect(() => {
    if (formCtx.submitStatus) {
      formCtx.getChildVal(value);
    }
  }, [formCtx.submitStatus])

  const handleIptChange = (val: string) => {
    setValue(val);
    handleChange && handleChange(val);
  };
  const handleIptFocus = () => {
    setIsFocus(true);
  };
  const handleIptBlur = () => {
    setIsFocus(false);
  };
  const chooseVal = <T extends string, U>(val: T, disabled: U): void => {
    (event as any).stopPropagation();
    if (disabled) return;
    setValue(val);
    handleClick && handleClick(val);
  };
  const traggerTransform = useMemo(() => {
    switch (align) {
      case 'top':
        return {
          left: '25%',
          bottom: 'calc(100% + 5px)',
        };
      case 'bottom':
        return {
          left: '25%',
          top: 'calc(100% + 5px)',
        };
      case 'left':
        return {
          left: '-50%',
          top: '-120%',
        };
      case 'right':
        return {
          right: '-50%',
          top: '-120%',
        };
    }
  }, [align]);
  const traggerOptionClass = <T extends string, U>(label: T, disabled: U) => {
    if (disabled) {
      return 'disabled-option';
    } else if (label === value) {
      return 'selected-option';
    }
    return 'option';
  };
  return (
    <div
      className={classNames}
      style={{ ...style, '--select-color': globalColor ? globalColor : '#325dff' } as any}
    >
      <Input
        placeholder="请输入"
        width="200"
        defaultValue={value}
        showClear
        handleIptFocus={handleIptFocus}
        handleIptBlur={handleIptBlur}
        handleIptChange={handleIptChange}
        clearCallback={() => {
          setValue('');
          handleClear && handleClear('');
        }}
        isFather
      />
      <CSSTransition
        in={isFocus}
        classNames="input-pro-tragger"
        style={traggerTransform}
        timeout={200}
        appear
        mountOnEnter={true}
        unmountOnExit={true}
        onEnter={(e: HTMLDivElement) => {
          e.style.display = 'flex';
        }}
        onExited={(e: HTMLDivElement) => {
          e.style.display = 'none';
        }}
      >
        <div className="concis-input-pro-tragger">
          {option.map(({ label, disabled }, i) => {
            return (
              <span
                className={traggerOptionClass<string, boolean | undefined>(label, disabled)}
                key={i}
                onClick={() => chooseVal<string, boolean | undefined>(label, disabled)}
              >
                {label}
              </span>
            );
          })}
        </div>
      </CSSTransition>
    </div>
  );
};

export default memo(InputPro);
