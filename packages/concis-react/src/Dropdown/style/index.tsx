import styled from 'styled-components';
import { commonStyle } from '../../styles/common';
import { darkDropdownStyle, animationStyle } from './other';

const concisDropdownLightDefaultHoverBg = '#e8eef4',
  concisDropdownLightErrorHoverBg = '#fbe2e2',
  concisDropdownLightWarningHoverBg = '#f8ebdc',
  concisDropdownLightSuccessHoverBg = '#e6fad5',
  {
    concisFontMd,
    concisFontSm,
    concisPrimaryColor,
    concisTransformLg,
    concisTransformSm,
    concisRadiusXs,
    concisDangerColor,
    concisWarningColor,
    concisInfoColor,
  } = commonStyle;

const DropdownStyle = styled.span<{ columsWidth }>`
  .concis-dropdown,
  .concis-dark-dropdown {
    display: inline-block;
    position: relative;

    .concis-dropdown-result {
      font-size: ${concisFontMd};
      transition: 0.2s linear;
      height: 30px;
      cursor: pointer;

      .drop-icon {
        margin-left: 8px;
        font-size: ${concisFontSm};
      }
    }

    .concis-dropdown-content-colums {
      width: ${({ columsWidth }) => `${columsWidth}px`};
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .list {
        padding: 6px 12px;
        border-radius: 4px;
        min-width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    //默认浅色主题
    .concis-dropdown-result-default {
      color: #1d2129;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: ${concisPrimaryColor};
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: ${concisDropdownLightDefaultHoverBg};
            color: ${concisPrimaryColor};
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: ${concisDropdownLightDefaultHoverBg};
              color: ${concisPrimaryColor};
            }
          }
        }
      }
    }

    .concis-dropdown-result-default-active {
      color: ${concisPrimaryColor};
    }

    .concis-dropdown-result-primary,
    .concis-dropdown-result-error,
    .concis-dropdown-result-success,
    .concis-dropdown-result-warning {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${concisTransformLg} ${concisTransformSm};
      border-radius: ${concisRadiusXs};
    }
    //primary按钮式浅色主题
    .concis-dropdown-result-primary {
      border: 1px solid ${concisPrimaryColor};
      color: ${concisPrimaryColor};

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: ${concisPrimaryColor};
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: ${concisDropdownLightDefaultHoverBg};
            color: ${concisPrimaryColor};
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: ${concisDropdownLightDefaultHoverBg};
              color: ${concisPrimaryColor};
            }
          }
        }
      }
    }

    .concis-dropdown-result-primary-active {
      color: #fff;
      background-color: ${concisPrimaryColor};
    }
    //error按钮式浅色主题
    .concis-dropdown-result-error {
      border: 1px solid ${concisDangerColor};
      color: ${concisDangerColor};

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: ${concisDangerColor};
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: ${concisDropdownLightErrorHoverBg};
            color: ${concisDangerColor};
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: ${concisDropdownLightErrorHoverBg};
              color: ${concisDangerColor};
            }
          }
        }
      }
    }

    .concis-dropdown-result-error-active {
      color: #fff;
      background-color: ${concisDangerColor};
    }
    //warning按钮式浅色主题
    .concis-dropdown-result-warning {
      border: 1px solid ${concisWarningColor};
      color: ${concisWarningColor};

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: ${concisWarningColor};
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: ${concisDropdownLightWarningHoverBg};
            color: ${concisWarningColor};
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: ${concisDropdownLightWarningHoverBg};
              color: ${concisWarningColor};
            }
          }
        }
      }
    }

    .concis-dropdown-result-warning-active {
      color: #fff;
      background-color: ${concisWarningColor};
    }
    //success按钮式浅色主题
    .concis-dropdown-result-success {
      border: 1px solid ${concisInfoColor};
      color: ${concisInfoColor};

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: ${concisInfoColor};
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: ${concisDropdownLightSuccessHoverBg};
            color: ${concisInfoColor};
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: ${concisDropdownLightSuccessHoverBg};
              color: ${concisInfoColor};
            }
          }
        }
      }
    }

    .concis-dropdown-result-success-active {
      color: #fff;
      background-color: ${concisInfoColor};
    }

    .concis-dropdown-result-disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    //列表
    .concis-dropdown-content {
      position: absolute;
      border-radius: 3px;
      border: 1px solid #e5e6eb;
      background: #fff;
      z-index: 9999;

      .list {
        height: 36px;
        line-height: 36px;
        color: #1d2129;
        padding: 4px 16px;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;

        &:hover:not(.list-disabled) {
          background-color: ${concisDropdownLightDefaultHoverBg};
          color: ${concisPrimaryColor};
        }

        .list-option {
          margin-left: 5px;
        }

        .drop-down-icon {
          font-size: ${concisFontSm};
          margin-left: 5px;
        }

        .sub-list {
          position: absolute;
          left: 100%;
          top: 0;
          border-radius: 3px;
          border: 1px solid #e5e6eb;
          background: #fff;
          z-index: 9999;

          &-item {
            height: 36px;
            line-height: 36px;
            color: #1d2129;
            padding: 4px 16px;
            cursor: pointer;

            .list-option {
              margin-left: 5px;
            }
          }

          &-item-disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        }
      }

      .list-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
    //position = bottom
    .concis-dropdown-content-bottom {
      top: 100%;
      left: 0;
    }
    //position = top
    .concis-dropdown-content-top {
      bottom: 100%;
      left: 0;
    }
    //position = right
    .concis-dropdown-content-right {
      bottom: 50%;
      left: 100%;
    }
    //position = left
    .concis-dropdown-content-left {
      bottom: 50%;
      right: 100%;
    }
  }

  ${darkDropdownStyle}

  ${animationStyle}
`;

export { DropdownStyle };
