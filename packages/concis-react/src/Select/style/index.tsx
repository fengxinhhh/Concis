import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisSelectWidth = '80px',
  concisSelectHeight = '30px',
  concisSelectPlaceholderBorderColor = '#cccccc',
  concisSelectBackground = '#ffffff',
  concisSelectDisabledColor = '#c9cdd4',
  {
    concisTransformXs,
    concisFontMd,
    concisPrimaryColor,
    concisWarningColor,
    concisDangerColor,
    concisInfoColor,
    concisDarkPrimaryColor,
    concisDarkWarningColor,
    concisDarkDangerColor,
    concisDarkInfoColor,
  } = commonStyle;

const darkSelectStyle = css`
  .concis-dark-select {
    .selected,
    .selectOptions,
    .option {
      color: #b0b0b0;
      background: #343436;
    }

    .selectOptions {
      .disabled-option {
        color: #606060;
      }
    }

    .disabled-selected {
      color: #606060;
    }

    .select-option {
      background-color: #474749 !important;
    }
  }

  .concis-dark-select.primary-selected {
    border: 1px solid ${concisDarkPrimaryColor};

    .selected {
      background: transparent;

      .placeholder,
      .size,
      span {
        color: ${concisDarkPrimaryColor};
      }
    }

    &:hover {
      .selected:not(.disabled-selected) {
        background: ${concisDarkPrimaryColor};

        .placeholder,
        .size,
        span {
          color: ${concisSelectBackground};
        }
      }
    }
  }

  .concis-dark-select.error-selected {
    border: 1px solid ${concisDarkDangerColor};

    .selected {
      background: transparent;

      .placeholder,
      .size,
      span {
        color: ${concisDarkDangerColor};
      }
    }

    &:hover {
      .selected:not(.disabled-selected) {
        background: ${concisDarkDangerColor};

        .placeholder,
        .size,
        span {
          color: ${concisSelectBackground};
        }
      }
    }
  }

  .concis-dark-select.warning-selected {
    border: 1px solid ${concisDarkWarningColor};

    .selected {
      background: transparent;

      .placeholder,
      .size,
      span {
        color: ${concisDarkWarningColor};
      }
    }

    &:hover {
      .selected:not(.disabled-selected) {
        background: ${concisDarkWarningColor};

        .placeholder,
        .size,
        span {
          color: ${concisSelectBackground};
        }
      }
    }
  }

  .concis-dark-select.success-selected {
    border: 1px solid ${concisDarkInfoColor};

    .selected {
      background: transparent;

      .placeholder,
      .size,
      span {
        color: ${concisDarkInfoColor};
      }
    }

    &:hover {
      .selected:not(.disabled-selected) {
        background: ${concisDarkInfoColor};

        .placeholder,
        .size,
        span {
          color: ${concisSelectBackground};
        }
      }
    }
  }

  .concis-dark-select.isChoose.primary-selected,
  .concis-dark-select.isChoose.error-selected,
  .concis-dark-select.isChoose.warning-selected,
  .concis-dark-select.isChoose.success-selected {
    .selected {
      .placeholder,
      .size,
      span {
        color: ${concisSelectBackground};
      }
    }
  }

  .concis-dark-select.isChoose.primary-selected {
    border: 1px solid ${concisDarkPrimaryColor};

    .selected {
      background-color: ${concisDarkPrimaryColor};
    }
  }

  .concis-dark-select.isChoose.error-selected {
    border: 1px solid ${concisDarkDangerColor};

    .selected {
      background-color: ${concisDarkDangerColor};
    }
  }

  .concis-dark-select.isChoose.warning-selected {
    border: 1px solid ${concisDarkWarningColor};

    .selected {
      background-color: ${concisDarkWarningColor};
    }
  }

  .concis-dark-select.isChoose.success-selected {
    border: 1px solid ${concisDarkInfoColor};

    .selected {
      background-color: ${concisDarkInfoColor};
    }
  }
`;

const animationStyle = css`
  .selectOption-enter,
  .selectOption-appear {
    height: 0;
    opacity: 0;
  }

  .selectOption-enter-active,
  .selectOption-appear-active {
    height: ${({ optionSize }) => optionSize};
    opacity: 1;
    transition: height 400ms, opacity 400ms;
  }

  .selectOption-exit {
    height: ${({ optionSize }) => optionSize};
    opacity: 1;
  }

  .selectOption-exit-active {
    height: 0;
    opacity: 0;
    transition: height 400ms, opacity 400ms;
  }
`;

function getCursorStyle(disabled, loading) {
  return css`
    cursor: ${disabled || loading ? 'not-allowed' : 'pointer'};
  `;
}

