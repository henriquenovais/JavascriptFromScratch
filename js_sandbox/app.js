// //DOM selectors are objects capable of manipuling the DOM.

// /*
// DOM selectors fall into two major categories:
//     Multiple element selectors
//     Single element selectors
// */ 

// //Single Element Selectors

// // document.getElementById();

// console.log(document.getElementById('task-title'));

// //Getting specific attributes from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change Styling
// taskTitle.style.background = '#0AE';
// taskTitle.style.color = '#FFF';
// taskTitle.style.padding = '5px';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// //document.querySelector();
// /*
//  Much more powerful than getElementById().
//  This method allows the programmer to be able to select pretty much anything
//  through any kind of identifier.
// */

// console.log(document.querySelector('#task-title')); // Select an element by its Id and print info on console
// console.log(document.querySelector('.card-titlte')); //Select an element by its class and print info on console
// console.log(document.querySelector('h5')); 
// /*
// Select an element by its tag() and print info on console.
// If there is more than one tag h5 the v8 will get back the first one.
// */

// // document.querySelector('li').style.color = 'red'; //First item of tag "li"
// // document.querySelector('ul li').style.color = 'lime'; //A bit more specific

// // document.querySelector('li:last-child').style.color = 'purple'; //Last "li" tagged element
// // document.querySelector('li:first-child').style.color = 'orange'; //First "li" tagged element
// // document.querySelector('li:nth-child(3)').style.color = 'yellow'; //Third "li" tagged element
// // document.querySelector('li:nth-child(4)').textContent = 'Hello World!'; //Third "li" tagged element

// //In CSS 3 you can use odd and even as well to get the tagged attributes based on their parity
// document.querySelector('li:nth-child(odd)').style.color = 'yellow'; //Third "li" tagged element
// document.querySelector('li:nth-child(even)').style.color = 'lime'; //Third "li" tagged element

//Multiple Elements Selectors

//document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// // No problems with the multiple selection because there is only ONE tag 
// // with the class name collection item.
// items[0].style.color = 'gold';
// items[1].style.background = 'gold';
// items[1].textContent = 'Hello World!';

/*
It is important to note that items is a variable created through a multiple elements selector
which works by the specification of class and this method alone will collect ALL elements with
its class named "collection-item".
In order to do more specific manipulation it is necessary to use both Single Element Selectors
and Multiple Elements Selectors as shown:
*/ 
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);
// console.log(listItems[0]);
// listItems[0].style.background = 'black';
//Even if there were more tags with the class name collection-item there would be no mistake.

// document.getElementsByTagName('li');

// let li = document.getElementsByTagName('li');
// console.log(li);
// li[4].style.padding = '30px';

// //convert HTML Collection into an array

// li = Array.from(li);
// li.reverse();

// li.forEach((li,index) => {
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });

// console.log(li);

// document.querySelectorAll
/*This is the super powerful multiple items selector*/

// const taskList = document.querySelectorAll('ul.collection li.collection-item');
// console.log(taskList);

// //The taskList object is a node list so it is not required 
// // to make a conversion to Array.

//  taskList.forEach((task,index) => {
//      task.textContent = `${index}: Hello`;
//  });

//  const liEven = document.querySelectorAll('ul.collection li:nth-child(even)');
//  const liOdd = document.querySelectorAll('ul.collection li:nth-child(odd)');
//  console.log(liEven);
//  console.log(liOdd);

// //Used for loop to show a bit of a variation
// //No specific reason besides showing another way of using a HTML collection
// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = 'gold';
//     liEven[i].style.color = 'black';
// }

// liOdd.forEach((li) => {
//     li.style.background = 'black';
//     li.style.color = 'gold';
// });

//DOM Traversing
/*
To traverse a DOM is to navigate it through child elements.
*/ 

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes
val = list.childNodes;
/*
This method will return a Node list with all nodes within the
specified tags, even the line breaks between the HTML tags.
*/

val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

/*
Types of nodes:

1 - Element
2 - Attribute
3 - Text Node
8 - Comment
9 - Document Itself
10 - Doctype
*/

// //Get children element nodes
// /*
// Returns a HTML Collection with all the element nodes inside 
// the specified tag. Will ignore the line breaks and other types of nodes.
// */ 

val = list.children;
list.children[1].textContent = 'HELLO BUDDIES!';

//Using the function again in order to get deeper
//in the HTML body hierarchy:

val = list.children[3].children;

//Manipulation of first nodes
val = list.firstChild; //Getting the first node
val = list.firstElementChild //Getting the first element node

//Manipulation of last nodes
val = list.lastChild; //Getting the last node
val = list.lastElementChild //Getting the last element node

//Counting child elements 
val = list.childElementCount;

//Get parent node
val = listItem.parentNode;

//Get parent element
val = listItem.parentElement;
val = listItem.parentElement.parentElement; //stacking methods to traverse is possible just the same as line 180

//Get next sibling node
val = listItem.nextSibling;
val = listItem.nextSibling.nextSibling;

//Get previous sibling node
val = listItem.previousSibling;
// val = listItem.nextSibling.previousSibling;

console.log(val);







