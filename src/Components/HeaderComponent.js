import React from 'react';
import Dropdown from './DropdownComponent';

const Header = (props) => {
    return (
        <div className="header">
            {props.children}

            <Dropdown />
        </div>
    );

}

export default Header;