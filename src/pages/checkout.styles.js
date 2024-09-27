import styled from "styled-components";

export const StyledCheckout = styled.main`
display: flex;
flex-direction: column;
gap: 20px;
ul {
list-style: none;
padding: 0;
}
`

export const StyledCheckoutItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
    padding: 1em;
    border-bottom: 1px solid;
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 0.5em;
    }
`