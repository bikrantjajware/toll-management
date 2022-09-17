import { React } from "react";
import './vehicle-log-item.css';

export const LogItem = ({ details, isHeader }) => {

    if (!details) {
        return;
    }
    const classes = `log-item ${isHeader && 'list-header'}`
    const { type, number, tarrif, date, tollname } = details;
    return (

        <ul className={classes}>
            <li>
                {type}
            </li>
            <li>
                {number}
            </li>
            <li>
                {date}
            </li>
            <li>
                {tollname}
            </li>
            <li>
                {tarrif}
            </li>
        </ul>);


}