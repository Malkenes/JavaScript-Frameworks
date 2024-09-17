import styled from 'styled-components';

export const StyledNavBar = styled.nav`
grid-column: 1 / 2;
grid-row: 2 / 3;
justify-self: start;
button {
background: none;
}
ul {
    position: absolute;
    background: grey;
    top: 0;
    left:0;
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    list-style: none;
}
@media (min-width: 786px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    button {
        display: none;
    }
    ul {
        position: relative;
        background: none;
        display: flex;
        gap: 8px;
    }
}

`