import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 320px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 24px;
  border-radius: 5px;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;

  :focus-within {
    border: 2px solid #40c4ff;
    outline: none;
  }

  ::placeholder {
    font: inherit;
    font-size: 22px;
  }
`;

export const StyledBtn = styled.button`
  display: inline-block;
  width: 150px;
  height: 48px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
    font-weight: 600;
  }
`;