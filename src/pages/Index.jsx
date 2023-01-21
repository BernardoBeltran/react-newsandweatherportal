import { useLoaderData } from "react-router-dom";
import News from "../components/News";
import { getNoticias } from "../data/news";

import "../styles/index.css";

// loader para obtener noticias desde la API
export function loader() {
    const noticias = getNoticias();
    return noticias;
}

const Index = () => {
    const noticias = useLoaderData();
    const articulos = noticias.articles;

    return (
        <div className="contenedor-noticias">
            {articulos.map((articulo) => (
                <News articulo={articulo} key={articulo?.url} />
            ))}
        </div>
    );
};

export default Index;
