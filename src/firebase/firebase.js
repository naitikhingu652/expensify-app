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

database.ref().set({
  name: 'Naitik Hingu',
  age: 24,
  isSingle: false,
  location: {
    city: 'Sydney',
    country: 'Australia'
  }
}).then(() => {
  console.log('Data saved!');
}).catch((error) => {
  console.log('Failed: ', error);
});

// database.ref().set("This is test data");

// database.ref('age').set(25);

// database.ref('location/city').set('Pune');
// database.ref('location/country').set('India');

// database.ref('attributes').set({
//   height: 170,
//   weight: 78
// }).then(() => {
//   console.log('Data saved!');
// }).catch((error) => {
//   console.log('Failed: ', error);
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('isSingle Removed');
//   }).catch((error) => {
//     console.log('Failed: ', error);
//   });

// database.ref('isSingle').set(null);

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data removed');
//   }).catch((error) => {
//     console.log('Failed: ', error);
//   });
