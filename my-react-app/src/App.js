// src/App.js

import React from 'react';
import SignUpForm from './components/signup-form'; // Import SignUpForm component
import SignInForm from './components/signin-form'; // Import SignInForm component
import SignOutButton from './components/signout-form.js'; // Import SignOutButton component

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
