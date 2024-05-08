import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to='./components/About'>About</Link></li>
        <li><Link to='./components/ContactUs'>Search Music</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;