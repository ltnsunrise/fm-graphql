import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className='row'>
      <div className='col-xs'>
        <Link to='/'>Home</Link>
      </div>
    </div>
  </header>
);

export default Header;
