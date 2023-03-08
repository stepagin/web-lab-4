import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";

export const privateRoutes = [
    {path: "/main", element: MainPage, exact: true}
]

export const publicRoutes = [
    {path: "/login", element: LoginPage, exact: true}
]