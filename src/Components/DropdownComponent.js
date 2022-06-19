import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='container'>
            <button type='button' className='dropdown_btn' onClick={() => setOpen(!open)}>☰</button>
            {open && (<div className='dropdown'>
                <ul className='dropdown_list'>
                    <Link to='/hourly' className='link'><li className='list_item'>Hourly Forecast</li></Link>
                    <Link to='/daily' className='link'><li className='list_item'>Daily Forecast</li></Link>
                </ul>
            </div>)}
        </div>
    );
}

export default Dropdown;