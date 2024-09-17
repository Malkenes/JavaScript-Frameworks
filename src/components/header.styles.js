import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  background: white;
  z-index: 1000;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto auto;

  @media (min-width: 786px) {
    grid-template-columns: repeat(4, 1fr);

  }
`
export const LogoWrapper = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 2;

`
export const SearchWrapper = styled.div`
  width: 100%;
  grid-column: 2 / 7;
  grid-row: 2 / 3;
  input {
  width: 100%;
  height: 100%;
  }
`