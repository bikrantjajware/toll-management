import { useState, useEffect } from 'react';
import { React } from 'react';
import './form.css';

export const VehicleForm = ({ setLogs }) => {
  const vehicleList = JSON.parse(localStorage.getItem('vehicleTypes'));
  const tolls = JSON.parse(localStorage.getItem('tolls'));
  const tollList = Object.keys(tolls || []);
  const initialState = {
    tollname: '',
    vehicleType: '',
    vehicleNumber: '',
  };

  const [meta, setMeta] = useState({
    'date': '',
    'tariff': '',
  });
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (!form['vehicleNumber'] || form['vehicleNumber'].length !== 10) {
      return;
    }
    const { tollname, vehicleType, vehicleNumber } = form;
    if (!tollname.length || !vehicleType.length) {
      return;
    }

    const vehicleByTolls =
      JSON.parse(localStorage.getItem('vehicleByTolls')) || {};
    const oldDateString = vehicleByTolls[tollname][vehicleNumber] || null;
    const oldDate = new Date(oldDateString);
    const newDate = new Date();
    const newTimestamp = newDate.getTime();
    let journeyType = 'singleJourney';
    if (newTimestamp - oldDate.getTime() <= 3600000) {
      journeyType = 'returnJourney';
    }

    setMeta({
      tariff: tolls[tollname][vehicleType][journeyType],
      date: newDate,
    });
  }, [form]);

  const isInvalid = (form) => {
    if (
      form['tollname'] &&
      form['vehicleType'] &&
      form['vehicleNumber'] &&
      meta['tariff']
    ) {
      return false;
    }
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isInvalid(form)) {
      alert('Please fill all the required fields');
      return;
    }
    let vehicleLogs = JSON.parse(localStorage.getItem('logs')) || [];
    const newLog = { ...form, ...meta };
    vehicleLogs = [newLog, ...vehicleLogs];
    setLogs(vehicleLogs);
    localStorage.setItem('logs', JSON.stringify(vehicleLogs));
    const vehicleByTolls =
      JSON.parse(localStorage.getItem('vehicleByTolls')) || {};
    const { tollname, vehicleNumber } = form;
    const { date } = meta;
    vehicleByTolls[tollname][vehicleNumber] = date;
    localStorage.setItem('vehicleByTolls', JSON.stringify(vehicleByTolls));
    setForm(initialState);
    setMeta({ 'date': '', 'tariff': '' });
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>
      <div className="title">
        <h1>Add new entry</h1>
      </div>
      <div className="form-container">
        <form onSubmit={onSubmit} autoComplete="off">
          <label>Select toll name*</label>
          <br />
          <select
            className="input-element"
            value={form['tollname']}
            name="tollname"
            onChange={onChange}
            required
          >
            <option>select toll name</option>
            {tollList.map((toll, i) => (
              <option key={i} value={toll} className="option">
                {toll}
              </option>
            ))}
          </select>
          <label>Select vehicle type*</label>
          <br />
          <select
            className="input-element"
            value={form['vehicleType']}
            name="vehicleType"
            onChange={onChange}
            required
          >
            <option>select vehicle type</option>
            {vehicleList.map((type, i) => (
              <option key={i} value={type} className="option">
                {type}
              </option>
            ))}
          </select>
          <label>Vehicle Number*</label>
          <br />

          <input
            type="text"
            className="input-element"
            value={form['vehicleNumber']}
            name="vehicleNumber"
            onChange={onChange}
            required
            minLength={10}
            maxLength={10}
          />
          <label>Tariff*</label>
          <br />
          <input
            type="text"
            value={meta['tariff']}
            className="input-element readonly"
            placeholder="Tariff amount"
            disabled
            required
          />
          <button type="submit" className="form-submit-btn">
            Add Entry
          </button>
        </form>
      </div>
    </div>
  );
};
