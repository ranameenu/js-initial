//var,let, const
var name = "john doe";
console.log(name);
name = "john";
console.log(name);

//Init var
var greeting;
console.log(greeting);
greeting = "hello";
console.log(greeting);

// //var can start from
// letters, _underscore, $;
// cannot start with number

var $name = "smith";
console.log($name);
var _name = "smith";
console.log(_name);

//Multi word var

var firstName = "abdul kalam"; //camel case
var first_name = "Minister"; //underscore convention
var FirstName = "president"; //pascal case

LET;
let name;
name = "john doe";
console.log(name);
name = "john";
console.log(name);

CONST;
const name = "john doe";
console.log(name);
name = "john";
console.log(name);

const person = {
  _name: "meenu",
  age: 25,
};
person._name = "sara";
console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(5);
console.log(numbers);
