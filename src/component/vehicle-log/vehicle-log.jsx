import { React } from 'react';
import { NotFound } from '../not-found/not-found';
import { LogItem } from '../vehicle-log-item/vehicle-log-item';
import './vehicle-log.css';
export const VehicleLog = ({ logs }) => {
  if (!logs || !logs.length) {
    return <NotFound message={'Vehicle not found'} />;
  }
  return (
    <ul className="log-item-list">
      <LogItem
        isHeader={true}
        details={{
          type: 'VEHICLE TYPE',
          number: 'VEHICLE NUMBER',
          date: 'DATE/TIME',
          tollname: 'TOLL NAME',
          tariff: 'TARIFF',
        }}
      />
      {logs.map((log, i) => (
        <div key={i}>
          <LogItem
            details={{
              type: log.vehicleType,
              number: log.vehicleNumber,
              date: new Date(log.date).toLocaleString(),
              tollname: log.tollname,
              tariff: log.tariff,
            }}
          />
          <p className="linebreak"></p>
        </div>
      ))}
    </ul>
  );
};
