// src/App.js

import React from 'react';
import SignUpForm from './components/Auth/SignUpForm'; // Import SignUpForm component
import SignInForm from './components/Auth/SignInForm'; // Import SignInForm component
import SignOutButton from './components/Auth/SignOutButton'; // Import SignOutButton component

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <SignUpForm /> {/* Render SignUpForm component */}
      <SignInForm /> {/* Render SignInForm component */}
      <SignOutButton /> {/* Render SignOutButton component */}
    </div>
  );
}

export default App;
