// /src/hooks/useGetWeather.js

import { useState } from "react";

export function useGetWeather() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getWeather = async (zipcode) => {
    setIsLoading(true);
    setIsError(false);

    try {
      console.log("Getting weather");
      const res = await fetch("/api/weather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ zipcode: zipcode }),
      });

      const status = await res.status;
      const data = await res.json();
      if (status === 200) {
        console.log("data retrieved", data);
        setIsLoading(false);
        return data;
      } else {
        console.log(
          "Error fetching weather data\n",
          "Error Code",
          status,
          "\n",
          data
        );
        setIsLoading(false);
        setIsError(true);
      }
      console.log("data retrieved", data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error("Error fetching weather data:", error);
    }
  };

  return { getWeather, isLoading, isError };
}
