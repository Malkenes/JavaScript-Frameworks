import styled from "styled-components";

export const StyledProductDetails = styled.div`
padding: 40px 20px;
display: flex;
flex-direction: column;
gap: 20px;
text-align: start;

h1 {
    margin-bottom: 10px;
}
img {
    width: 100%;
    border-radius: 0.5em;
}
@media (min-width: 786px) {
    flex-direction: row;
    align-items: center;
    > div {
        width: 50%;
    }
}
`;

export const StyledProductReview = styled.div`
    background: #F6F8FA;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    margin-bottom: 1em;
`