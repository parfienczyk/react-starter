import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = () => (
  <header>
    <div className="Nav">
      <div>
        <NavLink to="/" activeClassName="active">
          Start
        </NavLink>
      </div>
      <div>
        <NavLink to="/dashboard" activeClassName="active">
          Dashboard
        </NavLink>
      </div>
      <div>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>
      </div>
      <div>
        <NavLink to="/secret-page" activeClassName="active">
          Secret
        </NavLink>
      </div>
    </div>
  </header>
);

export default Header;
