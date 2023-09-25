// /src/components/Weather/Weather.js
import React, { useState, useMemo } from "react";
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

  //use regex to verify that the zipcode is 5 digits and is numbers
  const validateZipCode = (zipcode) => zipcode.match(/^[0-9]{5}$/);

  const isInvalid = useMemo(() => {
    if (zipcode === "") return false;

    return validateZipCode(zipcode) ? false : true;
  }, [zipcode]);

  //Keep button disabled when there is no zip code entered & an invalid zipcode
  const isDisabled = useMemo(() => {
    if (isInvalid == true || zipcode.length === 0) {
      return true;
    } else {
      return false;
    }
  }, [zipcode]);

  return (
    <div className="grid justify-items-center mt-8 gap-4">
      <h1 className="text-5xl">Weather API</h1>
      <h2 className="italic text-danger-500 font-bold">USA Only</h2>
      <h3 className="font-bold w-1/6">
        This API route first geocodes the zipcode, then uses the result to grab
        the forecast of the zipcode requested from the govt weather API
      </h3>
      <div className="flex justify-center mt-12">
        <Input
          label="Zip Code"
          value={zipcode}
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "default"}
          errorMessage={isInvalid && "Please enter a 5-digit zipcode"}
          labelPlacement="outside"
          onValueChange={setZipcode}
        />
      </div>

      <Button
        label="Submit"
        color="primary"
        onPress={handleSubmit}
        className="mt-4"
        isDisabled={isDisabled}
      >
        Get Weather
      </Button>

      {isLoading && <div>Loading...</div>}
      {isError && <div>Error getting weather. Please try again.</div>}

      <div className="mt-10 bg-neutral-900 mb-12 w-1/6">
        {weatherData.name &&
          weatherData.temperature &&
          weatherData.temperatureUnit && (
            <div className="font-bold">
              {weatherData.name} {weatherData.temperature}
              {weatherData.temperatureUnit}
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
