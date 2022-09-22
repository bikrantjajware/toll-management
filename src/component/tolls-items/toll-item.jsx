import React from 'react';

export const TollItem = ({ isHeader, tollname, fareChart }) => {
  const classes = `log-item ${isHeader ? 'list-header' : ''}`;
  return (
    <div className={classes}>
      <div className="list-item-cell">{tollname.toUpperCase()}</div>
      {fareChart &&
        fareChart.map((fare, i) => (
          <div key={i} className="list-item-cell" title="(single/return)">
            {fare}
          </div>
        ))}
    </div>
  );
};
