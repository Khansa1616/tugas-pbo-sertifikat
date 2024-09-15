let bilangan1 = 6;
let bilangan2 = 4;

console.log(bilangan1 === 6 && bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 && bilangan2 < 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 === 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 < 4); // Output: false

console.log(bilangan1 === 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 || bilangan2 < 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 < 4); // Output: false

console.log(!true); // Output: false
console.log(!false); // Output: true
