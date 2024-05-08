import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/SideBar';
import About from './components/About';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
        
          <Route path="/" exact component={<Dashboard/>} />
          <Route path='/components/About' component={<About/>} />
          <Route path='/components/ContactUs' component={<ContactUs/>} />
        
      </div>
    </Router>
  );
}

export default App;