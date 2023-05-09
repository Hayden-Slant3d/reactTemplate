// FirebaseContext.js
import { db, auth } from '../firebase';
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

class FirebaseInstance {
  constructor(data) {
    this.collectionName = data.collectionName;
    this.documentId = data.documentId;
  }

  getDocRef() {
    return doc(db, this.collectionName, this.documentId);
  }

  async get(){
      const docRef = this.getDocRef();
      const res = (await getDoc(docRef)).data();
      if(res == undefined) throw new Error('Document can not be found! Please check your document { name & id }');
      return res
  }


  async setData(data) {
    const docRef = this.getDocRef();
    await setDoc(docRef, data);
    console.log("Document successfully written!");
  }

  async updateData(data) {
    const docRef = this.getDocRef();
    await updateDoc(docRef, data);
    console.log("Document successfully updated!");
  }

  async deleteData() {
    const docRef = this.getDocRef();
    await deleteDoc(docRef);
    console.log("Document successfully deleted!");
  }
}

const firebaseApi = new FirebaseInstance({ collectionName: 'myCollection', documentId: 'Doc1' });

export { firebaseApi };
