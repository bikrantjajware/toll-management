import { React } from "react";
import { LogItem } from "../vehicle-log-item/vehicle-log-item";
// import { LogHeader } from "../log-header/log-header";
import './vehicle-log.css';
export const VehicleLog = () => {

    return (
        <ul className="log-item-list">
            <LogItem isHeader={true} details={{
                type: 'VEHICLE TYPE',
                number: 'VEHICLE NUMBER',
                date: 'DATE/TIME',
                tollname: 'TOLL NAME',
                tarrif: 'TARIFF'
            }} />
            <LogItem details={{
                type: 'Car/Jeep/Van',
                number: '123456',
                date: '16-09-2022 12:05:22',
                tollname: 'gurgaon',
                tarrif: '54'
            }} />
        </ul>
    )
}