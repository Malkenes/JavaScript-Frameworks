// Button.styles.js
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #E1251A;
  color: white;
  font-weight: 600;
  padding: 10px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #455B7D;
  }
`;

export const NavButton = styled(StyledButton)`
grid-column: 4 / 7;
grid-row: 1 / 2;
justify-self: end;
svg {
    vertical-align: bottom;
}
@media (min-width: 786px) {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
}

`

