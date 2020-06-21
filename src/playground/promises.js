const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Naitik',
      age: 25
    });
    // reject('Something went wrong!');
  }, 5000);
});

console.log('before');
promise.then((data) => {
  console.log('Resolve: ', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is other promise');
    }, 5000);
  });
}).then((data) => {
  console.log('Does this run?', data);
}).catch((error) => {
  console.log('Reject: ', error)
});

// promise.then((data) => {
//   console.log('Resolve: ', data);
// }, (error) => {
//   console.log('Reject: ', error)
// });

console.log('after');