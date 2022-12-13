import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisSwiperBtnSize = '30px',
  { concisTransformLg, concisRadiusLg } = commonStyle;

const SwiperStyle = styled.div`
  .concis-swipers {
    position: relative;
    top: 0;
    right: 0;
    height: 240px;
    margin: 0 auto;
    overflow: hidden;
    transition: 0.2s linear;

    .swiperList {
      position: relative;
      display: flex;
      width: 3600px;
    }

    .swiper-img {
      height: 240px;
    }

    .prev-btn,
    .next-btn {
      position: absolute;
      top: 50%;
      color: #fff;
      font-size: 30px;
      transform: translate(0, -50%);
      cursor: pointer;

      img {
        width: ${concisSwiperBtnSize};
        height: ${concisSwiperBtnSize};
      }
    }

    .prev-btn {
      left: ${concisTransformLg};
    }

    .next-btn {
      right: ${concisTransformLg};
    }

    .menu-options {
      position: absolute;
      bottom: ${concisTransformLg};
      left: 50%;
      display: flex;
      transform: translate(-50%);

      .option,
      .option-active {
        width: 6px;
        height: 6px;
        margin-right: 6px;
        border-radius: ${concisRadiusLg};
        cursor: pointer;
      }

      .option {
        background-color: #ffffff4d;

        &:hover {
          background-color: #fff;
        }
      }

      .option-active {
        background-color: #fff;
      }
    }
  }

  .concis-card-swiper {
    position: relative;
    width: 100% !important;
    margin: 0 auto;
    text-align: center;

    .center-pic {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 240px;
      margin: 0 auto;
      transform: translate(-50%, -50%);
    }

    .center {
      position: absolute;
      z-index: 5;
      transition: 0.2s linear;
    }

    .left,
    .right {
      position: absolute;
      transition: 0.2s linear;
    }

    .menu-options {
      position: absolute;
      bottom: -20px;
      left: 50%;
      display: flex;
      transform: translate(-50%);

      .option,
      .option-active {
        width: 6px;
        height: 6px;
        margin-right: 6px;
        border-radius: ${concisRadiusLg};
        cursor: pointer;
      }

      .option {
        background-color: #e5e5e5;

        &:hover {
          background-color: #c9cace;
        }
      }

      .option-active {
        background-color: #c9cace;
      }
    }
  }
`;

export { SwiperStyle };
