// hello1 is a string literal
let hello1 = "hello";
// hello2 is a string object
let hello2 = new String("hello");
// hello1 is temporarily coerced into a string object
hello1.french = "bonjour";
// hello2 is already an object so new property can be added to it
hello2.french = "bonjour";
// displays undefined because hello1 is back to being a primitive
console.log(hello1.french);
// displays bonjour
console.log(hello2.french);
