console.log('Hello from Fixie test repository!');

// Simple function that will work correctly
function sayHello(name) {
  return `Hello, ${name}!`;
}

// Deliberately create a function with a bug for testing
function calculateSum(a, b) {
  // Bug: this will fail when b is 0
  return a / b + a;
}

console.log(sayHello('Fixie'));
console.log('Sum calculation:', calculateSum(10, 5));