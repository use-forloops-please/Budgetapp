import React from 'react';
import '../Assets/Styles/SideBar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li><Link to="/savings">Savings</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/income-list">Income List</Link></li>
        <li><Link to="/future-planning">Future Planning</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
