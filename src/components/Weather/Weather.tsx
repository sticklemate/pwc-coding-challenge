import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as HumidityIcon } from '../../assets/humidity-icon.svg';
import { ReactComponent as PressureIcon } from '../../assets/pressure-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/wind-icon.svg';
import { changeDegreeType } from '../../store/actions/app';
import { AppStore } from '../../store/appStore';
import { kmToMile, TempUnit } from '../../utils/unitConversion';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import {
  CurrentWeather,
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  InfoRow,
  SectionTitle,
  WeatherContainer,
} from './styled';
import Temperature from './Temperature';
import ToggleSwitch from '../ui/ToggleSwitch/ToggleSwitch';
import dayjs from "../../utils/currentDate";

/**
 * Renders the current weather and weekly forecast for a given location. User
 * can input new location and change units.
 */
const today = dayjs().format("dddd, MMMM Do");

const Weather: React.FC = () => {
  const { weather, degreeType, isInitial, isError } = useSelector((store: AppStore) => ({
    weather: store.weather.weatherData,
    degreeType: store.app.tempUnit,
    isInitial: store.app.isInitial,
    isError: store.weather.isError,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log('Cannot load weather for this place');
    }
  }, [isError]);

  if (isInitial) return <></>;

  return (
    <WeatherContainer data-testid="weather-container">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle style={{justifyContent: 'center' }}>Current Weather </SectionTitle>
        <div>
          <ToggleSwitch onClick={() => dispatch(changeDegreeType())} />
        </div>
      </div>
      <CurrentWeatherContainer>
        <CurrentWeather>
          <h4>{weather.name}</h4>
          <div style={{ display: 'flex' }}>
            <WeatherIcon code={weather.weather.id} big />
            <span>
              <Temperature aria-label="current temperature" value={weather.main.temp} />
              <sup>&deg;</sup>
            </span>
          </div>
          <h6>{weather.weather.description}</h6>
          <h6>{today}</h6>
        </CurrentWeather>

        <CurrentWeatherInfo>
          <InfoRow>
            <div>
              <HumidityIcon aria-label="humidity" /> Humidity
            </div>
            <span>{weather.main.humidity}%</span>
          </InfoRow>
          <InfoRow>
            <div>
              <WindIcon aria-label="wind"/> Wind
            </div>
            <span>
              {degreeType === TempUnit.CELCIUS ? weather.wind.speed : kmToMile(weather.wind.speed)}
              {degreeType === TempUnit.CELCIUS ? 'kph' : 'mph'}
            </span>
          </InfoRow>
          <InfoRow>
            <div>
              <PressureIcon aria-label="pressure"/> Pressure
            </div>
            <span>{weather.main.pressure}hPa</span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
    </WeatherContainer>
  );
};

export default Weather;
