import React from 'react';
import SideNav from './SideNav';
import AuthNav from './AuthNav';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';
import Navbar from 'react-bootstrap/Navbar';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Navbar bg="info" variant="dark" className={s.AppBar}>
      <SideNav />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Navbar>
  );
}