const SelectStyle = styled.div<{ width; disabled; loading; globalColor; optionSize }>`
  .concis-select,
  .concis-dark-select {
    position: relative;
    width: ${({ width }) => (width ? `${width}px` : concisSelectWidth)};
    height: ${concisSelectHeight};
    font-size: ${concisFontMd};
    line-height: ${concisSelectHeight};
    text-align: center;
    border: 1px solid ${concisSelectPlaceholderBorderColor};
    transition: 0.1s linear;
    user-select: none;
    ${({ disabled, loading }) => getCursorStyle(disabled, loading)}

    .disabled-selected {
      color: ${concisSelectDisabledColor};
    }

    .selected {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 ${concisTransformXs};
      background: ${concisSelectBackground};
      ${({ disabled, loading }) => getCursorStyle(disabled, loading)}

      .size {
        margin-right: ${concisTransformXs};
      }

      .placeholder {
        margin-right: ${concisTransformXs};
        color: ${concisSelectPlaceholderBorderColor};
      }

      &:focus {
        border-color: ${({ globalColor }) => globalColor};
      }
    }

    &:hover {
      border-color: ${({ globalColor }) => globalColor};
    }

    input {
      border: none;
      outline: none;
      width: 100%;
    }

    .selectOptions {
      position: absolute;
      top: 35px;
      display: flex;
      flex-direction: column;
      width: ${({ width }) => (width ? `${width}px` : concisSelectWidth)};
      overflow: hidden;
      background-color: ${concisSelectBackground};
      box-shadow: 0 0 20px 4px #9aa1b126, 0 4px 80px -8px #24282f40, 0 4px 4px -2px #5b5e6926;
      transition: 0.1s linear;
      z-index: 9999;
      border-radius: 5px;

      .option {
        padding: 5px 0 5px 15px;
        font-size: ${concisFontMd};
        line-height: 2em;
        text-align: left;
        cursor: pointer;

        &:hover:not(.disabled-option) {
          font-weight: 600;
        }
      }

      .disabled-option {
        color: ${concisSelectDisabledColor};
      }

      .select-option {
        padding: 5px 0 5px 15px;
        color: ${({ globalColor }) => globalColor};
        text-align: left;
      }
    }
  }
  //button select
  .primary-selected,
  .error-selected,
  .warning-selected,
  .success-selected {
    border-radius: 5px;

    .selected {
      background: transparent;
      transition: 0.2s linear;

      .placeholder,
      .size,
      span {
        transition: 0.2s linear;
      }
    }

    .disabled-selected {
      opacity: 0.7;
    }

    &:hover {
      .selected:not(.disabled-selected) {
        .placeholder,
        .size,
        span {
          color: ${concisSelectBackground};
        }
      }
    }
  }

  .primary-selected {
    border: 1px solid ${concisPrimaryColor};

    .selected {
      .placeholder,
      .size,
      span {
        color: ${concisPrimaryColor};
      }
    }

    &:hover {
      border: 1px solid ${concisPrimaryColor};

      .selected:not(.disabled-selected) {
        background: ${concisPrimaryColor};
      }
    }

    .selectOptions .select-option {
      color: ${concisPrimaryColor};
    }
  }

  .error-selected {
    border: 1px solid ${concisDangerColor};

    .selected {
      .placeholder,
      .size,
      span {
        color: ${concisDangerColor};
      }
    }

    &:hover {
      border: 1px solid ${concisDangerColor};

      .selected:not(.disabled-selected) {
        background: ${concisDangerColor};
      }
    }

    .selectOptions .select-option {
      color: ${concisDangerColor};
    }
  }

  .warning-selected {
    border: 1px solid ${concisWarningColor};

    .selected {
      .placeholder,
      .size,
      span {
        color: ${concisWarningColor};
      }
    }

    &:hover {
      border: 1px solid ${concisWarningColor};

      .selected:not(.disabled-selected) {
        background: ${concisWarningColor};
      }
    }

    .selectOptions .select-option {
      color: ${concisWarningColor};
    }
  }

  .success-selected {
    border: 1px solid ${concisInfoColor};

    .selected {
      .placeholder,
      .size,
      span {
        color: ${concisInfoColor};
      }
    }

    &:hover {
      border: 1px solid ${concisInfoColor};

      .selected:not(.disabled-selected) {
        background: ${concisInfoColor};
      }
    }

    .selectOptions .select-option {
      color: ${concisInfoColor};
    }
  }
  //active
  .isChoose.primary-selected,
  .isChoose.error-selected,
  .isChoose.warning-selected,
  .isChoose.success-selected {
    .selected {
      .placeholder,
      .size,
      span {
        color: ${concisSelectBackground};
      }
    }
  }

  .isChoose.primary-selected {
    border: 1px solid ${concisPrimaryColor};

    .selected {
      background-color: ${concisPrimaryColor};

      .placeholder,
      .size,
      span {
        color: ${concisSelectBackground};
      }
    }
  }

  .isChoose.error-selected {
    border: 1px solid ${concisDangerColor};

    .selected {
      background-color: ${concisDangerColor};
    }
  }

  .isChoose.warning-selected {
    border: 1px solid ${concisWarningColor};

    .selected {
      background-color: ${concisWarningColor};
    }
  }

  .isChoose.success-selected {
    border: 1px solid ${concisInfoColor};

    .selected {
      background-color: ${concisInfoColor};
    }
  }

  ${darkSelectStyle}

  ${animationStyle}
`;

export { SelectStyle };
