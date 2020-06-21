import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCurPBykK_OAOpQdmf7ID5M4Swm29K4r9A",
  authDomain: "expensify-72da6.firebaseapp.com",
  databaseURL: "https://expensify-72da6.firebaseio.com",
  projectId: "expensify-72da6",
  storageBucket: "expensify-72da6.appspot.com",
  messagingSenderId: "207911016215",
  appId: "1:207911016215:web:e97cbbeb63057848328952",
  measurementId: "G-3ZMZG60PF0"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
