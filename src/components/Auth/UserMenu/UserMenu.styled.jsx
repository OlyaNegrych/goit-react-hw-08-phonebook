import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: inline-block;
  width: 100px;
  height: 34px;
  border: 1px solid black;
  border-radius: 100px;
  font-size: 18px;
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
    font-weight: 600;
  }
`;

export const StyledText = styled.p`
  display: inline-flex;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 500;
`;

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 500;
`;