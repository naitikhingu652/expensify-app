import * as firebase from 'firebase';

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

// *********************************************************
// SET
// *********************************************************

database.ref().set("This is test data");

database.ref('age').set(25);

database.ref('location/city').set('Pune');
database.ref('location/country').set('India');

database.ref('attributes').set({
  height: 170,
  weight: 78
}).then(() => {
  console.log('Data saved!');
}).catch((error) => {
  console.log('Failed: ', error);
});

// *********************************************************
// REMOVE
// *********************************************************

database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('isSingle Removed');
  }).catch((error) => {
    console.log('Failed: ', error);
  });

database.ref('isSingle').set(null);

database.ref()
  .remove()
  .then(() => {
    console.log('Data removed');
  }).catch((error) => {
    console.log('Failed: ', error);
  });

// *********************************************************
// UPDATE
// *********************************************************

database.ref().update({
  name: 'HINGU', // Update
  age:25, // Update
  job: 'Software Developer', // Set
  isSingle: null // Remove
}).then(() => {
  console.log('Data updated');
}).catch((error) => {
  console.log('Failed: ', error);
});

database.ref().set({
  name: 'Naitik Hingu',
  age: 24,
  job: 'Software Developer',
  location: {
    city: 'Sydney',
    country: 'Australia'
  }
}).then(() => {
  console.log('Data saved!');
}).catch((error) => {
  console.log('Failed: ', error);
});

database.ref().update({
  job: 'Manager',
  location: {
    city: 'Melbourne'
  }
}).then(() => {
  console.log('Data updated');
}).catch((error) => {
  console.log('Failed: ', error);
});

database.ref().update({
  job: 'Manager',
  'location/city': 'Melbourne'
}).then(() => {
  console.log('Data updated');
}).catch((error) => {
  console.log('Failed: ', error);
});

database.ref().set({
  name: 'Naitik Hingu',
  age: 24,
  stressLevel: 7,
  job: {
    title: 'Software Developer',
    company: 'Infosys'
  },
  location: {
    city: 'Sydney',
    country: 'Australia'
  }
}).then(() => {
  console.log('Data saved!');
}).catch((error) => {
  console.log('Failed: ', error);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Telstra',
  'location/city': 'Brisbane'
}).then(() => {
  console.log('Data updated!');
}).catch((error) => {
  console.log('Failed: ', error);
});

// *********************************************************
// FETCH
// *********************************************************

database.ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((error) => {
    console.log('Failed: ', error);
  });

database.ref('location')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((error) => {
    console.log('Failed: ', error);
  });

database.ref('location/city')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((error) => {
    console.log('Failed: ', error);
  });

const onValueChange = database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(val);
}, (e) => {
  console.log('Error Fetching: ', e);
});

setTimeout(() => {
  database.ref('age').set(10);
}, 5000);

setTimeout(() => {
  database.ref().off(onValueChange);
}, 10000);

setTimeout(() => {
  database.ref('age').set(20);
}, 15000);

database.ref().on('value', (snapeshot) => {
  const val = snapeshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

setTimeout(() => {
  database.ref('job/company').set('Infosys');
}, 5000);

// *********************************************************
// Arrays
// *********************************************************

const firebaseNotes = {
  notes: {
    id1: {
      title: 'First Note',
      body: 'This is first note'    
    },
    id2: {
      title: 'Second Note',
      body: 'This is second note'    
    }
  }
};

const notes = [{
  id: '12',
  title: 'First Note',
  body: 'This is first note'
}, {
  id: '176ase',
  title: 'Second Note',
  body: 'This is second note'
}];

database.ref('notes').set(notes);

database.ref('notes').push({
  title: 'Push Note 2',
  body: 'This is Push note 2'
});

database.ref('notes/-M9rrQAPnFfBKYCoKGfI').update({
  body: 'Updated Body'
});

database.ref('notes/-M9rrQAPnFfBKYCoKGfI').remove();

database.ref('expenses').push({
  amount: 80000,
  createdAt: 19384985634,
  description: 'Rent',
  note: 'January Rent'
});

database.ref('expenses').push({
  amount: 6400,
  createdAt: 786981734,
  description: 'Groceries',
  note: 'David Fresh'
});

database.ref('expenses').push({
  amount: 20000,
  createdAt: 12349249609,
  description: 'Groceries',
  note: 'IGA'
});

database.ref('expenses')
.once('value')
.then((snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapeshot) => {
    expenses.push({
      id: childSnapeshot.key,
      ...childSnapeshot.val()
    });
  })
  console.log(expenses);
});

database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapeshot) => {
    expenses.push({
      id: childSnapeshot.key,
      ...childSnapeshot.val()
    });
  })
  console.log(expenses);
});

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').push({
  amount: 80000,
  createdAt: 19384985634,
  description: 'Rent',
  note: 'January Rent'
});