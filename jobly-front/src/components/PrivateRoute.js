import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { TokenContext } from "../context/TokenContext";
import Login from "../pages/Login";

export default function PrivateRoute() {
    const {token } = useContext(TokenContext);

    return token? <Outlet /> : <Login />;
}

