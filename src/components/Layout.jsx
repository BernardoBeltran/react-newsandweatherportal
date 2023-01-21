import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navegation from "./Navegation";
import logo from "../assets/logo.png";
import Weather from "./Weather";

const Layout = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo  NotiCALI" />
                    </Link>
                </div>
                <div className="controles-header">
                    <Navegation />
                    <Weather />
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default Layout;
