import styled, { css } from 'styled-components';
import { alignProps } from '../interface';
import { animationStyle } from './animation';
import { commonStyle } from '../../styles/common';

const concisDrawerLightBorder = '#e5e6eb',
  concisDrawerDarkBorder = '#484849',
  {
    concisRadiusXs,
    concisTransformLg,
    concisTransformSm,
    concisFontLg,
    concisFontMd,
    concisFontSm,
  } = commonStyle;

const darkDrawerStyle = `
  .concis-dark-drawer {
    &-dialog {
      background: rgba(23, 23, 26, 60%);
    }

    &-content {
      color: #c4c4c5;
      background: #2a2a2b;

      &-header {
        .concis-title {
          border-bottom: 1px solid ${concisDrawerDarkBorder};
        }
      }

      &-view {
        border-bottom: 1px solid ${concisDrawerDarkBorder};
      }
    }
  }
`;

function getDrawerStyle(align: alignProps, width: number | string): React.CSSProperties {
  const size = typeof width === 'string' ? width : `${width}%`;

  function getStyleByAlign(align: alignProps) {
    const map = {
      left: {
        top: 0,
        left: 0,
        height: '100%',
        width: size,
      },
      bottom: {
        bottom: 0,
        left: 0,
        width: '100%',
        height: size,
      },
      right: {
        top: 0,
        right: 0,
        height: '100%',
        width: size,
      },
      top: {
        top: 0,
        left: 0,
        width: '100%',
        height: size,
      },
    };
    return css`
      ${map[align]}
    `;
  }
  return getStyleByAlign(align);
}

const DrawerStyle = styled.div<{ align; width }>`
  .concis-drawer,
  .concis-dark-drawer {
    &-dialog {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1001;
      width: 100vw;
      height: 100vh;
      background: rgba(29, 33, 41, 60%);
      transition: 0.1s linear;
    }

    &-content {
      position: absolute;
      z-index: 1002;
      background: #fff;
      border-radius: ${concisRadiusXs};
      display: flex;
      flex-direction: column;
      ${({ align, width }) => getDrawerStyle(align, width)}

      &-header {
        .concis-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: ${concisTransformLg};
          font-weight: 500;
          border-bottom: 1px solid ${concisDrawerLightBorder};
          color: #1d2129;

          .title {
            span {
              margin-left: ${concisTransformSm};
              font-size: ${concisFontLg};
            }
          }

          .close-icon {
            font-size: ${concisFontSm};
            cursor: pointer;
          }
        }
      }

      &-view {
        padding: ${concisTransformLg} 24px;
        font-size: ${concisFontMd};
        border-bottom: 1px solid ${concisDrawerLightBorder};
        color: #1d2129;
        flex: 1;
      }

      &-footer {
        width: 100%;
        padding: 16px ${concisTransformLg};
        text-align: right;

        .button {
          .concis-button-text,
          .concis-button-primary {
            height: 30px !important;
          }
        }

        .cancel-btn {
          margin-right: ${concisTransformSm};
        }
      }
    }
  }

  ${darkDrawerStyle}

  ${animationStyle}
`;

export { DrawerStyle };
