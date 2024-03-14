import React from 'react';
import SignUpForm from './components/Auth/SignUpForm';
import SignInForm from './components/Auth/SignInForm';
import SignOutButton from './components/Auth/SignOutButton';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// src/App.js

function App() {
  return (
    <div>
      <h1>User Authentication Demo</h1>
      <div>
        <h2>Sign Up</h2>
        <SignUpForm />
      </div>
      <div>
        <h2>Sign In</h2>
        <SignInForm />
      </div>
      <div>
        <h2>Sign Out</h2>
        <SignOutButton />
      </div>
    </div>
  );
}

export default App;
