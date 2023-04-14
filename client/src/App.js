import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Login from './pages/SignIn'
import SignUp from './pages/SignUp'
import ReactCalendar from './pages/Dash'
import auth from './utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                {!auth.loggedIn() && <> <li className="nav-item">
                  <Link className="nav-link" to={'/SignIn'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/SignUp'}>
                    Sign up
                  </Link>
                </li></>}
                {auth.loggedIn() && <> <li className="nav-item">
                  <Link className="nav-link" to={'/Dash'}>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={() => {
                    auth.logout();
                  }}
                  to={'/'}
                  >
                    Logout
                  </Link>
                </li></>}
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/SignIn" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              {auth.loggedIn() && <Route path="/Dash" element={<ReactCalendar/>}/>}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </ApolloProvider>
  )
}

export default App