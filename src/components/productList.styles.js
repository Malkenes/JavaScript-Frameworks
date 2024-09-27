import styled from "styled-components";

export const StyledProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: space-between;
    > div {
        width: 100%;
        border-radius: 1em;
        overflow: hidden;
        box-shadow: 0 4px 4px 0 rgb(0,0,0,0.2);
    }
    @media (min-width: 576px) {
        > div { width: 45%;}
    }

    @media (min-width: 786px) {
        > div { width: 30%;}
    }
    @media (min-width: 1200px) {
        > div { width: 20%;}
    }



`