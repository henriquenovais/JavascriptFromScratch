//DOM selectors are objects capable of manipuling the DOM.

/*
DOM selectors fall into two major categories:
    Multiple element selectors
    Single element selectors
*/ 

//Single Element Selectors

// document.getElementById();

console.log(document.getElementById('task-title'));

//Getting specific attributes from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change Styling
taskTitle.style.background = '#0AE';
taskTitle.style.color = '#FFF';
taskTitle.style.padding = '5px';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

//document.querySelector();
/*
 Much more powerful than getElementById().
 This method allows the programmer to be able to select pretty much anything
 through any kind of identifier.
*/

console.log(document.querySelector('#task-title')); // Select an element by its Id and print info on console
console.log(document.querySelector('.card-titlte')); //Select an element by its class and print info on console
console.log(document.querySelector('h5')); 
/*
Select an element by its tag() and print info on console.
If there is more than one tag h5 the v8 will get back the first one.
*/

// document.querySelector('li').style.color = 'red'; //First item of tag "li"
// document.querySelector('ul li').style.color = 'lime'; //A bit more specific

// document.querySelector('li:last-child').style.color = 'purple'; //Last "li" tagged element
// document.querySelector('li:first-child').style.color = 'orange'; //First "li" tagged element
// document.querySelector('li:nth-child(3)').style.color = 'yellow'; //Third "li" tagged element
// document.querySelector('li:nth-child(4)').textContent = 'Hello World!'; //Third "li" tagged element

//In CSS 3 you can use odd and even as well to get the tagged attributes based on their parity
document.querySelector('li:nth-child(odd)').style.color = 'yellow'; //Third "li" tagged element
document.querySelector('li:nth-child(even)').style.color = 'lime'; //Third "li" tagged element

