import './App.css';
import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import authOperations from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/AppBar/PrivateRoute';
import PublicRoute from './components/AppBar/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = lazy(() =>
  import('./pages/home-page' /*WebpackChunkName: HomePage */),
);
const LoginPage = lazy(() =>
  import('./pages/login-page' /*WebpackChunkName: LoginPage */),
);
const RegisterPage = lazy(() =>
  import('./pages/register-page' /*WebpackChunkName: RegisterPage */),
);
const ContactsPage = lazy(() =>
  import('./pages/contacts-page' /*WebpackChunkName: ContactsPage */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterPage />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted>
            <LoginPage />
          </PublicRoute>

          <PrivateRoute exact path="/contacts">
            <ContactsPage />
          </PrivateRoute>
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
}
