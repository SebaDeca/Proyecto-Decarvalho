
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCZKcTPsyGE66pUxCmeIyHLcGtuJht062I",
  authDomain: "proyecto-c6e70.firebaseapp.com",
  projectId: "proyecto-c6e70",
  storageBucket: "proyecto-c6e70.appspot.com",
  messagingSenderId: "116194961207",
  appId: "1:116194961207:web:b1e49efb8e141c12bd1cb2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)