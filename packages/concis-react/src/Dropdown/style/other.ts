import { commonStyle } from '../../styles/common';

const concisDropdownDarkDefaultHoverBg = '#49494b',
  concisDropdownDarkContentColor = '#373739',
  { concisDarkPrimaryColor, concisDarkDangerColor, concisDarkInfoColor, concisDarkWarningColor } =
    commonStyle;

const darkDropdownStyle = `
  .concis-dark-dropdown {
    .concis-dropdown-result-default {
      color: #ffffffe6;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: ${concisDarkPrimaryColor};
      }
    }

    .concis-dropdown-result-default-active {
      color: ${concisDarkPrimaryColor};
    }

    .concis-dropdown-result-primary {
      border: 1px solid ${concisDarkPrimaryColor};
      color: ${concisDarkPrimaryColor};

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: ${concisDarkPrimaryColor};
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: ${concisDropdownDarkDefaultHoverBg};
            color: ${concisDarkPrimaryColor};
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: ${concisDropdownDarkDefaultHoverBg};
              color: ${concisDarkPrimaryColor};
            }
          }
        }
      }
    }

    .concis-dropdown-result-primary-active {
      color: #fff;
      background-color: ${concisDarkPrimaryColor};
    }

    .concis-dropdown-result-error {
      border: 1px solid ${concisDarkDangerColor};
      color: ${concisDarkDangerColor};

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: ${concisDarkDangerColor};
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: ${concisDropdownDarkDefaultHoverBg};
            color: ${concisDarkDangerColor};
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: ${concisDropdownDarkDefaultHoverBg};
              color: ${concisDarkDangerColor};
            }
          }
        }
      }
    }

    .concis-dropdown-result-error-active {
      color: #fff;
      background-color: ${concisDarkDangerColor};
    }

    .concis-dropdown-result-warning {
      border: 1px solid ${concisDarkWarningColor};
      color: ${concisDarkWarningColor};

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: ${concisDarkWarningColor};
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: ${concisDropdownDarkDefaultHoverBg};
            color: ${concisDarkWarningColor};
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: ${concisDropdownDarkDefaultHoverBg};
              color: ${concisDarkWarningColor};
            }
          }
        }
      }
    }

    .concis-dropdown-result-warning-active {
      color: #fff;
      background-color: ${concisDarkWarningColor};
    }

    .concis-dropdown-result-success {
      border: 1px solid ${concisDarkInfoColor};
      color: ${concisDarkInfoColor};

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: ${concisDarkInfoColor};
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: ${concisDropdownDarkDefaultHoverBg};
            color: ${concisDarkInfoColor};
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: ${concisDropdownDarkDefaultHoverBg};
              color: ${concisDarkInfoColor};
            }
          }
        }
      }
    }

    .concis-dropdown-result-success-active {
      color: #fff;
      background-color: ${concisDarkInfoColor};
    }

    .concis-dropdown-content {
      background: ${concisDropdownDarkContentColor};
      border: 1px solid #535355;

      .list {
        color: #ffffffe6;

        &:hover:not(.list-disabled) {
          background-color: ${concisDropdownDarkDefaultHoverBg};
          color: ${concisDarkPrimaryColor};
        }

        .sub-list {
          background: ${concisDropdownDarkContentColor};
          border: 1px solid #535355;

          &-item {
            color: #ffffffe6;

            &:hover:not(.sub-list-item-disabled) {
              background-color: #49494b;
              color: ${concisDarkPrimaryColor};
            }
          }
        }
      }
    }
  }
`;

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

export { darkDropdownStyle, animationStyle };
