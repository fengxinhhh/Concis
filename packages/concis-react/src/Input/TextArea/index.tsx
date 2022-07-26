import React, { FC, memo, useContext, useEffect, useState } from 'react';
import { globalCtx } from '../../GlobalConfig';
import { GlobalConfigProps } from '../../GlobalConfig/interface';
import cs from '../../common_utils/classNames';
import './index.module.less';

interface TextareaProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   * @default {}
   */
  moreStyle?: object;
  /**
   * @description 提示
   * @default ''
   */
  placeholder?: string;
  /**
   * @description 显示清空按钮
   * @default false
   */
  showClear?: boolean;
  /**
   * @description 文本域内容最大长度
   */
  maxLength?: number;
  /**
   * @description 是否展示字数
   * @default false
   */
  showCount?: boolean;
  /**
   * @description 输入框内容改变回调
   */
  handleIptChange?: Function;
  /**
   * @description 输入框聚焦回调
   */
  handleIptFocus?: Function;
  /**
   * @description 输入框点击回调
   */
  handleClick?: Function;
  /**
   * @description 输入框失去焦点回调
   */
  handleIptBlur?: Function;
  /**
   * @description 输入框键盘监听
   */
  handleKeyDown?: Function;
  /**
   * @description 清空回调
   */
  clearCallback?: Function;
  /**
   * @description 默认内容
   * @default ''
   */
  defaultValue?: string;
}
type NativeTextareaProps = Omit<React.TextareaHTMLAttributes<HTMLElement>, 'type'>;
const TextArea: FC<TextareaProps & NativeTextareaProps> = (props) => {
  const {
    className,
    moreStyle,
    placeholder,
    showClear,
    showCount,
    maxLength,
    handleIptChange,
    handleKeyDown,
    handleIptFocus,
    handleClick,
    handleIptBlur,
    clearCallback,
    defaultValue,
  } = props;
  const { input, prefixCls } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(prefixCls, className, 'concis-textarea');

  const [txaValue, setTxaValue] = useState<string>(defaultValue || '');
  const [isComposition, setComposition] = useState<boolean>(false);

  useEffect(() => {
    handleIptChange && handleIptChange(txaValue);
  }, [txaValue]);
  const onChangeTxa = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength && !isComposition && maxLength < e.target.value.length) {
      setTxaValue(e.target.value.slice(0, maxLength));
    } else {
      setTxaValue(e.target.value);
    }
  };
  const onCompositionStartTxa = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    setComposition(true);
  };
  const onCompositionEndTxa = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    setComposition(false);
    if (maxLength) {
      setTxaValue(txaValue.slice(0, maxLength));
    }
  };

  const blurTxa = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    handleIptBlur && handleIptBlur(e);
  };
  const focusTxa = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    handleIptFocus && handleIptFocus(e);
  };
  const txaHandleClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    handleClick && handleClick(e);
  };
  return (
    <div
      className={classNames}
      style={
        {
          '--global-color': input || '#8fb6d8',
          position: 'relative',
        } as any
      }
    >
      <textarea
        className="textarea"
        style={moreStyle}
        placeholder={placeholder}
        value={defaultValue || txaValue}
        onChange={onChangeTxa}
        onBlur={blurTxa}
        onFocus={focusTxa}
        onKeyUp={(e) => handleKeyDown && handleKeyDown(e)}
        onClick={txaHandleClick}
        onCompositionStart={onCompositionStartTxa}
        onCompositionEnd={onCompositionEndTxa}
      ></textarea>
      {showClear && (
        <span
          className="clear-svg"
          onClick={(e) => {
            e.stopPropagation();
            setTxaValue('');
            clearCallback && clearCallback();
          }}
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="close-circle"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
          </svg>
        </span>
      )}
      {showCount ? (
        <span className="textarea-limit">
          {txaValue ? txaValue.length : 0}/{maxLength}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};
export default memo(TextArea);
