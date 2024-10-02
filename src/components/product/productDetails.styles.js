import styled from "styled-components";

export const StyledProductDetails = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 20px;
text-align: start;

h1 {
    margin-bottom: 10px;
}
img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 0.5em;
}
@media (min-width: 786px) {
    grid-template-columns: 60% auto;
}
`;

export const StyledProductReview = styled.div`
    background: #F6F8FA;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    margin-bottom: 1em;
`