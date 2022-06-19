import React from 'react';
import { faWind, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WiSunrise, WiSunset } from 'react-icons/wi';
import Timefunction from './TimeComponent';
import WeatherIcon from './IconComponent';


const WeatherBox = (props) => {


    return (


        <>

            <div className='weather-components'>

                <div>
                    <div className='city'>{props.city}</div>
                    <div style={{ fontWeight: 'bold' }}><Timefunction dt={props.date} format={"ddd, MMMM Do"} timezone_offset={props.timezone} /></div>
                    <div className='temp'>{Math.round(props.temp)}°</div>
                </div>

                <ul className='weather-list-2'>
                    <li className='weather'><span style={{ marginRight: '5%' }}><WeatherIcon weather={props.weather} cls={''} /></span>{props.weather}</li>
                    <li className='weather'><span style={{ marginRight: '5%' }}><FontAwesomeIcon icon={faDroplet} /></span>{props.humidity}%</li>
                    <li className='weather'><span style={{ marginRight: '5%' }}><FontAwesomeIcon icon={faWind} /></span>{props.windSpeed} m/s</li>
                    <li className='weather'><span style={{ marginRight: '5%', fontSize: '150%' }}><WiSunrise /></span><Timefunction dt={props.sunrise} format={"hh:mm a"} timezone_offset={props.timezone} cls={'weather'} /></li>
                    <li className='weather'><span style={{ marginRight: '5%', fontSize: '150%' }}><WiSunset /></span><Timefunction dt={props.sunset} format={"hh:mm a"} timezone_offset={props.timezone} cls={'weather'} /></li>
                </ul>

            </div>
        </>
    );
}

export default WeatherBox;