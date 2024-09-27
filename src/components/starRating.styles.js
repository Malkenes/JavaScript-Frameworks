import styled from "styled-components";

export const StyledStarRating = styled.span`
svg {
    color: grey;
}
svg:nth-child(-n + ${props => props.$rating}) {
    color: #FACC15;
}
`