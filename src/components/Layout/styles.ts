import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px 240px auto 250px;
  grid-template-rows: 46px auto 52px;

  /**
    SL => Server List
    SN => Server Name
    CI => Channel Info
    CL => Channel List
    CD => Channel Data
    UL => User Data
    UI => User Info
   */
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';
  height: 100vh;
`;
