import './App.css';
import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/AppBar/PrivateRoute';
import PublicRoute from './components/AppBar/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ContactForm from './components/ContactForm';
// import { v4 as genId } from 'uuid';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';

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

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PublicRoute
              exact
              path="/register"
              restricted
              component={RegisterPage}
            />
            <PublicRoute exact path="/login" restricted component={LoginPage} />
            <PrivateRoute exact path="/contacts" component={ContactsPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
