import React, { useContext, useState, useMemo, forwardRef } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group';
import { PreviewJumpProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './styles/index.module.less';

const PreviewJump = (props, ref) => {
  const { className, style, children, icon, jumpText, jumpContent, link, disabled } = props;
  const [visible, setVisible] = useState(false);

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(prefixCls, className, `concis-${darkTheme ? 'dark-' : ''}previewJump`);

  const jump = () => {
    if (disabled) return;
    if (link) {
      window.location.href = link;
    }
  };

  const hoverDialog = () => {
    if (disabled) return;
    setVisible(true);
  };

  const dialogContentStyle = useMemo(() => {
    return {
      bottom: visible ? '50px' : '-30px',
      opacity: visible ? 1 : 0,
    };
  }, [visible]);

  const dialogContent = useMemo(() => {
    return (
      jumpContent || (
        <>
          {icon || <EyeOutlined />}
          {jumpText || <span className="text">See more</span>}
        </>
      )
    );
  }, [icon, jumpText, jumpContent]);

  return (
    <div
      className={classNames}
      style={{ '--cursorType': disabled ? 'not-allowed' : 'pointer', ...style } as any}
      ref={ref}
    >
      <div className="concis-preview-content" onMouseEnter={hoverDialog}>
        {children}
      </div>
      <CSSTransition
        in={visible}
        timeout={200}
        appear
        mountOnEnter
        classNames="fadeContent"
        unmountOnExit
        onEnter={(e: HTMLDivElement) => {
          e.style.display = 'flex';
        }}
        onExited={(e: HTMLDivElement) => {
          e.style.display = 'none';
        }}
      >
        <div
          className="concis-preview-dialog"
          onMouseLeave={() => setVisible(false)}
          onClick={jump}
        />
      </CSSTransition>
      <div className="concis-preview-dialog-content" style={dialogContentStyle}>
        {dialogContent}
      </div>
    </div>
  );
};

export default forwardRef<unknown, PreviewJumpProps>(PreviewJump);
