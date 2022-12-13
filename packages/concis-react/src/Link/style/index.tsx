import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const concisLinkDisabledOpacity = 0.6,
  concisDarkLinkHoverBg = '#333232',
  {
    concisTransformXs,
    concisRadiusXs,
    concisPrimaryColor,
    concisDangerColor,
    concisInfoColor,
    concisWarningColor,
    concisDarkPrimaryColor,
    concisDarkDangerColor,
    concisDarkInfoColor,
    concisDarkWarningColor,
  } = commonStyle;

const darkLinkStyle = `
  .concis-dark-link {
    &-primary {
      color: ${concisDarkPrimaryColor};
    }

    &-error {
      color: ${concisDarkDangerColor};
    }

    &-success {
      color: ${concisDarkInfoColor};
    }

    &-warning {
      color: ${concisDarkWarningColor};
    }

    &-disabled {
      opacity: ${concisLinkDisabledOpacity};
      cursor: not-allowed;
    }

    .concis-link-icon {
      display: inline-block;
      margin-right: ${concisTransformXs};
    }

    &:not(&-disabled):hover {
      background-color: ${concisDarkLinkHoverBg};
    }
  }
  `;

const LinkStyle = styled.span`
  .concis-link,
  .concis-dark-link {
    display: inline-block;
    cursor: pointer;
    padding: ${concisTransformXs} 3px;
    transition: 0.2s linear;
    border-radius: ${concisRadiusXs};
    text-decoration: none;
  }

  .concis-link {
    &-primary {
      color: ${concisPrimaryColor};
    }

    &-error {
      color: ${concisDangerColor};
    }

    &-success {
      color: ${concisInfoColor};
    }

    &-warning {
      color: ${concisWarningColor};
    }

    &-disabled {
      opacity: ${concisLinkDisabledOpacity};
      cursor: not-allowed;
    }

    &-icon {
      display: inline-block;
      margin-right: ${concisTransformXs};
    }
  }

  ${darkLinkStyle}
`;

export { LinkStyle };
