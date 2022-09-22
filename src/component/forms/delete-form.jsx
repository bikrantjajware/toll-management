import { React, useState } from 'react';

export const DeleteForm = ({ tolls, setTolls }) => {
  const initState = new Array(tolls.length).fill(false);
  const [checkedState, setCheckedState] = useState(initState);
  const onChange = (pos) => {
    const updatedState = [...checkedState];
    updatedState[pos] = !checkedState[pos];
    setCheckedState(updatedState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTolls = tolls.filter((toll, i) => !checkedState[i]);
    setTolls(updatedTolls);
    localStorage.setItem(
      'tolls',
      JSON.stringify(Object.fromEntries(updatedTolls))
    );
    const updatedTollNames = updatedTolls.map((toll) => toll[0]);
    const vehicleByTolls = JSON.parse(localStorage.getItem('vehicleByTolls'));
    for (const key in vehicleByTolls) {
      if (!updatedTollNames.includes(key)) {
        delete vehicleByTolls[key];
      }
    }
    localStorage.setItem('vehicleByTolls', JSON.stringify(vehicleByTolls));
    setCheckedState(initState);
  };
  return (
    <div>
      <div className="title">
        <h1>Delete tolls</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {tolls &&
            tolls.map((toll, i) => (
              <div key={i} className="checkbox-element">
                <input
                  className="input-element readonly"
                  value={toll[0].toUpperCase()}
                  disabled
                />
                <input
                  className="input-element"
                  type="checkbox"
                  id={`toll-checkbox-${i}`}
                  name={toll[0]}
                  checked={checkedState[i]}
                  placeholder={toll[0]}
                  value={toll[0]}
                  onChange={() => onChange(i)}
                />
              </div>
            ))}
          <button className="form-submit-btn delete-btn">Confirm Delete</button>
        </form>
      </div>
    </div>
  );
};
