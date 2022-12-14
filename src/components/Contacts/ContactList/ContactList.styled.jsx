import styled from 'styled-components';

export const Contact = styled.li`
   margin-bottom: 5px;
   display: flex;
   justify-content: space-between;
 `;

export const ContactText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 5px;
`;

 export const DeleteBtn = styled.button`
   font-size: 16px;
   font-weight: 500;
   border-radius: 5px;
   /* margin-left: 10px; */
   opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
   :hover,
   :focus {
     background-color: red;
     font-weight: 700;
     opacity: 1;
   }
 `;

 export const EditBtn = styled.button`
   font-size: 16px;
   font-weight: 500;
   border-radius: 5px;
   /* margin-left: 10px; */
   opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
   :hover,
   :focus {
     background-color: orange;
     font-weight: 700;
     opacity: 1;
   }
 `;
