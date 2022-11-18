import styled from 'styled-components';
import { Field } from 'formik';

export const Label = styled.label`
font-size: 16px;
font-weight: 500;
`;

export const Input = styled(Field)`
  display: inline-block;
  font: inherit;
  font-size: 18px;
  border-radius: 5px;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 10px;

  :focus-within {
    border: 2px solid #40c4ff;
    outline: none;
  }
`;

export const AddBtn = styled.button`
  display: inline-block;
  width: 150px;
  height: 48px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover,
  :focus {
    opacity: 1;
    background-color: #00e676;
    font-weight: 700;
  }
`;