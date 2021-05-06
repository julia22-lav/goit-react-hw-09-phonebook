import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PublicRoute({
  component: Component,
  children,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        children
      )}
    </Route>
  );
}
