import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: inline-block;
  width: 100px;
  height: 34px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 18px;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
    font-weight: 600;
  }
`;
