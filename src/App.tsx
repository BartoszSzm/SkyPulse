import "bootstrap/dist/css/bootstrap.css";
import LocationForm from "./Components/LocationForm";
import WeatherData from "./Components/WeatherData";
import { useState } from "react";
import LocationsList from "./Components/LocationsList";
import { Locations } from "./Components/LocationsList";
import Banner from "./Components/Banner";
import "./app.css";

export interface Coords {
  lat: number | null;
  lon: number | null;
}

function App() {
  const [selectedCoords, setSelectedCoords] = useState<Coords>({
    lat: null,
    lon: null,
  });
  const [locations, setLocations] = useState<Locations[]>([]);
  return (
    <div className="app-container">
      <div className="app-box">
        <Banner />
        <LocationForm onSubmit={(locations) => setLocations(locations)} />
        <LocationsList
          locations={locations}
          onSelect={(data) => {
            setSelectedCoords(data);
          }}
        />
        <WeatherData coords={selectedCoords} />
      </div>
    </div>
  );
}

export default App;
