import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisAvatarSize = '40px',
  concisAvatarDialogSize = '20px';

const { concisFontSm, concisRadiusLg } = commonStyle;

function getAvatarSize(groupProps, props) {
  if (groupProps?.size) {
    return css`
      width: ${groupProps.size}px;
      height: ${groupProps.size}px;
      font-size: ${groupProps.size / 3}px;
    `;
  }
  if (props?.size) {
    return css`
      width: ${props.size}px;
      height: ${props.size}px;
      font-size: ${props.size / 3}px;
    `;
  }
  return css`
    width: ${concisAvatarSize};
    height: ${concisAvatarSize};
    font-size: ${concisFontSm};
  `;
}

function getAvatarBorder(shape) {
  return css`
    border-radius: ${shape && shape === 'square' ? '5px' : concisRadiusLg};
  `;
}

const AvatarStyle = styled.span<{ props; groupProps }>`
  .concis-avatar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ groupProps, props }) => {
      return getAvatarSize(groupProps, props);
    }}
    ${({ props }) => {
      return getAvatarBorder(props.shape);
    }}
    overflow: hidden;
    color: #fff;
    background-color: #c9cdd4;

    img {
      width: 100%;
      height: 100%;
    }

    .button-dialog {
      position: absolute;
      right: -2px;
      bottom: ${(props) => (props.shape === 'square' ? '-2px' : '2px')};
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${concisAvatarDialogSize};
      height: ${concisAvatarDialogSize};
      background-color: #fff;
      border-radius: ${concisRadiusLg};
      cursor: pointer;
      transition: 0.2s linear;

      &:hover {
        background-color: #e4e6ed;
      }
    }

    .dialog {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: rgba(94, 91, 91, 0%);
      cursor: pointer;
      transition: 0.2s linear;

      .icon {
        opacity: 0;
        transition: 0.2s linear;
      }

      &:hover {
        background-color: rgba(94, 91, 91, 70%);

        .icon {
          opacity: 0.8;
        }
      }
    }
  }
`;

export { AvatarStyle };
