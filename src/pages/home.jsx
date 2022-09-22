import { React, useState, useEffect } from 'react';
import { Menu } from '../component/navbar/menu';
import { VehicleLog } from '../component/vehicle-log/vehicle-log';

const Home = () => {
  const [logs, setLogs] = useState([]);
  const [tolls, setTolls] = useState([]);
  const [searchWord, setsearchWord] = useState('');
  const [tollFilter, setTollFilter] = useState('');

  //initialize tolls list
  useEffect(() => {
    const tollList = JSON.parse(localStorage.getItem('tolls'));
    if (tollList) {
      setTolls(Object.entries(tollList));
    }
  }, []);

  //initialize vehicle logs
  useEffect(() => {
    const vehicleLogs = JSON.parse(localStorage.getItem('logs'));
    if (vehicleLogs) {
      setLogs(vehicleLogs);
    }
  }, []);

  // set search key on homepage
  const onSearch = (e) => setsearchWord(e.target.value);
  //set filter tollname on homepage
  const onFilterSelect = (e) => setTollFilter(e.target.value);

  //search logs by vehicle number
  useEffect(() => {
    const vehicleLogs = JSON.parse(localStorage.getItem('logs'));
    if (searchWord || tollFilter) {
      const searchLogs = vehicleLogs.filter(
        (log) =>
          log.vehicleNumber.includes(searchWord) &&
          (tollFilter === '' || log.tollname === tollFilter)
      );
      setLogs(searchLogs);
    } else {
      setLogs(vehicleLogs);
    }
  }, [searchWord, tollFilter]);

  return (
    <div>
      <Menu
        setLogs={setLogs}
        isHome={true}
        onSearch={onSearch}
        searchWord={searchWord}
        tolls={tolls}
        setTolls={setTolls}
        tollFilter={tollFilter}
        onFilterSelect={onFilterSelect}
      />
      <VehicleLog logs={logs} />
    </div>
  );
};

export default Home;
