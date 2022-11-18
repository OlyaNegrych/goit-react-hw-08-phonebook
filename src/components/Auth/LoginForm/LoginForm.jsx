import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/operations';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledBtn,
} from '../LoginForm/LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
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
      <StyledBtn type="submit">Log In</StyledBtn>
    </StyledForm>
  );
};
