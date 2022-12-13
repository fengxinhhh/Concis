import styled, { css } from 'styled-components';

const concisTagLightBg = '#e8ebf0',
  concisTagLightFontColor = '#333e59',
  concisTagDarkBg = '#ffffff14',
  concisTagDarkFontColor = '#ffffffe6';

function getTagBg(isCheckable: boolean, background: string) {
  if (isCheckable) {
    return 'transparent';
  }
  return background;
}

const darkTagStyle = css`
  .concis-dark-tag {
    background-color: ${concisTagDarkBg};
    color: ${concisTagDarkFontColor};
  }
`;

const TagStyle = styled.span<{ size; color; tagBackground; isCheckable }>`
  .concis-tag,
  .concis-dark-tag {
    display: inline-block;
    padding: 0 8px;
    height: ${({ size }) => size};
    line-height: ${({ size }) => size};
    border-radius: 2px;
    background-color: ${concisTagLightBg};
    color: ${concisTagLightFontColor};
    font-size: 12px;
    cursor: pointer;
    transition: 0.2s linear;
    color: ${({ color }) => color};
    background: ${({ isCheckable, tagBackground }) => getTagBg(isCheckable, tagBackground)};

    &:hover {
      opacity: 0.8;
    }

    .tag-content {
      display: flex;
      align-items: center;

      .close-icon {
        font-size: 10px;
        margin-left: 6px;
      }
    }
  }
  ${darkTagStyle}
`;

export { TagStyle };
