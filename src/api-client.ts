import axios, { AxiosInstance } from "axios";
import { Coords } from "./App";

class apiClient {
  defaultConfig: AxiosInstance;

  constructor() {
    this.defaultConfig = axios.create({
      baseURL: "https://api.openweathermap.org",
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
      },
    });

    this.defaultConfig.interceptors.request.use((config) => {
      config.params = {
        ...config.params,
      };
      return config;
    });
  }

  getGeoInfo(location: string) {
    return this.defaultConfig.get("/geo/1.0/direct", {
      params: {
        q: location,
        limit: 5,
      },
    });
  }

  getWeatherData(coords: Coords) {
    return this.defaultConfig.get("/data/2.5/weather", {
      params: {
        lat: coords.lat,
        lon: coords.lon,
        lang: "eng",
        units: "metric",
      },
    });
  }
}

export default new apiClient();
