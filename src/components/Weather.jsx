import { useLoaderData } from "react-router-dom";
import { getClimaCali } from "../data/weather";
import "../styles/weather.css";

export function loader() {
    const clima = getClimaCali();

    return clima;
}

const Weather = () => {
    const clima = useLoaderData();
    console.log(clima);

    return (
        <div>
            <h3 className="clima">
                {clima.name}: {clima.main.temp}°C ⛅
            </h3>
        </div>
    );
};

export default Weather;
