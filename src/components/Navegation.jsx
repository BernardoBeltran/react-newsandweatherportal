import React from "react";
import "../styles/navegation.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navegation = () => {
    const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
        useAuth0();

    if (isLoading) {
        return <div className="loading-alert">Cargando...</div>;
    }
    return (
        <nav>
            <ul>
                {isAuthenticated ? (
                    <>
                        <li>
                            <img
                                className="user-image"
                                src={user.picture}
                                alt={`Imagen del perfil del usuario ${user.name}`}
                            />
                        </li>
                        <li>
                            <p className="user-name">{user.name}</p>{" "}
                            <p className="user-email">{user.email}</p>
                        </li>
                        <li>
                            <button
                                className="logout-btn"
                                onClick={() => logout()}
                            >
                                Cerrar Sesión
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <button
                            className="login-btn"
                            onClick={() => loginWithRedirect()}
                        >
                            Iniciar Sesión
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navegation;
