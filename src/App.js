import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import "./styles/App.css"
import AppRouter from "./components/AppRouter";
import AuthContext from "./context/AuthContext";

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    useState(() => {
        if(localStorage.getItem("web-lab-4-authorization") === "true")
            setLoggedIn(true);
        console.log(process.env.PUBLIC_URL);
    })

    return (
        <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>

        </AuthContext.Provider>
    );
}
