var name = prompt("Enter your name");
var first = (name.slice(0, 1)).toUpperCase();
var rest = (name.slice(1, name.length)).toLowerCase();
console.log("Your name is " + first + rest);
