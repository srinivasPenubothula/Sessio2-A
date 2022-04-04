/** take a string as an input and print that string in lowercase */
const inputString = process.argv[2];
console.log(`Hello, ${inputString}!
Your name lowercased is \"${inputString.toLowerCase()}\".`);