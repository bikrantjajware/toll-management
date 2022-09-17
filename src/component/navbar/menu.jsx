import { React } from "react";
import { Link } from "react-router-dom";
import './menu.css';
export const Menu = () => {



    return (<nav className="navbar" >
        <ul className="menu-list">
            <div className="left-menu-items">

                <li>
                    <Link to="#">Toll Entries/ Vehicle Entries</Link>
                </li>
                <li>
                    <Link to="/">filter</Link>
                </li>
                <li>
                    <Link to="/">search bar</Link>
                </li>
            </div>
            <div className="right-menu-items">

                <li>
                    <Link to="/">Add Vehicle entry</Link>
                </li>
                <li>
                    <Link to="/">Add new toll</Link>
                </li>
                <li>
                    <Link to="/">View all tolls</Link>
                </li>
            </div>
        </ul>
    </nav >)
}