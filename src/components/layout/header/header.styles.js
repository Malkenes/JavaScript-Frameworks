import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  background: white;
  z-index: 1000;
  width: 100%;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  gap: 1em;
  padding: 1em;
  max-width: 1280px;
  margin: auto;
  align-items: center;
`;
export const LogoWrapper = styled.div`
  flex: 1;
  height: 50px;
  img {
    display: block;
    height: 100%;
  }
  @media (min-width: 786px) {
    order: -1;
  }
`;
