import { React, useState } from 'react';
import './form.css';

export const TollForm = ({ setTolls }) => {
  const [tollname, setTollname] = useState('');
  const vehicleTypes = JSON.parse(localStorage.getItem('vehicleTypes'));
  const initialTypes = vehicleTypes.reduce((acc, cur) => {
    return { ...acc, [cur]: { 'singleJourney': '', 'returnJourney': '' } };
  }, {});
  const [types, setTypes] = useState(initialTypes);

  const formReset = () => {
    setTollname('');
    setTypes(initialTypes);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setTollname(tollname.trim().toLowerCase());
    let tolls = JSON.parse(localStorage.getItem('tolls')) || {};
    if (tolls[tollname.trim().toLowerCase()]) {
      alert('Toll with same name exists add another toll');
      formReset();
    }
    const newToll = {
      [tollname]: types,
    };

    tolls = { ...tolls, ...newToll };
    localStorage.setItem('tolls', JSON.stringify(tolls));
    setTolls(tolls);
    setTolls(Object.entries(tolls));
    let vehicleByTolls =
      JSON.parse(localStorage.getItem('vehicleByTolls')) || {};
    vehicleByTolls = { ...vehicleByTolls, [tollname]: {} };
    //update vehicleByTolls in localstorage
    localStorage.setItem('vehicleByTolls', JSON.stringify(vehicleByTolls));

    formReset();
  };

  const onChange = (e, type) => {
    e.preventDefault();
    setTypes({
      ...types,
      [type]: { ...types[type], [e.target.name]: e.target.value },
    });
  };

  const TarriffItems = vehicleTypes.map((type, i) => (
    <div key={i} className="tariff-list">
      <input className="input-element readonly" value={type} disabled />
      <input
        type="number"
        onChange={(e) => onChange(e, type)}
        name="singleJourney"
        value={types[type]['singleJourney']}
        className="input-element"
        placeholder="Single Journey"
        required
      />
      <input
        type="number"
        onChange={(e) => onChange(e, type)}
        name="returnJourney"
        value={types[type]['returnJourney']}
        className="input-element"
        placeholder="Return Journey"
        required
      />
    </div>
  ));

  return (
    <div>
      <div className="title">
        <h1>Add new toll</h1>
      </div>
      <div className="form-container">
        <form onSubmit={formSubmit} autoComplete="off">
          <label>Toll Name*</label>
          <br />
          <input
            className="input-element"
            placeholder="Enter toll name"
            type="text"
            value={tollname}
            onChange={(e) => setTollname(e.target.value)}
            required
          />
          <br />
          <label>Vehicle fare details*</label>
          <br />
          {TarriffItems}
          <button type="submit" className="form-submit-btn">
            Add details
          </button>
        </form>
      </div>
    </div>
  );
};
