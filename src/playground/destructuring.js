const person = {
  name: 'Naitik',
  age: 24,
  location: {
    city: 'Sydney',
    temp: 92
  }
};

// console.log(`${person.name} is ${person.age}.`);
// const name = person.name;
// const age = person.age;
const { name = 'Anonymous', age } = person;
console.log(`${name} is ${age}.`);

// if (person.location.city && person.location.temp) {
//  console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }
const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguine'
  }
};

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);