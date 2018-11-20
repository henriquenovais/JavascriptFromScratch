//The Document Object Model is the object that allows the programmer to access and modify the 
//HTML file through JavaScript.

/*The purpose of this code is to explore the document object in order to 
mature manipulate its properties through vanilla JavaScript.*/ 

let val;

/*
The following is written in order to explore the HTML
through the document object.
*/ 
val = document;
val = document.all[2];
val = document.all.length;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms; //See the forms present in the document
//Exploring the form in the HTML file:

val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;    

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach((script) => {
    console.log(script.getAttribute('src'));
});

console.log(val);