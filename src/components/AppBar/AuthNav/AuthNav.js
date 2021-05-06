import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={s.AuthNav}>
      <li className={s.AuthNavLink}>
        <NavLink
          to="/register"
          exact
          className={s.NavLink}
          activeClassName={s.NavLinkActive}
        >
          Registration
        </NavLink>
      </li>
      <li className={s.AuthNavLink}>
        <NavLink
          to="/login"
          className={s.NavLink}
          activeClassName={s.NavLinkActive}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
