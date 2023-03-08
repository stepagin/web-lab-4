import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import MyButton from "./MyButton";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
    const {setLoggedIn} = useContext(AuthContext);

    const logout = () => {
        setLoggedIn(false);
        localStorage.setItem("web-lab-4-authorization", "false");
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className="navbar__links">
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/main"}>Main Page</NavLink>
            </div>
        </div>
    );
};

export default Navbar;