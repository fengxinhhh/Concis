import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const { concisPrimaryColor, concisDarkPrimaryColor } = commonStyle;

const AffixStyle = styled.div`
  .concis-affix {
    position: relative;
    z-index: 99;
    display: inline-block;
    color: #fff;
    background-color: ${concisPrimaryColor};
  }

  .concis-dark-affix {
    position: relative;
    z-index: 99;
    display: inline-block;
    color: #fff;
    background-color: ${concisDarkPrimaryColor};
  }
`;

export { AffixStyle };
