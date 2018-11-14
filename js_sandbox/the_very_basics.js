// console.log("hello world!");
// console.log(123);
// console.log(true);
// var greeting = 'Hello!';
// console.log([1,2,3,4]);
// console.log({a: "this is an object", b: greeting});
// console.table({a: "this is an object", b: greeting});

// console.error('This is some error!');
// // console.clear(); // to clear the console
// console.warn('This is a warning!');
// console.time('Hello!')
//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");
// console.timeEnd('Hello!'); //Counts the time to execute this functions!

//To open console press F12 on Chrome
//The console can be used as an input to help debug the code

// //LET
// let name;
// name = 'John';
// console.log(name);

// //VAR

// var otherName;
// otherName = "Kike";
// console.log(otherName);

//CONST
//Constants can be changed but cannot be reassigned.

// const numbers = [1,2,3,4,5];
// numbers.push(6); //Include number 6
// console.log(numbers);
// console.log(typeof numbers)

// numbers = [1,2,3]; // can't do that, numbers is a constant!

//PRIMITIVE DATA TYPES
/*
String
Numbers 
Boolean
Null
Undefined
Symbols(ES6)
*/

//REFERENCE TYPES - Objects
/*
Arrays
Object Literals
Functions
Dates
Anything else...
*/

//NaN is a value, means "not a number" and is used in case 
//the programmer tries to convert a certain type into a number 
//such as a string.

//JavaScript is dynamically typed but there are supersets that may 
//allow static typing such as Flow and Typescript

//To get an undefined variable error the undefined variable must
//have been declared as a constant! 

//Math Object
// let val;

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8,2);
// val = Math.random();

// console.log(val);

//FUNCTIONS

//FUNCTION DECLARATIONS

// function greetings( firstName = 'John', lastName = 'Doe'){
//     //how to set default response in ES5
//     /*
//     if(typeof firstName === 'undefined'){
//       firstName = 'John';
//     }
//     if(typeof lastName === 'undefined'){
//       lastName = 'Doe';
//     }
//     */
    
//     return ('Hello ' + firstName + ' ' + lastName);
//   }
  
//    //console.log(greetings());
   
//    //FUNCTION EXPRESSIONS
   
   
//    //The square function is declared in such way that it is considered
//    //an anonymous function, this function does not have a name.
//    const square = function(x = 0){
//      return x*x;
//    };
//    // The semicolon is necessary because square is a variable."x = 10;" would be a good analogy
   
//    //IMMIDIATLY INVOCABLE FUNCTION'S EXPRESSIONS - IIFE's
   
//    (function(){
//      console.log('this is an IIFEs');
//    })();

// (function(name){
//        console.log('Hello ' + name);
// })('Henrique');

// const todo = {
//        add: function(){
//            console.log('Add todo ...');
//        },
//        edit: function(){
//            console.log('this is another function');
//        }

//     }

// todo.add();
// todo.edit();
// todo.delete = function(){
//     console.log('This is another function declaration test!');
// }

// todo.delete();

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('This is the loop number 2!');
//         continue;
//     }

//     if(i === 8){
//         console.log('GET TO THE CHOPPA!');
//         break;
//     }

//     console.log('number ' + i);
// }
   
/*
 Window is a very important object because it is the global object in client-side
 javascript. Window is a standalone process on the client-side machine which that makes 
 the user's computer system the main environment in NodeJS.
 Since when programming the client-side and the server-side are on the same machine, the Window object 
 will serve the same purpose but on different machines.
 The Window object contains:
 Fetch API
 Navigator Object
 Geolocation
 Methods such as alert,prompt, confirm and console

 In order to see the Window object at work just type "window" in the Google Chrome console since it has
 the same JavaScript engine as NodeJS called v8.
*/

// WINDOW OBJECT

// window.console.log(123); 
// //Same thing as console.log because you already are accessing the window object
// //since the window object is the main client-side object.
// console.log(123);
// window.alert("Here BOYZ!");
// alert("Here!");

// // Input some value
// const input = prompt();
// alert(input);

// Confirm

// if(confirm('Are you sure')){
//     console.log('YES');
// } else {
//     console.log('GOD DAMMIT YOU ARE SUPPOSED TO SAY YES HERE BASTARD');
// }

// let val, otherval;

// //Outer height and width 
// val = window.outerHeight;
// otherval = window.outerWidth; 

// // Inner height and width
// val = window.outerHeight;
// otherval = window.outerWidth; 

// console.log(otherval);

// //Scroll points

// val = window.scrollY;
// val = window.scrollX;


// //Location Object

// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// //Redirect

// window.location.href = 'http://google.com';

// //Reload the page
// window.location.reload();

// //History Object

// window.history.go(-1); //go to the website used before
// val = window.history.length;


// // Navigator Object
// // Object named after the old Netscape navigator browser.

// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

//Global Scope

var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Function Scope', a, b, c);

}

test();



console.log('Global Scope', a, b, c);










