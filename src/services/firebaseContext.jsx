import { createContext } from 'react';
import PropTypes from 'prop-types';
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

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FirebaseProvider }
