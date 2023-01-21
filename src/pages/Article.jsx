import { Link, useLoaderData } from "react-router-dom";
import { getDetallesNoticia } from "../data/news";

import "../styles/article.css";

// Loader para obtener detalles de una noticia
export async function loader({ params }) {
    const noticia = await getDetallesNoticia(params.title);

    return noticia;
}

const Article = () => {
    const noticia = useLoaderData();
    const articulo = noticia.articles[0];
    const { author, title, description, content, url, urlToImage } = articulo;

    return (
        <div className="contenedor-noticia">
            <img src={urlToImage} alt={`Imagen del articulo ${title}`} />
            <h3 className="noticia-titulo">{title}</h3>
            <p className="noticia-autor">
                <span>Autor: </span>
                {author ?? "desconocido"}
            </p>
            <p>{description}</p>
            <p>{content}</p>
            <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                🌐 Visitar portal de noticias
            </a>
            <br />
            <br />
            <Link to="/">⬅️ Regresar</Link>
        </div>
    );
};

export default Article;
