import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/appStore';
import ForecastItem from './ForecastItem';
import { ForecastContainer, ForecastItems } from './styled';

/**
 * Renders daily weather forecast for next week based on given lon/lat coordinates using OWM API
 */

const Forecast: React.FC = () => {
  const { forecast, isInitial } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
    isInitial: state.app.isInitial,
    forecast: state.weather.extendedWeatherData,
  }));

  if (isInitial) return <></>;

  return (
    <ForecastContainer dataset-id="forecast-container">
      
      <ForecastItems>
        {forecast.map((item, i) => {
          return (
            <ForecastItem
              key={i}
              day={item.day}
              high={item.temp.temp_max}
              low={item.temp.temp_min}
              weatherCode={item.weather.id}
              main={item.weather.main}
            />
          );
        })}
      </ForecastItems>
    </ForecastContainer>
  );
};

export default Forecast;
