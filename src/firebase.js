import firebase from "firebase";

const {REACT_APP_API_KEY,REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDING_ID, REACT_APP_APP_ID}=process.env;

const firebaseConfig = {
  apiKey: `${REACT_APP_API_KEY}`,
  authDomain: `${REACT_APP_AUTH_DOMAIN}`,
  projectId: `${REACT_APP_PROJECT_ID}`,
  storageBucket: `${REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${REACT_APP_MESSAGING_SENDING_ID}`,
  appId: `${REACT_APP_APP_ID}`
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export  {firebaseConfig,firebaseApp,projectStorage,projectFirestore,timestamp};
