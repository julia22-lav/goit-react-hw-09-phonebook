import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import avatar from './profile_pic.png';
import s from './UserMenu.module.css';
import Button from 'react-bootstrap/Button';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(authOperations.logout()), [
    dispatch,
  ]);
  return (
    <div style={{ marginLeft: 'auto', width: 'auto' }}>
      <img className={s.Avatar} src={avatar} alt="" width="32" />
      <span style={{ color: 'purple', fontSize: '18px', fontWeight: 'bold' }}>
        Welcome, {name}
      </span>
      <Button
        className={s.Button}
        variant="light"
        type="button"
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
  );
}
