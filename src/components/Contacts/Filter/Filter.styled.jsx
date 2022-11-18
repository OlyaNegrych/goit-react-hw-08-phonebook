import styled from 'styled-components';

export const FilterLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const FilterInput = styled.input`
  display: inline-block;
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
`;
