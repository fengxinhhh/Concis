import styled, { css } from 'styled-components';

const skeletonCardBackground = `linear-gradient(
  90deg,
  hsla(0, 0%, 100%, 0),
  hsla(0, 0%, 100%, 0.3),
  hsla(0, 0%, 100%, 0)
)`,
  skeletoncontainerbackground = 'rgba(224, 224, 224, 1)',
  skeletonContainerTitleWidth = '50%',
  skeletonContainerRowWidth = '100%',
  skeletonContainerRowHeight = '14px',
  skeletonContainerMarginBottom = '14px',
  skeletonContainerMarginLeft = '12px';

function getSkeletonAvatarSize(avatarSize) {
  return css`
    width: ${avatarSize}px;
    height: ${avatarSize}px;
  `;
}

const SkeletonStyle = styled.div<{ avatarSize }>`
  .concis-skeleton,
  .concis-skeleton-dark {
    display: flex;
    width: 100%;
    padding: 15px;

    &-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: ${skeletonContainerMarginLeft};

      &-line,
      &-title {
        position: relative;
        z-index: 1;
        width: ${skeletonContainerRowWidth};
        height: ${skeletonContainerRowHeight};
        margin-bottom: ${skeletonContainerMarginBottom};
        overflow: hidden;
        background: ${skeletoncontainerbackground};
        border-radius: 10px;

        &::after {
          position: absolute;
          top: 0;
          left: -100%;
          z-index: 2;
          width: 100%;
          height: 100%;
          background: ${skeletonCardBackground};
          animation: 1.2s concis-skeleton-transform linear infinite normal;
          content: '';
        }
      }

      &-title {
        width: ${skeletonContainerTitleWidth};
      }
    }

    &-avatar {
      position: relative;
      z-index: 1;
      overflow: hidden;
      background: ${skeletoncontainerbackground};
      border-radius: 50%;
      ${({ avatarSize }) => getSkeletonAvatarSize(avatarSize)}

      &::after {
        position: absolute;
        top: 0;
        left: -100%;
        z-index: 2;
        width: 100%;
        height: 100%;
        background: ${skeletonCardBackground};
        animation: 1.2s concis-skeleton-transform linear infinite normal;
        content: '';
      }
    }
  }

  .concis-skeleton-dark {
    &-avatar,
    &-container-title,
    &-container-line {
      background: #ffffff1f;

      &::after {
        background: linear-gradient(
          90deg,
          hsla(0deg, 0%, 100%, 0%),
          hsla(0deg, 0%, 100%, 30%),
          hsla(0deg, 0%, 100%, 0%)
        );
      }
    }
  }

  @keyframes concis-skeleton-transform {
    75% {
      left: -100%;
    }

    100% {
      left: 100%;
    }
  }
`;

export { SkeletonStyle };
