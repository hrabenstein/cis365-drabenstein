/* add code after this comment */

// console.log(document.getElementByID('thumb-list'));
// console.log(`MANY: `);
// console.log(document.getElementsByClassName('thumb'));
// console.log(`FIRST: `);

document.getElementById('thumb-list').style.border = "solid 1px #cccccc"
document.querySelector('#msg').value = document.querySelector('.box fieldset p').textContent;

// document.getElementById('thumb-list').className = 'medium';

document.getElementByID('thumb-list').classList;



const images = document.querySelectorAll('#thumb-list img');

for(let img of images) {
   img.style.boxShadow = "6px 5px 20px 1px rgba(0,0,0,0.22)";
}

const d = document.querySelector('#msg');
d.innerHTML = '<h2>HELLO WORLD</h2>';

//you can swich the class name and then it will automatically use the css of the other one