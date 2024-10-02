import styled from "styled-components";

export const StyledStarRating = styled.div`
margin-bottom: 1em;
display: flex;
svg {
    color: grey;
}
svg:nth-child(-n + ${props => props.$rating}) {
    color: #FACC15;
}
`