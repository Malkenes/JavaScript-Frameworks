import styled from "styled-components";

export const StyledProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    margin-bottom: 20px;
    > div {
        width: 100%;
        border-radius: 1em;
        overflow: hidden;
        box-shadow: 0 4px 4px 0 rgb(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    @media (min-width: 576px) {
        > div { width: calc(50% - 1em);}
    }

    @media (min-width: 786px) {
        > div { width: calc(33% - 1.2em);}
    }
`