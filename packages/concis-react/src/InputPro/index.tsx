import React, { useState, useEffect, useContext, useMemo, forwardRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { on, off } from '../common_utils/dom/event';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import { InputProProps } from './interface';
import { ctx } from '../Form';
import Input from '../Input';
import './index.module.less';

const InputPro = (props, ref) => {
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
  }, [formCtx.reset]);
  useEffect(() => {
    if (formCtx.submitStatus) {
      formCtx.getChildVal(value);
    }
  }, [formCtx.submitStatus]);
  useEffect(() => {
    on(window, 'click', reset)();
    return () => {
      off(window, 'click', reset)();
    };
  }, []);

  const reset = () => {
    setIsFocus(false);
  };
  const handleIptChange = (val: string) => {
    setValue(val);
    handleChange && handleChange(val);
  };
  const handleIptFocus = () => {
    setIsFocus(true);
  };
  const chooseVal = <T extends string, U>(val: T, disabled: U, e: any): void => {
    e.stopPropagation();
    if (disabled) return;
    setValue(val);
    handleClick && handleClick(val);
    setIsFocus(false);
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
      default: {
        return {
          left: '25%',
          bottom: 'calc(100% + 5px)',
        };
      }
    }
  }, [align]);
  const traggerOptionClass = <T extends string, U>(label: T, disabled: U) => {
    if (disabled) {
      return 'disabled-option';
    }
    if (label === value) {
      return 'selected-option';
    }
    return 'option';
  };
  return (
    <div
      className={classNames}
      style={{ ...style, '--select-color': globalColor || '#325dff' } as any}
      onClick={(e) => e.stopPropagation()}
      ref={ref}
    >
      <Input
        placeholder="请输入"
        width="200"
        defaultValue={value}
        showClear
        handleIptFocus={handleIptFocus}
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
        mountOnEnter
        unmountOnExit
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
                onClick={(e) => chooseVal<string, boolean | undefined>(label, disabled, e)}
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

export default forwardRef<unknown, InputProProps<string>>(InputPro);
