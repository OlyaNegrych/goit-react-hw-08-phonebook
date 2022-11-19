import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 600;
  font-size: 22px;
  color: black;

  &.active {
    color: blue;
    font-weight: 700;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
    font-weight: 700;
  }
`;

export const StyledAuth = styled.span`
  margin-right: 12px;
  border: 1px solid black;
  background-color: lightskyblue;
  padding: 12px;
  border-radius: 100px;
  box-shadow: 2px 2px 4px -2px rgba(0, 0, 0, 0.4);
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover {
    opacity: 1;
   
  }
`;

  