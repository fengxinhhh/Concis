import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const darkBorderColor = '#484849',
  lightBorderColor = 'rgba(229, 230,235,1)',
  { concisRadiusXs } = commonStyle;

function getCollapseBorder(isDark, noBorder) {
  if (!noBorder) {
    return css`
      border: 1px solid ${isDark ? darkBorderColor : lightBorderColor};
    `;
  }
}

const CollapseStyle = styled.div<{ isDark; noBorder }>`
  .concis-collapse-box,
  .concis-dark-collapse-box {
    width: 100%;
    padding: 0 15px;
    background: #fff;
    border-radius: ${concisRadiusXs};
    ${({ isDark, noBorder }) => getCollapseBorder(isDark, noBorder)}
  }

  .concis-dark-collapse-box {
    color: #d2d2d2;
    background-color: transparent;

    .concis-collapse-item-content {
      color: #8b8b8b;
    }

    .concis-collapse-item-header {
      border-bottom: 1px solid #484849;
    }
  }
`;

export { CollapseStyle };
