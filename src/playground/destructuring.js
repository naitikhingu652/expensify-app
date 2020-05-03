//
// Object Destructuring
//

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

//
// Array Destructuring
//

const address = ['U-309 8 Station Street', 'Sydney', 'NSW', '2140'];
// console.log (`You are in ${address[1]}, ${address[2]}.`);
const [ , city1, state = 'Australia'] = address;
console.log(`You are in ${city1}, ${state}`);

const item = ['Coffee (Hot)', '$2.00', '$2.50', "$3.00"];
const [ itemName, , mediumPrice ] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
