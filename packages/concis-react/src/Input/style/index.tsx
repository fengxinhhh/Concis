import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisGrayColor = '#c5c5c5',
  concisTagColor = '#bebdbd',
  defaultInputWidth = '170px',
  clearIconColor = 'rgba(0,0,0,.25098039215686274)',
  {
    concisFontMd,
    concisTransformXs,
    concisDarkFontColor,
    concisPrimaryColor,
    concisDarkPrimaryColor,
  } = commonStyle;

const darkInputStyle = `
  .concis-dark-input {
    .input {
      color: ${concisDarkFontColor} !important;
      background: #232323;

      &:hover {
        background: #282828;
      }

      &:focus {
        background: #232323;
        border-color: ${({ focusColor }) => focusColor || concisDarkPrimaryColor};
      }
    }

    .input-clear {
      color: ${concisGrayColor};
    }
  }
`;

function getInputWidth(width) {
  const resWidth = width ? `${width}px` : defaultInputWidth;

  return css`
    width: ${resWidth};
  `;
}

const InputStyle = styled.span<{ width; focusColor }>`
  .concis-input,
  .concis-dark-input {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ width }) => getInputWidth(width)}

    .input {
      box-sizing: border-box;
      width: 100%;
      padding: 4px 18px 4px 11px;
      color: #000000d9;
      font-size: ${concisFontMd};
      line-height: 1.5715;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      outline: none;
      transition: all 0.3s;
      border-radius: 10px;

      &:hover {
        background: #e4e4e4;
      }

      &:focus {
        background: #fff;
        border-color: ${({ focusColor }) => focusColor || concisPrimaryColor};
      }
    }

    .input-clear {
      top: 9px;
      right: 5px;
      position: absolute;
      color: ${clearIconColor};
    }

    .numTags {
      position: absolute;
      right: ${concisTransformXs};
      display: flex;
      flex-direction: column;
      color: ${concisTagColor};
    }
  }

  ${darkInputStyle}
`;

export { InputStyle };
