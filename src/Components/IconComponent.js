import React from 'react';
import { faSun, faCloudShowersHeavy, faCloud, faThunderstorm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WiDayHaze, WiDaySleet, WiFog, WiNa, WiSmoke } from 'react-icons/wi';

const WeatherIcon = (props) => {

    return (
        (props.weather === "Clouds") ? (<span className={`${props.cls}`}><FontAwesomeIcon icon={faCloud} /></span>)
            : (props.weather === "Clear") ? (<span className={`${props.cls}`}><FontAwesomeIcon icon={faSun} /></span>)
                : (props.weather === "Rain") ? (<span className={`${props.cls}`}><FontAwesomeIcon icon={faCloudShowersHeavy} /></span>)
                    : (props.weather === "Thunderstorm") ? (<span classname={`${props.cls}`}><FontAwesomeIcon icon={faThunderstorm} /></span>)
                        : (props.weather === "Mist") ? (<span className={`${props.cls}`}><WiFog /></span>)
                            : (props.weather === "Smoke") ? (<span className={`${props.cls}`}><WiSmoke /></span>)
                                : (props.weather === "Haze") ? (<span className={`${props.cls}`}><WiDayHaze /></span>)
                                    : (props.weather === "Drizzle") ? (<span className={`${props.cls}`}><WiDaySleet /></span>)
                                        : (<span className={`${props.cls}`}><WiNa /></span>)
    );

}

export default WeatherIcon;