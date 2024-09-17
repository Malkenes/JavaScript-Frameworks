import styled from 'styled-components';

export const StyledNavBar = styled.nav`
grid-column: 1 / 2;
grid-row: 2 / 3;
justify-self: start;
ul {
    position: absolute;
    top: 0;
    left:0;
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    list-style: none;
}
@media (min-width: 786px) {
    button {
        display: none;
    }
    ul {
        position: relative;
        display: block;
    }
}

`