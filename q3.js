let x = 16.75;

let rounded = Math.round(x);
let sqrt = Math.sqrt(x);
let power = Math.pow(x, 3);
let random = Math.floor(Math.random() * 41) + 10;

let summary = `For x = ${x}:
Rounded: ${rounded}
Square root: ${sqrt}
x^3: ${power}
Random between 10 and 50: ${random}`;

console.log(summary);
