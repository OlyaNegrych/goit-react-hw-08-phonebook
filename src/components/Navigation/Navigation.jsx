import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { StyledLink } from '../Navigation/Navigation.styled';

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </nav>
    );
}

export default Navigation;