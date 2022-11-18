import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledBtn
} from '../RegisterForm/RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Username
        <StyledInput type="text" name="name" />
      </StyledLabel>
      <br />
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <br />
      <StyledLabel>
        Password
        <StyledInput type="password" name="password" />
      </StyledLabel>
      <br />
      <StyledBtn type="submit">Register</StyledBtn>
    </StyledForm>
  );
};
