import styled from 'styled-components';
import { alignStyle } from '../interface';
import { commonStyle } from '../../styles/common';

const concisPopoverDialogRadius = '4px',
  { concisDarkFontColor } = commonStyle;

const popoverDarkStyle = `
  .concis-dark-popover-card .open-container .pop-dialog {
    position: absolute;
    z-index: 9999;
    overflow: hidden;
    background-color: #373739;
    border: 1px solid #484849 !important;
    border-radius: ${concisPopoverDialogRadius};
    transition: 0.1s linear;

    p,
    div {
      color: ${concisDarkFontColor} !important;
    }
  }
`;

const animationStyle = `
  .fadeIn-enter,
  .fadeIn-appear {
    opacity: 0;
  }

  .fadeIn-enter-active,
  .fadeIn-appear-active {
    opacity: 1;
    transition: opacity 0.2s linear;
  }

  .fadeIn-exit {
    opacity: 1;
  }

  .fadeIn-exit-active {
    opacity: 0;
    transition: opacity 0.2s linear;
  }
`;

function getDialogStyle(align, showBtnSize, dialogWidth, noBorder) {
  const alignStyle: alignStyle = { width: `${dialogWidth}px` };
  const { width, height } = showBtnSize;
  const popoverContentMargin = 5;
  if (align === 'bottom') {
    alignStyle.top = `${height + popoverContentMargin}px`;
  } else if (align === 'top') {
    alignStyle.bottom = `${height + popoverContentMargin}px`;
  } else if (align === 'right') {
    alignStyle.left = `${width + popoverContentMargin}px`;
    alignStyle.bottom = `${Number(height) / 2}px`;
  } else if (align === 'left') {
    alignStyle.right = `${width + popoverContentMargin}px`;
    alignStyle.bottom = `${Number(height) / 2}px`;
  }
  if (!noBorder) {
    alignStyle.border = '1px solid #ccc';
  }
  return {
    ...alignStyle,
  };
}

const PopoverStyle = styled.div<{ align; showBtnSize; dialogWidth; noBorder }>`
  .concis-popover-card,
  .concis-dark-popover-card {
    display: inline-block;
    width: auto;

    .open-container {
      position: relative;
      width: auto;
      border: 5px solid transparent;

      .pop-dialog {
        position: absolute;
        z-index: 9999;
        overflow: hidden;
        background-color: #fff;
        border-radius: ${concisPopoverDialogRadius};
        transition: 0.1s linear;
        ${({ align, showBtnSize, dialogWidth, noBorder }) =>
          getDialogStyle(align, showBtnSize, dialogWidth, noBorder)}
      }
    }
  }

  ${popoverDarkStyle}

  ${animationStyle}
`;

export { PopoverStyle };
