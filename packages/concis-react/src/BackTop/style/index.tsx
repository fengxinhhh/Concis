import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const zindexBackTop = 10;

const { concisRadiusLg, concisPrimaryColor, concisDarkDangerColor } = commonStyle;

const baseBackTopStyle = `
.concis-back-top {
  position: fixed;
  right: 100px;
  bottom: 50px;
  width: 40px;
  height: 40px;
  z-index: ${zindexBackTop};
  cursor: pointer;

  .default-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: ${concisRadiusLg};
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;

    svg {
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      svg {
        fill: ${concisPrimaryColor};
      }
    }
  }
}

.concis-dark-back-top {
  .default-child:hover svg {
    fill: ${concisDarkDangerColor};
  }
}
`;

const backTopAnimation = `
.back-top-trigger-enter,
.back-top-trigger-appear {
  opacity: 0;
}

.back-top-trigger-enter-active,
.back-top-trigger-appear-active {
  opacity: 1;
  transition: opacity 100ms;
}

.back-top-trigger-exit {
  opacity: 1;
}

.back-top-trigger-exit-active {
  opacity: 0;
  transition: opacity 100ms;
}
`;

const BackTopStyle = styled.div`
  ${baseBackTopStyle}
  ${backTopAnimation}
`;

export { BackTopStyle };
