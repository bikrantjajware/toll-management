import { React, useState } from 'react';
import Modal from '../modal/modal';
import { VehicleForm, TollForm } from '../forms';
import './menu.css';
import { Link } from 'react-router-dom';
import { DeleteForm } from '../forms/delete-form';

export const Menu = ({
  setLogs,
  isHome,
  tolls,
  setTolls,
  onSearch,
  searchWord,
  tollFilter,
  onFilterSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formtype, setFormtype] = useState('');

  const formProvider = {
    'TollForm': <TollForm setTolls={setTolls} />,
    'VehicleForm': <VehicleForm setLogs={setLogs} />,
    'DeleteForm': <DeleteForm tolls={tolls} setTolls={setTolls} />,
  };

  return (
    <>
      <h1 className="title">Toll Management Application</h1>
      <nav className="navbar">
        <ul className="menu-list">
          <div className="left-menu-items">
            <li>
              {isHome ? 'Toll Entries/ Vehicle Entries' : 'Tollgate List'}
            </li>
            <li style={{ 'display': isHome ? 'block' : 'none' }}>
              <div>
                <select
                  value={tollFilter}
                  onChange={onFilterSelect}
                  className="search-menu"
                >
                  <option value="">select toll</option>
                  {tolls &&
                    tolls.map((toll, i) => (
                      <option key={i} className="option" value={toll[0]}>
                        {toll[0].toUpperCase()}
                      </option>
                    ))}
                </select>
              </div>
            </li>
            <li>
              <input
                className="search-menu"
                value={searchWord}
                onChange={onSearch}
                placeholder={
                  isHome ? 'search by vehicle number' : 'search by tollname'
                }
              />
            </li>
          </div>
          <div className="right-menu-items">
            <li>
              <button
                onClick={() => {
                  setIsOpen(true);
                  setFormtype('VehicleForm');
                }}
                className="menu-button"
              >
                Add vehicle entry
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsOpen(true);
                  setFormtype('TollForm');
                }}
                className="menu-button"
              >
                Add new toll
              </button>
            </li>
            {!isHome && (
              <li>
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setFormtype('DeleteForm');
                  }}
                  style={{ backgroundColor: 'red' }}
                  className="menu-button"
                >
                  Delete tolls
                </button>
              </li>
            )}
            <li>
              <Link to={isHome ? '/tolls' : '/'}>
                <button className="menu-button">
                  {isHome ? 'View all tolls' : 'Back to vehicle logs'}
                </button>
              </Link>
            </li>
          </div>
        </ul>
        <Modal
          open={isOpen}
          form={formProvider[formtype]}
          onClose={() => setIsOpen(false)}
        />
      </nav>
    </>
  );
};
