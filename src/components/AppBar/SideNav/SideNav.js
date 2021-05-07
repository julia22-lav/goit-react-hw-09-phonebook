import React from 'react';
import s from './SideNav.module.css';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function SideNav() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <ul className={s.SideNav}>
      <li className={s.SideNavLink}>
        <NavLink
          to="/"
          exact
          className={s.NavLink}
          activeClassName={s.NavLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li className={s.SideNavLink}>
        {isAuthenticated && (
          <NavLink
            to="/contacts"
            exact
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Contacts
          </NavLink>
        )}
      </li>
    </ul>
  );
}
