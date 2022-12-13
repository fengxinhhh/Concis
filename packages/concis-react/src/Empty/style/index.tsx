import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisEmptyIconSize = '48px',
  concisEmptyLightIconBg = '#a9aeb8',
  concisEmptyLightTextBg = '#c4c7ce',
  concisEmptyDarkIconBg = '#78787a',
  concisEmptyDarkTextBg = '#656566',
  { concisTransformSm } = commonStyle;

const darkEmptyStyle = `
  .concis-dark-empty {
    .empty-icon {
      color: ${concisEmptyDarkIconBg};
    }

    .empty-text {
      color: ${concisEmptyDarkTextBg};
    }
  }
  `;

const EmptyStyle = styled.div`
  .concis-empty,
  .concis-dark-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: ${concisTransformSm} 0;

    .empty-icon {
      width: 1em;
      height: 1em;
      font-size: ${concisEmptyIconSize};
      color: ${concisEmptyLightIconBg};
    }

    .empty-text {
      margin-top: 8px;
      color: ${concisEmptyLightTextBg};
    }
  }

  ${darkEmptyStyle}
`;

export { EmptyStyle };
