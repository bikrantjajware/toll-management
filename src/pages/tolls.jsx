import { React, useState, useEffect } from 'react';
import { Menu } from '../component/navbar/menu';
import { NotFound } from '../component/not-found/not-found';
import { TollItem } from '../component/tolls-items/toll-item';
import './index.css';

export const Tolls = () => {
  const [tolls, setTolls] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const onSearch = (e) => setSearchWord(e.target.value);

  const [, setLogs] = useState([]);

  // initialize logs
  useEffect(() => {
    const vehicleLogs = JSON.parse(localStorage.getItem('logs'));
    if (vehicleLogs) {
      setLogs(vehicleLogs);
    }
  }, []);

  // initialize tolls
  useEffect(() => {
    const tollList = JSON.parse(localStorage.getItem('tolls')) || [];
    setTolls(Object.entries(tollList));
  }, []);

  useEffect(() => {
    const searchTollList = Object.entries(
      JSON.parse(localStorage.getItem('tolls')) || []
    );
    if (searchTollList.length && searchWord) {
      const filteredList = searchTollList.filter((toll) =>
        toll[0].includes(searchWord)
      );
      setTolls(filteredList);
    } else {
      setTolls(searchTollList);
    }
  }, [searchWord]);

  let vehicleTypes = [];
  if (tolls.length) {
    vehicleTypes = Object.keys(tolls[0][1]);
  }

  console.log(tolls.length);
  return (
    <div>
      <Menu
        setLogs={setLogs}
        onSearch={onSearch}
        searchWord={searchWord}
        isHome={false}
        tolls={tolls}
        setTolls={setTolls}
      />
      {tolls.length ? (
        <ul className="log-item-list">
          <TollItem
            isHeader={true}
            tollname={'Toll Name'}
            fareChart={vehicleTypes}
          />
          {tolls.map((toll, i) => (
            <div key={i}>
              <TollItem
                tollname={toll[0]}
                fareChart={Object.entries(toll[1]).map(
                  (tollItem) =>
                    `${tollItem[1]['singleJourney']}/${tollItem[1]['returnJourney']}`
                )}
              />

              <p className="linebreak"></p>
            </div>
          ))}
        </ul>
      ) : (
        <NotFound message={'Toll not found'} />
      )}
    </div>
  );
};
