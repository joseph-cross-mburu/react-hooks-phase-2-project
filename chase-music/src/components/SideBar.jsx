import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/search">Search Music</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;