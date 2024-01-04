import { useEffect, useState } from "react";
import { Coords } from "../App";
import apiClient from "../api-client";
import Spinner from "./Spinner";
import MessageBox from "./MessageBox";

interface APIWeatherResponse {
  weather: [{ main: string | null; description: string | null }];
  main: {
    temp: number | null;
    feels_like: number | null;
    pressure: number | null;
    humidity: number | null;
  };
  clouds: {
    all: number | null;
  };
  visibility: number | null;
  wind: {
    speed: number | null;
  };
}

interface Props {
  coords: Coords;
}

const WeatherData = ({ coords }: Props) => {
  const initialWeatherResponse: APIWeatherResponse = {
    weather: [{ main: null, description: null }],
    main: { temp: null, feels_like: null, pressure: null, humidity: null },
    clouds: { all: null },
    visibility: null,
    wind: { speed: null },
  };
  const [APIResponse, setAPIResponse] = useState<APIWeatherResponse>(
    initialWeatherResponse
  );
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (coords.lat !== null && coords.lon !== null) {
      setLoading(true);
      apiClient
        .getWeatherData(coords)
        .then((resp) => {
          setAPIResponse(resp.data);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [coords]);

  return (
    <div>
      {error && <MessageBox type="danger" message={error} />}
      {initialWeatherResponse !== APIResponse ? (
        <table className="table table-hover mt-4">
          <tbody>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <tr>
                  <td colSpan={4} className="text-center">
                    Weather data
                  </td>
                </tr>
                <tr>
                  <td className="table-primary">Weather</td>
                  <td>{APIResponse.weather[0].main}</td>
                  <td className="table-primary">Pressure [hPa]</td>
                  <td>{APIResponse.main.pressure}</td>
                </tr>
                <tr>
                  <td className="table-primary">Temperature [°C]</td>
                  <td>{APIResponse.main.temp}</td>
                  <td className="table-primary">Cloudiness [%]</td>
                  <td>{APIResponse.clouds.all}</td>
                </tr>
                <tr>
                  <td className="table-primary">Feels like [°C]</td>
                  <td>{APIResponse.main.feels_like}</td>
                  <td className="table-primary">Visibility [m]</td>
                  <td>{APIResponse.visibility}</td>
                </tr>
                <tr>
                  <td className="table-primary">Humidity [%]</td>
                  <td>{APIResponse.main.humidity}</td>
                  <td className="table-primary">Wind speed [m/s]</td>
                  <td>{APIResponse.wind.speed}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default WeatherData;
