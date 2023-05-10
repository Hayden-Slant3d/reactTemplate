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

  async checkDoc(){
    docRef = this.getDocRef()
    const res = (await getDoc(docRef)).data();
    if(res == undefined) throw new Error('Document can not be found! Please check your document { name & id }');
    return res
  }

  async read(){
      const docRef = this.getDocRef();
      const res = await this.checkDoc(docRef)
      return res
  }

  async setData(data) {
    const docRef = this.getDocRef();
    await this.checkDoc(docRef)
    await setDoc(docRef, data);
    console.log("Document successfully written!");
  }

  async write(data) {
    const docRef = this.getDocRef();
    await this.checkDoc(docRef)
    await updateDoc(docRef, data);
    console.log("Document successfully updated!");
  }

  async delete() {
    const docRef = this.getDocRef();
    await this.checkDoc(docRef)
    await deleteDoc(docRef);
    console.log("Document successfully deleted!");
  }
}

const firebaseApi = new FirebaseInstance({ collectionName: 'myCollection', documentId: 'Doc1' });

export { firebaseApi };
