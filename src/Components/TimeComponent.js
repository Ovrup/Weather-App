import React from 'react';
import moment from "moment";

const Timefunction = (props) => {

    const d = new Date(props.dt * 1000);
    const localTimeoffset = d.getTimezoneOffset() * 60;

    if (Math.abs(props.timezone_offset) === Math.abs(localTimeoffset)) {

        return (
            <span className={`${props.cls}`}>{moment(d).format(`${props.format}`)}</span>
        );
    }
    else {
        const utc = (props.dt + localTimeoffset) * 1000;
        const actual_time_ms = utc + props.timezone_offset * 1000;
        const actual_time = new Date(actual_time_ms);

        return (
            <span className={`${props.cls}`}>{moment(actual_time).format(`${props.format}`)}</span>
        );
    }

}

export default Timefunction;