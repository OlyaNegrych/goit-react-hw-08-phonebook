import React from "react";
// import { useSelector } from "react-redux";
import { StyledLink } from '../Navigation/Navigation.styled';

const Navigation = () => {
    // const isLoggedIn = useSelector(state => state.isLoggedIn);

    return (
      <nav>
        <StyledLink to="/">Home</StyledLink>
        {/* {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>} */}
        
            <StyledLink to="/contacts">Contacts</StyledLink>
      </nav>
    );
}

export default Navigation;