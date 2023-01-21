// Función para obtener las últimas noticias
export async function getNoticias() {
    const respuesta = await fetch(
        `https://newsapi.org/v2/top-headlines?country=co&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
        }`
    );
    const resultado = await respuesta.json();

    return resultado;
}

// Función para obtener detalles de una noticia
export async function getDetallesNoticia(title) {
    const respuesta = await fetch(
        `https://newsapi.org/v2/top-headlines?country=co&q=${title}&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
        }`
    );
    const resultado = await respuesta.json();

    return resultado;
}
