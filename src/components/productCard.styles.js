import styled from "styled-components";

export const StyledProductCard = styled.div`
color: black;
img {
width: 100%;
height: 16em;
object-fit: cover;
}
`

export const StyledProductCardInfo = styled.div`
padding: 1em;
h3 {
margin-top: 0;
margin-bottom: 0.5em;
}
div {
    display: flex;
    gap: 0.5em; 
    margin-bottom: 1em;
}
`