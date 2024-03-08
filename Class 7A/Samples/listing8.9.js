const obj1 = { names:["bob","sue","max"], age: 23 };
const obj2 = { company: "IBM", year: 2020 };
// will use spread syntax to make shallow copies
const foo = { ...obj1, ...obj2 };
console.log(foo.names[1]); // outputs "sue"
console.log(foo.company); // outputs "IBM"
obj1.names[1] = "randy";
obj2.company = "Apple";
console.log(foo.names[1]); // outputs "randy"
console.log(foo.company); // still outputs "IBM"
