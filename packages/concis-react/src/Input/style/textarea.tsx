import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisGrayColor = '#c5c5c5',
  { concisRadiusXs, concisDarkFontColor, concisPrimaryColor, concisDarkPrimaryColor } = commonStyle;

const darkTextareaStyle = `
  .concis-dark-textarea {
    .textarea {
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

    & > .clear-svg {
      color: #c5c5c5;
    }
  }
`;

const TextareaStyle = styled.span<{ focusColor }>`
  .concis-textarea,
  .concis-dark-textarea {
    position: relative;

    .textarea {
      display: box;
      display: flexbox;
      display: flex;
      box-sizing: border-box;
      width: 100%;
      height: 56px;
      min-height: 56px;
      padding: 5px 8px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      line-height: 22px;
      border: 1px solid #d9d9d9;
      border-radius: ${concisRadiusXs};
      outline: none;
      transition: all 0.3s cubic-bezier(0.38, 0, 0.24, 1), height 0s;
      resize: vertical;

      &:hover {
        background: #e4e4e4;
      }

      &:focus {
        background: #fff;
        border-color: ${({ focusColor }) => focusColor || concisPrimaryColor};
      }
    }

    .textarea-limit {
      position: absolute;
      right: 16px;
      bottom: 8px;
      color: ${concisGrayColor};
      font-size: 14px;
    }

    .clear-svg {
      position: absolute;
      top: 5px;
      right: 0;
      padding: 0 5px;
      color: #00000040;
      font-size: 12px;
      cursor: pointer;
    }
  }

  ${darkTextareaStyle}
`;

export { TextareaStyle };
