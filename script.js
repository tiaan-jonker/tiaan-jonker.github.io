let shapeBtn = document.querySelector('.shape-btn');
let colourBtn = document.querySelector('.colour-btn');
let positionBtn = document.querySelector('.position-btn');
let happyBtn = document.querySelector('.happy-btn');
let eyeOne = document.querySelector('.eye-one')
let eyeTwo = document.querySelector('.eye-two')
let smile = document.querySelector('.smile')

let pink = document.querySelector('.pink');

shapeBtn.addEventListener('click', function() {
  pink.classList.toggle('circle')
})

colourBtn.addEventListener('click', function() {
  pink.classList.toggle('blue-colour')
})

positionBtn.addEventListener('click', function() {
  pink.classList.toggle('position-change')
})

happyBtn.addEventListener('click', function() {
  pink.classList.toggle('happy-face');
  eyeOne.classList.toggle('hide');
  eyeTwo.classList.toggle('hide');
  smile.classList.toggle('hide');
})

