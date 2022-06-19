import React, { useState, useEffect } from 'react';
import Timefunction from './TimeComponent';
import WeatherIcon from './IconComponent';

const Hourly = (props) => {

    const [hourly, setHourly] = useState([]);
    const [timezone_offset, setTimezoneoffset] = useState(null);

    useEffect(() => fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,daily,alerts&appid=${props.apikey}&units=metric`)
        .then(res => res.json())
        .then(res => {
            console.log(res);

            setHourly(res.hourly);
            setTimezoneoffset(res.timezone_offset);
        }), [props.lat, props.lon, props.apikey]);


    const HourlyWeather = hourly.map((item, index) => {

        return (
            <div className='daily-weather-card' key={index}>
                <Timefunction dt={item.dt} format={'dddd'} timezone_offset={timezone_offset} cls={'day-weather-card'} />
                <WeatherIcon weather={item.weather[0].main} cls={'icon-daily'} />
                <div>{item.weather[0].main}</div>
            </div>
        );
    })



    return (
        <div className='daily-weather'>
            {HourlyWeather}
        </div>
    );
};

export default Hourly;
