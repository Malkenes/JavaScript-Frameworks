import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  background: white;
  z-index: 1000;
  width: 100%;
`
export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto auto;
  gap:8px;
  padding: 2rem;

  @media (min-width: 786px) {
    grid-template-columns: repeat(4, auto);
    grid-template-rows: auto;
    align-items: center;
  }
`
export const LogoWrapper = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  img {
    display: block;
  }
  @media (min-width: 786px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

`
export const SearchWrapper = styled.div`
  width: 100%;
  grid-column: 2 / 7;
  grid-row: 2 / 3;
  border: solid 1px #F5F5F5;
  @media (min-width: 786px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

`