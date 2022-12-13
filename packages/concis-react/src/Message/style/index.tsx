import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const { concisTransformLg, concisFontMd, concisTransformSm, concisRadiusSm, concisDarkFontColor } =
  commonStyle;
const darkMessageStyle = `
  .concis-dark-message-container {
    color: ${concisDarkFontColor};
    border: 1px solid transparent;
  }

  .concis-dark-message-container.concis-info-message,
  .concis-dark-message-container.concis-normal-message,
  .concis-dark-message-container.concis-loading-message {
    background-color: #253757;
  }

  .concis-dark-message-container.concis-success-message {
    background-color: #22482c;
  }

  .concis-dark-message-container.concis-warning-message {
    background-color: #573d25;
  }

  .concis-dark-message-container.concis-error-message {
    background-color: #553332;
  }
`;

const MessageStyle = styled.div`
  .concis-message-container,
  .concis-dark-message-container {
    position: fixed;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 ${concisTransformLg};
    color: #000;
    font-size: ${concisFontMd};
    background-color: #fff;
    border: 1px solid rgb(240, 240, 240);
    border-radius: ${concisRadiusSm};
    transform: translate(-50%, 0);
    opacity: 1;
    animation: concis-show-message 0.3s;

    .toast-content {
      margin: 0 ${concisTransformSm};
    }
  }
  @keyframes concis-show-message {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  ${darkMessageStyle}
`;

export { MessageStyle };
