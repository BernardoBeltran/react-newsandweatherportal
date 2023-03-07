import React from "react";
import { Link } from "react-router-dom";

const News = ({ articulo }) => {
    const { author, title, description, urlToImage } = articulo;

    return (
        <div className="noticia-card">
            <img src={urlToImage} alt={`Imagen del articulo ${title}`} />
            <h3 className="noticia-titulo">{title}</h3>
            <p className="noticia-autor">{author ?? "Autor desconocido"}</p>
            <p>{description}</p>
            <Link to={`/news/${title}`}>Leer más...</Link>
        </div>
    );
};

export default News;
