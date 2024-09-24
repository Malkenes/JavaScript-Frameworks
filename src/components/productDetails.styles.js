import styled from "styled-components";

export const StyledProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px
    @media (min-width: 786px) {
        flex-direction: row;
        div {
            display: block;
        }
        img {
            width: 100%
        }
    }
`