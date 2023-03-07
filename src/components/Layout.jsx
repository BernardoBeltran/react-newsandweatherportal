import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navegation from "./Navegation";

import Weather from "./Weather";

const Layout = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src="./img/logo.PNG" alt="Logo  NotiCALI" />
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
