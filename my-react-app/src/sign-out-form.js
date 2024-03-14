import React from 'react';
import { auth } from './firebase';

function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // User signed out successfully
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
}

export default SignOutButton;
