import { Link } from 'react-router-dom';
import styled from 'styled-components';

const buttomTheme = `
  background: #E1251A;
  color: white;
  font-weight: 600;
  padding: 10px 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #455B7D;
    color: white;
  }
`;
export const StyledAnchor = styled.a`
  ${buttomTheme};
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  ${buttomTheme};
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  ${buttomTheme};
  border: none;
`;

export const FullButton = styled(StyledButton)`
  @media (min-width: 786px) {
  width: 100%;
  }
`;

export const NavButton = styled(StyledButton)`
grid-column: 4 / 7;
grid-row: 1 / 2;
justify-self: end;
width: initial;

svg {
    vertical-align: bottom;
}
    
@media (min-width: 786px) {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
}
`;

