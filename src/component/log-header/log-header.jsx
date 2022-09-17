import React from 'react';
import './log-header.css';

export const LogHeader = () => {
    return (
        <ul className='log-header'>
            <li>
                Vehicle Type
            </li>
            <li>
                Vehicle Number
            </li>
            <li>
                Date/Time
            </li>
            <li>
                Toll Name
            </li>
            <li>
                Tarrif
            </li>
        </ul >
    )
}