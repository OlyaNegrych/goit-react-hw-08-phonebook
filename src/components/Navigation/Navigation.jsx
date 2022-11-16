import React from "react";
// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    // const isLoggedIn = useSelector(state => state.isLoggedIn);

    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        {/* {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
        
            <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    );
}

export default Navigation;