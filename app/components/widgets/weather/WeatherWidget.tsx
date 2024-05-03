import { useCallback, useEffect, useState } from "react";
import {
  Condition,
  Empty,
  Image,
  Info,
  InnerWrapper,
  Location,
  Temp,
  WeatherWrapper,
} from "~/components/widgets/weather/WeatherWidget.styles";

interface WeatherWidgetProps {
  coords?: {
    latitude: number;
    longitude: number;
  };
}

interface WeatherData {
  weather: string;
  icon: string;
  location: string;
  temperature: number;
  maxTemperature?: number;
  minTemperature?: number;
}

const WeatherWidget = ({ coords }: WeatherWidgetProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const fetchWeather = useCallback(async () => {
    try {
      /* TODO: Find a way to access .env variables since Remix isn't straightforward*/
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=1662e45f71e7f241a4fd7c4eb94929ac&units=metric`
      ).then(async (response) => {
        if (!response.status) {
          throw new Error("Failed to fetch weather data.");
        }
        const responseData = await response.json();
        const weatherData: WeatherData = {
          weather: responseData.weather[0].main,
          icon: responseData.weather[0].icon,
          location: responseData.name,
          temperature: responseData.main.temp,
        };
        setWeather(weatherData);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchWeather();

    const interval = setInterval(fetchWeather, 300000);

    return () => {
      clearInterval(interval);
    };
  }, [fetchWeather]);

  return (
    <WeatherWrapper>
      {weather ? (
        <InnerWrapper>
          <Location>{weather?.location}</Location>
          <Image
            src={`https://openweathermap.org/img/wn/${weather?.icon}@4x.png`}
            alt={""}
          />
          <Info>
            <Condition>{weather?.weather}</Condition>
            <Temp>{weather?.temperature}ºC</Temp>
          </Info>
        </InnerWrapper>
      ) : (
        <Empty>{`No weather data`}</Empty>
      )}
    </WeatherWrapper>
  );
};

export default WeatherWidget;
