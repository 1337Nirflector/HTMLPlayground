console.log('This is a console message.');

//--------------------------------------------------------------------------------------------------------------------//
// Section 1: Basic Concepts
//--------------------------------------------------------------------------------------------------------------------//

// JavaScript Features
// - JavaScript is case-sensitive

// Variables
var test = 5;
document.write(test);

// Alerts
alert('Alert!');

// === -> Strict equal ||| == -> equal

// ! -> returns true, if the operand is false and returns false, if the operand is true

// ternary operator
/**
 * var x = (condition) ? value 1 : value 2
 */
var age = 18;
var isAdult = (age < 18) ? "Teen" : "Adult";

// CHALLENGE 1
// You need to plan a road trip. You are traveling at an average speed of 40 miles an hour.
// Given a distance in miles as input (the code to take input is already present),
// output to the console the time it will take you to cover it in minutes.
//
// Sample Input:
// 150
//
// Sample Output:
// 225
function tripPlanner() {
  var distance = parseInt(readLine(), 10);
  var speed = 40;

  var hours = distance / speed
  var minutes = hours * 60;
  console.log(minutes);
}

//--------------------------------------------------------------------------------------------------------------------//
// Section 2: Conditionals and Loop
//--------------------------------------------------------------------------------------------------------------------//

// CHALLENGE 2
// The snail climbs up 7 feet each day and slips back 2 feet each night.
// How many days will it take the snail to get out of a well with the given depth?
//
// Sample Input:
// 31
//
// Sample Output:
// 6
//
// Explanation: Let's break down the distance the snail covers each day:
// Day 1: 7-2=5
// Day 2: 5+7-2=10
// Day 3: 10+7-2=15
// Day 4: 15+7-2=20
// Day 5: 20+7-2=25
// Day 6: 25+7=32
// So, on Day 6 the snail will reach 32 feet and get out of the well at day, without slipping back that night.

function snailInTheWell() {
  var depth = parseInt(readLine(), 10);
  var day = 0;
  var total = 0;
  while (total < depth) {
    day = day + 1;
    total = total + 7;
    if (total >= depth) {
      console.log(day);
      break;
    }
    total = total - 2;
  }
}

//--------------------------------------------------------------------------------------------------------------------//
// Section 3: Functions
//--------------------------------------------------------------------------------------------------------------------//

// The return value is defined at the end of the function.
function returning(x, y) {
  result = x + y;
  return result;
}

// CHALLENGE 3
// You are making a currency converter app.
// Create a function called convert, which takes two parameters: the amount to convert, and the rate,
// and returns the resulting amount.
// The code to take the parameters as input and call the function is already present in the Playground.
// Create the function to make the code work.
//
// Sample Input:
// 100
// 1.1
//
// Sample Output:
// 110

function convert() {
  var amount = parseFloat(readLine(), 10);
  var rate = parseFloat(readLine(), 10);

  console.log(convert(amount, rate));
}

function convertTwo(amount, rate) {
  return amount * rate;
}

//--------------------------------------------------------------------------------------------------------------------//
// Section 4: Objects
//--------------------------------------------------------------------------------------------------------------------//

// Objects are variables too, but they can contain multiple values.
// You can access the properties of a variable via:
// objectName.PropertyName
// OR
// objectName['PropertyName']
var person = {
  name: "John",
  age: 31,
  favColor: "Green",
  height: 183
};

// Creating Object Types
/**
 * function person(name, age, haircolor) {
 *   this.name = name;
 *   this.age = age;
 *   this.haircolor = haircolor;
 * }
 * This will create a person object via a constructor
 **/

// Initializing Objects
/**
 * var John = {name: "John", age: 32};
 * var James = {name: "James", age: 25};
 */

// Creating Object Methods
/**
 * methodName = function() { code lines }
 */

// Accessing Object Methods
/**
 * objectName.MethodName()
 */

// CHALLENGE 4
// You are working on a Contact Manager app.
// You have created the contact object constructor, which has two arguments, name and number.
// You need to add a print() method to the object,
// which will output the contact data to the console in the following format: name: number
// The given code declares two objects and calls their print() methods.
// Complete the code by defining the print() method for the objects.

function contact(name, number) {
  this.name = name;
  this.number = number;
  this.print = print;
}

function print(name, number) {
  return name + ": " + number;
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
console.log(a.print(a.name, a.number));
console.log(b.print(b.name, b.number));

//--------------------------------------------------------------------------------------------------------------------//
// Section 5: Core Objects
//--------------------------------------------------------------------------------------------------------------------//

// Arrays
var courses = new Array("JS", "jQuery", "Java");
var coursesTwo = ["JS", "jQuery", "Java"];

var coursesThree = new Array();
coursesThree[0] = "JS";
coursesThree[1] = "jQuery";
coursesThree[2] = "Java";

// Associative Arrays
// JavaScript does not support associative arrays, but you can still use the named array syntax.
var person = []; // empty array
person["name"] = "John";
person["age"] = 32;
document.write(person["age"]);
// Now, person is treated as an object, instead of being an array.
// The named indexes "name" and "age" become properties of the person object.

// Math
var pi = Math.PI;
// This will set the variables value to 3,14... (PI's value)

// Intervalls
function myAlert() {
  alert("Hey.");
}
setInterval(myAlert, 3000);
// This will call the myAlert function every 3 seconds (1000 ms = 1 second).

// Dates
var d = new Date(); // d stores the current date and time
/**
 * new Date(milliseconds)
 * new Date(dateString)
 * new Date(year, month, day, hours, minutes, seconds, milliseconds)
 */
var h = new Date().getHours();
var m = d.getMinutes();

// CHALLENGE 5
// You are working on a Store Manager program, which stores the prices in an array.
// You need to add functionality to increase the prices by the given amount.
// The increase variable is taken from user input.
// You need to increase all the prices in the given array by that amount and output to the console the resulting array.

function increase() {
  var increase = parseInt(readLine(), 10);
  var prices = [98.99, 15.2, 20, 1026];
  for (i=0; i<=3; i++) {
    prices[i] = prices[i] + increase;
  }
  console.log(prices);
}

//--------------------------------------------------------------------------------------------------------------------//
// Section 6: DOM & Events
//--------------------------------------------------------------------------------------------------------------------//

// When you open any webpage in a browser, the HTML of the page is loaded and rendered visually on the screen.
// To accomplish that, the browser builds the Document Object Model of that page, which is an
// object oriented model of its logical structure.
// The DOM of an HTML document can be represented as a nested set of boxes:

// The model is divided in a tree. Every tree parent (like the html tags from the HTML document) has children.
// For example: <html> has two children > Head and Body


