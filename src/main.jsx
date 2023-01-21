import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { loader as noticiasLoader } from "./pages/Index";
import { loader as noticiaLoader } from "./pages/Article";
import { loader as climaLoader } from "./components/Weather";

import "../src/styles/global.css";
import Index from "./pages/Index";
import Article from "./pages/Article";

// Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        loader: climaLoader,
        children: [
            {
                index: true,
                element: <Index />,
                loader: noticiasLoader,
            },
            {
                path: "/news/:title",
                element: <Article />,
                loader: noticiaLoader,
            },
        ],
    },
]);

// Variables de entorno
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* Configuración del provider para Auth0 */}
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <RouterProvider router={router} />
        </Auth0Provider>
    </React.StrictMode>
);
