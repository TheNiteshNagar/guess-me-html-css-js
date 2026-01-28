document.querySelector('.theme').addEventListener('click', ()=> {
  document.body.classList.toggle('light')
})



const guess = document.querySelector('.input-guess').textContent

const hitMe = document.querySelector('.hit-me').addEventListener('click', ()=> {
  guess = guess.textContent
  if(!guess) alert('f#ck you');

  // if(guess)
})