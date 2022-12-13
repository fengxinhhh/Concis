import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisLoadingCenterTransform = '50%',
  concisLoadingFailCenterTransform = '-50%',
  concisLoadingRotateStart = '0deg',
  concisLoadingRotateEnd = '-360deg',
  concisDotActivedSize = '20px',
  concisDotSize = '10px',
  { concisFontMd, concisTransformXs, concisRadiusLg } = commonStyle;

const LoadingStyle = styled.span<{ globalColor; darkTheme }>`
  .concis-loading {
    position: absolute;
    top: ${concisLoadingCenterTransform};
    left: ${concisLoadingCenterTransform};
    z-index: 99999;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ globalColor }) => globalColor};
    transform: translate(${concisLoadingFailCenterTransform}, ${concisLoadingFailCenterTransform});

    .loading-container {
      position: absolute;
      top: ${concisLoadingCenterTransform};
      left: ${concisLoadingCenterTransform};
      z-index: 99999;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${({ globalColor }) => globalColor};
      transform: translate(
        ${concisLoadingFailCenterTransform},
        ${concisLoadingFailCenterTransform}
      );

      svg {
        display: inline-block;
        color: inherit;
        font-style: normal;
        vertical-align: -2px;
        transform-origin: center center;
        animation: arco-loading-circle 1s linear infinite;
      }
      @keyframes arco-loading-circle {
        from {
          transform: rotate(${concisLoadingRotateStart});
        }

        to {
          transform: rotate(${concisLoadingRotateEnd});
        }
      }
    }

    .text {
      display: inline-block;
      width: 200px;
      margin-top: 40px;
      font-size: ${concisFontMd};
      text-align: center;
    }
  }

  .concis-loading-dialog {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: ${({ darkTheme }) => (darkTheme ? '#2b2b2b' : '#ffffff')};
    opacity: 0.7;
  }

  .concis-dot-loading {
    position: absolute;
    top: ${concisLoadingCenterTransform};
    left: ${concisLoadingCenterTransform};
    z-index: 99999;
    display: flex;
    align-items: flex-end;
    height: 30px;
    color: ${({ globalColor }) => globalColor};
    transform: translate(${concisLoadingFailCenterTransform}, ${concisLoadingFailCenterTransform});

    .dot-active {
      width: ${concisDotActivedSize};
      height: ${concisDotActivedSize};
      margin: 0 7px;
      background-color: ${({ globalColor }) => globalColor};
      border-radius: ${concisRadiusLg};
      transition: 0.4s linear;
    }

    .dot {
      width: ${concisDotSize};
      height: ${concisDotSize};
      margin: 0 7px;
      background-color: ${({ globalColor }) => globalColor};
      border-radius: ${concisRadiusLg};
      opacity: 0.5;
      transition: 0.4s linear;
    }
  }

  .concis-strip-loading {
    position: absolute;
    top: ${concisLoadingCenterTransform};
    left: ${concisLoadingCenterTransform};
    z-index: 99999;
    display: flex;
    align-items: center;
    height: 60px;
    color: ${({ globalColor }) => globalColor};
    transform: translate(${concisLoadingFailCenterTransform}, ${concisLoadingFailCenterTransform});

    .strip-list {
      --map-time: calc(var(--lineIndex) * 100ms);

      width: 8px;
      height: 50px;
      margin: 0 ${concisTransformXs};
      background-color: ${({ globalColor }) => globalColor};
      border-radius: 10px;
      animation: concis-strip-loading 0.6s ease-in-out var(--map-time) infinite alternate;
    }
    @keyframes concis-strip-loading {
      0% {
        height: 15px;
      }

      100% {
        height: 50px;
      }
    }
  }
`;

export { LoadingStyle };
