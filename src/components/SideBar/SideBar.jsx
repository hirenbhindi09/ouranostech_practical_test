import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

import { Link } from "react-router-dom";

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar-responsive">
      <div className="sidebar-title">
        <div className="sidebar-brand " style={{ color: "white" }}>
          <BsCart3 className="icon_header" color="white" /> User Management
          System
        </div>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/allusers">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/allleads">
            <BsFillArchiveFill className="icon" />
            Leads
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/allusers">
            <BsPeopleFill className="icon" /> Users
          </Link>
        </li>
        {/* <li className="sidebar-list-item">
          <Link to="">
            <BsFillGrid3X3GapFill className="icon" />
          </Link>
        </li> */}

        <li className="sidebar-list-item">
          <Link to="">
            <BsMenuButtonWideFill className="icson" /> Customers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="">
            <BsFillGearFill className="icon" /> Customer history
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
