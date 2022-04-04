/*import string type of array 
and get the starting element of each string and asssting to res varible..then prints res*/
let inputs=process.argv.slice(2);
let res=inputs.map((input) => input[0]).join('');
console.log(`[${inputs}] becomes \"${res}"`);