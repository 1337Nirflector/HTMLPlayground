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

// find element by id
document.getElementById("id");
// find element by class name
document.getElementsByClassName("class");
// find element by tag name
document.getElementsByTagName("tagName");

// In the example below, the getElementById method is used to select the element with id="demo" and change its content.
var element = document.getElementById("demo");
element.innerHTML = "Hello World!";
// The example above assumes that the HTML contains an element with id="demo", for example <div id="demo"></div>.

// Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM.

// element.childNodes - returns an array of an element's child nodes.
// [...]

/**
 * <img id="myimg" src="orange.png" alt="" />
 * <script>
 * var el = document.getElementById("myimg");
 * el.src = "apple.png";
 * </script>
 */
// We can change the href attribute of a link
/**
 * <a href="https://www.example.com/">Some link</a>
 * <script>
 *   var el = document.getElementsByTagName("a");
 *   el[0].href = "https://sololearn.com/";
 * </script>
 */

// Creating elements
var node = document.createTextNode("Some new text");

/**
 * <div id="demo">some content</div>
 *
 * <script>
 *   // creating new paragraph
 *   var p = document.createElement("p");
 *   var node = document.createTextNode("Some new text");
 *   // adding the text to the paragraph
 *   p.appendChild(node);
 *
 *   var div = document.getElementById("demo");
 *   // adding the paragraph to the div
 *   div.appendChild(p);
 * </script>
 */
// The same is for replacing and deleting elements

// Creating animations
/**
 * // starting positions
 * var pos = 0;
 * // box element
 * var box = document.getElementById("box");
 *
 * function move() {
 *   pos += 1;
 *   box.style.left = pos + "px"; // px = pixels
 * }
 */

// Handling Events
/**
 * <button onclick="show()">Click Me</button>
 * <script>
 *   function show() {
 *     alert("Hi there!");
 *   }
 * </script>
 *
 * var x = document.getElementById("demo");
 * x.onclick = function() {
 *   document.body.innerHTML = Date();
 * }
 */

// Adding Event Listeners
/**
 * element.addEventListener(event, function, useCapture);
 *
 * element.addEventListener("click", myFunction);
 *
 * function myFunction() {
 *   alert("Executed.");
 * }
 */

// Event Propagation
// Event Propagation allows for the definition of the element order when an event occurs.
// If you have a <p> element inside a <div> element, and the user clicks on the <p> element,
// which element's "click" event should be handled first?
//
// In bubbling, the innermost element's event is handled first and then the outer element's event is handled.
// The <p> element's click event is handled first, followed by the <div> element's click event.
//
// In capturing, the outermost element's event is handled first and then the inner.
// The <div> element's click event is handled first, followed by the <p> element's click event.

/**
 * elem1.addEventListener("click", myFunction, true) // Capturing propagation
 *
 * elem2.addEventListener("click", myFunction, false) // Bubbling propagation
 */

// Image Slider
// HTML Code:
/**
 * <div>
 *   <button onclick="prev()"> Prev </button>
 *   <img id="slider" src="http://www.example.com/uploads/slider/1.jpg"
 *     width="200px" height="100px"/>
 *   <button onclick="next()"> Next </button>
 * </div>
 */
// JS Code:
/**
 * var images = [
 * "http://www.example.com/uploads/slider/1.jpg",
 * "http://www.example.com/uploads/slider/2.jpg",
 * "http://www.example.com/uploads/slider/3.jpg"
 * ];
 * var num = 0;
 *
 * function next() {
 *   var slider = document.getElementById("slider");
 *   num++;
 *   if (num >= images.length) {
 *   num = 0;
 *   }
 *   slider.src = images[num];
 * }
 *
 * function prev() {
 *   var slider = document.getElementById("slider");
 *   num--;
 *   if (num < 0 ) {
 *   num = images.length - 1;
 * }
 * slider.src = images[num];
 * }
 */

//--------------------------------------------------------------------------------------------------------------------//
// Section 7: ECMAScript6
//--------------------------------------------------------------------------------------------------------------------//

// Three different types for declaring variables
var A = 10; // variable with global visibility
const B = "hello"; // immutable variables - once they are declared, its value cannot be changed later
let C = true; // variable, that is visible only in the block, statement or expression in which they are used

// Template Literals
// Template Literals are a way to output variables in the string.
let name = 'David';
let msg = 'Welcome ' + name + '!';
console.log(msg);
// This can be rewritten as:
/**
 * let name = 'David';
 * let msg = `Welcome ${name}!`;
 * console.log(msg);
 */

let arr = [1, 2, 3];
for (let k; k < arr.length; k++) {
  console.log(arr[k]);
}
// This can be rewritten as:
/**
 * let arr = [1, 2, 3];
 * for (let k in arr) {
 *   console.log(k);
 * }
 */

function add(x, y) {
  var sum = x+y;
  console.log(sum);
}
// This can be rewritten as:
/**
 * const add = (x, y) => {
 *   let sum = x + y;
 *   console.log(sum);
 * }
 */
// Empty Functions as:
/**
 * const greet = x => "Welcome " + x;
 *
 * const x = () => alert("Hi");
 */

// Default Values for functions
function testing(a, b = 32, c = 42) {
  return a + b + c;
}

// Example of an arrow function with default parameters
const testing2 = (a, b = 32, c = 42) => {
  return a + b + c;
}

// ECMAScript6 introduces shorthand notations and computed property names that make declaring and using objects easier
// to understand.

let tree = {
  height: 10,
  color: 'green',
  grow() {
    this.height += 2;
  }
};
tree.grow();

// Other shorthand:
let height = 5;
let health = 100;

let athlete = {
  height,
  health
};

// Computed property
let prop = 'name';
let id = '1234';
let mobile  = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};

// Object.asign() in ECMAScript6
let person = {
  name: 'Jack',
  age: 26,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};
let newStudent = Object.asign({}, person, student);

// Object Destructuring
let obj = {h: 100, s: true};
let {h, s} = obj;
console.log(h); // Outputs 100
console.log(s); // Outputs true

// Classes
/**
 * class Rectangle {
 *   constructor(height, width) {
 *     this.height = height;
 *     this.width = width;
 *   }
 * }
 *
 * const square = new Rectangle(5, 5)
 */

// CHALLENGE 7
// You are making a text encryptor. It should take multiple words and output a combined version,
// where each word is separated by a dollar sign $.
// For example, for the words "hello", "how", "are", "you", the output should be "$hello$how$are$you$".
// The given code declares a class named Add, with a constructor that takes one rest parameter.
// Complete the code by adding a print() method to the class, which should generate the requested output.
/**
 * class Code{
 *   constructor(...words) {
 *       this.words = words;
 *   }printDeCode(){
 *   var x=0;
 *   function rest(){
 *       x=Math.floor(Math.random()*dec.length)
 *   }
 *   let y="";
 *       for(let x in this.words){
 *         y=y+"$"+this.words[x];
 *
 *       }
 *       console.log(y+"$");
 *   }
 * }
 *
 * var x = new Code("hehe", "hoho", "haha", "hihi", "huhu");
 * var y = new Code("this", "is", "awesome");
 * var z = new Code("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
 * x.printDeCode();
 * y.printDeCode();
 * z.printDeCode();
 */
