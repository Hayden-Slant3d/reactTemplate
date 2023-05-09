// FirebaseContext.js
import React, { createContext } from 'react';
import { db, auth } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

const FirebaseContext = createContext();
function FirebaseProvider({ children }) {
  const value = { db, auth };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}

class FirebaseApi {
  async getData(collectionName, documentId) {
    const docRef = doc(db, collectionName, documentId);
    const res = await getDoc(docRef);
  
    if (res.exists()) {
      console.log("Document data:", res.data());
      return res.data();
    } else {
      console.log("No such document!");
      return null;
    }
  }


}

const firebaseApi = new FirebaseApi()



export { FirebaseProvider, firebaseApi };
