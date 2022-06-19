import React, { useState, useEffect } from 'react';
import Timefunction from './TimeComponent';
import WeatherIcon from './IconComponent';

const Daily = (props) => {

    const [weekly, setWeekly] = useState([]);
    const [timezone_offset, setTimezoneoffset] = useState(null);

    useEffect(() => fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${props.apikey}&units=metric`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);

            setWeekly([...res.daily]);
            setTimezoneoffset(res.timezone_offset)

        }), [props.lat, props.lon, props.apikey]);



    const DailyWeather = weekly.map((daily, index) => {

        return (
            <div className='daily-weather-card' key={index}>
                <Timefunction dt={daily.dt} format={'dddd'} timezone_offset={timezone_offset} cls={'day-weather-card'} />
                <WeatherIcon weather={daily.weather[0].main} cls={'icon-daily'} />
                <div>{daily.weather[0].main}</div>
                <div className='dn-temp'>
                    <span>{Math.round(daily.temp.day)}°</span>
                    <span>{Math.round(daily.temp.night)}°</span>
                </div>
            </div>
        );

    })




    return (
        <div className='daily-weather'>
            {DailyWeather}
        </div>

    );
}

export default Daily;