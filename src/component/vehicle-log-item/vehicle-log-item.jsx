import { React } from 'react';
import './vehicle-log-item.css';

export const LogItem = ({ details, isHeader }) => {
  if (!details) {
    return;
  }
  const classes = 'log-item ' + (isHeader ? 'list-header' : '');
  const { type, number, tariff, date, tollname } = details;
  return (
    <div className={classes}>
      <div className="list-item-cell">{type}</div>
      <div className="list-item-cell">{number}</div>
      <div className="list-item-cell">{date}</div>
      <div className="list-item-cell">{tollname.toUpperCase()}</div>
      <div className="list-item-cell">{tariff}</div>
    </div>
  );
};
