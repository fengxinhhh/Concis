import React, { useContext, useState, useMemo, forwardRef } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group';
import { PreviewJumpStyle } from './style';
import { PreviewJumpProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';

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
    <PreviewJumpStyle visible={visible} disabled={disabled}>
      <div
        className={classNames}
        style={style}
        ref={ref}
        onMouseEnter={hoverDialog}
        onMouseLeave={() => setVisible(false)}
      >
        <div className="concis-preview-content">{children}</div>
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
          <div className="concis-preview-dialog" onClick={jump} />
        </CSSTransition>
        <div className="concis-preview-dialog-content">{dialogContent}</div>
      </div>
    </PreviewJumpStyle>
  );
};

export default forwardRef<unknown, PreviewJumpProps>(PreviewJump);
