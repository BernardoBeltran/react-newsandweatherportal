export async function getClimaCali() {
    const respuesta = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=Cali&units=metric&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
        }`
    );
    const resultado = await respuesta.json();

    return resultado;
}
