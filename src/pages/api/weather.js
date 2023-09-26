//Programmer:   Louis Bersine
//Date:         09/23/23
//Description:  Grabs weather from API requests.
//This program is for example purposes and should not be used for commercial purposes due to TOS of the apis used.
//For the weather api I used https://www.weather.gov/
//For geodecoding api I used https://nominatim.org/

//Import fetch packages
import fetch, { AbortError } from "node-fetch";
const AbortController =
  globalThis.AbortController || (await import("abort-controller"));

//Set config for api requests
const geoBaseUrl = "https://nominatim.openstreetmap.org/search?q=";
const weatherBaseUrl = "https://api.weather.gov/points/";

//Added delay to fix error of sending api requests to api.weather.gov to quickly after receiving response.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//Decode zipcode to longitude and latitude for weather api
async function GetCoordinates(zipcode) {
  let coordinates = [];
  const fncUrl = "&format=json&polygon_kml=1&addressdetails=1";
  const reqUrl = geoBaseUrl + zipcode + fncUrl;
  // Add the abort controller logic inside the function
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 1000);

  try {
    console.log("Attempting to fetch geolocation from: ", reqUrl);
    const response = await fetch(reqUrl, {
      headers: { "User-Agent": "louisbersine.com Resume Website" },
    });
    const status = await response.status;
    const data = await response.json();

    //Retry fetching geolocation on error
    const attempts = 3;
    const delayTime = 1000;
    for (var i = 0; i <= attempts; i++) {
      if (status === 200) {
        console.log("Success fetching geolocation!");
        coordinates.push(data[0].lat);
        coordinates.push(data[0].lon);
        return coordinates;
      } else {
        console.log("Geolocation api server returned error status ", status);
        console.log(
          `Retrieving geolocation failed on attempt ${i} Retrying in ${delayTime}ms`
        );
        await delay(delayTime);
      }
    }
  } catch (error) {
    console.log(error);
    if (error instanceof AbortError) {
      console.log("request was aborted");
    }
  } finally {
    clearTimeout(timeout);
  }
}

//Now grab the forecast url with the longitude and latitude we retrieved
async function GetForecastUrl(long, lat) {
  let weather = [];
  const reqUrl = weatherBaseUrl + lat + "," + long;
  // Add the abort controller logic inside the function
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 150);

  try {
    console.log("Attempting to fetch weather with url: ", reqUrl);
    const response = await fetch(reqUrl, {
      headers: { "User-Agent": "louisbersine.com Resume Website" },
    });
    const status = await response.status;
    const data = await response.json();
    console.log(data);
    const forecastUrl = data.properties.forecast;

    //Retry fetching forecast url on error
    const attempts = 3;
    const delayTime = 1000;
    for (var i = 0; i <= attempts; i++) {
      if (status === 200) {
        console.log("Success fetching forecast url!");
        return forecastUrl;
      } else {
        console.log("Forecast url api server returned error status ", status);
        console.log(
          `Retrieving forecast url failed at attempt ${i} Retrying in ${delayTime}ms`
        );
        await delay(delayTime);
      }
    }
  } catch (error) {
    console.log(error);
    if (error instanceof AbortError) {
      console.log("forecast url request was aborted");
    }
  } finally {
    clearTimeout(timeout);
  }
}

//Get the forecast with the url we retrieved
async function GetForecast(reqUrl) {
  // Add the abort controller logic inside the function
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 150);

  try {
    console.log("Attempting to get forecast from ", reqUrl);
    const response = await fetch(reqUrl, {
      headers: { "User-Agent": "louisbersine.com Resume Website" },
    });
    const status = await response.status;
    const data = await response.json();

    //Attempt to get the forecast 3 times before returning the error
    const attempts = 3;
    const delayTime = 1000;
    for (var i = 0; i <= attempts; i++) {
      if (status === 200) {
        const forecast = data.properties.periods[0];
        console.log("Success fetching forecast!");
        return forecast;
      } else {
        console.log("Forecast api server returned error status ", status);
        console.log(
          `Retrieving forecast failed at attempt ${i} Retrying in ${delayTime}ms`
        );
        await delay(delayTime);
      }
    }
  } catch (error) {
    console.log("Error fetching forecast");
    if (error instanceof AbortError) {
      console.log("forecast fetch request was aborted");
    }
    console.log(error);
  } finally {
    clearTimeout(timeout);
  }
}

async function GetWeather(zipcode) {
  let coordinates = await GetCoordinates(zipcode);
  if (coordinates) {
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    const forecastUrl = await GetForecastUrl(longitude, latitude);
    if (forecastUrl) {
      await delay(150);
      const forecast = await GetForecast(forecastUrl);
      if (forecast) {
        const weather = {
          name: forecast.name,
          temperature: forecast.temperature,
          temperatureUnit: forecast.temperatureUnit,
          detailedForecast: forecast.detailedForecast,
          icon: forecast.icon,
        };
        return weather;
      } else {
        console.log("Forecast data returned null");
      }
    } else {
      console.log("Unable to retrieve forecast url");
    }
  } else {
    console.log("No coordinates received from request");
  }
}

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  if (req.body.zipcode) {
    const zipcode = req.body.zipcode;
    const isNumber = isNumeric(zipcode);
    console.log("Zipcode is number: ", isNumber);
    console.log("Zipcode retrieved is ", zipcode);
    if (zipcode && zipcode.length == 5 && isNumber) {
      const weather = await GetWeather(zipcode);
      if (weather) {
        console.log("Weather forecast received:", weather);
        res.status(200).json(weather);
      } else {
        res.status(400).json({ error: "Retrieving weather failed" });
      }
    } else {
      res.status(400).json({ error: "Invalid zipcode" });
    }
  } else {
    res.status(400).json({ error: "Zipcode is required to retrieve weather" });
  }
}
