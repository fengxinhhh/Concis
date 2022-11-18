import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisLightInfoBg = '#e8f3ff',
  concisLightSuccessBg = '#e8ffea',
  concisLightWarningBg = '#fef7e8',
  concisLightErrorBg = '#feece8',
  concisDarkInfoBg = '#253757',
  concisDarkSuccessBg = '#22482c',
  concisDarkWarningBg = '#573d25',
  concisDarkErrorBg = '#553332',
  concisLightContentColor = '#4e5969',
  concisLightTitleColor = '#1d2129',
  concisDarkContentColor = '#ffffffb3',
  concisDarkTitleColor = '#ffffff';

const {
  concisFontMd,
  concisRadiusXs,
  concisPrimaryColor,
  concisInfoColor,
  concisWarningColor,
  concisDangerColor,
  concisFontLg,
  concisFontXs,
  concisTransformSm,
} = commonStyle;

// 基准样式
const baseStyle = `
.concis-alert,
.concis-dark-alert {
  width: 100%;
  padding: 12px 15px;
  font-size: ${concisFontMd};
  text-align: left;
  display: flex;
  border-radius: ${concisRadiusXs};
  justify-content: space-between;

  .alert-content {
    display: flex;
    color: ${concisLightContentColor};

    .alert-icon {
      margin-right: ${concisTransformSm};

      &-info {
        color: ${concisPrimaryColor};
      }

      &-success {
        color: ${concisInfoColor};
      }

      &-warning {
        color: ${concisWarningColor};
      }

      &-error {
        color: ${concisDangerColor};
      }
    }

    .alert-text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: ${concisFontLg};
        margin-bottom: ${concisTransformSm};
        color: ${concisLightTitleColor};
      }
    }
  }

  .close-icon {
    font-size: ${concisFontXs};
    cursor: pointer;
  }
}

.concis-dark-alert-info {
  background-color: ${concisDarkInfoBg};
}

.concis-dark-alert-success {
  background-color: ${concisDarkSuccessBg};
}

.concis-dark-alert-warning {
  background-color: ${concisDarkWarningBg};
}

.concis-dark-alert-error {
  background-color: ${concisDarkErrorBg};
}

.concis-alert-info {
  background-color: ${concisLightInfoBg};
}

.concis-alert-success {
  background-color: ${concisLightSuccessBg};
}

.concis-alert-warning {
  background-color: ${concisLightWarningBg};
}

.concis-alert-error {
  background-color: ${concisLightErrorBg};
}

.concis-dark-alert {
  .alert-content {
    color: ${concisDarkContentColor};

    .alert-text .title {
      color: ${concisDarkTitleColor};
    }
  }
}
`;

// 动画样式
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

const AlertStyle = styled.div`
  ${baseStyle}
  ${animationStyle}
`;

export { AlertStyle };
