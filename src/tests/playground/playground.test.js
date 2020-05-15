const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('should generate greeting from name', () => {
  expect(generateGreeting('Naitik')).toBe('Hello Naitik!');
});

test('should generate anonymous greeting for no name', () => {
  expect(generateGreeting()).toBe('Hello Anonymous!');
});