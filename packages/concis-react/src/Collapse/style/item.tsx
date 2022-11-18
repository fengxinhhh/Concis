import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const disabledColor = '#c9cdd4',
  { concisTransformMd, concisTransformSm, concisFontMd, concisFontSm } = commonStyle;

function getCollapseItemHeaderStyle(disabled) {
  if (disabled) {
    return css`
      color: ${disabledColor};
      cursor: not-allowed;
    `;
  }
  return css`
    cursor: pointer;
  `;
}

function getCollapseItemContentHeight(itemHeight) {
  return css`
    max-height: ${itemHeight}px;
  `;
}

const CollapseItemStyle = styled.div<{ disabled; itemHeight }>`
  .concis-collapse-item {
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${concisTransformMd};
      padding: ${concisTransformSm} 0;
      font-size: ${concisFontMd};
      border-bottom: 1px solid rgba(229, 230, 235, 100%);
      ${({ disabled }) => getCollapseItemHeaderStyle(disabled)}

      .left {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .header-icon {
          font-size: ${concisFontSm};
        }

        .header-text {
          margin-left: ${concisTransformSm};
        }
      }

      .right {
        display: flex;
        align-items: center;

        .header-icon {
          margin-left: ${concisTransformSm};
          font-size: ${concisFontSm};
        }
      }
    }

    &-content {
      box-sizing: border-box;
      padding: 0 ${concisTransformSm};
      overflow: hidden;
      line-height: 30px;
      transition: max-height 0.2s;
      ${({ itemHeight }) => getCollapseItemContentHeight(itemHeight)}
    }
  }
`;

export { CollapseItemStyle };
