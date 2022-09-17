import { React } from "react";
import './vehicle-log-item.css';

export const LogItem = ({ details, isHeader }) => {

    if (!details) {
        return;
    }
    const classes = `log-item ${isHeader && 'list-header'}`
    const { type, number, tarrif, date, tollname } = details;
    return (

        <div className={classes}>
            <div>
                {type}
            </div>
            <div>
                {number}
            </div>
            <div>
                {date}
            </div>
            <div>
                {tollname}
            </div>
            <div>
                {tarrif}
            </div>
        </div>);


}