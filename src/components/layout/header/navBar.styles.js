import styled from "styled-components";

export const StyledNavBar = styled.nav`
  justify-self: start;
  button {
    background: none;
  }
  div {
    width: 100%;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    max-height: ${({ $isOpen }) => ($isOpen ? "100vh" : "0")};
    transition: max-height 1s;
    overflow: hidden;
    background: #f6f8fa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 16px;
    font-size: 32px;
  }
  a {
    color: black;
  }
  @media (min-width: 786px) {
    button {
      display: none;
    }
    div {
      display: contents;
    }
    ul {
      position: relative;
      background: none;
      display: flex;
      gap: 8px;
    }
    li {
      padding: 0;
      font-size: 16px;
    }
  }
`;
