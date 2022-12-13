import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisPreviewJumpTextSize = '20px',
  concisPreviewJumpDialogBg = 'rgba(36, 36, 36, 0.7)',
  { concisRadiusXs, concisTransformMd } = commonStyle;

const animationStyle = `
    .fadeContent-enter,
    .fadeContent-appear {
      opacity: 0;
    }
    
    .fadeContent-enter-active,
    .fadeContent-appear-active {
      opacity: 1;
      transition: opacity 200ms;
    }
    
    .fadeContent-exit {
      opacity: 1;
    }
    
    .fadeContent-exit-active {
      opacity: 0;
      transition: opacity 200ms;
    }
  `;

function getDialogContentStyle(visible) {
  return {
    bottom: visible ? '50px' : '-30px',
    opacity: visible ? 1 : 0,
  };
}

const PreviewJumpStyle = styled.div<{ visible; disabled }>`
  .concis-previewJump,
  .concis-dark-previewJump {
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: ${concisRadiusXs};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    .concis-preview-content {
      width: 100%;
      height: 100%;
    }

    .concis-preview-dialog {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${concisPreviewJumpDialogBg};

      &-content {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: ${concisPreviewJumpTextSize};
        transition: 0.2s linear;

        .text {
          margin-left: ${concisTransformMd};
        }
      }
    }

    .concis-preview-dialog-content {
      color: #ffffff;
      ${({ visible }) => getDialogContentStyle(visible)}
    }
  }

  ${animationStyle}
`;

export { PreviewJumpStyle };
