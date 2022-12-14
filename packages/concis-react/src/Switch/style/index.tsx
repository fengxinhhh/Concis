import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const { concisRadiusLg, concisTransformLg, concisFontSm } = commonStyle;

function getSwitchStyleFromProps(disabled, loading, switchWidth, small, globalColor) {
  return css`
    min-width: ${switchWidth}px;
    height: calc(${small ? 16 : 24} * 1px);
    background: ${globalColor};
    cursor: ${disabled || loading ? 'not-allowed' : 'pointer'};
    opacity: ${disabled || loading ? 0.6 : 1};
  `;
}

function getDotStyle(switchStatus, small, switchWidth) {
  const dotSize = small ? '12px' : '16px';
  return css`
    left: ${switchStatus ? `${switchWidth - 16 - (small ? -2 : 4)}px` : '4px'};
    top: ${small ? '2.5px' : '4px'};
    width: ${dotSize};
    height: ${dotSize};
  `;
}

const SwitchStyle = styled.span<{
  switchStatus;
  disabled;
  loading;
  switchWidth;
  small;
  globalColor;
  checkedChildren;
  switchChildWidth;
}>`
  .concis-switch {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    padding: 0;
    overflow: hidden;
    line-height: 24px;
    vertical-align: middle;
    border: none;
    border-radius: 12px;
    transition: 0.1s linear;
    ${({ disabled, loading, switchWidth, small, globalColor }) =>
      getSwitchStyleFromProps(disabled, loading, switchWidth, small, globalColor)}

    &-dot {
      position: absolute;
      background: #fff;
      border-radius: ${concisRadiusLg};
      transition: 0.1s linear;
      ${({ switchStatus, small, switchWidth }) => getDotStyle(switchStatus, small, switchWidth)}
    }

    &-child {
      position: absolute;
      top: 0;
      min-width: ${concisTransformLg};
      color: #fff;
      font-size: ${concisFontSm};
      transition: 0.1s linear;
      left: ${({ switchStatus, checkedChildren, switchWidth, switchChildWidth }) =>
        switchStatus
          ? typeof checkedChildren === 'string'
            ? `4px`
            : '8px'
          : `${switchWidth - switchChildWidth - (typeof checkedChildren === 'string' ? 6 : -2)}px`};
    }
  }
`;

export { SwitchStyle };
