import { StyledLink, StyledAuth } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledAuth>
        <StyledLink to="/register">Register</StyledLink>
      </StyledAuth>
      <StyledAuth>
        <StyledLink to="/login">Log In</StyledLink>
      </StyledAuth>
    </div>
  );
};
