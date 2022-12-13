import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisPcNotificaWidth = '300px',
  concisMobileNotificaWidth = '220px',
  {
    concisDarkFontColor,
    concisTransformLg,
    concisFontMd,
    concisRadiusSm,
    concisFontLg,
    concisFontXs,
    concisTransformSm,
  } = commonStyle;

const darkNotificationStyle = `
  .concis-dark-notifica-container {
    color: ${concisDarkFontColor};
    border: 1px solid transparent;
  }

  .concis-dark-notifica-container.concis-info-notifica,
  .concis-dark-notifica-container.concis-normal-notifica,
  .concis-dark-notifica-container.concis-loading-notifica {
    background-color: #253757;
  }

  .concis-dark-notifica-container.concis-success-notifica {
    background-color: #22482c;
  }

  .concis-dark-notifica-container.concis-warning-notifica {
    background-color: #573d25;
  }

  .concis-dark-notifica-container.concis-error-notifica {
    background-color: #553332;
  }
`;

function getNotificationPropsStyle(opacity, position) {
  if (position?.includes('Left')) {
    return css`
      opacity: ${opacity};
      left: 20px;
    `;
  }
  return css`
    opacity: ${opacity};
    right: 20px;
  `;
}

const NotificationStyle = styled.div<{ opacity; position }>`
  .concis-notifica-container,
  .concis-dark-notifica-container {
    position: fixed;
    z-index: 99999;
    min-width: ${concisPcNotificaWidth};
    min-height: 60px;
    padding: ${concisTransformLg};
    color: #000;
    font-size: ${concisFontMd};
    background-color: #fff;
    border: 1px solid rgb(221, 221, 221);
    border-radius: ${concisRadiusSm};
    animation: concis-show-notifica 0.3s;
    ${({ opacity, position }) => getNotificationPropsStyle(opacity, position)}

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title-left {
        display: flex;
        align-items: center;
      }

      .title-content {
        margin-left: ${concisTransformLg};
        font-weight: 500;
        font-size: ${concisFontLg};
      }

      .close-icon {
        position: relative;
        bottom: 15px;
        font-size: ${concisFontXs};
      }
    }

    .notification-content {
      margin: ${concisTransformSm} 0 0 44px;
    }

    .notification-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: ${concisTransformLg};
    }
  }

  @media screen and (max-width: 400px) {
    .concis-notifica-container,
    .concis-dark-notifica-container {
      min-width: ${concisMobileNotificaWidth};
    }
  }
  @keyframes concis-show-notifica {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  ${darkNotificationStyle}
`;

export { NotificationStyle };
