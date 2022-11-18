import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisButtonWhiteColor = '#ffffff',
  concisButtonBlackColor = '#000000',
  textLoadingColor = '#000000',
  defaultLoadingColor = '#ffffff',
  defaultBorderColor = '#cccccc',
  defaultDisabledColor = '#000000';

const {
  concisPrimaryColor,
  concisDangerColor,
  concisInfoColor,
  concisWarningColor,
  concisDisabledColor,
  concisTextColor,
  concisFontXs,
  concisRadiusLg,
  concisDarkPrimaryColor,
  concisDarkDangerColor,
  concisDarkDisabledColor,
  concisDarkInfoColor,
  concisDarkWarningColor,
  concisRadiusSm,
  concisTransformMd,
} = commonStyle;

function getLoadingIconColor(type) {
  const textLoadingStyle = `transparent ${textLoadingColor} ${textLoadingColor}`;
  const defaultLoadingStyle = `transparent ${defaultLoadingColor} ${defaultLoadingColor}`;
  return css`
    border-color: ${type === 'text' ? textLoadingStyle : defaultLoadingStyle};
  `;
}

function getBaseButtonStyle(props) {
  const { width, height, circle, dashed, type, disabled } = props;
  return css`
    width: ${width ? `${width}px` : '100%'};
    height: ${height ? `${height}px` : '40px'};
    border-radius: ${circle ? '50%' : concisRadiusSm};
    border: ${dashed && type === 'text' ? `1px dashed ${defaultBorderColor}` : 'none'};
    color: ${disabled && type === 'text' ? defaultDisabledColor : ''};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `;
}

const darkButtonStyle = `
.concis-dark-button {
  .concis-button-primary {
    background-color: ${concisDarkPrimaryColor};
  }

  .concis-button-danger {
    background-color: ${concisDarkDangerColor};
  }

  .concis-button-info {
    background-color: ${concisDarkInfoColor};
  }

  .concis-button-warning {
    background-color: ${concisDarkWarningColor};
  }

  .concis-button-disabled {
    background-color: ${concisDarkDisabledColor};
  }
}
`;

const ButtonStyle = styled.span<{ props; globalColor }>`
  .concis-button,
  .concis-dark-button {
    display: inline-block;

    .loading {
      cursor: not-allowed;
      opacity: 0.7;
    }

    &-primary,
    &-danger,
    &-info,
    &-warning,
    &-disabled,
    &-text {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 ${concisTransformMd};
      opacity: ${({ props }) => (props.disabled ? 0.5 : 1)};
      transition: 0.2s linear;
      ${({ props }) => getBaseButtonStyle(props)}
      background: ${({ globalColor }) => (globalColor ? `${globalColor} !important` : '')};
    }

    &-primary,
    &-danger,
    &-info,
    &-warning {
      &:hover:not(.disabled, .loading) {
        opacity: 0.7;
      }

      &:active:not(.disabled, .loading) {
        opacity: 1;
        transition: 0.1s;
      }
    }

    &-primary {
      color: ${concisButtonWhiteColor};
      background-color: ${concisPrimaryColor};
    }

    &-danger {
      color: ${concisButtonWhiteColor};
      background-color: ${concisDangerColor};
    }

    &-info {
      color: ${concisButtonWhiteColor};
      background-color: ${concisInfoColor};
    }

    &-warning {
      color: ${concisButtonWhiteColor};
      background-color: ${concisWarningColor};
    }

    &-disabled {
      color: ${concisButtonWhiteColor};
      background-color: ${concisDisabledColor};
      opacity: 0.7;
    }

    &-text {
      color: ${concisButtonBlackColor};
      background-color: ${concisTextColor};
      border: 1px solid #ccc;

      &:hover:not(.disabled, .loading) {
        color: ${concisPrimaryColor};
        border-color: ${concisPrimaryColor} !important;

        .concis-button-loading {
          border-color: transparent ${concisPrimaryColor} ${concisPrimaryColor};
        }
      }

      &:active:not(.disabled, .loading) {
        background-color: rgb(223, 223, 223);
        transition: 0.1s;
      }
    }

    .button-icon {
      margin-right: ${({ props }) => (props.children ? '10px' : '0')};
    }

    &-loading {
      width: ${concisFontXs};
      height: ${concisFontXs};
      margin-right: 10px;
      color: red;
      border: 2px solid
        ${({ props }) => (props.type === 'text' ? textLoadingColor : defaultLoadingColor)};
      ${({ props }) => getLoadingIconColor(props.type)}
      border-radius: ${concisRadiusLg};
      cursor: alias;
      animation: 1s concis-button-loading infinite linear;
    }
    @keyframes concis-button-loading {
      0% {
        transform: rotate(0deg);
      }

      50% {
        transform: rotate(100deg);
      }

      75% {
        transform: rotate(200deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  .concis-button-group,
  .concis-dark-button-group {
    display: flex;
    border-radius: 10px;

    .concis-button,
    .concis-dark-button {
      &:last-of-type {
        border-right: none;
      }

      border-right: 1px solid #a6a6a6;

      &-primary,
      &-danger,
      &-info,
      &-warning,
      &-disabled,
      &-text {
        border-radius: 0;
      }
    }
  }

  ${darkButtonStyle}
`;

export { ButtonStyle };
