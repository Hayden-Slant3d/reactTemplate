import React, { createContext } from 'react';
import { db, auth } from '../firebase';

const FirebaseContext = createContext();
function FirebaseProvider({ children }) {
  const value = { db, auth };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}

export { FirebaseProvider }