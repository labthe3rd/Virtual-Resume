// /src/components/Weather/Weather.js
import React, { useState } from "react";
import { useGetWeather } from "@/hooks/useGetWeather";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

export default function Weather() {
  const [zipcode, setZipcode] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const { getWeather, isLoading, isError } = useGetWeather();

  const handleSubmit = async () => {
    console.log(zipcode.length);
    const data = await getWeather(zipcode);
    if (data) {
      setWeatherData(data);
    }
  };
  return (
    <div className="grid justify-items-center mt-8 gap-4">
      <h1 className="text-5xl">Weather API</h1>
      <h2 className="italic text-danger-500 font-bold"> USA Only </h2>
      <div className="flex justify-center mt-12">
        <Input
          label="Zip Code"
          value={zipcode}
          labelPlacement="outside"
          onValueChange={setZipcode}
        />
      </div>

      <Button
        label="Submit"
        color="primary"
        onPress={handleSubmit}
        className="mt-4"
      >
        Get Weather
      </Button>

      {isLoading && <div>Loading...</div>}
      {isError && <div>Error getting weather.</div>}

      <div className="mt-10 bg-neutral-900 mb-12 w-1/6">
        {weatherData.name &&
          weatherData.temperature &&
          weatherData.temperatureUnit && (
            <div className="font-bold">
              {weatherData.name} {weatherData.temperature}{" "}
              {weatherData.temperatureUnit}{" "}
            </div>
          )}
        {weatherData.icon && (
          <div className="flex justify-center">
            <Image
              src={weatherData.icon}
              width={150}
              height={150}
              alt="Michigan Technological University"
            />
          </div>
        )}
        {weatherData.detailedForecast && (
          <div className="flex justify-center mt-4 px-2 mb-4">
            <div className="font-bold">{weatherData.detailedForecast}</div>
          </div>
        )}
      </div>
    </div>
  );
}
