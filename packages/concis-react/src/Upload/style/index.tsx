import styled, { css } from 'styled-components';

const animationStyle = css`
  .fadeIn-enter {
    opacity: 1;
  }

  .fadeIn-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  .fadeIn-exit {
    opacity: 1;
  }

  .fadeIn-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

const UploadStyle = styled.div`
  .concis-upload-container {
    font-size: 14px;
    width: 100%;
    margin-top: 10px;

    .file-list {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-upload-button {
        font-size: 12px;
      }
    }
  }

  .concis-upload {
    .image-list {
      display: inline-flex;

      .concis-image {
        margin-right: 15px;
      }
    }
  }

  ${animationStyle}
`;

export { UploadStyle };
