const name = 'Carlton';
const surname = 'Prince';
const age = 30;
const profession = 'Professor';
let html;

function hello(){
    return 'hello';

}

html = `
<ul>
<li>Name: ${name}</li>
<li>Surname: ${surname}</li>
<li>Age: ${age}</li>
<li>Profession: ${profession}</li>
<li>${2 + 2} ${hello()}</li>
<li>${age >= 30 ? 'Equal or over 30' : 'Under 30'}</li>

</ul>

`;

document.body.innerHTML = html; //Will print this HTML inside the body tag