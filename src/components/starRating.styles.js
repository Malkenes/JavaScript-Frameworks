import styled from "styled-components";

export const StyledStarRating = styled.div`
display: flex;
margin-bottom: 1em;
svg {
    color: grey;
}
svg:nth-child(-n + ${props => props.$rating}) {
    color: #FACC15;
}
small {
padding-left: 1em;
}
`