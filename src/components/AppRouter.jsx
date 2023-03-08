import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import AuthContext from "../context/AuthContext";

const AppRouter = () => {
    const {loggedIn} = useContext(AuthContext);
    return (
        loggedIn
        ?
            <Routes>
                <Route path="/main" element={<MainPage />}/>
                <Route path="/*" element={<Navigate to="/main"/>}/>
            </Routes>
        :
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/*" element={<Navigate to="/login"/>}/>
            </Routes>
    );
};

export default AppRouter;