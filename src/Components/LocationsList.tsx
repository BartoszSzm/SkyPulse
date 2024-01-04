import { Coords } from "../App";

export interface Locations {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

interface Props {
  locations: Locations[];
  onSelect: (coords: Coords) => void;
}

const LocationsList = ({ locations, onSelect }: Props) => {
  return (
    <div className="mt-3">
      {locations.length > 0 ? (
        <>
          <div className="list-group">
            <h6>Select your location:</h6>
            {locations.map((location) => (
              <button
                onClick={() => {
                  onSelect({ lat: location.lat, lon: location.lon });
                }}
                className="list-group-item list-group-item-action"
              >
                {location.name}, {location.state}, {location.country}
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default LocationsList;
