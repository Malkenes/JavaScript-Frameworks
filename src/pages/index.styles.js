import styled from "styled-components";
import productsdisplay from "../assets/images/heroBg.jpg";

export const StyledIndex = styled.main``;

export const StyledHero = styled.div`
  background: #f6f8fa;
  section {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 20px;

    @media (min-width: 786px) {
      flex-direction: row;
      align-items: center;
      h1 {
        font-size: 3em;
      }
    }
  }
`;
export const StyledHeroImage = styled.div`
  min-height: 80vh;
  background: url(${productsdisplay});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 786px) {
    width: 100%;
  }
`;
export const StyledDiscover = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 786px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
  }
`;

export const StyledDiscoverItem = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 40px 0;
  text-align: center;
  img {
    height: 350px;
    width: 100%;
  }
`;

export const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  @media (min-width: 786px) {
    flex-direction: row;
    gap: 20px;
    align-items: start;
    > div {
      display: flex;
      justify-content: center;
      width: 50%;
    }
  }
`;

export const ProductContainer = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    align-items: flex-start;
  }
`;
export const StyledSorting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 20px;
  @media (min-width: 576px) {
    flex-direction: row;
  }
  @media (min-width: 1000px) {
    flex-direction: column;
    max-width: 300px;
    margin-right: 20px;
  }
`;

export const StyledFilterBar = styled.div`
  display: flex;
  overflow-x: scroll;
  scrollbar-color: #fdeeed #455b7d;
  scrollbar-width: thin;
  gap: 0.5em;
  padding-bottom: 0.5em;
  button {
    background: #fdeeed;
    text-wrap: nowrap;
    &:focus {
      background: #455b7d;
    }
  }
  @media (min-width: 1000px) {
    flex-direction: column;
  }
`;
export const StyledSearchForm = styled.div`
  display: flex;
  padding: 8px;
  min-width: 250px;
  border: solid 1px #78737385;
  border-radius: 8px;
  margin: auto 0;
  input {
    outline: none;
    border: none;
    width: 100%;
  }
  button {
    background: #78737385;
    padding: 4px;
  }
`;
