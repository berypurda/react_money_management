import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBENdmJlE0CC6fKBlrNLHD8Yf42_HkNUfw",
  authDomain: "moneymanagement-bc671.firebaseapp.com",
  projectId: "moneymanagement-bc671",
  storageBucket: "moneymanagement-bc671.appspot.com",
  messagingSenderId: "984646572430",
  appId: "1:984646572430:web:776cd90e41760163566cdf",
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
