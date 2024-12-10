import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {opacity: 0;}
to {opacity: 1;}
`;

export const StyledProductList = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-in-out;

  > div {
    width: 100%;
    border-radius: 1em;
    overflow: hidden;
    box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: 576px) {
    > div {
      width: calc(50% - 1em);
    }
  }

  @media (min-width: 786px) {
    > div {
      width: calc(33% - 1.2em);
    }
  }
`;
