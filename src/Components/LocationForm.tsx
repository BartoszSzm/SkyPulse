import { useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../api-client";
import Spinner from "./Spinner";
import MessageBox from "./MessageBox";
import { Locations } from "./LocationsList";

interface Props {
  onSubmit: (locations: Locations[]) => void;
}

const LocationForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  return (
    <div>
      <form
        onSubmit={handleSubmit((formData) => {
          if (formData.location !== "") {
            setLoading(true);
            apiClient
              .getGeoInfo(formData.location)
              .then((res) => {
                onSubmit(res.data);
                setLoading(false);
              })
              .catch((err) => {
                setError(err.message);
                setLoading(false);
              });
          }
        })}
      >
        {error && <MessageBox type="danger" message={error} />}
        <div className="input-group mb-3">
          <span className="input-group-text">Location</span>
          <input
            type="text"
            {...register("location")}
            className="form-control"
            required
          />
          <button className="btn btn-secondary" type="submit">
            Search
          </button>
        </div>
        {isLoading && <Spinner />}
      </form>
    </div>
  );
};

export default LocationForm;
